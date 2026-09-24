import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function IntroPage() {
  return (
    <main className="font-ui relative isolate flex h-svh min-h-[560px] w-full items-center justify-center overflow-hidden bg-[#170408] text-white">
      {/* Background photos: side by side on desktop, stacked on mobile */}
      <div className="absolute inset-0 -z-10 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1" aria-hidden="true">
        <img src="/products/redvelvet.jpg" alt="" className="h-full w-full object-cover" />
        <img src="/products/pistachio.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      {/* Dark wine overlay so the text is always easy to read */}
      <div className="absolute inset-0 -z-10 bg-[#170408]/70" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#170408]/60 via-transparent to-[#170408]/70" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex max-w-3xl flex-col items-center px-6 text-center [text-shadow:0_2px_18px_rgba(0,0,0,0.6)]"
      >
        <p className="font-brand text-7xl leading-none text-[#ffe3e6] sm:text-8xl">Sera Cakes</p>
        <p className="mt-2 text-sm tracking-wide text-[#f3d9d4] sm:text-base">by Reeba</p>

        <h1 className="font-display mt-8 text-4xl font-semibold leading-[1.1] sm:text-6xl">
          Cakes made for moments worth celebrating
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#f8ece9] sm:text-lg">
          Fresh cakes and handcrafted custom creations for birthdays, anniversaries, weddings and every special occasion.
        </p>

        <Link
          to="/home"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[#C41E3A] px-10 py-4 text-base font-semibold text-white shadow-xl shadow-black/40 transition hover:scale-105 hover:bg-[#a8172f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [text-shadow:none]"
        >
          Explore now
        </Link>
      </motion.div>
    </main>
  );
}
