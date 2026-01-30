import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 py-10 lg:py-16 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-[11px] font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            VisaChangeRadar • Track visa rule changes for key countries
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
              Never be surprised by a visa rule change again.
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-xl leading-relaxed">
              VisaChangeRadar monitors official immigration pages for subtle edits — like Malaysia doubling the
              minimum salary for Category I work permits from 10,000 MYR to 20,000 MYR on 1 June 2026 — and turns them
              into a simple, human-readable feed.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-1 text-sm items-center">
            <Link
              href="/feed"
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold py-2.5 px-6 rounded-full text-sm shadow-lg shadow-sky-500/30 transition-all transform hover:-translate-y-0.5"
            >
              View recent changes
            </Link>
            <span className="inline-flex items-center gap-2 text-[11px] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Currently tracking: Malaysia, Thailand, Portugal. More coming.
            </span>
          </div>
        </div>
      </section>

      {/* What it does / Who it's for */}
      <section className="max-w-5xl mx-auto px-4 py-10 space-y-8">
        <div className="grid gap-6 md:grid-cols-2 text-xs md:text-sm">
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-medium">What it does</p>
            <ul className="space-y-2 text-slate-200">
              <li>
                • Watches selected government and agency pages (MDEC, MOTAC, BOI, SEF…) for content changes.
              </li>
              <li>
                • Records each change as a structured event (country, source, timestamp, diff score).
              </li>
              <li>
                • Exposes a clean feed and JSON API you can plug into alerts, dashboards or AI summaries.
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-medium">Who it's for</p>
            <ul className="space-y-2 text-slate-200">
              <li>• Solo founders building immigration / relocation products.</li>
              <li>• Operators who need to know when rules move before clients do.</li>
              <li>• Nomad creators who want accurate visa info without reading entire portals daily.</li>
            </ul>
          </div>
        </div>

        {/* How it works */}
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-medium">How it works</p>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
            You control the schedule (cron / CI / server). VisaChangeRadar grabs the latest HTML, compares it to the
            previous snapshot, and stores any meaningful difference as a change event.
          </p>
          <div className="grid gap-4 md:grid-cols-3 text-xs md:text-sm text-slate-200">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
              <p className="font-semibold">1. Define sources</p>
              <p className="text-slate-300">
                Configure official URLs per country in
                <code className="font-mono text-[11px]"> data/sources/sources.json</code>.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
              <p className="font-semibold">2. Run scrapers via cron</p>
              <p className="text-slate-300">
                Your scheduler runs
                <code className="font-mono text-[11px]"> npm run scrape:sources</code>
                {" "}
                then
                <code className="font-mono text-[11px]"> npm run monitor:changes</code>.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
              <p className="font-semibold">3. Consume the feed</p>
              <p className="text-slate-300">
                Use the
                <code className="font-mono text-[11px]"> /feed</code>
                {" "}
                page or the
                <code className="font-mono text-[11px]"> /api/changes</code>
                {" "}
                endpoint to drive alerts, dashboards or AI agents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing draft */}
      <section className="max-w-5xl mx-auto px-4 pb-14">
        <div className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-medium">Pricing (draft)</p>
          <p className="text-xs md:text-sm text-slate-400 max-w-2xl">
            This is a developer‑first tool. The core is open for you to self‑host and customise. A hosted version with
            email alerts and AI summaries could follow this simple model:
          </p>
          <div className="grid gap-4 md:grid-cols-2 text-xs md:text-sm">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2">
              <p className="font-semibold text-slate-50">Builder</p>
              <p className="text-slate-300">Self‑hosted • Free</p>
              <ul className="space-y-1 text-slate-300 mt-1">
                <li>• All code on GitHub.</li>
                <li>• Local scraping & diffing.</li>
                <li>• JSON API + basic feed UI.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold text-slate-50">Pro (idea)</p>
              <p className="text-slate-300">Hosted • ~$19/mo</p>
              <ul className="space-y-1 text-slate-300 mt-1">
                <li>• Managed scraping for multiple countries.</li>
                <li>• Daily email summary of key changes.</li>
                <li>• AI‑generated plain‑language explanations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
