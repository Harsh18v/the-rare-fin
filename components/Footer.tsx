export default function Footer() {
  return (
    <footer id="contact" className="border-t-[3px] border-blue bg-ink px-4 pb-28 pt-14 text-white sm:px-8 sm:pb-16 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <span className="text-2xl font-bold text-white">THE RARE FIN</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
              Rare and exotic aquarium fish, live plants, tanks, and custom
              aquascaping in Pune. Walk in, call, or message us before you visit.
            </p>
          </div>
          <div>
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-sky">Visit</div>
            <p className="mt-3 text-sm text-white/65">
              G Block, Sector 18, Near Datta Mandir, Chinchwad, Sambhajinagar, Pune, Maharashtra 411019
            </p>
            <a href="https://maps.app.goo.gl/m6BpxrqpqjaD1JLm7?g_st=ac" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-bold text-sky">Get Directions →</a>
          </div>
          <div>
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-sky">Contact</div>
            <a href="tel:+9198XXXXXXXX" className="mt-3 block text-sm text-white/65">+91 8803668855</a>
            <a href="tel:+9198XXXXXXXX" className="mt-3 block text-sm text-white/65">+91 9373208379</a>
            <a href="https://wa.me/919373208379" target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-white/65">WhatsApp</a>
            <a href="https://instagram.com/the_rare_fin" target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-white/65">Instagram</a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-6 text-[0.7rem] font-semibold text-white/35 sm:flex-row sm:justify-between">
          <span>© 2026 The Rare Fin. All rights reserved.</span>
          <span>Every fish, catalogued.</span>
        </div>
      </div>
    </footer>
  );
}
