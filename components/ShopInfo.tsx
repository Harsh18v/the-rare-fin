import Link from "next/link";

export default function ShopInfo() {
  return (
    <section id="shop" className="border-t border-white/10 bg-ink px-4 py-14 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue">
          <span className="h-[2px] w-8 bg-blue" />
          Visit The Shop
        </div>

        <h2 className="mt-5 max-w-md text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">
          Come see the
          <br />
          <span className="text-blue">tanks yourself.</span>
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
          {/* SHOP PHOTO */}
          <div className="h-full w-full overflow-hidden rounded-2xl border border-white/15">
            <img
              src="/Images/bg3.png"
              alt="Inside The Rare Fin aquarium shop"
              className="h-full w-full"
            />
          </div>

          <div>
            {/* OWNER */}
            <div className="flex items-center gap-3">
              <img src="/Images/logo2.jpeg" alt="Rohit Bhagvat" className="h-12 w-12 rounded-full" />
              <div>
                <div className="text-lg font-bold text-white">Rohit Bhagvat</div>
                <div className="text-[0.72rem] font-bold uppercase tracking-[0.05em] text-white/45">
                  Founder &amp; Aquarist
                </div>
              </div>
            </div>

            {/* INFO LIST */}
            <ul className="mt-7 divide-y divide-white/10 border-y border-white/15 text-[0.92rem] text-white/75">
              <li className="grid gap-2 py-4 sm:flex sm:gap-4">
                <span className="w-14 shrink-0 font-bold text-blue">Address</span>
                <span>G Block, Sector 18, Near Datta Mandir, Sambhajinagar, Chinchwad, Pune, Maharashtra 411019</span>
              </li>
              <li className="grid gap-2 py-4 sm:flex sm:gap-4">
                <span className="w-14 shrink-0 font-bold text-blue">Phone</span>
                <div className="flex flex-col gap-1">
                  <span>Rohit Bhagvat : +91 7083853151</span>
                <span>Yash Badhe : +91 9373208379</span>
                </div>
              </li>
              <li className="grid gap-2 py-4 sm:flex sm:gap-4">
                <span className="w-14 shrink-0 font-bold text-blue">Hours</span>
                <span>Mon–Sat 10:00–8:30</span>
              </li>
              <li className="grid gap-2 py-4 sm:flex sm:gap-4">
                <span className="w-14 shrink-0 font-bold text-blue">Note</span>
                <span>Rare specimens best viewed on a prior WhatsApp check</span>
              </li>
            </ul>

            <Link
              href="https://maps.app.goo.gl/m6BpxrqpqjaD1JLm7?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border-2 border-white/50 bg-transparent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white/75 transition hover:bg-white/80 hover:text-black sm:w-auto"
            >
              Get Directions →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}