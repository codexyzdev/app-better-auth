"use client";

import Link from "next/link";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { LayoutDashboard, User, Settings, LogOut, Zap } from "lucide-react";

const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Profile",   href: "/dashboard/profile",  icon: User },
    { label: "Settings",  href: "/dashboard/settings", icon: Settings },
];

interface SidebarNavProps {
    pathname: string;
}

function SidebarNav({ pathname }: SidebarNavProps) {
    return (
        <nav className="flex-1 space-y-1">
            {navItems.map(({ href, label, icon: Icon }) => {
                const active = pathname === href;
                return (
                    <Link
                        key={href}
                        href={href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                            active
                                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                        <Icon className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}

interface SidebarUserProps {
    name: string;
    email: string;
    initials: string;
}

function SidebarUser({ name, email, initials }: SidebarUserProps) {
    const router = useRouter();

    async function handleSignOut() {
        await signOut();
        router.push("/login");
    }

    return (
        <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3 px-1 mb-3">
                <div className="w-8 h-8 rounded-full bg-indigo-500/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 text-xs font-semibold shrink-0">
                    {initials}
                </div>
                <div className="min-w-0">
                    <p className="text-white text-sm font-medium truncate">{name}</p>
                    <p className="text-slate-500 text-xs truncate">{email}</p>
                </div>
            </div>
            <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
            >
                <LogOut className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                Sign out
            </button>
        </div>
    );
}

export interface SidebarProps {
    pathname: string;
    name: string;
    email: string;
    initials: string;
    mobile?: boolean;
}

export function Sidebar({ pathname, name, email, initials, mobile = false }: SidebarProps) {
    return (
        <div className={`flex flex-col h-full ${mobile ? "p-4" : "p-5"}`}>
            <div className="flex items-center gap-2.5 mb-8 px-1">
                <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-white" strokeWidth={2} />
                </div>
                <span className="text-white font-semibold">MyApp</span>
            </div>
            <SidebarNav pathname={pathname} />
            <SidebarUser name={name} email={email} initials={initials} />
        </div>
    );
}
