const entries = [
  {
    quote:
      "Got a pair of channoides bettas nobody else in the city had in stock. Healthy and exactly as described.",
    name: "Customer Name",
    loc: "Kothrud",
  },
  {
    quote:
      "They quarantine everything properly — first shop that showed me the health log without asking.",
    name: "Customer Name",
    loc: "Baner",
  },
  {
    quote:
      "Asked them to source a specific discus variant. Took three weeks, worth the wait.",
    name: "Customer Name",
    loc: "Aundh",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ink px-4 py-14 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-sky">
          <span className="h-[3px] w-6 bg-sky" />
          Logbook
        </div>
        <h2 className="mt-3 max-w-md text-3xl font-bold text-white sm:text-5xl">
          Notes from customers
        </h2>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {entries.map((e, i) => (
            <div key={i} className="border-2 border-white/25 p-5">
              <p className="text-sm leading-relaxed text-white/80">&ldquo;{e.quote}&rdquo;</p>
              <div className="mt-4 text-[0.72rem] font-bold uppercase tracking-[0.04em] text-sky">
                {e.name} · {e.loc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
