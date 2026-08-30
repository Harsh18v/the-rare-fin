const services = [
  {
    id: "01",
    title: "Sourcing & Acquisition",
    body: "Looking for a specific species? We source rare and imported fish to order and notify you when they arrive.",
  },
  {
    id: "02",
    title: "Tank Build & Aquascape",
    body: "Full setup at your home or office — sizing, filtration, planting, and stocking suited to what you actually want to keep.",
  },
  {
    id: "03",
    title: "Quarantine & Health Check",
    body: "Every rare specimen clears a 14-day quarantine before sale. Ask us for the health record on any fish you buy.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-white/10 bg-ink px-5 py-16 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue">
          <span className="h-[2px] w-8 bg-blue" />
          Beyond the Counter
        </div>

        <h2 className="mt-5 max-w-md text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">
          What we do
          <br />
          <span className="text-blue">besides sell fish.</span>
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="text-sm font-bold text-blue">{s.id}</div>
              <h3 className="mt-3 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}