"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const PRODUCT_IMAGE =
  "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1800";
const FACE_IMAGE =
  "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1800";
const CARD_IMAGE =
  "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=900";
const FALLBACK_IMAGE =
  "https://images.pexels.com/photos/8989964/pexels-photo-8989964.jpeg?auto=compress&cs=tinysrgb&w=1600";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&family=Mrs+Saint+Delafield&family=Della+Respira&display=swap');

* {
  box-sizing: border-box;
}

html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  background: #1f0308;
}

button,
a {
  font: inherit;
  color: inherit;
}

a {
  text-decoration: none;
}

.va-root {
  --mouse-x: 0;
  --mouse-y: 0;
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 620px;
  overflow: hidden;
  background: #220209;
  color: #fff3f0;
  font-family: Manrope, Arial, sans-serif;
  isolation: isolate;
}

/* ---------- split screen ---------- */

.va-split {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 50% 50%;
}

.va-panel {
  position: relative;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  background: #340611;
}

.va-panel-left {
  clip-path: inset(0 100% 0 0);
  animation: vaRevealLeft 1.3s cubic-bezier(0.77, 0, 0.18, 1) 80ms forwards;
}

.va-panel-right {
  clip-path: inset(0 0 0 100%);
  animation: vaRevealRight 1.3s cubic-bezier(0.77, 0, 0.18, 1) 80ms forwards;
}

@keyframes vaRevealLeft {
  to {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes vaRevealRight {
  to {
    clip-path: inset(0 0 0 0);
  }
}

.va-panel-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  will-change: transform;
}

.va-image-left {
  object-position: 54% 50%;
  scale: 1.065;
  transform: translate3d(
    calc(var(--mouse-x) * -8px),
    calc(var(--mouse-y) * -6px),
    0
  );
  animation: vaImageInLeft 1.8s cubic-bezier(0.16, 1, 0.3, 1) 120ms both;
}

@keyframes vaImageInLeft {
  from {
    filter: blur(8px);
    scale: 1.16;
    transform: translate3d(
      calc(var(--mouse-x) * -8px),
      calc(var(--mouse-y) * -6px),
      0
    );
  }
  to {
    filter: blur(0);
    scale: 1.065;
    transform: translate3d(
      calc(var(--mouse-x) * -8px),
      calc(var(--mouse-y) * -6px),
      0
    );
  }
}

.va-image-right {
  object-position: 44% 50%;
  scale: 1.06;
  transform: translate3d(
    calc(var(--mouse-x) * 9px),
    calc(var(--mouse-y) * 7px),
    0
  );
  animation: vaImageInRight 1.8s cubic-bezier(0.16, 1, 0.3, 1) 120ms both;
}

@keyframes vaImageInRight {
  from {
    filter: blur(8px);
    scale: 1.15;
    transform: translate3d(
      calc(var(--mouse-x) * 9px),
      calc(var(--mouse-y) * 7px),
      0
    );
  }
  to {
    filter: blur(0);
    scale: 1.06;
    transform: translate3d(
      calc(var(--mouse-x) * 9px),
      calc(var(--mouse-y) * 7px),
      0
    );
  }
}

.va-panel-left::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(
      90deg,
      rgba(40, 3, 10, 0.36) 0%,
      rgba(40, 3, 10, 0.04) 46%,
      rgba(40, 3, 10, 0.25) 100%
    ),
    linear-gradient(
      180deg,
      rgba(28, 2, 8, 0.32) 0%,
      transparent 26%,
      transparent 65%,
      rgba(28, 2, 8, 0.31) 100%
    );
}

.va-panel-right::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(
      90deg,
      rgba(58, 4, 12, 0.2) 0%,
      transparent 36%,
      rgba(62, 4, 12, 0.16) 100%
    ),
    linear-gradient(
      180deg,
      rgba(34, 2, 8, 0.22) 0%,
      transparent 52%,
      rgba(30, 2, 6, 0.34) 100%
    );
}

/* ---------- center divider ---------- */

.va-center-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  z-index: 7;
  width: 1px;
  background: rgba(255, 233, 233, 0.14);
  transform: scaleY(0);
  transform-origin: top;
  animation: vaLineY 1.2s cubic-bezier(0.16, 1, 0.3, 1) 700ms forwards;
}

