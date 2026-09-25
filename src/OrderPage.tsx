import { useState } from "react";


const MENU_URL = "https://dm.newintro.in/menu/sera-cakes/";
const VIDEO_URL = "products/red.mp4";
const WHATSAPP_URL = "https://wa.me/919947300880?text=Hi%20Sera%20Cakes%2C%20I%27d%20like%20to%20order";

type Category =
  | "Budget Bliss"
  | "Chocolate Obsession"
  | "Artisan Treats"
  | "Luxe Indulgence"
  | "Milk Treats"
  | "Fruit Punch"
  | "Signature Bakes";

type Product = {
  id: string;
  name: string;
  category: Category;
  price: string;
  weight?: string;
  image: string;
  badge?: "New" | "Best Seller" | "Hit!";
  ingredients?: string;
};

/* Placeholder stock photography grouped by look — swap these for real
   Sera Cakes product shots whenever they're ready. */
const IMG = {
  chocolateDark:
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  honeyGolden:
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
  pistachioTart:
    "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
  caramelAmber:
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
  truffleDark:
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
  croissantLight:
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
  berryGateau:
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
  sourdough:
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  goldLeaf:
    "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80",
  pastryA:
    "https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=800&q=80",
  pastryB:
    "https://images.unsplash.com/photo-1519864806341-9b69221159a0?auto=format&fit=crop&w=800&q=80",
  pastryC:
    "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
  arrangedFlorals:
    "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
  creamCloseup:
    "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800",
  signatureCard:
    "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=800",
  fallbackDessert:
    "https://images.pexels.com/photos/8989964/pexels-photo-8989964.jpeg?auto=compress&cs=tinysrgb&w=800",
};

