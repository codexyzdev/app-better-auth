"use client";

import { useSession } from "@/lib/auth-client";
import { getInitials } from "@/hooks/use-initials";

export default function ProfilePage() {
    const { data: session } = useSession();
    if (!session) return null;

    const initials = getInitials(session.user.name, session.user.email);

    const fields = [
        { label: "Full name", value: session.user.name },
        { label: "Email", value: session.user.email },
        { label: "User ID", value: session.user.id },
        { label: "Email verified", value: session.user.emailVerified ? "Yes" : "No" },
        { label: "Member since", value: new Date(session.user.createdAt).toLocaleDateString("en-US", { dateStyle: "long" }) },
    ];

    return (
        <div className="px-4 sm:px-8 py-8 max-w-2xl">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-white">Profile</h1>
                <p className="text-slate-400 text-sm mt-1">Your personal information.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                    <div className="w-16 h-16 rounded-full bg-indigo-500/30 border-2 border-indigo-500/40 flex items-center justify-center text-indigo-300 text-2xl font-semibold shrink-0">
                        {initials}
                    </div>
                    <div>
                        <p className="text-white font-semibold text-lg">{session.user.name}</p>
                        <p className="text-slate-400 text-sm">{session.user.email}</p>
                    </div>
                </div>

                {/* Fields */}
                <div className="space-y-4">
                    {fields.map((f) => (
                        <div key={f.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                            <span className="text-xs text-slate-500 sm:w-36 shrink-0">{f.label}</span>
                            <span className="text-sm text-slate-200 font-mono bg-white/5 rounded-lg px-3 py-2 flex-1 truncate">{f.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