@keyframes vaLineY {
  to {
    transform: scaleY(1);
  }
}

@keyframes vaLineX {
  to {
    transform: scaleX(1);
  }
}

/* ---------- topbar ---------- */

.va-topbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  height: clamp(82px, 10vh, 112px);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: start;
  padding: clamp(24px, 3.3vh, 38px) clamp(22px, 2.5vw, 42px) 0;
  pointer-events: none;
}

.va-nav-link {
  width: fit-content;
  position: relative;
  color: rgba(255, 238, 236, 0.95);
  font-size: clamp(10px, 0.86vw, 14px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  pointer-events: auto;
  opacity: 0;
  transform: translateY(-12px);
  animation: vaFadeDown 800ms cubic-bezier(0.16, 1, 0.3, 1) 770ms forwards;
}

.va-nav-right {
  justify-self: end;
}

.va-nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 450ms cubic-bezier(0.16, 1, 0.3, 1);
}

.va-nav-link:hover::after,
.va-nav-link:focus-visible::after {
  transform: scaleX(1);
  transform-origin: left;
}

@keyframes vaFadeDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ---------- brand ---------- */

.va-brand {
  position: relative;
  top: -6px;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffe3e6;
  pointer-events: auto;
  opacity: 0;
  transform: translateY(-16px);
  animation: vaBrandIn 900ms cubic-bezier(0.16, 1, 0.3, 1) 550ms forwards;
}

@keyframes vaBrandIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.va-mark {
  position: relative;
  width: 43px;
  height: 50px;
  margin-bottom: 1px;
}

.va-mark::before {
  content: "";
  position: absolute;
  border: 2px solid currentColor;
  left: 11px;
  top: 1px;
  width: 20px;
  height: 36px;
  border-radius: 100% 0 100% 100%;
  transform: rotate(38deg);
}

.va-mark::after {
  content: "";
  position: absolute;
  border: 2px solid currentColor;
  left: 8px;
  top: 19px;
  width: 27px;
  height: 21px;
  border-top: 0;
  border-radius: 0 0 18px 18px;
  transform: rotate(13deg);
}

.va-brand-name {
  font-family: "Mrs Saint Delafield", cursive;
  font-size: clamp(34px, 3.4vw, 52px);
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0;
}

.va-brand-sub {
  margin-top: 7px;
  font-family: "Della Respira", serif;
  font-size: clamp(9px, 0.72vw, 13px);
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

/* ---------- titles ---------- */

.va-title {
  position: absolute;
  z-index: 8;
  margin: 0;
  color: rgba(255, 240, 238, 0.97);
  font-family: "DM Sans", Arial, sans-serif;
  font-size: clamp(42px, 4.2vw, 70px);
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.055em;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(30px);
  animation: vaRiseIn 1s cubic-bezier(0.16, 1, 0.3, 1) 900ms forwards;
}

@keyframes vaRiseIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.va-title-left {
  top: 17%;
  left: 30.5%;
}

.va-title-right {
  left: 30%;
  bottom: 15.7%;
}

/* ---------- center card ---------- */

.va-card-area {
  position: absolute;
  left: 50%;
  top: 50.7%;
  z-index: 15;
  width: clamp(190px, 16.2vw, 270px);
  transform: translate(-50%, -50%);
}

.va-card-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.05;
  overflow: hidden;
  border-radius: clamp(24px, 2.2vw, 38px);
  background: #8c1626;
  cursor: pointer;
  box-shadow: 0 26px 70px rgba(60, 4, 14, 0.32),
    0 5px 18px rgba(60, 4, 14, 0.2);
  opacity: 0;
  transform: translateY(55px) scale(0.88);
  animation: vaCardIn 1.15s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;
}

@keyframes vaCardIn {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.va-card-wrap::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(
    130deg,
    rgba(255, 255, 255, 0.12),
    transparent 38%,
    rgba(60, 6, 14, 0.1)
  );
}

.va-card-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center 35%;
  transform: scale(1.02);
  transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
}

.va-card-wrap:hover .va-card-image {
  transform: scale(1.095);
}

.va-explore {
  width: fit-content;
  margin: 14px auto 0;
  display: flex;
  align-items: center;
  gap: 5px;
  color: rgba(255, 240, 238, 0.96);
  font-size: clamp(12px, 1.22vw, 20px);
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(16px);
  animation: vaRiseIn 850ms cubic-bezier(0.16, 1, 0.3, 1) 1.45s forwards;
}

