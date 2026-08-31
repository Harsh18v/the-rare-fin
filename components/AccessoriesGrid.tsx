"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { accessories } from "../data/accessoryData";


const PAGE_SIZE = 4;

function AccessoryPlaceholder() {
    return <div className="h-full w-full bg-gradient-to-br from-blue/30 via-ink to-ink" />;
}

export default function AccessoriesGrid() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const filtered = useMemo(() => {
        const query = search.trim().toLowerCase();
        if (!query) return accessories;
        return accessories.filter((item) => item.name.toLowerCase().includes(query));
    }, [search]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const currentPage = Math.min(page, totalPages);
    const paged = filtered.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    function handleSearch(value: string) {
        setSearch(value);
        setPage(1);
    }

    return (
        <section id="accessories" className="bg-ink px-5 py-20 text-white sm:px-8 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-blue">
                    <span className="h-[2px] w-8 bg-blue" />
                    Tanks & Equipment
                </div>

                <h2 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                    Everything for
                    <br />
                    <span className="text-blue">the tank itself.</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/45 sm:text-base">
                    Aquariums, filters, lighting, food, and everything else you need to
                    keep a healthy setup running.
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
                        placeholder="Search accessories..."
                        className="h-12 w-full rounded-full border border-white/15 bg-white/[0.04] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-blue/60 focus:bg-white/[0.06]"
                    />
                </div>

                <p className="mt-4 text-xs text-white/30">
                    Showing <span className="text-white/60">{paged.length}</span> of{" "}
                    <span className="text-white/60">{filtered.length}</span> items
                </p>

                {/* GRID */}
                {paged.length > 0 ? (
                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                        {paged.map((item) => (
                            <article
                                key={item.id}
                                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <AccessoryPlaceholder />
                                    )}
                                </div>

                                <div className="p-5">
                                    <h3 className="text-lg font-bold tracking-tight text-white">{item.name}</h3>

                                    <div className="mt-4 flex items-end justify-between border-t border-white/10 pt-4">
                                        <Link
                                            href={`https://wa.me/919373208379?text=${encodeURIComponent(
                                                `Hi! I'm interested in ${item.name}. Is it available?`
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
                        <p className="text-sm text-white/40">No items match "{search}" — try a different name.</p>
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

                        <div className="flex h-8 py-1 px-3 mx-2 text-xs items-center justify-center rounded-full bg-blue text-white">
                            {currentPage} of {totalPages}
                        </div>

                        <button
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/60 transition enabled:hover:border-white/50 enabled:hover:text-white disabled:opacity-30"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}