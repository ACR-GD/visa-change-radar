import Link from "next/link";

async function fetchChanges() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/changes`, {
    cache: "no-store",
  });
  if (!res.ok) return { sources: [], changeEvents: [] };
  return res.json();
}

export default async function FeedPage() {
  const { sources, changeEvents } = await fetchChanges();

  const sourcesById: Record<string, any> = {};
  for (const s of sources || []) {
    sourcesById[s.id] = s;
  }

  const sortedEvents = (changeEvents || []).slice().sort((a: any, b: any) => {
    return new Date(b.detected_at).getTime() - new Date(a.detected_at).getTime();
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between gap-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-medium">Feed</p>
            <h1 className="text-lg md:text-xl font-semibold text-slate-50 mt-1">Recent visa rule changes</h1>
          </div>
          <Link href="/" className="text-[11px] text-sky-400 hover:text-sky-300 font-mono">
            ← Back to overview
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        {sortedEvents.length === 0 && (
          <p className="text-xs text-slate-500">
            No change events recorded yet. Run <code className="font-mono text-[11px]">npm run scrape:sources</code>{" "}
            a few times, then <code className="font-mono text-[11px]">npm run monitor:changes</code>.
          </p>
        )}

        <ul className="space-y-3">
          {sortedEvents.map((ev: any, idx: number) => {
            const src = sourcesById[ev.source_id] || {};
            return (
              <li
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs md:text-sm space-y-1"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-2 py-0.5 text-[11px] text-slate-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      {ev.country || src.country || "Unknown country"}
                    </span>
                    <span className="text-[11px] text-slate-400">{src.name || ev.source_name}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {ev.detected_at ? new Date(ev.detected_at).toLocaleString() : ""}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Diff score: <span className="font-mono text-slate-200">{ev.diff_score.toFixed(3)}</span>
                </p>
                <p className="text-[11px] text-slate-400">
                  Snapshots: <span className="font-mono">{ev.previous_snapshot}</span> →{" "}
                  <span className="font-mono">{ev.latest_snapshot}</span>
                </p>
                {ev.url && (
                  <p className="text-[11px] text-slate-400">
                    Source: {" "}
                    <a
                      href={ev.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                      {ev.url}
                    </a>
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