const PRODUCTS: Product[] = [
  // ---- Budget Bliss ----
  { id: "bb1", name: "Classic Vanilla", category: "Budget Bliss", price: "₹700", image: "/products/image.jpg" },
  { id: "bb2", name: "Classic Strawberry", category: "Budget Bliss", price: "₹850", image: "/products/strawberry.jpg" },
  { id: "bb3", name: "Classic Chocolate", category: "Budget Bliss", price: "₹850", image: IMG.chocolateDark },

  // ---- Chocolate Obsession ----
  { id: "co1", name: "White Chocolate Loaded", category: "Chocolate Obsession", price: "₹1300", image: "/products/whitechoclate.jpg", badge: "Best Seller" },
  { id: "co2", name: "Chocolate Mocha", category: "Chocolate Obsession", price: "₹1000", image: "/products/mocha.jpg" },
  { id: "co3", name: "Chocolate Caramel", category: "Chocolate Obsession", price: "₹950", image: "/products/caramel.jpg" },
  { id: "co4", name: "Spanish Delight", category: "Chocolate Obsession", price: "₹950", image: "/products/spanish.jpg" },
  { id: "co5", name: "Choco Oreo", category: "Chocolate Obsession", price: "₹1050", image: "/products/oreo.jpg" },

  // ---- Artisan Treats ----
  { id: "at1", name: "Vanilla Caramel", category: "Artisan Treats", price: "₹1100", image: "/products/vanillacaramel.jpg" },
  { id: "at2", name: "Ferrero Rocher", category: "Artisan Treats", price: "₹1650", image: "/products/ferrero.jpg" },
  { id: "at3", name: "Red Velvet Cream Cheese", category: "Artisan Treats", price: "₹1100", image: "/products/redcheese.jpg" },
  { id: "at4", name: "Lotus Biscoff", category: "Artisan Treats", price: "₹1600", image: "/products/lotus.jpg" },
  { id: "at5", name: "Kitkat", category: "Artisan Treats", price: "₹1300", image: "/products/kitkat.jpg" },
  { id: "at6", name: "Rafaello", category: "Artisan Treats", price: "₹1600", image: "/products/rafae.jpg" },

  // ---- Luxe Indulgence ----
  { id: "li1", name: "Nutella Hazelnut", category: "Luxe Indulgence", price: "₹1600", image: "/products/nutella.jpg", badge: "Best Seller" },
  { id: "li2", name: "Coffee Walnut", category: "Luxe Indulgence", price: "₹1750", image: "/products/hazelnut.jpg" },
  { id: "li3", name: "Creamy Peanut Butter", category: "Luxe Indulgence", price: "₹1500", image: "/products/peanut.jpg" },
  { id: "li4", name: "Fresh Strawberry", category: "Luxe Indulgence", price: "₹1450", image: "/products/fresh.jpg", badge: "Best Seller" },
  { id: "li5", name: "Cream Cheese Carrot Cake", category: "Luxe Indulgence", price: "₹1600", image: "/products/carrot.jpg" },
  { id: "li6", name: "Kitkat Biscoff", category: "Luxe Indulgence", price: "₹1550", image: "/products/kitkatbiscoff.jpg" },
  { id: "li7", name: "Fresh Fruit Gateaux", category: "Luxe Indulgence", price: "₹1300", image: "/products/freshfruit.jpg", badge: "Best Seller" },

  // ---- Milk Treats ----
  { id: "mt1", name: "Tresleches Milk Cake", category: "Milk Treats", price: "₹950", image: "/products/milk.jpg" },
  { id: "mt2", name: "Toffee Milk Cake", category: "Milk Treats", price: "₹1200", image: "/products/tofee.webp" },
  { id: "mt3", name: "Milkynut", category: "Milk Treats", price: "₹950", image: "/products/milkynut.jpg" },

  // ---- Fruit Punch ----
  { id: "fp1", name: "Passion Fruit", category: "Fruit Punch", price: "₹1000", image:"/products/passion.jpg" },
  { id: "fp2", name: "Blueberry", category: "Fruit Punch", price: "₹1350", image: "/products/blu.jpg" },

  // ---- Signature Bakes ----
  {
    id: "sb1",
    name: "Chocolate Extravaganza",
    category: "Signature Bakes",
    price: "₹1350",
    image: "/products/choclate.jpg",
    badge: "Hit!",
    ingredients:
      "Buttery chocolate sponge layered with premium chocolate ganache + nuts and frosted with chocolate ganache (milk / dark)",
  },
  {
    id: "sb2",
    name: "Vanilla Custard and Berries",
    category: "Signature Bakes",
    price: "₹1500",
    image: "/products/custard.jpg",
    ingredients:
      "Vanilla sponge cake layered with creamy custard filling + nuts + strawberries",
  },
  {
    id: "sb3",
    name: "Red Velvet Chocolate",
    category: "Signature Bakes",
    price: "₹1450",
    image: "/products/redvelvet.jpg",
    ingredients:
      "Red velvet sponge layered with premium chocolate ganache and frosted with chocolate ganache (milk / dark)",
  },
  {
    id: "sb4",
    name: "Strawberry Biscoff",
    category: "Signature Bakes",
    price: "₹1500",
    image: "/products/biscoff.jpg",
    ingredients:
      "Vanilla sponge layered with fresh strawberries and lotus biscoff spread",
  },
  {
    id: "sb5",
    name: "Chocolate Strawberry Pistachio",
    category: "Signature Bakes",
    price: "₹1500",
    image: "/products/pistachio.jpg",
    badge: "Hit!",
    ingredients:
      "Buttery chocolate sponge layered with premium milk chocolate ganache + strawberries + crushed pistachio",
  },
  {
    id: "sb6",
    name: "Chocolate Sheet Cake",
    category: "Signature Bakes",
    price: "₹850",
    image: "/products/sheet.jpg",
    ingredients:
      "Buttery chocolate cake topped with buttercream (vanilla buttercream / coffee buttercream)",
  },
  {
    id: "sb7",
    name: "Berry Extravaganza",
    category: "Signature Bakes",
    price: "₹1600",
    image: "/products/berry.jpg",
    ingredients:
      "Vanilla sponge layered strawberries, blueberries and frosted with milk / white chocolate",
  },
];

const FILTERS: Category[] = [
  "Signature Bakes",
  "Budget Bliss",
  "Chocolate Obsession",
  "Artisan Treats",
  "Luxe Indulgence",
  "Milk Treats",
  "Fruit Punch",
];

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2.5 3h2l2.2 11.6a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H6.2" />
    </svg>
  );
}



