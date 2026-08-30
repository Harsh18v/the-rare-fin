import Link from "next/link";

type Fish = {
  id: string;
  name: string;
  price: string;
  image?: string;
};

const specimens: Fish[] = [
  {
    id: "RF-001",
    name: "Angel Fish",
    price: "₹25+",
    image: "https://tse2.mm.bing.net/th/id/OIP.3HXLeE0nkPb0HMXEK9PofAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "RF-002",
    name: "Oranda Gold",
    price: "₹50+",
    image: "https://tailsandscales.ca/cdn/shop/files/image00003_573ae259-8685-46b7-a2dc-81f2751e24a6.jpg?v=1701374308&width=2400",
  },
  {
    id: "RF-003",
    name: "Mosaic Guppy",
    price: "₹45+",
    image: "https://tse3.mm.bing.net/th/id/OIP.k61Kztwig9njBr0ptShljgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "RF-004",
    name: "Molly",
    price: "₹20+",
    image: "https://a-z-animals.com/media/2023/04/shutterstock-1149361250-huge-licensed-scaled-1024x729.jpg",
  },
  {
    id: "RF-005",
    name: "Balloon Molly",
    price: "₹25+",
    image: "https://aquadiction.world/img/profile/molly-fish-9.webp",
  },
  {
    id: "RF-006",
    name: "Black Moor",
    price: "₹40+",
    image: "https://tse3.mm.bing.net/th/id/OIP.EEadjuiX0qVFg75eyc6XKQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "RF-007",
    name: "Oscar",
    price: "₹150+",
    image: "https://tse3.mm.bing.net/th/id/OIP.GOOuLPNvasz9ViQbfKUCYwHaFK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "RF-008",
    name: "Flowerhorn",
    price: "₹90+",
    image: "https://static.wixstatic.com/media/3fae33_e8050ba745994feca97ce1475eb3e0ed~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/3fae33_e8050ba745994feca97ce1475eb3e0ed~mv2.png",
  },
  {
    id: "RF-009",
    name: "Discus",
    price: "₹600+",
    image: "https://cdn.britannica.com/80/131080-050-211752B5/discus-fish-Amazon-River-South-American-tributaries.jpg",
  },
  {
    id: "RF-010",
    name: "Silver Arowana",
    price: "₹1,500+",
    image: "https://tse4.mm.bing.net/th/id/OIP.8RpxMth8t7DArYixiRMCTAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "RF-011",
    name: "Koi",
    price: "₹50–60",
    image: "https://img.freepik.com/premium-photo/koi-fish-pond-wallpaper_575980-868.jpg",
  },
  {
    id: "RF-012",
    name: "Pearl Gourami",
    price: "₹80+",
    image: "https://tse4.mm.bing.net/th/id/OIP.VRB8ZVdKtQoTvYixbg_FVwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "RF-013",
    name: "Dwarf Gourami",
    price: "₹50+",
    image: "https://media-be.chewy.com/wp-content/uploads/Dwarf-Gourami-1.jpg",
  },
  {
    id: "RF-014",
    name: "Tiger Barb",
    price: "₹20+",
    image: "https://tse2.mm.bing.net/th/id/OIP.6JXGNzJ9OCMnBMgpuwCmDQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "RF-015",
    name: "Rosy Barb",
    price: "₹25+",
    image: "https://tse2.mm.bing.net/th/id/OIP.m39AhhawulDeLldkru2hNwHaFq?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "RF-016",
    name: "Rainbow Shark",
    price: "₹50+",
    image: "https://tse4.mm.bing.net/th/id/OIP.wtxoxod5mDUEsdKZ6v36rAHaEn?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "RF-017",
    name: "Neon Acara",
    price: "₹60+",
    image: "https://static.wixstatic.com/media/3fae33_f1be3d02427544c5a9086a0e0d1899b6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  },
  {
    id: "RF-018",
    name: "Polar Parrot",
    price: "₹60+",
    image: "https://static.wixstatic.com/media/579275_2de9724696e44adea95b8cd5947b85a2~mv2.jpg/v1/fill/w_940,h_788,al_c,q_85,enc_avif,quality_auto/579275_2de9724696e44adea95b8cd5947b85a2~mv2.jpg",
  },
  {
    id: "RF-019",
    name: "Electric Blue Ram",
    price: "₹130+",
    image: "https://tse4.mm.bing.net/th/id/OIP.S7kbs_QEcPA3mgnqgqDDUQHaD7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "RF-020",
    name: "Red Parrot",
    price: "₹300+",
    image: "https://tse4.mm.bing.net/th/id/OIP.IfNqwwV4Z_b2pBvkpyVn1gHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

function FishPlaceholder() {
  return <div className="h-full w-full bg-gradient-to-br from-blue/30 via-ink to-ink" />;
}

export default function SpecimenGrid() {
  return (
    <section id="catalog" className="bg-ink px-5 py-20 text-white sm:px-8 sm:py-24">
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

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {specimens.map((fish) => (
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

                <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">

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
        <div className="mt-10 max-w-xl text-md leading-6 text-white sm:text-base">
          And more! We have a constantly changing collection of rare and exotic fish, so be sure to check back often or contact us for the latest availability.
        </div>
      </div>
    </section>
  );
}