"use client";

import { useSession } from "@/lib/auth-client";
import { getInitials } from "@/hooks/use-initials";
import { CheckCircle, MonitorCheck, CalendarDays } from "lucide-react";

const stats = [
    { label: "Account status", getValue: () => "Active",          icon: CheckCircle,   color: "text-emerald-400", border: "border-emerald-500/20" },
    { label: "Sessions",       getValue: () => "1 active",        icon: MonitorCheck,  color: "text-indigo-400",  border: "border-indigo-500/20"  },
    { label: "Member since",   getValue: (createdAt: Date) =>
        new Date(createdAt).toLocaleDateString("en-US", { month: "short", year: "numeric" }),
        icon: CalendarDays, color: "text-violet-400", border: "border-violet-500/20" },
];

export default function DashboardPage() {
    const { data: session } = useSession();

    if (!session) return null;

    const initials = getInitials(session.user.name, session.user.email);

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
                {stats.map(({ label, getValue, icon: Icon, color, border }) => (
                    <div key={label} className={`rounded-xl border ${border} p-5 bg-white/5 backdrop-blur-sm`}>
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-white/5">
                                <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">{label}</p>
                                <p className="text-white font-medium text-sm mt-0.5">{getValue(session.user.createdAt)}</p>
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
