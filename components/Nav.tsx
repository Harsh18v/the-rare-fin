import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-blue">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <span className="flex items-center justify-center gap-2 text-sm font-bold tracking-tight text-white sm:text-xl lg:text-3xl">
            <img src="/Images/logo2.jpeg" alt="The Rare Fin Logo" className="h-9 w-9 rounded-full sm:h-12 sm:w-12" />
            <span>THE RARE FIN</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 font-semibold text-white md:flex lg:gap-8">
          <a href="#catalog" className="tracking-tight">Catalog</a>
          <a href="#shop" className="tracking-tight">Visit</a>
          <a href="#services" className="tracking-tight">Services</a>
          <a href="#contact" className="tracking-tight">Contact</a>
        </nav>

        <Link
          href="#shop"
          className="inline-block rounded-md border-2 border-ink bg-ink px-3 py-2 text-md font-bold uppercase tracking-[0.03em] text-white transition hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-[0.8rem]"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