function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M4 4h4l1.6 4.6-2.3 1.8a13 13 0 0 0 6.3 6.3l1.8-2.3L20 16v4a1 1 0 0 1-1 1C9.6 21 3 14.4 3 5a1 1 0 0 1 1-1z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

const BADGE_STYLES: Record<NonNullable<Product["badge"]>, string> = {
  New: "bg-pink-500/15 text-pink-300 border-pink-500/30",
  "Best Seller": "bg-red-500/15 text-red-300 border-red-500/30",
  "Hit!": "bg-rose-600/15 text-rose-300 border-rose-600/30",
};
function FloatingVideo() {
  const [visible, setVisible] = useState(true);
  const [muted, setMuted] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 right-4 z-40 h-[250px] w-[140px] overflow-hidden rounded-2xl border border-white/20 bg-black shadow-2xl sm:bottom-28 sm:right-6 sm:h-[320px] sm:w-[180px]">
      <video
        src={VIDEO_URL}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="h-full w-full object-cover"
      />

      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
        className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-sm text-white backdrop-blur-sm"
      >
        {muted ? "🔇" : "🔊"}
      </button>

      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Close video"
        className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-lg leading-none text-white backdrop-blur-sm"
      >
        ×
      </button>
    </div>
  );
}

function WhatsAppButton() {
  return (
    
      <a href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 sm:right-6"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7" aria-hidden="true">
        <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" />
        <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2.2-1-.9.9a4.5 4.5 0 0 1-2.2-2.2l.9-.9-1-2.2L9 8.5z" />
      </svg>
    </a>
  );
}

