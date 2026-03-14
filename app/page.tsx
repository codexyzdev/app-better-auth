"use client";

import Link from "next/link";
import { useSession } from "@/lib/auth-client";

export default function HomePage() {
    const { data: session, isPending } = useSession();

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-y-auto">
            {/* Navbar */}
            <header className="border-b border-white/10 bg-white/5 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <span className="text-white font-semibold text-sm">MyApp</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {!isPending && (
                            session ? (
                                <Link
                                    href="/dashboard"
                                    className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href="/login" className="px-4 py-1.5 rounded-lg text-slate-300 hover:text-white text-sm transition">
                                        Sign in
                                    </Link>
                                    <Link href="/register" className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition">
                                        Get started
                                    </Link>
                                </>
                            )
                        )}
                    </div>
                </div>
            </header>

            <main>
                {/* Hero */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        Now in beta
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                        Build faster,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                            ship smarter
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        The all-in-one platform to manage your projects, team, and workflows — with auth built in from day one.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            href="/register"
                            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition text-sm"
                        >
                            Get started for free
                        </Link>
                        <Link
                            href="/login"
                            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-medium transition text-sm"
                        >
                            Sign in
                        </Link>
                    </div>
                </section>

                {/* Features */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            {
                                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                title: "Secure by default",
                                desc: "Auth powered by Better Auth with sessions, CSRF protection and rate limiting out of the box.",
                                color: "text-emerald-400",
                                border: "border-emerald-500/20",
                            },
                            {
                                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                                title: "Blazing fast",
                                desc: "Built on Next.js 15 with the App Router. Server components, streaming and edge-ready.",
                                color: "text-indigo-400",
                                border: "border-indigo-500/20",
                            },
                            {
                                icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
                                title: "Clean dashboard",
                                desc: "A responsive sidebar layout with profile, settings and everything you need to get going.",
                                color: "text-violet-400",
                                border: "border-violet-500/20",
                            },
                        ].map((f) => (
                            <div key={f.title} className={`bg-white/5 border ${f.border} rounded-2xl p-6 backdrop-blur-sm`}>
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                                    <svg className={`w-5 h-5 ${f.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={f.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-20 text-center">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to start?</h2>
                        <p className="text-slate-400 text-sm mb-6">Create your account in seconds. No credit card required.</p>
                        <Link
                            href="/register"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition text-sm"
                        >
                            Create free account
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} MyApp. All rights reserved.
            </footer>
        </div>
    );
}
