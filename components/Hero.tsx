import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="h-screen relative overflow-hidden px-6 pb-16 pt-10 sm:px-8 sm:pt-14">

      <div className="absolute inset-0 h-screen">
        <Image
          src="/images/bg.jpg"
          alt="Hero background"
          fill
          className="object-cover" />
      </div>
      <div className="relative max-w-6xl ">

        <h1 className="max-w-2xl text-[2.7rem] font-bold leading-[0.95] tracking-tighter text-white sm:text-[6rem]">
          THE
          <br />
          RARE
          <span className="text-blue"> FIN</span>
        </h1>
        <div className="z-10 rounded-2xl bg-black/45 p-5 backdrop-blur-md md:bg-transparent md:p-0 md:backdrop-blur-0 md:border-0">
          <h2 className="text-xl mb-4 mt-4 font-bold text-neutral-300 sm:text-3xl max-w-sm ">
            Aquarium & Pet Fish Shop in Sambhajinagar, Pune
          </h2>

          <p className="mt-7 max-w-sm text-md leading-relaxed font-semibold text-neutral-300">
            Discover vibrant freshwater fish, premium aquariums, aquatic plants and everything you need to create a beautiful underwater world.
          </p>
        </div>


        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#catalog"
            className="text-white border px-7 py-4 text-sm font-bold uppercase tracking-[0.03em] rounded-md"
          >
            View the Catalog
          </a>
          <a
            href="https://maps.app.goo.gl/m6BpxrqpqjaD1JLm7?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border px-7 py-4 text-sm font-bold uppercase tracking-[0.03em] rounded-md"
          >
            Visit the Shop
          </a>
        </div>
      </div>

    </section>
  );
}
