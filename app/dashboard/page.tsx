"use client";

import { useSession } from "@/lib/auth-client";

export default function DashboardPage() {
    const { data: session } = useSession();

    if (!session) return null;

    const initials = session.user.name
        ? session.user.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)
        : session.user.email[0].toUpperCase();

    return (
        <div className="px-4 sm:px-8 py-8">
            {/* Welcome */}
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-semibold text-white">
                    Good to see you, {session.user.name?.split(" ")[0] ?? "there"} 👋
                </h1>
                <p className="text-slate-400 mt-1 text-sm">Here&apos;s what&apos;s going on with your account.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                    { label: "Account status", value: "Active", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "text-emerald-400", border: "border-emerald-500/20" },
                    { label: "Sessions", value: "1 active", icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18", color: "text-indigo-400", border: "border-indigo-500/20" },
                    { label: "Member since", value: new Date(session.user.createdAt).toLocaleDateString("en-US", { month: "short", year: "numeric" }), icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", color: "text-violet-400", border: "border-violet-500/20" },
                ].map((stat) => (
                    <div key={stat.label} className={`rounded-xl border ${stat.border} p-5 bg-white/5 backdrop-blur-sm`}>
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-white/5">
                                <svg className={`w-5 h-5 ${stat.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">{stat.label}</p>
                                <p className="text-white font-medium text-sm mt-0.5">{stat.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Profile card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-white font-medium mb-4">Profile</h2>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-indigo-500/30 border-2 border-indigo-500/40 flex items-center justify-center text-indigo-300 text-xl font-semibold shrink-0">
                        {initials}
                    </div>
                    <div>
                        <p className="text-white font-medium">{session.user.name}</p>
                        <p className="text-slate-400 text-sm">{session.user.email}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { label: "User ID", value: session.user.id },
                        { label: "Email verified", value: session.user.emailVerified ? "Yes" : "No" },
                    ].map((field) => (
                        <div key={field.label} className="bg-white/5 rounded-lg px-4 py-3">
                            <p className="text-xs text-slate-500 mb-0.5">{field.label}</p>
                            <p className="text-sm text-slate-300 font-mono truncate">{field.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
