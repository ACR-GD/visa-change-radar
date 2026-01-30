import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 py-10 lg:py-14 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-[11px] font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            VisaChangeRadar • Early alpha
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
              Stay ahead of visa rule changes.
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-xl leading-relaxed">
              VisaChangeRadar watches official immigration sites for subtle changes and surfaces them as a simple,
              human-readable feed. Start with Malaysia, Thailand, and Portugal — expand as needed.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-1 text-sm">
            <Link
              href="/feed"
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold py-2.5 px-6 rounded-full text-sm shadow-lg shadow-sky-500/30 transition-all transform hover:-translate-y-0.5"
            >
              View recent changes
            </Link>
            <span className="inline-flex items-center gap-2 text-[11px] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Scraping snapshots locally every time you run the cron.
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10 space-y-6">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-medium">How it works</p>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
            When your cron or scheduler runs, VisaChangeRadar downloads official pages, compares them with previous
            snapshots, and records any meaningful differences as change events. The API and feed page let you inspect
            what changed.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 text-xs md:text-sm text-slate-200">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
            <p className="font-semibold">1. Define sources</p>
            <p className="text-slate-300">
              Configure official URLs per country in <code className="font-mono text-[11px]">data/sources/sources.json</code>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
            <p className="font-semibold">2. Run scrapers via cron</p>
            <p className="text-slate-300">
              Your scheduler runs <code className="font-mono text-[11px]">npm run scrape:sources</code> then
              <code className="font-mono text-[11px]"> npm run monitor:changes</code>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
            <p className="font-semibold">3. Consume the feed</p>
            <p className="text-slate-300">
              The <code className="font-mono text-[11px]">/api/changes</code> endpoint and feed UI expose recent
              change events, ready to plug into alerts or summaries.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
