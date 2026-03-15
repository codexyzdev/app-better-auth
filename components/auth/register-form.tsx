"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUp } from "@/lib/auth-client";
import { UserRound, AlertCircle, Loader2 } from "lucide-react";

export function RegisterForm() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        const { error } = await signUp.email({ name, email, password, callbackURL: "/" });

        if (error) {
            setError(error.message ?? "Something went wrong");
            setLoading(false);
        } else {
            router.push("/dashboard");
        }
    }

    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="mb-6 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 mb-3">
                    <UserRound className="w-5 h-5 text-indigo-400" strokeWidth={2} />
                </div>
                <h1 className="text-2xl font-semibold text-white">Create an account</h1>
                <p className="text-slate-400 text-sm mt-1">Get started for free</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">Full name</label>
                    <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
                    <input
                        id="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        minLength={8}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition"
                    />
                    <p className="mt-1.5 text-xs text-slate-500">Minimum 8 characters</p>
                </div>

                {error && (
                    <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                    {loading ? (
                        <span className="flex items-center justify-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Creating account...
                        </span>
                    ) : "Create account"}
                </button>

                <p className="text-xs text-slate-500 text-center">
                    By creating an account you agree to our{" "}
                    <Link href="/terms" className="text-slate-400 hover:text-white transition">Terms</Link>
                    {" "}and{" "}
                    <Link href="/privacy" className="text-slate-400 hover:text-white transition">Privacy Policy</Link>.
                </p>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
                Already have an account?{" "}
                <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition">
                    Sign in
                </Link>
            </p>
        </div>
    );
}