.va-explore-arrow {
  font-size: 0.72em;
  display: inline-block;
  transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

.va-card-area:hover .va-explore-arrow,
.va-card-area:focus-visible .va-explore-arrow {
  transform: translate(4px, -4px);
}

/* ---------- side control ---------- */

.va-side-control {
  position: absolute;
  right: clamp(18px, 2vw, 35px);
  top: 22%;
  z-index: 16;
  width: 34px;
  height: 34px;
  padding: 0;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 238, 238, 0.9);
  border-radius: 50%;
  background: rgba(50, 6, 14, 0.12);
  color: #fff3f0;
  cursor: pointer;
  backdrop-filter: blur(8px);
  opacity: 0;
  transform: scale(0.65);
  animation: vaPopIn 700ms cubic-bezier(0.16, 1, 0.3, 1) 1.25s forwards;
}

@keyframes vaPopIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.va-side-control::before {
  content: "";
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 9px rgba(255, 255, 255, 0.8);
}

.va-side-control::after {
  content: "";
  position: absolute;
  inset: -5px;
  border: 1px solid rgba(255, 251, 244, 0.19);
  border-radius: inherit;
  opacity: 0;
  transform: scale(0.65);
  transition: opacity 350ms ease,
    transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
}

.va-side-control:hover::after,
.va-side-control:focus-visible::after {
  opacity: 1;
  transform: scale(1);
}

/* ---------- bottom links ---------- */

