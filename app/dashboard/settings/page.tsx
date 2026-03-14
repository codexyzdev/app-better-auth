"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

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
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
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
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete account
                </button>
            </div>
        </div>
    );
}
