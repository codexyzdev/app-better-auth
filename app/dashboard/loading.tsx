export default function DashboardLoading() {
    return (
        <div className="px-4 sm:px-8 py-8 animate-pulse">
            {/* Header skeleton */}
            <div className="mb-8">
                <div className="h-8 w-64 bg-white/10 rounded-lg mb-2" />
                <div className="h-4 w-48 bg-white/5 rounded-lg" />
            </div>

            {/* Stats skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-xl border border-white/10 p-5 bg-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-white/10" />
                            <div className="space-y-2">
                                <div className="h-3 w-24 bg-white/10 rounded" />
                                <div className="h-4 w-16 bg-white/10 rounded" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Card skeleton */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="h-5 w-20 bg-white/10 rounded mb-6" />
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                    <div className="w-14 h-14 rounded-full bg-white/10 shrink-0" />
                    <div className="space-y-2">
                        <div className="h-4 w-32 bg-white/10 rounded" />
                        <div className="h-3 w-48 bg-white/10 rounded" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[1, 2].map((i) => (
                        <div key={i} className="bg-white/5 rounded-lg px-4 py-3">
                            <div className="h-3 w-16 bg-white/10 rounded mb-2" />
                            <div className="h-4 w-full bg-white/10 rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
