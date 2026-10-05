"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { updatePassword } from "../actions";

export default function ResetPasswordPage() {
    const [error, setError] = useState("");
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
            <div className="w-full max-w-sm">
                <div className="flex items-center justify-center gap-2.5">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="shrink-0">
                        <path d="M3 12c3-5 8-7 13-5-1 2-1 3 0 5-1 2-1 3 0 5-5 2-10 0-13-5Z" stroke="#0B5FCE" strokeWidth="2.2" />
                        <circle cx="8.5" cy="11" r="1" fill="#0B5FCE" />
                    </svg>
                    <span className="text-xl font-bold tracking-tight text-white">THE RARE FIN</span>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue">
                        <span className="h-[2px] w-6 bg-blue" />
                        New Password
                    </div>

                    <h1 className="mt-4 text-2xl font-extrabold tracking-[-0.02em]">
                        Set a new<br />password.
                    </h1>

                    <form
                        action={(formData) => {
                            startTransition(async () => {
                                const result = await updatePassword(formData);
                                if (result?.error) {
                                    setError(result.error);
                                } else {
                                    router.push("/admin");
                                }
                            });
                        }}
                        className="mt-6 space-y-4"
                    >
                        {error && (
                            <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="text-xs font-bold uppercase tracking-wide text-white/50">New Password</label>
                            <input
                                type="password"
                                name="password"
                                required
                                minLength={6}
                                disabled={isPending}
                                className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm text-white outline-none transition focus:border-blue/60 disabled:opacity-50"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-blue py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-90 disabled:opacity-60"
                        >
                            {isPending ? (
                                <>
                                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                    Updating...
                                </>
                            ) : (
                                "Update Password"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}