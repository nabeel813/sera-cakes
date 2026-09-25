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
  { title: "Freshly made", text: "We love making freshly made cakes for your celebration or just because!" },
  { title: "Beautifully presented", text: "We offer a variety of simple classic flavours to more intricate designer cakes. All our cakes are beautifully presented and made with fresh ingredients." },
  { title: "Variety of flavours", text: "Our range of cake flavours include: chocolate, vanilla, strawberry, red velvet, Biscoff, fruit flavours and many more." },
  { title: "Perfect for any occasion", text: "Whether you are ordering a birthday cake, anniversary cake, wedding cake, or just a simple treat, we have something for everyone. " },
  { title: "Simple ordering process", text: "To order simply browse our menu and contact us via WhatsApp." },
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
  "inline-flex items-center justify-center rounded-full border border-[#c41e3a]/50 px-7 py-3.5 text-sm font-semibold text-[#2b0a10] transition-colors hover:border-red-300/60 hover:text-[#C41E3A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300";

function ExtLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden="true">
      <path d="M15 8.5h-2a2 2 0 0 0-2 2V13H8.5v3H11v6h3v-6h2.2l.8-3H14v-2c0-.3.2-.5.5-.5H16z" />
    </svg>
  );
}
function SectionHead({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl font-semibold text-[#3a0a12] sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 leading-7 text-[#4a3034]">{text}</p>}
    </div>
  );
}

/* ---------- page ---------- */

export default function HomePage() {
  return (
    <div className="font-ui min-h-screen bg-[#F2ECDF] text-[#2b0a10]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-black/10 bg-[#F2ECDF]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
          <a href="#top" className="font-brand text-3xl leading-none text-[#C41E3A]">
            Sera Cakes
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-sm text-[#4a3034] lg:flex">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-[#C41E3A]">
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
        <section className="relative overflow-hidden border-b border-black/10">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)", backgroundSize: "26px 26px" }}
          />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
            <div className="relative z-10">
              <p className="font-brand text-4xl leading-none text-[#C41E3A]">Sera Cakes by Reeba</p>
              <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.08] text-[#2b0a10] sm:text-6xl">
                Cakes Made for Moments Worth Celebrating
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#4a3034]">
                From classic cakes to custom creations, Sera Cakes by Reeba offers freshly baked, beautiful cakes for
                birthdays, anniversaries, weddings and every special occasion.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <ExtLink href={MENU_URL} className={btnPrimary}>Explore Our Cakes</ExtLink>
                <ExtLink href={WHATSAPP_URL} className={btnGhost}>Order on WhatsApp</ExtLink>
              </div>
              <p className="mt-6 text-sm text-[#6b5256]">Freshly baked. Custom cakes. Made for every celebration.</p>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img src="/products/redvelvet.jpg" alt="Red velvet chocolate cake from Sera Cakes by Reeba" className="h-72 w-full rounded-[28px] object-cover shadow-[0_30px_70px_rgba(0,0,0,0.5)] sm:h-96" />
              <img src="/products/pistachio.jpg" alt="Chocolate strawberry pistachio cake" className="mt-10 h-72 w-full rounded-[28px] object-cover shadow-[0_30px_70px_rgba(0,0,0,0.5)] sm:h-96" />
            </div>
          </div>
        </section>

        {/* 2. About */}
        <section id="about" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-semibold text-[#3a0a12] sm:text-4xl">More Than Just A Cake</h2>
          <p className="mt-6 leading-8 text-[#4a3034]">
            At Sera Cakes by Reeba, we believe a cake is more than a dessert — it's part of the memory.
          </p>
          <p className="mt-4 leading-8 text-[#4a3034]">
            From simple classic flavours to elaborate celebration cakes we use our skills to make sure you receive a
            beautiful and delicious cake. Whether you need a birthday cake, anniversary cake, wedding cake or even just a
            simple treat we'll try to help you make your day a little bit more special.
          </p>
          <p className="mt-4 leading-8 text-[#4a3034]">
            Looking for a cake shop in {LOCATION}? Explore our cakes and order directly through our online menu.
          </p>
          <ExtLink href={MENU_URL} className={`${btnGhost} mt-8`}>Discover Our Cakes</ExtLink>
        </section>

        {/* 3. Menu preview */}
        <section id="cakes" className="scroll-mt-20 border-y border-black/10 bg-[#EEDBAA] px-6 py-20">
          <SectionHead title="Something for every sweet craving." text="See some of our popular cake picks, from everyday classics to indulgent signature bakes." />
          <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <div key={c.name} className="rounded-2xl border border-black/10 bg-white/60 p-6">
                <h3 className="font-display text-lg text-[#C41E3A]">{c.name}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-[#4a3034]">
                  {c.cakes.map((cake) => (
                    <li key={cake}>{cake}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col items-start justify-center gap-4 rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
              <p className="font-display text-lg text-[#3a0a12]">See every cake with prices and photos.</p>
              <Link to="/order" className={btnPrimary}>View full menu &amp; prices</Link>
              <ExtLink href={MENU_URL} className="text-sm text-[#C41E3A] underline underline-offset-4">Open the digital menu</ExtLink>
            </div>
          </div>
        </section>

        {/* 4. Bestsellers */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionHead title="Customer favourites" text="A few cakes that make celebrations a little sweeter." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BESTSELLERS.map((b) => (
              <article key={b.name} className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/60">
                <div className="h-56 overflow-hidden">
                  <img src={b.image} alt={`${b.name} cake`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-display text-lg">{b.name}</h3>
                  <p className="text-sm leading-6 text-[#4a3034]">{b.text}</p>
                  <ExtLink href={MENU_URL} className="mt-auto pt-2 text-sm font-semibold text-[#C41E3A] hover:text-[#C41E3A]">
                    View &amp; order
                  </ExtLink>
                </div>
              </article>
            ))}

          </div>
        </section>

        {/* 5. Custom cakes */}
        <section id="custom" className="scroll-mt-20 px-6 pb-20">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-red-400/25 bg-[#EEDBAA] px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-3xl font-semibold text-[#3a0a12] sm:text-5xl">Your Idea. Our Cake.</h2>
            <p className="mt-5 text-lg text-[#4a3034]">Have something special in mind?</p>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#4a3034]">
              Whether you have a theme, color combination, character, reference image or something truly new and unique, come and let us know
              about creating a cake for your celebration. From birthday cakes to personalized celebration cakes,
              we will help bring your idea to life.
            </p>
            <ExtLink href={WHATSAPP_URL} className={`${btnPrimary} mt-8`}>Discuss your custom cake</ExtLink>
          </div>
        </section>

        {/* 6. Occasions */}
        <section className="border-y border-black/10 bg-[#EEDBAA] px-6 py-20">
          <SectionHead title="Cakes for every celebration" text="Whatever you're celebrating, there's always room for cake." />
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OCCASIONS.map((o) => (
              <div key={o.title} className="rounded-2xl border border-black/10 bg-white/60 p-6">
                <span className="text-3xl" aria-hidden="true">{o.icon}</span>
                <h3 className="font-display mt-3 text-lg text-[#C41E3A]">{o.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4a3034]">{o.text}</p>
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
                <h3 className="font-display text-lg text-[#C41E3A]">{w.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4a3034]">{w.text}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="-mt-8 px-6 pb-16 text-center font-display text-2xl font-semibold text-[#3a0a12]">Let's get your order in!</p> {/* 8. Ordering process */}
        <section className="border-y border-black/10 bg-[#EEDBAA] px-6 py-20">
          <SectionHead title="Your cake is just a few clicks away" />
          <ol className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-black/10 bg-white/60 p-6">
                <span className="font-display text-4xl text-[#C41E3A]">{i + 1}</span>
                <h3 className="font-display mt-2 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4a3034]">{s.text}</p>
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
        <section className="border-y border-black/10 bg-[#EEDBAA] px-6 py-20">
          <SectionHead title="What our customers say" />
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r} className="rounded-2xl border border-black/10 bg-white/60 p-6">
                <div className="text-amber-600" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote className="mt-3 leading-7 text-[#4a3034]">“{r}”</blockquote>
                <figcaption className="mt-4 text-sm text-[#6b5256]">Customer</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 11. Location */}
        <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
          <SectionHead title="Visit Sera Cakes by Reeba" text="Looking for a cake shop near you for your next celebration? Visit us for fresh cakes, custom cake orders and delicious treats for every occasion." />
          <div className="mt-12 grid gap-8 text-sm sm:grid-cols-3">
            <div>
              <h3 className="font-display text-lg text-[#C41E3A]">Find us</h3>
              <p className="mt-2 leading-6 text-[#4a3034]">{ADDRESS}</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-[#C41E3A]">Opening hours</h3>
              <p className="mt-2 leading-6 text-[#4a3034]">{OPENING_HOURS}</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-[#C41E3A]">Contact</h3>
              <p className="mt-2 leading-6 text-[#4a3034]">
                <a href={PHONE_LINK} className="hover:text-[#C41E3A]">{PHONE_DISPLAY}</a>
                <br />
                <ExtLink href={WHATSAPP_URL} className="hover:text-[#C41E3A]">Message on WhatsApp</ExtLink>
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
          <h2 className="font-display text-2xl font-semibold text-[#3a0a12] sm:text-3xl">Your local cake destination</h2>
          <p className="mt-5 leading-8 text-[#4a3034]">
            Sera Cakes by Reeba brings together classic flavours, indulgent chocolate cakes, artisan treats and custom
            celebration cakes in one place. Whether you're searching for a birthday cake, custom cake, anniversary cake or
            a special dessert, explore our menu and find something made for your occasion.
          </p>
          <p className="mt-4 leading-8 text-[#4a3034]">
            If you're looking for cakes in {LOCATION}, browse our digital menu and order directly through WhatsApp.
          </p>
        </section>

        {/* 13. FAQ */}
        <section className="border-y border-black/10 bg-[#EEDBAA] px-6 py-20">
          <SectionHead title="Frequently asked questions" />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-black/10 rounded-2xl border border-black/10 bg-white/60">
            {FAQS.map((f) => (
              <details key={f.q} className="group px-6 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-[#2b0a10]">
                  {f.q}
                  <span className="text-[#C41E3A] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-[#4a3034]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 14. Final CTA */}
        <section className="px-6 py-24 text-center">
          <h2 className="font-display mx-auto max-w-2xl text-4xl font-semibold leading-tight text-[#3a0a12] sm:text-5xl">
            Let's make your celebration sweeter.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#4a3034]">
            Whether you already know what you want or you're still looking for the perfect cake, we're ready to help.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <ExtLink href={MENU_URL} className={btnPrimary}>Explore full menu</ExtLink>
            <ExtLink href={WHATSAPP_URL} className={btnGhost}>Order on WhatsApp</ExtLink>
          </div>
          <p className="mt-6 text-sm text-[#6b5256]">Fresh cakes. Custom creations. Sweet celebrations.</p>
        </section>
      </main>

      {/* 15. Footer */}
      <footer className="border-t border-black/10 bg-[#EEDBAA] px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 text-sm text-[#4a3034] sm:grid-cols-2 lg:grid-cols-4">
          <div>
  <img src="/products/logo.png" alt="Sera Cakes by Reeba" className="h-16 w-auto object-contain" />
  <p className="mt-4 max-w-xs leading-6">Fresh cakes and custom creations made for life's sweetest moments.</p>
</div>
          <div>
            <h3 className="font-display text-base text-[#C41E3A]">Quick links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#top" className="hover:text-[#C41E3A]">Home</a></li>
              <li><a href="#about" className="hover:text-[#C41E3A]">About</a></li>
              <li><a href="#cakes" className="hover:text-[#C41E3A]">Cakes</a></li>
              <li><a href="#custom" className="hover:text-[#C41E3A]">Custom cakes</a></li>
              <li><a href="#gallery" className="hover:text-[#C41E3A]">Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#C41E3A]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-base text-[#C41E3A]">Order</h3>
            <ul className="mt-3 space-y-2">
              <li><ExtLink href={MENU_URL} className="hover:text-[#C41E3A]">Digital menu</ExtLink></li>
              <li><ExtLink href={WHATSAPP_URL} className="hover:text-[#C41E3A]">WhatsApp</ExtLink></li>
              <li><a href={PHONE_LINK} className="hover:text-[#C41E3A]">Call us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-base text-[#C41E3A]">Location</h3>
            <p className="mt-3 leading-6">{ADDRESS}</p>
            {(INSTAGRAM_URL || FACEBOOK_URL) && (
  <ul className="mt-4 flex gap-4">
    {INSTAGRAM_URL && (
      <li>
        <ExtLink href={INSTAGRAM_URL} className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#4a3034] hover:border-[#C41E3A]/50 hover:text-[#C41E3A]">
          <InstagramIcon />
        </ExtLink>
      </li>
    )}
    {FACEBOOK_URL && (
      <li>
        <ExtLink href={FACEBOOK_URL} className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#4a3034] hover:border-[#C41E3A]/50 hover:text-[#C41E3A]">
          <FacebookIcon />
        </ExtLink>
      </li>
    )}
  </ul>
)}
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-7xl border-t border-black/10 pt-6 text-xs text-[#6b5256]">
          Copyright © 2026 {BRAND}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
