import Link from "next/link";

export default function NotFound() {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
            <div className="text-center">
                <p className="text-indigo-400 font-mono text-sm font-medium mb-3">404</p>
                <h1 className="text-2xl font-semibold text-white mb-2">Page not found</h1>
                <p className="text-slate-400 text-sm mb-6">The page you&apos;re looking for doesn&apos;t exist.</p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back home
                </Link>
            </div>
        </div>
    );
}
