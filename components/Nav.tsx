import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-blue">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:px-8">
        <Link href="#top" className="flex min-w-0 items-center gap-2.5">
          <span className="flex items-center justify-center gap-2 font-bold tracking-tighter text-white sm:text-xl lg:text-2xl">
            <img src="/Images/logo2.jpeg" alt="The Rare Fin Logo" className="h-9 w-9 rounded-full sm:h-12 sm:w-12" />
            <span>THE RARE FIN</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 font-semibold text-white md:flex lg:gap-8">
          <Link href="#catalog" className="tracking-tight">Catalog</Link>
          <Link href="#shop" className="tracking-tight">Visit</Link>
          <Link href="#services" className="tracking-tight">Services</Link>
          <Link href="#contact" className="tracking-tight">Contact</Link>
          
        </nav>

        <Link
          href="#shop"
          className="inline-block rounded-3xl borde6 border-ink bg-ink px-3 py-2 text-sm md:text-md font-bold uppercase tracking-tight text-white transition sm:px-5 sm:py-2.5 sm:text-[0.8rem]"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
