import { useEffect, useRef } from "react";

/* ============================================================================
   OVERTURE — cinematic intro / preloader reveal for Sera Cakes
   ----------------------------------------------------------------------------
   Self-contained React component. No animation libraries: a single hand-rolled
   rAF loop drives a time-based timeline (seconds) and writes transforms /
   clip-paths straight to the DOM via refs — no per-frame React re-render.

   Easing is reproduced with a cubic-bezier solver (Newton-Raphson), matching
   the original GSAP CustomEase curves:
     hop   = cubic-bezier(0.8, 0, 0.2, 1)   — snappy in/out
     hop2  = cubic-bezier(0.9, 0, 0.1, 1)   — steeper snap, used for wordmarks
     power2.inOut is reproduced as a plain cubic ease (GSAP's power2 == cubic)

   This is an OVERLAY only — it has no hero/page content of its own. Mount your
   real page underneath it (it's already there, just covered), and mount
   <Overture onComplete={() => setShowIntro(false)} /> on top of it. Once the
   dark panel finishes lifting, onComplete fires immediately — the parent then
   stops rendering Overture and your real page is what gets revealed.
============================================================================ */

type OvertureProps = {
  onComplete?: () => void;
  /** override the default six cake photos if needed */
  images?: string[];
};

const DEFAULT_IMAGES = [
  "/products/redvelvet.jpg",
  "/products/pistachio.jpg",
  "/products/ferrero.jpg",
  "/products/whitechoclate.jpg",
  "/products/berry.jpg",
  "/products/lotus.jpg",
];

// pre-rotated fan angles, one per photo
const PHOTO_ANGLES = [7.5, -2.5, -10, 12.5, -5, 5];

const PRELOADER_WORD = "SERA";

/* ---------------------------------------------------------------------------
   Cubic-bezier solver (Newton-Raphson) — reproduces CSS cubic-bezier() easing
--------------------------------------------------------------------------- */
function makeCubicBezier(p1x: number, p1y: number, p2x: number, p2y: number) {
  const A = (a1: number, a2: number) => 1 - 3 * a2 + 3 * a1;
  const B = (a1: number, a2: number) => 3 * a2 - 6 * a1;
  const C = (a1: number) => 3 * a1;

  const calcBezier = (t: number, a1: number, a2: number) =>
    ((A(a1, a2) * t + B(a1, a2)) * t + C(a1)) * t;
  const getSlope = (t: number, a1: number, a2: number) =>
    3 * A(a1, a2) * t * t + 2 * B(a1, a2) * t + C(a1);

  const getTForX = (x: number) => {
    let guess = x;
    for (let i = 0; i < 8; i++) {
      const slope = getSlope(guess, p1x, p2x);
      if (slope === 0) return guess;
      const currentX = calcBezier(guess, p1x, p2x) - x;
      guess -= currentX / slope;
    }
    return guess;
  };

  return (x: number) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    return calcBezier(getTForX(x), p1y, p2y);
  };
}

const hop = makeCubicBezier(0.8, 0, 0.2, 1);
const hop2 = makeCubicBezier(0.9, 0, 0.1, 1);
// GSAP's "power2" == cubic — power2.inOut reproduced directly
const power2InOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function clamp01(n: number) {
  return n < 0 ? 0 : n > 1 ? 1 : n;
}

/** progress 0→1 of a [delay, delay+duration] window, at time t */
function windowProgress(t: number, delay: number, duration: number) {
  return clamp01((t - delay) / duration);
}

