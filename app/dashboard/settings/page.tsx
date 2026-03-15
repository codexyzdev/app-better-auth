"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { LogOut, Trash2 } from "lucide-react";

export default function SettingsPage() {
    const { data: session } = useSession();
    const router = useRouter();

    if (!session) return null;

    async function handleSignOut() {
        await signOut();
        router.push("/login");
    }

    return (
        <div className="px-4 sm:px-8 py-8 max-w-2xl">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-white">Settings</h1>
                <p className="text-slate-400 text-sm mt-1">Manage your account preferences.</p>
            </div>

            {/* Account section */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-4">
                <h2 className="text-white font-medium mb-1">Account</h2>
                <p className="text-slate-400 text-sm mb-5">Signed in as <span className="text-slate-300">{session.user.email}</span></p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={handleSignOut}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 text-sm font-medium transition"
                    >
                        <LogOut className="w-4 h-4" strokeWidth={1.75} />
                        Sign out
                    </button>
                </div>
            </div>

            {/* Danger zone */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                <h2 className="text-red-400 font-medium mb-1">Danger zone</h2>
                <p className="text-slate-400 text-sm mb-5">Irreversible actions for your account.</p>
                <button
                    disabled
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium opacity-50 cursor-not-allowed"
                >
                    <Trash2 className="w-4 h-4" strokeWidth={1.75} />
                    Delete account
                </button>
            </div>
        </div>
    );
}
