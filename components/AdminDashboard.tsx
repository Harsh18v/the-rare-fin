"use client";

import { useState } from "react";
import {
    addFish,
    deleteFish,
    updateFish,
    addAccessory,
    deleteAccessory,
    updateAccessory,
    logout,
} from "@/app/admin/actions";

type Item = {
    id: string;
    name: string;
    price: string;
    image_url?: string;
};

export default function AdminDashboard({
    initialFish,
    initialAccessories,
}: {
    initialFish: Item[];
    initialAccessories: Item[];
}) {
    const [tab, setTab] = useState<"fish" | "accessories">("fish");
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingItem, setEditingItem] = useState<Item | null>(null);
    const [search, setSearch] = useState("");



    const items = tab === "fish" ? initialFish : initialAccessories;
    const addAction = tab === "fish" ? addFish : addAccessory;
    const deleteAction = tab === "fish" ? deleteFish : deleteAccessory;
    const updateAction = tab === "fish" ? updateFish : updateAccessory;

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex min-h-screen bg-[#0a0a0a] text-white">
            {/* ============================================ */}
            {/* SIDEBAR */}
            {/* ============================================ */}
            <aside className="h-screen hidden w-60 shrink-0 flex-col border-r border-white/10 bg-black sm:flex">
                <div className="flex items-center gap-2 border-b border-white/10 px-6 py-5">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
                        <path
                            d="M3 12c3-5 8-7 13-5-1 2-1 3 0 5-1 2-1 3 0 5-5 2-10 0-13-5Z"
                            stroke="#0B5FCE"
                            strokeWidth="2"
                        />
                        <circle cx="8.5" cy="11" r="0.9" fill="#0B5FCE" />
                    </svg>
                    <span className="text-sm font-bold tracking-tight">THE RARE FIN</span>
                </div>

                <nav className="flex-1 space-y-1 p-4">
                    <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-white/30">
                        Catalog
                    </p>
                    <button
                        onClick={() => setTab("fish")}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${tab === "fish"
                            ? "bg-blue/15 text-blue"
                            : "text-white/60 hover:bg-white/5 hover:text-white"
                            }`}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        Fish
                        <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px]">
                            {initialFish.length}
                        </span>
                    </button>
                    <button
                        onClick={() => setTab("accessories")}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${tab === "accessories"
                            ? "bg-blue/15 text-blue"
                            : "text-white/60 hover:bg-white/5 hover:text-white"
                            }`}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        Accessories
                        <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px]">
                            {initialAccessories.length}
                        </span>
                    </button>
                </nav>

                <div className="border-t border-white/10 p-4">
                    <form action={logout}>
                        <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-white/50 transition hover:bg-white/5 hover:text-white">
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Logout
                        </button>
                    </form>
                </div>
            </aside>

            {/* ============================================ */}
            {/* MAIN */}
            {/* ============================================ */}
            <main className="min-w-0 flex-1 overflow-x-hidden">
                <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-8">
                    <div className="min-w-0 flex-1">
                        <h1 className="text-lg font-bold sm:text-xl">
                            {tab === "fish" ? "Fish Inventory" : "Accessories Inventory"}
                        </h1>
                        <p className="text-xs text-white/40">Manage what's shown on the public catalog</p>
                    </div>



                </header>

                <div className="px-4 py-5 sm:px-8 sm:py-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="relative w-full max-w-sm">
                            <svg viewBox="0 0 24 24" fill="none" className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30">
                                <path d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                            </svg>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={`Search ${tab}...`}
                                className="h-10 w-full rounded-full border border-white/15 bg-white/[0.04] pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-blue/60"
                            />
                        </div>
                        <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
                            <button
                                onClick={() => setShowAddModal(true)}
                                className="flex shrink-0 items-center gap-2 rounded-full bg-blue px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition hover:opacity-90"
                            >
                                <span className="text-base leading-none">+</span>
                                Add {tab === "fish" ? "Fish" : "Accessory"}
                            </button>
                            <form action={logout} className="sm:hidden">
                                <button className="flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white/70 transition hover:bg-white/5 hover:text-white">
                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>


                    <div className="mt-6 flex gap-2 sm:hidden">
                        <button
                            onClick={() => setTab("fish")}
                            className={`flex-1 rounded-full border py-2 text-xs font-bold ${tab === "fish" ? "border-white bg-white text-black" : "border-white/20 text-white/60"
                                }`}
                        >
                            Fish
                        </button>
                        <button
                            onClick={() => setTab("accessories")}
                            className={`flex-1 rounded-full border py-2 text-xs font-bold ${tab === "accessories" ? "border-white bg-white text-black" : "border-white/20 text-white/60"
                                }`}
                        >
                            Accessories
                        </button>
                    </div>

                    <div className="mt-6 space-y-3 sm:hidden">
                        {filteredItems.length === 0 ? (
                            <div className="rounded-xl border border-white/10 px-4 py-10 text-center text-sm text-white/40">
                                Nothing here yet — add one using the button above.
                            </div>
                        ) : (
                            filteredItems.map((item) => (
                                <article
                                    key={item.id}
                                    className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3"
                                >
                                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white/5">
                                        {item.image_url && (
                                            <img src={item.image_url} alt={item.name} className="h-full w-full object-cover" />
                                        )}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="break-words text-sm font-semibold">{item.name}</p>
                                        <p className="mt-1 text-sm text-white/60">{item.price}</p>
                                    </div>
                                    <div className="flex shrink-0 flex-col gap-2">
                                        <button
                                            onClick={() => setEditingItem(item)}
                                            className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white/60 transition hover:border-blue/50 hover:text-blue"
                                        >
                                            Edit
                                        </button>
                                        <form
                                            action={async () => {
                                                await deleteAction(item.id);
                                            }}
                                        >
                                            <button
                                                type="submit"
                                                className="w-full rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white/50 transition hover:border-red-400/50 hover:text-red-400"
                                            >
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </article>
                            ))
                        )}
                    </div>

                    <div className="mt-6 hidden overflow-x-auto rounded-xl border border-white/10 sm:block">
                        <table className="w-full min-w-[560px] text-left text-sm">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.02] text-[10px] font-bold uppercase tracking-wider text-white/40">
                                    <th className="px-4 py-3">Image</th>
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Price</th>
                                    <th className="px-4 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-4 py-10 text-center text-white/40">
                                            Nothing here yet — add one using the button above.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredItems.map((item) => (
                                        <tr key={item.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                                            <td className="px-4 py-3">
                                                <div className="h-10 w-10 overflow-hidden rounded-lg bg-white/5">
                                                    {item.image_url && (
                                                        <img src={item.image_url} alt={item.name} className="h-full w-full object-cover" />
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 font-semibold">{item.name}</td>
                                            <td className="px-4 py-3 text-white/60">{item.price}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        onClick={() => setEditingItem(item)}
                                                        className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white/60 transition hover:border-blue/50 hover:text-blue"
                                                    >
                                                        Edit
                                                    </button>
                                                    <form
                                                        action={async () => {
                                                            await deleteAction(item.id);
                                                        }}
                                                        className="inline"
                                                    >
                                                        <button
                                                            type="submit"
                                                            className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white/50 transition hover:border-red-400/50 hover:text-red-400"
                                                        >
                                                            Delete
                                                        </button>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* ============================================ */}
            {/* ADD MODAL */}
            {/* ============================================ */}
            {showAddModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
                    <div className="max-h-[calc(100vh-2rem)] w-full max-w-sm overflow-y-auto rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 sm:p-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold">
                                Add {tab === "fish" ? "Fish" : "Accessory"}
                            </h2>
                            <button onClick={() => setShowAddModal(false)} className="text-white/40 hover:text-white">
                                ✕
                            </button>
                        </div>

                        <form
                            action={async (formData) => {
                                await addAction(formData);
                                setShowAddModal(false);
                            }}
                            className="mt-5 space-y-4"
                        >
                            <div>
                                <label className="text-xs font-bold uppercase tracking-wide text-white/50">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm outline-none focus:border-blue/60"
                                    placeholder={tab === "fish" ? "e.g. Angel Fish" : "e.g. Air Pump"}
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-wide text-white/50">Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    required
                                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm outline-none focus:border-blue/60"
                                    placeholder="₹250+"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-wide text-white/50">Image URL</label>
                                <input
                                    type="url"
                                    name="image_url"
                                    required
                                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm outline-none focus:border-blue/60"
                                    placeholder="https://..."
                                />
                            </div>

                            <div className="flex gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowAddModal(false)}
                                    className="flex-1 rounded-full border border-white/15 py-3 text-xs font-bold uppercase tracking-wide text-white/60"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="flex-1 rounded-full bg-blue py-3 text-xs font-bold uppercase tracking-wide">
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ============================================ */}
            {/* EDIT MODAL — same shape, pre-filled values */}
            {/* ============================================ */}
            {editingItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
                    <div className="max-h-[calc(100vh-2rem)] w-full max-w-sm overflow-y-auto rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 sm:p-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold">
                                Edit {tab === "fish" ? "Fish" : "Accessory"}
                            </h2>
                            <button onClick={() => setEditingItem(null)} className="text-white/40 hover:text-white">
                                ✕
                            </button>
                        </div>

                        <form
                            action={async (formData) => {
                                await updateAction(editingItem.id, formData);
                                setEditingItem(null);
                            }}
                            className="mt-5 space-y-4"
                        >
                            <div>
                                <label className="text-xs font-bold uppercase tracking-wide text-white/50">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    defaultValue={editingItem.name}
                                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm outline-none focus:border-blue/60"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-wide text-white/50">Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    required
                                    defaultValue={editingItem.price}
                                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm outline-none focus:border-blue/60"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-wide text-white/50">Image URL</label>
                                <input
                                    type="url"
                                    name="image_url"
                                    required
                                    defaultValue={editingItem.image_url}
                                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm outline-none focus:border-blue/60"
                                />
                            </div>

                            <div className="flex gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setEditingItem(null)}
                                    className="flex-1 rounded-full border border-white/15 py-3 text-xs font-bold uppercase tracking-wide text-white/60"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="flex-1 rounded-full bg-blue py-3 text-xs font-bold uppercase tracking-wide">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}