export default function OrderPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("Signature Bakes");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  

  const visibleProducts = PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <div className="font-ui min-h-screen bg-[#170408] text-[#f8ece9]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-[#170408]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <a href="/" className="flex items-center gap-2 text-2xl tracking-tight text-[#f8ece9]">
            <span className="text-red-400">✦</span>
            <span className="font-brand text-3xl leading-none">Sera Cake Shop</span>
                    </a>

          <nav className="hidden items-center gap-8 text-sm text-[#d9c3bd] lg:flex">
            
            
            
            
          </nav>

          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-2 text-sm text-[#d9c3bd] sm:flex">
              <PhoneIcon />
              +91 9947300880
            </span>
            
  <a href={MENU_URL}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Open digital menu to order"
  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#f8ece9] transition-colors hover:border-red-400/50 hover:text-red-300"
>
  <CartIcon />
</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          {/* Left content */}
          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full border border-red-400/30 bg-red-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
              Sera Cakes by Reeba
            </span>

            <h1 className="font-display mt-6 max-w-xl text-5xl font-semibold leading-[1.05] text-[#f9ece9] sm:text-6xl">
              Cakes Made for Moments Worth Celebrating
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-[#d3bcb6]">
              From classic cakes to custom creations, Sera Cakes by Reeba offers freshly baked, beautiful cakes for birthdays, anniversaries, weddings, and every special occasion.

            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#menu"
                className="rounded-full bg-[#C41E3A] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition-colors hover:bg-[#a8172f]"
              >
                Shop Now
              </a>

              
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-[#b39d97]">
              <PinIcon />
              Sera Cakes,         Sea view ward, cullen road, Alleppey 688001
            </div>
          </div>

          {/* Right image + floating card */}
          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-[28px] border border-white/5 shadow-[0_40px_90px_rgba(0,0,0,0.55)]">
              <img
                src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=85"
                alt="Elegant layered cake with gold leaf detail"
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
            </div>

            <div className="absolute -bottom-8 left-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#1e0910]/90 p-4 shadow-2xl backdrop-blur-md sm:left-10">
              <img
                src="/products/pistachio.jpg"
                alt="Featured bake"
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <p className="font-display text-sm text-[#f8ece9]">
                  Chocolate Strawberry Pistachio
                </p>
                <p className="text-sm font-semibold text-red-300">₹1500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Some of our products */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400/80">
            Fan favourites
          </span>
          <h2 className="font-display mt-3 text-4xl font-semibold text-red-200 sm:text-[44px]">
            Some Of Our Products
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { name: "White Chocolate Loaded", price: "₹1300", image: "/products/whitechoclate.jpg" },
            { name: "Nutella Hazelnut", price: "₹1600", image: "/products/nutella.jpg" },
            { name: "Fresh Strawberry", price: "₹1450", image: "/products/fresh.jpg" },
            { name: "Chocolate Strawberry Pistachio", price: "₹1500", image: "/products/pistachio.jpg" },
            { name: "Fresh Fruit Gateaux", price: "₹1300", image: "/products/freshfruit.jpg" },
          ].map((item) => (
            <div key={item.name} className="group overflow-hidden rounded-2xl border border-white/5 bg-[#1e0910]">
              <div className="h-32 overflow-hidden sm:h-40">
                <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3 text-center">
                <p className="text-xs font-medium text-[#f3e2de] sm:text-sm">{item.name}</p>
                <p className="mt-1 text-xs text-red-300">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-[#C41E3A] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition-colors hover:bg-[#a8172f]">
            View All Products
          </a>
        </div>
      </section>
            {/* About Us */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <div className="w-full lg:w-2/5">
            <img
              src="/products/ree.png"
              alt="Reeba, founder of Sera Cakes by Reeba, holding a handcrafted cake"
              className="w-full rounded-[28px] border border-white/5 object-cover shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
            />
          </div>

          <div className="w-full text-center lg:w-3/5 lg:text-left">
            <h2 className="font-display text-4xl font-semibold text-red-200 sm:text-[44px]">
              More Than Just A Cake
            </h2>
            <p className="mt-6 leading-8 text-[#d3bcb6]">
              At Sera Cakes by Reeba, we believe that a cake is not just a cake, it's a part of the memory that is being created.
            </p>
            <p className="mt-4 leading-8 text-[#d3bcb6]">
              From simple classic flavours to elaborate celebration cakes we use our skills to make sure you receive a beautiful and delicious cake. Whether you need a birthday cake, anniversary cake, wedding cake or even just a simple treat we'll try to help you make your day a little bit more special.
            </p>
            
              <a href="#menu"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-[#f3e2de] transition-colors hover:border-red-300/60 hover:text-red-200"
            >
              Discover Our Cakes
            </a>
          </div>
        </div>
      </section>
      
      {/* Customer Favourites */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400/80">
            From our ovens
          </span>
          <h2 className="font-display mt-3 text-4xl font-semibold text-red-200 sm:text-[44px]">
            Customer Favourites
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* Filters */}
          <div className="flex shrink-0 flex-row flex-wrap gap-3 lg:w-52 lg:flex-col">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-2.5 text-left text-sm font-medium transition-colors lg:rounded-xl ${
                  activeFilter === filter
                    ? "border-red-400/40 bg-red-400/10 text-red-300"
                    : "border-white/10 text-[#c2aca6] hover:border-white/25 hover:text-[#ecdcd8]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#1e0910] transition-transform duration-300 hover:-translate-y-1.5 hover:border-red-400/20"
              >
                {product.badge && (
                  <span
                    className={`absolute left-3 top-3 z-10 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${BADGE_STYLES[product.badge]}`}
                  >
                    {product.badge}
                  </span>
                )}

                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {product.ingredients && hoveredId === product.id && (
                    <div className="absolute inset-x-3 bottom-3 rounded-lg border border-white/10 bg-[#170408]/90 p-2.5 text-[11px] leading-relaxed text-[#d9c3bd] backdrop-blur-sm">
                      {product.ingredients}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-3 p-4">
                  <div>
                    <h3 className="font-display text-base text-[#f8ece9]">
                      {product.name}
                    </h3>
                    {product.weight && (
                      <p className="mt-1 text-xs text-[#b39d97]">
                        {product.weight}
                      </p>
                    )}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-lg font-semibold text-red-300">
                      {product.price}
                    </span>
                    
 <a href={MENU_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-[#C41E3A] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#a8172f]"
>
  Add
</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <button
            type="button"
            className="rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-[#ecdcd8] transition-colors hover:border-red-400/40 hover:text-red-300"
          >
            View All
          </button>
        </div>
      </section>

      <FloatingVideo />
      <WhatsAppButton />
    </div>
  );
}
