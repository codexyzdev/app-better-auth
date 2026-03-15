"use client";

import { useEffect } from "react";
import { TriangleAlert } from "lucide-react";

export default function DashboardError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center h-full min-h-[400px] px-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                <TriangleAlert className="w-6 h-6 text-red-400" strokeWidth={1.75} />
            </div>
            <h2 className="text-white font-semibold mb-1">Something went wrong</h2>
            <p className="text-slate-400 text-sm mb-6 max-w-sm">
                {error.message ?? "An unexpected error occurred. Please try again."}
            </p>
            <button
                onClick={reset}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition"
            >
                Try again
            </button>
        </div>
    );
}
