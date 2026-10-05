import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage({ searchParams, }: { searchParams: Promise<{ error?: string }>; }) {

    const params = await searchParams;

    async function login(formData: FormData) {
        "use server";

        const supabase = await createClient();

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            redirect("/admin/login?error=1");
        }

        redirect("/admin");
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
            <div className="w-full max-w-sm">

                {/* Logo */}
                <div className="flex items-center justify-center gap-2.5">
                    <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="shrink-0"
                    >
                        <path
                            d="M3 12c3-5 8-7 13-5-1 2-1 3 0 5-1 2-1 3 0 5-5 2-10 0-13-5Z"
                            stroke="#0B5FCE"
                            strokeWidth="2.2"
                        />
                        <circle
                            cx="8.5"
                            cy="11"
                            r="1"
                            fill="#0B5FCE"
                        />
                    </svg>

                    <span className="text-xl font-bold tracking-tight text-white">
                        THE RARE FIN
                    </span>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-7">

                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue">
                        <span className="h-[2px] w-6 bg-blue" />
                        Admin Access
                    </div>

                    <h1 className="mt-4 text-2xl font-extrabold tracking-[-0.02em]">
                        Sign in to manage
                        <br />
                        the catalog.
                    </h1>

                    {params.error && (
                        <div className="mt-5 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                            Invalid email or password. Try again.
                        </div>
                    )}

                    <form action={login} className="mt-6 space-y-4">

                        <div>
                            <label className="text-xs font-bold uppercase tracking-wide text-white/50">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                required
                                autoComplete="email"
                                className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm text-white outline-none transition focus:border-blue/60 focus:bg-white/[0.06]"
                                placeholder="owner@therarefin.com"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase tracking-wide text-white/50">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                required
                                autoComplete="current-password"
                                className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm text-white outline-none transition focus:border-blue/60 focus:bg-white/[0.06]"
                                placeholder="••••••••"
                            />
                        </div>
                        <Link
                            href="/admin/forgot-password"
                            className="block text-right text-xs text-white/40 transition hover:text-white"
                        >
                            Forgot password?
                        </Link>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-blue py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-90 active:scale-[0.98]"
                        >
                            Sign In
                        </button>

                    </form>
                </div>

                <p className="mt-6 text-center text-xs text-white/30">
                    Only authorized shop admins can access this area.
                </p>

            </div>
        </div>
    );
}