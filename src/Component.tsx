"use client";

import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SHOWCASE_IMAGES = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=900&q=85",
    "/products/pistachio.jpg",,
  "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=85",
];

const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

function getCardRotation(index: number): number {
  return index % 2 === 0 ? -2 : 4;
}

function getCardOffset(index: number): number {
  const remainder = index % 3;
  if (remainder === 0) return 16;
  if (remainder === 2) return 10;
  return 0;
}

export default function Component() {
  const navigate = useNavigate();
  const images = Array.isArray(SHOWCASE_IMAGES) ? SHOWCASE_IMAGES : [];

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white px-5 text-center text-neutral-950">
      {/* Background glow decoration */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-200/70 blur-[110px]" />
        <div className="absolute bottom-[-240px] left-[-160px] h-[480px] w-[480px] rounded-full bg-rose-200/60 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-160px] h-[440px] w-[440px] rounded-full bg-red-100/70 blur-[120px]" />
      </div>

      {/* Main content */}
      <div className="relative z-20 flex -translate-y-24 flex-col items-center sm:-translate-y-28 md:-translate-y-32">
        <motion.span
          initial="hidden"
          animate="show"
          variants={fadeInVariants}
          className="mb-5 inline-flex items-center rounded-full border border-red-200 bg-white/80 px-4 py-2 text-xs font-semibold text-red-700 shadow-sm backdrop-blur-md sm:text-sm"
        >
          Handcrafted with love for over 50,000 cake lovers
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 20,
            delay: 0.08,
          }}
          className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Indulge in
          <br />
          Artisan Cakes
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeInVariants}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.4,
          }}
          className="mt-6 max-w-xl text-base leading-7 text-neutral-500 sm:text-lg"
        >
          Discover exquisite handcrafted cakes made with the finest
          ingredients. From elegant wedding tiers to everyday indulgence —
          every creation is baked with passion.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInVariants}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.52,
          }}
        >
          <motion.button
            type="button"
            onClick={() => navigate("/order")}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 18px 45px rgba(196, 30, 58, 0.32)",
            }}
            whileTap={{ scale: 0.96 }}
            style={{ backgroundColor: "#C41E3A" }}
            className="mt-8 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-700/20 transition-colors hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
          >
            Order Now
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom image marquee */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[32%] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)] sm:h-[36%] md:h-[42%]">
        <motion.div
          className="flex w-max items-end"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="flex shrink-0 items-end gap-4 pr-4"
              aria-hidden={groupIndex === 1}
            >
              {images.map((src, index) => {
                const rotation = getCardRotation(index);
                const offset = getCardOffset(index);
                const isFirstGroup = groupIndex === 0;

                return (
                  <motion.div
                    key={`${groupIndex}-${index}`}
                    style={{
                      transform: `translateY(${offset}px) rotate(${rotation}deg)`,
                    }}
                    whileHover={
                      isFirstGroup
                        ? {
                            y: -12,
                            rotate: 0,
                            scale: 1.025,
                          }
                        : undefined
                    }
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 20,
                    }}
                    className="relative h-48 w-36 shrink-0 overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_20px_55px_rgba(0,0,0,0.17)] sm:h-56 sm:w-[168px] md:h-64 md:w-48"
                  >
                    <img
                      src={src}
                      alt=""
                      draggable={false}
                      loading={index < 4 ? "eager" : "lazy"}
                      className="h-full w-full select-none object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10" />
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