function shuffled(n: number): number[] {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ---------------------------------------------------------------------------
   Char / word split into overflow-hidden masks with an inner rising span
--------------------------------------------------------------------------- */
function SplitChars({
  text,
  className,
  setRef,
}: {
  text: string;
  className?: string;
  setRef: (i: number, el: HTMLSpanElement | null) => void;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span className="ov-mask" key={i} aria-hidden="true">
          <span
            className="ov-riser"
            ref={(el) => setRef(i, el)}
            style={{ transform: "translateY(100%)" }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Overture({ onComplete, images }: OvertureProps) {
  const photoSrcs = images && images.length === 6 ? images : DEFAULT_IMAGES;

  const rootRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const preloaderContentRef = useRef<HTMLDivElement | null>(null);
  const photoInnerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const preWordRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const counterTextRef = useRef<HTMLSpanElement | null>(null);

  // stable random stagger order, generated once
  const preWordOrder = useRef<number[]>(shuffled(PRELOADER_WORD.length));

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      // snap straight to the finished state, no animation
      if (panelRef.current) panelRef.current.style.display = "none";
      onComplete?.();
      return;
    }

    let raf = 0;
    let startTime: number | null = null;
    let completed = false;
    const INITIAL_DELAY = 0.5; // seconds after mount before the timeline starts

    // ---- timeline constants (all in seconds, relative to timeline start) ----
    const PHOTO_IN_DELAY_STEP = 0.2;
    const PHOTO_IN_DURATION = 1.0;

    const PRE_WORD_START = 0.35;
    const PRE_WORD_DURATION = 1.0;
    const PRE_WORD_STAGGER = 0.125;

    const COUNTER_START = 0.35;
    const COUNTER_DURATION = 2.0;

    const EXIT_START = 3.25;
    const EXIT_DURATION = 0.75;

    const PHOTO_OUT_START = 3.5;
    const PHOTO_OUT_STAGGER = 0.075; // applied in reverse index order
    const PHOTO_OUT_DURATION = 0.7;

    const PANEL_LIFT_START = 4.35;
    const PANEL_LIFT_DURATION = 1.0;
    const TOTAL_DURATION = PANEL_LIFT_START + PANEL_LIFT_DURATION; // ends the moment the panel is fully lifted

    function render(t: number) {
      // (1) fan-in / fan-out cake photos
      for (let i = 0; i < photoInnerRefs.current.length; i++) {
        const el = photoInnerRefs.current[i];
        if (!el) continue;

        const inDelay = i * PHOTO_IN_DELAY_STEP;
        const pIn = hop(windowProgress(t, inDelay, PHOTO_IN_DURATION));

        const outDelay =
          PHOTO_OUT_START + (photoInnerRefs.current.length - 1 - i) * PHOTO_OUT_STAGGER;
        const pOut = hop(windowProgress(t, outDelay, PHOTO_OUT_DURATION));

        const scale = pIn * (1 - pOut);
        const inset = 20 * (1 - pIn) + 20 * pOut;
        el.style.transform = `scale(${scale})`;
        el.style.clipPath = `inset(${inset}% ${inset}% ${inset}% ${inset}%)`;
      }

      // (2) preloader wordmark chars rise, random stagger, hop2
      for (let i = 0; i < preWordRefs.current.length; i++) {
        const el = preWordRefs.current[i];
        if (!el) continue;
        const order = preWordOrder.current.indexOf(i);
        const delay = PRE_WORD_START + order * PRE_WORD_STAGGER;
        const p = hop2(windowProgress(t, delay, PRE_WORD_DURATION));
        el.style.transform = `translateY(${100 - p * 100}%)`;
      }

      // counter ticks 000 -> 100, power2.inOut
      if (counterTextRef.current) {
        const p = power2InOut(windowProgress(t, COUNTER_START, COUNTER_DURATION));
        const value = Math.round(p * 100);
        counterTextRef.current.textContent = String(value).padStart(3, "0");
      }

      // (3) counter + wordmark exit upward together
      if (preloaderContentRef.current) {
        const p = hop(windowProgress(t, EXIT_START, EXIT_DURATION));
        preloaderContentRef.current.style.transform = `translateY(${-p * 100}%)`;
      }

      // (5) dark panel clip-path collapses upward off the top, revealing
      // whatever real page is mounted underneath this overlay
      if (panelRef.current) {
        const p = hop(windowProgress(t, PANEL_LIFT_START, PANEL_LIFT_DURATION));
        panelRef.current.style.clipPath = `inset(0% 0% ${p * 100}% 0%)`;
        if (p >= 1) panelRef.current.style.display = "none";
      }
    }

    function frame(now: number) {
      if (startTime === null) startTime = now;
      const elapsed = (now - startTime) / 1000;
      const t = Math.max(0, elapsed - INITIAL_DELAY);
      render(t);
      if (t < TOTAL_DURATION) {
        raf = requestAnimationFrame(frame);
      } else if (!completed) {
        completed = true;
        render(TOTAL_DURATION);
        onComplete?.();
      }
    }

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overture-root" ref={rootRef}>
      <style>{OVERTURE_CSS}</style>

      {/* ---------------- dark preloader panel — the only thing this renders ---------------- */}
      <div className="ov-panel" ref={panelRef}>
        <div className="ov-photos" aria-hidden="true">
          {photoSrcs.map((src, i) => (
            <div
              className="ov-photo-slot"
              key={i}
              style={{ transform: `translate(-50%, -50%) rotate(${PHOTO_ANGLES[i]}deg)` }}
            >
              <div
                className="ov-photo-inner"
                ref={(el) => {
                  photoInnerRefs.current[i] = el;
                }}
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </div>

        <div className="ov-panel-content" ref={preloaderContentRef}>
          <span className="ov-pre-word">
            <SplitChars
              text={PRELOADER_WORD}
              setRef={(i, el) => (preWordRefs.current[i] = el)}
            />
          </span>
          <span className="ov-counter">
            <span ref={counterTextRef}>000</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Styles — single injected <style> block, self-contained
--------------------------------------------------------------------------- */
const OVERTURE_CSS = `
.overture-root {
  position: fixed;
  inset: 0;
  z-index: 999999;
  font-family: "Inter", Arial, sans-serif;
}

.overture-root .ov-display {
  font-family: "Playfair Display", Georgia, serif;
}

/* ---------- masks (used by the preloader wordmark chars) ---------- */
.ov-mask {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}

.ov-riser {
  display: inline-block;
  will-change: transform;
}

/* ---------- dark preloader panel ---------- */
.ov-panel {
  position: absolute;
  inset: 0;
  background: #170408;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  will-change: clip-path;
}

.ov-photos {
  position: absolute;
  inset: 0;
}

.ov-photo-slot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 320px;
}

.ov-photo-inner {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: rgba(243, 226, 222, 0.06);
  border-radius: 6px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45);
  transform: scale(0);
  clip-path: inset(20% 20% 20% 20%);
  will-change: transform, clip-path;
}

.ov-panel-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: baseline;
  gap: 18px;
  will-change: transform;
}

.ov-pre-word {
  font-family: "Playfair Display", Georgia, serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: clamp(48px, 9vw, 108px);
  line-height: 0.9;
  color: #f3e2de;
  letter-spacing: 0.02em;
}

.ov-counter {
  font-family: "Inter", Arial, sans-serif;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  font-size: clamp(16px, 2vw, 22px);
  letter-spacing: 0.08em;
  color: #C41E3A;
  overflow: hidden;
  display: inline-block;
  min-width: 3ch;
}

@media (max-width: 640px) {
  .ov-photo-slot {
    width: 150px;
    height: 190px;
  }
}
`;
