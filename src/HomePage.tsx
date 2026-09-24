import { Link } from "react-router-dom";

/* ------------------------------------------------------------------
   Edit these values — everything on the page reads from here.
   Leave INSTAGRAM_URL / FACEBOOK_URL empty to hide those links.
------------------------------------------------------------------- */
const BRAND = "Sera Cakes by Reeba";
const MENU_URL = "https://dm.newintro.in/menu/sera-cakes/";
const WHATSAPP_URL =
  "https://wa.me/919947300880?text=Hi%20Sera%20Cakes%2C%20I%27d%20like%20to%20order";
const PHONE_DISPLAY = "+91 99473 00880";
const PHONE_LINK = "tel:+919947300880";
const ADDRESS = "Sera Cakes, Sea View Ward, Cullen Road, Alleppey (Alappuzha) 688001";
const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Sera+Cakes+Cullen+Road+Alappuzha";
const OPENING_HOURS = "Message us on WhatsApp to confirm today's opening hours."; // TODO: replace with real hours
const INSTAGRAM_URL = ""; // TODO
const FACEBOOK_URL = ""; // TODO
const LOCATION = "Alleppey (Alappuzha)";

const CATEGORIES: { name: string; cakes: string[] }[] = [
  { name: "Budget Bliss", cakes: ["Classic Vanilla", "Classic Strawberry", "Classic Chocolate"] },
  { name: "Chocolate Obsession", cakes: ["White Chocolate Loaded", "Chocolate Mocha", "Chocolate Caramel", "Spanish Delight", "Choco Oreo"] },
  { name: "Artisan Treats", cakes: ["Vanilla Caramel", "Ferrero Rocher", "Red Velvet Cream Cheese", "Lotus Biscoff", "KitKat", "Raffaello"] },
  { name: "Luxe Indulgence", cakes: ["Nutella Hazelnut", "Coffee Walnut", "Creamy Peanut Butter", "Fresh Strawberry", "Cream Cheese Carrot Cake", "KitKat Biscoff", "Fresh Fruit Gateaux"] },
  { name: "Milk Treats", cakes: ["Tres Leches Milk Cake", "Toffee Milk Cake", "Milky Nut"] },
  { name: "Fruit Punch", cakes: ["Passion Fruit", "Blueberry"] },
  { name: "Signature Bakes", cakes: ["Chocolate Extravaganza", "Vanilla Custard & Berries", "Red Velvet Chocolate", "Strawberry Biscoff", "Chocolate Strawberry Pistachio", "Chocolate Sheet Cake", "Berry Extravaganza"] },
];

const BESTSELLERS = [
  { name: "Chocolate Extravaganza", image: "/products/choclate.jpg", text: "Rich, indulgent and made for serious chocolate lovers." },
  { name: "Red Velvet Chocolate", image: "/products/redvelvet.jpg", text: "A beautiful combination of red velvet and chocolate for special occasions." },
  { name: "Strawberry Biscoff", image: "/products/biscoff.jpg", text: "A delicious combination of fruity freshness and Biscoff goodness." },
  { name: "Ferrero Rocher", image: "/products/ferrero.jpg", text: "A rich chocolate experience inspired by the classic favourite." },
  { name: "Chocolate Oreo", image: "/products/oreo.jpg", text: "A chocolate favourite with the familiar Oreo touch." },
  { name: "Tres Leches Milk Cake", image: "/products/milk.jpg", text: "Soft, moist and soaked in delicious milk flavours." },
];

const OCCASIONS = [
  { icon: "🎂", title: "Birthday cakes", text: "Make birthdays memorable with a cake made especially for the celebration." },
  { icon: "💍", title: "Anniversary cakes", text: "Celebrate another beautiful year together with a cake made for the occasion." },
  { icon: "💒", title: "Wedding cakes", text: "Elegant cakes designed to complement your special day." },
  { icon: "🎓", title: "Graduation cakes", text: "Celebrate achievements with a cake that deserves the moment." },
  { icon: "👶", title: "Celebration cakes", text: "Beautiful cakes for baby showers, engagements, milestones and family celebrations." },
  { icon: "❤️", title: "Just because", text: "You don't always need an occasion. Sometimes cake is the occasion." },
];

