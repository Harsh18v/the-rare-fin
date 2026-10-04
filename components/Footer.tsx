import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="border-t-[3px] border-blue bg-ink px-4 pb-28 pt-14 text-white sm:px-8 sm:pb-16 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-sm font-bold uppercase text-sky">Visit</div>
            <p className="mt-3 max-w-xs text-sm text-white/65">
              G Block, Sector 18, Near Datta Mandir, Chinchwad, Sambhajinagar, Pune, Maharashtra 411019
            </p>
            <Link
              href="https://maps.app.goo.gl/m6BpxrqpqjaD1JLm7?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-bold text-sky"
            >
              Get Directions →
            </Link>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-tight text-sky">Contact</div>
            <Link href="tel:+917083853151" className="mt-3 block text-sm text-white/65">
              +91 7083853151
            </Link>
            <Link href="tel:+919373208379" className="mt-2 block text-sm text-white/65">
              +91 9373208379
            </Link>
            <Link
              href="https://wa.me/917083853151"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-white/65"
            >
              WhatsApp
            </Link>
            <Link
              href="https://instagram.com/the_rare_fin"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-white/65"
            >
              Instagram
            </Link>
          </div>

          <div className="flex flex-col gap-1 sm:items-end">
            <span className="text-[0.7rem] font-semibold text-white/35">
              © 2026 The Rare Fin
            </span>
            <Link href="/admin/login" className="text-md text-white/80 transition hover:text-white">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}