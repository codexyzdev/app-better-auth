"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { getInitials } from "@/hooks/use-initials";
import { Menu, Zap } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { data: session, isPending } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        if (!isPending && !session) router.push("/login");
    }, [session, isPending, router]);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    if (isPending || !session) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <svg className="animate-spin w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
            </div>
        );
    }

    const initials = getInitials(session.user.name, session.user.email);

    const sidebarProps = {
        pathname,
        name: session.user.name ?? "",
        email: session.user.email,
        initials,
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">
            {/* Desktop sidebar */}
            <aside className="hidden lg:flex flex-col w-60 shrink-0 border-r border-white/10 bg-white/5 backdrop-blur-sm">
                <Sidebar {...sidebarProps} />
            </aside>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/60 backdrop-blur-sm lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Mobile drawer */}
            <aside
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 border-r border-white/10 transform transition-transform duration-200 lg:hidden ${
                    mobileOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <Sidebar {...sidebarProps} mobile />
            </aside>

            {/* Main */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Mobile topbar */}
                <header className="lg:hidden flex items-center justify-between px-4 h-14 border-b border-white/10 bg-white/5 backdrop-blur-sm shrink-0">
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
                        aria-label="Open menu"
                    >
                        <Menu className="w-5 h-5" strokeWidth={2} />
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center">
                            <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                        </div>
                        <span className="text-white font-semibold text-sm">MyApp</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-indigo-500/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 text-xs font-semibold">
                        {initials}
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