const WHY = [
  { title: "Freshly made", text: "We focus on delivering cakes that are fresh and enjoyable for your celebration." },
  { title: "Beautifully crafted", text: "From simple classics to detailed custom creations, presentation matters." },
  { title: "Variety of flavours", text: "Choose from chocolate, vanilla, strawberry, red velvet, Biscoff, fruit-based flavours and more." },
  { title: "Made for your occasion", text: "Birthday, anniversary, wedding or a simple sweet craving — there's a cake for it." },
  { title: "Easy ordering", text: "Browse the complete menu and place your order directly through WhatsApp." },
];

const STEPS = [
  { title: "Explore", text: "Browse our cakes and discover your favourite flavour or design." },
  { title: "Choose", text: "Select your preferred cake from our complete digital menu." },
  { title: "Order", text: "Place your order directly through WhatsApp." },
  { title: "Celebrate", text: "Pick up or receive your cake and enjoy your special moment." },
];

// Alt text describes each photo. Rename the files in /public/products to match
// (e.g. custom-birthday-cake-sera-cakes.jpg) for better image SEO.
const GALLERY = [
  { src: "/products/pistachio.jpg", alt: "Chocolate strawberry pistachio cake from Sera Cakes by Reeba" },
  { src: "/products/berry.jpg", alt: "Berry extravaganza cake with strawberries and blueberries" },
  { src: "/products/lotus.jpg", alt: "Lotus Biscoff celebration cake" },
  { src: "/products/nutella.jpg", alt: "Nutella hazelnut cake" },
  { src: "/products/whitechoclate.jpg", alt: "White chocolate loaded cake" },
  { src: "/products/carrot.jpg", alt: "Cream cheese carrot cake" },
];

// TODO: replace with real Google reviews when available.
const REVIEWS = [
  "Beautiful cake, amazing presentation and exactly what we wanted for our celebration.",
  "The cake looked beautiful and tasted even better.",
  "A lovely experience from ordering to receiving the cake.",
];

const FAQS = [
  { q: "What types of cakes do you offer?", a: "We offer a variety of cakes including chocolate cakes, vanilla cakes, strawberry cakes, red velvet cakes, Biscoff cakes, fruit cakes, milk cakes and signature celebration cakes." },
  { q: "Do you make custom cakes?", a: "Yes. You can contact us through WhatsApp to discuss your preferred design, theme, flavour and occasion." },
  { q: "How can I order a cake?", a: "You can browse our complete digital menu, select your preferred cake and place your order directly through WhatsApp." },
  { q: "Do you make birthday cakes?", a: "Yes. We offer cakes suitable for birthdays and other celebrations, including custom designs." },
  { q: "Can I order a cake through WhatsApp?", a: "Yes. After choosing your cake from the digital menu, you can place your order directly through WhatsApp." },
  { q: "Do you make wedding cakes?", a: "We offer celebration and custom cake options suitable for weddings and other special occasions. Contact us to discuss your requirements." },
  { q: "Where is Sera Cakes by Reeba located?", a: ADDRESS },
];