.va-bottom-left {
  position: absolute;
  bottom: clamp(20px, 2.6vh, 32px);
  left: clamp(22px, 2.5vw, 42px);
  z-index: 16;
  color: rgba(255, 238, 236, 0.96);
  font-size: clamp(9px, 0.78vw, 13px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(13px);
  animation: vaRiseIn 800ms cubic-bezier(0.16, 1, 0.3, 1) 1.22s forwards;
}

.va-bottom-right {
  position: absolute;
  right: clamp(22px, 2.5vw, 42px);
  bottom: clamp(20px, 2.6vh, 32px);
  z-index: 16;
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 238, 236, 0.96);
  font-size: clamp(9px, 0.78vw, 13px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(13px);
  animation: vaRiseIn 800ms cubic-bezier(0.16, 1, 0.3, 1) 1.22s forwards;
}

.va-bar {
  width: 1px;
  height: 14px;
  margin: 0 3px;
  background: rgba(255, 233, 231, 0.36);
}

.va-lang {
  color: rgba(255, 233, 231, 0.55);
}

.va-lang-active,
.va-lang:hover,
.va-lang:focus-visible {
  color: #ffffff;
}

/* ---------- tablet ---------- */

@media (max-width: 900px) {
  .va-title {
    font-size: clamp(35px, 5.3vw, 50px);
  }

  .va-title-left {
    left: 13%;
  }

  .va-title-right {
    left: 16%;
  }

  .va-card-area {
    width: clamp(170px, 23vw, 225px);
  }

  .va-brand-name {
    font-size: 26px;
  }
}

/* ---------- mobile ---------- */

@media (max-width: 650px) {
  .va-root {
    min-height: 620px;
  }

  .va-split {
    grid-template-columns: 1fr;
    grid-template-rows: 50% 50%;
  }

  .va-panel-left,
  .va-panel-right {
    clip-path: none;
    animation: none;
  }

  .va-image-left {
    object-position: center 61%;
  }

  .va-image-right {
    object-position: 48% 43%;
  }

  .va-center-line {
    top: 50%;
    left: 0;
    right: 0;
    bottom: auto;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    animation: vaLineX 1.2s cubic-bezier(0.16, 1, 0.3, 1) 700ms forwards;
  }

  .va-topbar {
    height: 76px;
    align-items: start;
    padding: 22px 16px 0;
  }

  .va-brand {
    top: -8px;
  }

  .va-mark {
    width: 30px;
    height: 35px;
    transform: scale(0.72);
    margin-bottom: -5px;
  }

  .va-brand-name {
    font-size: 30px;
  }

  .va-brand-sub {
    margin-top: 5px;
    font-size: 7px;
  }

  .va-nav-link {
    font-size: 8px;
  }

  .va-title {
    font-size: clamp(28px, 9vw, 40px);
  }

  .va-title-left {
    top: 15%;
    left: 11%;
  }

  .va-title-right {
    left: auto;
    right: 8%;
    bottom: 9%;
  }

  .va-card-area {
    top: 50%;
    width: clamp(125px, 34vw, 170px);
  }

  .va-card-wrap {
    border-radius: 22px;
  }

  .va-explore {
    margin-top: 9px;
    font-size: 9px;
  }

  .va-side-control {
    top: 72%;
    right: 15px;
    width: 28px;
    height: 28px;
  }

  .va-bottom-left,
  .va-bottom-right {
    bottom: 16px;
    font-size: 7px;
  }

  .va-bottom-left {
    left: 15px;
  }

  .va-bottom-right {
    right: 15px;
    gap: 7px;
  }
}

/* ---------- reduced motion ---------- */

@media (prefers-reduced-motion: reduce) {
  .va-panel-left,
  .va-panel-right,
  .va-panel-image,
  .va-center-line,
  .va-nav-link,
  .va-brand,
  .va-title,
  .va-card-wrap,
  .va-explore,
  .va-side-control,
  .va-bottom-left,
  .va-bottom-right {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
  }

  .va-card-image,
  .va-explore-arrow,
  .va-nav-link::after {
    transition: none !important;
  }
}
`;

export default function SeraCakeHero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const node = rootRef.current;
      if (!node) return;

      const bounds = node.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;

      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        node.style.setProperty("--mouse-x", x.toFixed(3));
        node.style.setProperty("--mouse-y", y.toFixed(3));
        frameRef.current = null;
      });
    },
    []
  );

  const resetPointer = useCallback(() => {
    const node = rootRef.current;
    if (!node) return;

    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      node.style.setProperty("--mouse-x", "0");
      node.style.setProperty("--mouse-y", "0");
      frameRef.current = null;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleImageError = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const image = event.currentTarget;
      if (image.src.includes("8989964")) return;
      image.src = FALLBACK_IMAGE;
    },
    []
  );

  return (
    <main
      ref={rootRef}
      className="va-root"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <style>{styles}</style>

      <div className="va-split">
        <section className="va-panel va-panel-left">
          <img
            className="va-panel-image va-image-left"
            src={PRODUCT_IMAGE}
            alt="Luxury artisan cakes arranged with florals"
            loading="eager"
            onError={handleImageError}
          />
        </section>

        <section className="va-panel va-panel-right">
          <img
            className="va-panel-image va-image-right"
            src={FACE_IMAGE}
            alt="Close-up of elegant layered cake with soft cream textures"
            loading="eager"
            onError={handleImageError}
          />
        </section>
      </div>

      <div className="va-center-line" aria-hidden="true" />

      <header className="va-topbar">
        <a className="va-nav-link" href="#">
          Home
        </a>

        <a className="va-brand" href="#" aria-label="Sera Cake Shop">
          <span className="va-mark" aria-hidden="true" />
          <span className="va-brand-name">sera</span>
          <span className="va-brand-sub">artisan bake house</span>
        </a>

        <a className="va-nav-link va-nav-right" href="#">
          Collection
        </a>
      </header>

      <h1 className="va-title va-title-left">Velvet Layers</h1>
      <h2 className="va-title va-title-right">Pure Bliss</h2>

      <Link className="va-card-area" to="/home">
        <div className="va-card-wrap">
          <img
            className="va-card-image"
            src={CARD_IMAGE}
            alt="Sera signature cake"
            loading="eager"
            onError={handleImageError}
          />
        </div>
        <span className="va-explore">
          Explore
          <span className="va-explore-arrow" aria-hidden="true">
            ↗
          </span>
        </span>
      </Link>

      <button
        className="va-side-control"
        type="button"
        aria-label="View next collection"
      />

      <a className="va-bottom-left" href="#">
        Atelier
      </a>

      <div className="va-bottom-right">
        <a href="#">Shop</a>
        <span className="va-bar" aria-hidden="true" />
        <a className="va-lang va-lang-active" href="#">
          IT
        </a>
        <a className="va-lang" href="#">
          EN
        </a>
      </div>
    </main>
  );
}
