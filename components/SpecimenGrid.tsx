"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Fish = {
  id: string;
  name: string;
  image?: string;
};

const specimens: Fish[] = [
  { id: "RF-001", name: "Angel Fish", image: "https://tse2.mm.bing.net/th/id/OIP.3HXLeE0nkPb0HMXEK9PofAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: "RF-002", name: "Oranda Gold", image: "https://tailsandscales.ca/cdn/shop/files/image00003_573ae259-8685-46b7-a2dc-81f2751e24a6.jpg?v=1701374308&width=2400" },
  { id: "RF-003", name: "Mosaic Guppy", image: "https://tse3.mm.bing.net/th/id/OIP.k61Kztwig9njBr0ptShljgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: "RF-004", name: "Molly", image: "https://a-z-animals.com/media/2023/04/shutterstock-1149361250-huge-licensed-scaled-1024x729.jpg" },
  { id: "RF-005", name: "Balloon Molly", image: "https://aquadiction.world/img/profile/molly-fish-9.webp" },
  { id: "RF-006", name: "Black Moor", image: "https://tse3.mm.bing.net/th/id/OIP.EEadjuiX0qVFg75eyc6XKQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: "RF-007", name: "Oscar", image: "https://tse3.mm.bing.net/th/id/OIP.GOOuLPNvasz9ViQbfKUCYwHaFK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: "RF-008", name: "Flowerhorn", image: "https://static.wixstatic.com/media/3fae33_e8050ba745994feca97ce1475eb3e0ed~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/3fae33_e8050ba745994feca97ce1475eb3e0ed~mv2.png" },
  { id: "RF-009", name: "Discus", image: "https://cdn.britannica.com/80/131080-050-211752B5/discus-fish-Amazon-River-South-American-tributaries.jpg" },
  { id: "RF-010", name: "Silver Arowana", image: "https://tse4.mm.bing.net/th/id/OIP.8RpxMth8t7DArYixiRMCTAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: "RF-011", name: "Koi", image: "https://img.freepik.com/premium-photo/koi-fish-pond-wallpaper_575980-868.jpg" },
  { id: "RF-012", name: "Pearl Gourami", image: "https://tse4.mm.bing.net/th/id/OIP.VRB8ZVdKtQoTvYixbg_FVwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: "RF-013", name: "Dwarf Gourami", image: "https://media-be.chewy.com/wp-content/uploads/Dwarf-Gourami-1.jpg" },
  { id: "RF-014", name: "Tiger Barb", image: "https://tse2.mm.bing.net/th/id/OIP.6JXGNzJ9OCMnBMgpuwCmDQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: "RF-015", name: "Rosy Barb", image: "https://tse2.mm.bing.net/th/id/OIP.m39AhhawulDeLldkru2hNwHaFq?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: "RF-016", name: "Rainbow Shark", image: "https://tse4.mm.bing.net/th/id/OIP.wtxoxod5mDUEsdKZ6v36rAHaEn?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: "RF-017", name: "Neon Acara", image: "https://static.wixstatic.com/media/3fae33_f1be3d02427544c5a9086a0e0d1899b6~mv2.jpg/v1/fit/w_500,h_50０,q_9０/file.jpg" },
  { id: "RF-018", name: "Polar Parrot", image: "https://static.wixstatic.com/media/579275_2de9724696e44adea95b8cd5947b85a2~mv2.jpg/v1/fill/w_940,h_788,al_c,q_85,enc_avif,quality_auto/579275_2de9724696e44adea95b8cd5947b85a2~mv2.jpg" },
  { id: "RF-019", name: "Electric Blue Ram", image: "https://tse4.mm.bing.net/th/id/OIP.S7kbs_QEcPA3mgnqgqDDUQHaD7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: "RF-020", name: "Red Parrot", image: "https://tse4.mm.bing.net/th/id/OIP.IfNqwwV4Z_b2pBvkpyVn1gHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
];

const PAGE_SIZE = 8;

function FishPlaceholder() {
  return <div className="h-full w-full bg-gradient-to-br from-blue/30 via-ink to-ink" />;
}

export default function SpecimenGrid() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return specimens;
    return specimens.filter((fish) => fish.name.toLowerCase().includes(query));
  }, [search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  function handleSearch(value: string) {
    setSearch(value);
    setPage(1); // reset to first page whenever the query changes
  }

  return (
    <section id="catalog" className=" bg-ink px-5 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-blue">
          <span className="h-[2px] w-8 bg-blue" />
          The Collection
        </div>

        <h2 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
          Find your
          <br />
          <span className="text-blue">perfect fish.</span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-6 text-white/45 sm:text-base">
          A glimpse of what's currently swimming in our tanks — freshwater,
          marine, and everything in between.
        </p>

        {/* SEARCH */}
        <div className="relative mt-8 max-w-sm">
          <svg viewBox="0 0 24 24" fill="none" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30">
            <path d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search fish..."
            className="h-12 w-full rounded-full border border-white/15 bg-white/[0.04] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-blue/60 focus:bg-white/[0.06]"
          />
        </div>

        <p className="mt-4 text-xs text-white/30">
          Showing <span className="text-white/60">{paged.length}</span> of{" "}
          <span className="text-white/60">{filtered.length}</span> fish
        </p>

        {/* GRID */}
        {paged.length > 0 ? (
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {paged.map((fish) => (
              <article
                key={fish.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {fish.image ? (
                    <img
                      src={fish.image}
                      alt={fish.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <FishPlaceholder />
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold tracking-tight text-white">{fish.name}</h3>

                  <div className="mt-4 flex items-end justify-between border-t border-white/10 pt-4">
                    <Link
                      href={`https://wa.me/919373208379?text=${encodeURIComponent(
                        `Hi! I'm interested in ${fish.name}. Is it available?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border-2 border-blue-deep bg-transparent px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-300 transition hover:bg-white hover:text-black"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/[0.02] px-6 py-16 text-center">
            <p className="text-sm text-white/40">No fish match "{search}" — try a different name.</p>
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/60 transition enabled:hover:border-white/50 enabled:hover:text-white disabled:opacity-30"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`h-9 w-9 rounded-full text-xs font-bold transition ${n === currentPage
                    ? "bg-blue text-white"
                    : "border border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                  }`}
              >
                {n}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/60 transition enabled:hover:border-white/50 enabled:hover:text-white disabled:opacity-30"
            >
              Next
            </button>
          </div>
        )}

        <div className="mt-10 max-w-xl text-md leading-6 text-white sm:text-base">
          And more! We have a constantly changing collection of rare and exotic fish, so be sure to check back often or contact us for the latest availability.
        </div>
      </div>
    </section>
  );
}