const NAV = [
  ["About", "#about"],
  ["Cakes", "#cakes"],
  ["Custom cakes", "#custom"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

/* ---------- small shared pieces ---------- */

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-[#C41E3A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition-colors hover:bg-[#a8172f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300";
const btnGhost =
  "inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-[#f3e2de] transition-colors hover:border-red-300/60 hover:text-red-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300";

function ExtLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function SectionHead({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl font-semibold text-red-100 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 leading-7 text-[#cdb5af]">{text}</p>}
    </div>
  );
}

/* ---------- page ---------- */

export default function HomePage() {
  return (
    <div className="font-ui min-h-screen bg-[#170408] text-[#f8ece9]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-[#170408]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
          <a href="#top" className="font-brand text-3xl leading-none text-[#ffe3e6]">
            Sera Cakes
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-sm text-[#d9c3bd] lg:flex">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-red-200">
                {label}
              </a>
            ))}
          </nav>
          <ExtLink href={WHATSAPP_URL} className="rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-[#062b12] transition-transform hover:scale-105">
            WhatsApp
          </ExtLink>
        </div>
      </header>

      <main id="top">
        {/* 1. Hero */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "26px 26px" }}
          />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
            <div className="relative z-10">
              <p className="font-brand text-4xl leading-none text-red-300">Sera Cakes by Reeba</p>
              <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.08] text-[#f9ece9] sm:text-6xl">
                Cakes made for moments worth celebrating
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#d3bcb6]">
                From classic cakes to handcrafted custom creations, Sera Cakes by Reeba makes fresh and beautiful cakes for
                birthdays, anniversaries, weddings and every special occasion.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <ExtLink href={MENU_URL} className={btnPrimary}>Explore our cakes</ExtLink>
                <ExtLink href={WHATSAPP_URL} className={btnGhost}>Order on WhatsApp</ExtLink>
              </div>
              <p className="mt-6 text-sm text-[#b39d97]">Freshly baked. Custom cakes. Made for every celebration.</p>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img src="/products/redvelvet.jpg" alt="Red velvet chocolate cake from Sera Cakes by Reeba" className="h-72 w-full rounded-[28px] object-cover shadow-[0_30px_70px_rgba(0,0,0,0.5)] sm:h-96" />
              <img src="/products/pistachio.jpg" alt="Chocolate strawberry pistachio cake" className="mt-10 h-72 w-full rounded-[28px] object-cover shadow-[0_30px_70px_rgba(0,0,0,0.5)] sm:h-96" />
            </div>
          </div>
        </section>

        {/* 2. About */}
        <section id="about" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-semibold text-red-100 sm:text-4xl">More than just a cake</h2>
          <p className="mt-6 leading-8 text-[#d3bcb6]">
            At Sera Cakes by Reeba, we believe a cake is more than a dessert — it's part of the memory.
          </p>
          <p className="mt-4 leading-8 text-[#d3bcb6]">
            From simple classic flavours to elaborate celebration cakes, we create cakes with attention to flavour,
            presentation and detail. Whether you're celebrating a birthday, anniversary, wedding or simply craving
            something sweet, we're here to make your occasion a little more special.
          </p>
          <p className="mt-4 leading-8 text-[#d3bcb6]">
            Looking for a cake shop in {LOCATION}? Explore our cakes and order directly through our online menu.
          </p>
          <ExtLink href={MENU_URL} className={`${btnGhost} mt-8`}>Discover our cakes</ExtLink>
        </section>

        {/* 3. Menu preview */}
        <section id="cakes" className="scroll-mt-20 border-y border-white/5 bg-[#1b060b] px-6 py-20">
          <SectionHead title="Something for every sweet craving" text="Explore some of our popular cake selections, from everyday classics to indulgent signature bakes." />
          <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <div key={c.name} className="rounded-2xl border border-white/10 bg-[#1e0910] p-6">
                <h3 className="font-display text-lg text-red-200">{c.name}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-[#d3bcb6]">
                  {c.cakes.map((cake) => (
                    <li key={cake}>{cake}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col items-start justify-center gap-4 rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
              <p className="font-display text-lg text-red-100">See every cake with prices and photos.</p>
              <Link to="/order" className={btnPrimary}>View full menu &amp; prices</Link>
              <ExtLink href={MENU_URL} className="text-sm text-red-200 underline underline-offset-4">Open the digital menu</ExtLink>
            </div>
          </div>
        </section>

        {/* 4. Bestsellers */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionHead title="Customer favourites" text="A few cakes that make celebrations a little sweeter." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BESTSELLERS.map((b) => (
              <article key={b.name} className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#1e0910]">
                <div className="h-56 overflow-hidden">
                  <img src={b.image} alt={`${b.name} cake`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-display text-lg">{b.name}</h3>
                  <p className="text-sm leading-6 text-[#cdb5af]">{b.text}</p>
                  <ExtLink href={MENU_URL} className="mt-auto pt-2 text-sm font-semibold text-red-300 hover:text-red-200">
                    View &amp; order
                  </ExtLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. Custom cakes */}
        <section id="custom" className="scroll-mt-20 px-6 pb-20">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-red-400/25 bg-gradient-to-br from-[#3a0a15] to-[#1e0910] px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-3xl font-semibold text-red-100 sm:text-5xl">Your idea. Our cake.</h2>
            <p className="mt-5 text-lg text-[#e8d2cc]">Have something special in mind?</p>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#d3bcb6]">
              Whether you have a theme, colour combination, character, reference image or completely new idea, talk to us
              about creating a custom cake for your celebration. From birthday cakes to personalised celebration cakes,
              we'll help bring your idea to life.
            </p>
            <ExtLink href={WHATSAPP_URL} className={`${btnPrimary} mt-8`}>Discuss your custom cake</ExtLink>
          </div>
        </section>

        {/* 6. Occasions */}
        <section className="border-y border-white/5 bg-[#1b060b] px-6 py-20">
          <SectionHead title="Cakes for every celebration" text="Whatever you're celebrating, there's always room for cake." />
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OCCASIONS.map((o) => (
              <div key={o.title} className="rounded-2xl border border-white/10 bg-[#1e0910] p-6">
                <span className="text-3xl" aria-hidden="true">{o.icon}</span>
                <h3 className="font-display mt-3 text-lg text-red-200">{o.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#cdb5af]">{o.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ExtLink href={MENU_URL} className={btnGhost}>Explore all cakes</ExtLink>
          </div>
        </section>

        {/* 7. Why Sera */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead title="Why choose Sera Cakes by Reeba?" />
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.title} className="border-l-2 border-red-400/50 pl-5">
                <h3 className="font-display text-lg text-red-200">{w.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#cdb5af]">{w.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Ordering process */}
        <section className="border-y border-white/5 bg-[#1b060b] px-6 py-20">
          <SectionHead title="Your cake is just a few clicks away" />
          <ol className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-white/10 bg-[#1e0910] p-6">
                <span className="font-display text-4xl text-red-400/70">{i + 1}</span>
                <h3 className="font-display mt-2 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#cdb5af]">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <ExtLink href={MENU_URL} className={btnPrimary}>Browse menu &amp; order</ExtLink>
          </div>
        </section>

        {/* 9. Gallery */}
        <section id="gallery" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
          <SectionHead title="A look at our cakes" text="From elegant celebration cakes to indulgent chocolate creations, explore some of our recent work." />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {GALLERY.map((g) => (
              <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className="h-48 w-full rounded-2xl object-cover sm:h-72" />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/order" className={btnGhost}>View more cakes</Link>
          </div>
        </section>

        {/* 10. Reviews */}
        <section className="border-y border-white/5 bg-[#1b060b] px-6 py-20">
          <SectionHead title="What our customers say" />
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r} className="rounded-2xl border border-white/10 bg-[#1e0910] p-6">
                <div className="text-amber-300" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote className="mt-3 leading-7 text-[#e8d2cc]">“{r}”</blockquote>
                <figcaption className="mt-4 text-sm text-[#b39d97]">Customer</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 11. Location */}
        <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
          <SectionHead title="Visit Sera Cakes by Reeba" text="Looking for a cake shop near you for your next celebration? Visit us for fresh cakes, custom cake orders and delicious treats for every occasion." />
          <div className="mt-12 grid gap-8 text-sm sm:grid-cols-3">
            <div>
              <h3 className="font-display text-lg text-red-200">Find us</h3>
              <p className="mt-2 leading-6 text-[#d3bcb6]">{ADDRESS}</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-red-200">Opening hours</h3>
              <p className="mt-2 leading-6 text-[#d3bcb6]">{OPENING_HOURS}</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-red-200">Contact</h3>
              <p className="mt-2 leading-6 text-[#d3bcb6]">
                <a href={PHONE_LINK} className="hover:text-red-200">{PHONE_DISPLAY}</a>
                <br />
                <ExtLink href={WHATSAPP_URL} className="hover:text-red-200">Message on WhatsApp</ExtLink>
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ExtLink href={DIRECTIONS_URL} className={btnPrimary}>Get directions</ExtLink>
            <ExtLink href={WHATSAPP_URL} className={btnGhost}>WhatsApp us</ExtLink>
          </div>
        </section>

        {/* 12. Local SEO paragraph */}
        <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
          <h2 className="font-display text-2xl font-semibold text-red-100 sm:text-3xl">Your local cake destination</h2>
          <p className="mt-5 leading-8 text-[#cdb5af]">
            Sera Cakes by Reeba brings together classic flavours, indulgent chocolate cakes, artisan treats and custom
            celebration cakes in one place. Whether you're searching for a birthday cake, custom cake, anniversary cake or
            a special dessert, explore our menu and find something made for your occasion.
          </p>
          <p className="mt-4 leading-8 text-[#cdb5af]">
            If you're looking for cakes in {LOCATION}, browse our digital menu and order directly through WhatsApp.
          </p>
        </section>

        {/* 13. FAQ */}
        <section className="border-y border-white/5 bg-[#1b060b] px-6 py-20">
          <SectionHead title="Frequently asked questions" />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#1e0910]">
            {FAQS.map((f) => (
              <details key={f.q} className="group px-6 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-[#f3e2de]">
                  {f.q}
                  <span className="text-red-300 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-[#cdb5af]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 14. Final CTA */}
        <section className="px-6 py-24 text-center">
          <h2 className="font-display mx-auto max-w-2xl text-4xl font-semibold leading-tight text-red-100 sm:text-5xl">
            Let's make your celebration sweeter.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d3bcb6]">
            Whether you already know what you want or you're still looking for the perfect cake, we're ready to help.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <ExtLink href={MENU_URL} className={btnPrimary}>Explore full menu</ExtLink>
            <ExtLink href={WHATSAPP_URL} className={btnGhost}>Order on WhatsApp</ExtLink>
          </div>
          <p className="mt-6 text-sm text-[#b39d97]">Fresh cakes. Custom creations. Sweet celebrations.</p>
        </section>
      </main>

      {/* 15. Footer */}
      <footer className="border-t border-white/10 bg-[#120306] px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 text-sm text-[#cdb5af] sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-brand text-4xl leading-none text-[#ffe3e6]">Sera Cakes</p>
            <p className="mt-1 text-xs tracking-wide text-[#b39d97]">by Reeba</p>
            <p className="mt-4 max-w-xs leading-6">Fresh cakes and custom creations made for life's sweetest moments.</p>
          </div>
          <div>
            <h3 className="font-display text-base text-red-200">Quick links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#top" className="hover:text-red-200">Home</a></li>
              <li><a href="#about" className="hover:text-red-200">About</a></li>
              <li><a href="#cakes" className="hover:text-red-200">Cakes</a></li>
              <li><a href="#custom" className="hover:text-red-200">Custom cakes</a></li>
              <li><a href="#gallery" className="hover:text-red-200">Gallery</a></li>
              <li><a href="#contact" className="hover:text-red-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-base text-red-200">Order</h3>
            <ul className="mt-3 space-y-2">
              <li><ExtLink href={MENU_URL} className="hover:text-red-200">Digital menu</ExtLink></li>
              <li><ExtLink href={WHATSAPP_URL} className="hover:text-red-200">WhatsApp</ExtLink></li>
              <li><a href={PHONE_LINK} className="hover:text-red-200">Call us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-base text-red-200">Location</h3>
            <p className="mt-3 leading-6">{ADDRESS}</p>
            {(INSTAGRAM_URL || FACEBOOK_URL) && (
              <ul className="mt-4 flex gap-4">
                {INSTAGRAM_URL && <li><ExtLink href={INSTAGRAM_URL} className="hover:text-red-200">Instagram</ExtLink></li>}
                {FACEBOOK_URL && <li><ExtLink href={FACEBOOK_URL} className="hover:text-red-200">Facebook</ExtLink></li>}
              </ul>
            )}
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-[#9c8781]">
          Copyright © 2026 {BRAND}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
