import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 py-12 lg:py-18 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            VisaChangeRadar · tiny tool, big peace of mind
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            <div className="space-y-5">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                Keep an eye on visa rules,
                <br className="hidden md:block" /> even when you&apos;re not.
              </h1>
              <p className="text-sm md:text-base text-slate-200/90 leading-relaxed max-w-xl">
                VisaChangeRadar quietly watches key immigration pages for you. When something important changes — like
                Malaysia suddenly doubling the minimum salary for a work permit — you get a clear, human summary instead
                of a nasty surprise.
              </p>

              <div className="flex flex-wrap gap-3 pt-1 items-center">
                <Link
                  href="/feed"
                  className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold py-2.5 px-6 rounded-full text-sm shadow-md shadow-emerald-400/30 transition-all transform hover:-translate-y-0.5"
                >
                  See example changes
                </Link>
                <span className="inline-flex flex-col gap-1 text-[11px] text-slate-400">
                  <span>Currently tracking: Malaysia, Thailand, Portugal.</span>
                  <span className="text-slate-500">More destinations can be added as simply as editing a JSON file.</span>
                </span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.8)] space-y-3 text-xs text-slate-200 font-mono">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 mb-1">Sample alert</p>
                <div className="rounded-xl bg-slate-900/80 border border-slate-700 p-3 space-y-1">
                  <p className="text-[11px] text-emerald-300">Malaysia · Employment Pass Category I</p>
                  <p className="text-[11px] text-slate-100">
                    Minimum salary requirement updated from
                    <span className="font-semibold"> 10,000 MYR</span> to
                    <span className="font-semibold"> 20,000 MYR</span> per month.
                  </p>
                  <p className="text-[10px] text-slate-400">Detected on 1 June 2026 · Source: official immigration portal</p>
                </div>
                <p className="text-[10px] text-slate-500">
                  No scraping dashboards or diffs to read. Just small, focused updates you actually care about.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it does / Who it&apos;s for */}
      <section className="max-w-5xl mx-auto px-4 py-10 space-y-8">
        <div className="grid gap-6 md:grid-cols-2 text-xs md:text-sm">
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-medium">What it does</p>
            <ul className="space-y-2 text-slate-200">
              <li>
                • Checks a short list of official pages (MDEC, MOTAC, BOI, SEF…) on a schedule you control.
              </li>
              <li>
                • Spots when wording changes, requirements move, or new sections appear.
              </li>
              <li>
                • Stores each change with country, source, timestamp and a simple &quot;how big is this?&quot; score.
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-medium">Who it&apos;s for</p>
            <ul className="space-y-2 text-slate-200">
              <li>• Makers building visa / relocation products who don&apos;t want to maintain scrapers from scratch.</li>
              <li>• People like toi qui veulent dormir tranquilles en sachant que quelqu&apos;un surveille les règles.</li>
              <li>• Newsletter / content creators who want reliable “what changed this week?” sections.</li>
            </ul>
          </div>
        </div>

        {/* How it works */}
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-medium">How it works</p>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
            Under the hood it&apos;s simple on purpose. You add or edit sources, plug the scripts into your cron, and then
            just read the feed or wire it into your own alerts / AI.
          </p>
          <div className="grid gap-4 md:grid-cols-3 text-xs md:text-sm text-slate-200">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
              <p className="font-semibold">1. Pick your pages</p>
              <p className="text-slate-300">
                Drop the official URLs you care about into
                <code className="font-mono text-[11px]"> data/sources/sources.json</code>.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
              <p className="font-semibold">2. Let the cron do its job</p>
              <p className="text-slate-300">
                Your scheduler runs
                <code className="font-mono text-[11px]"> npm run scrape:sources</code>
                {" "}
                then
                <code className="font-mono text-[11px]"> npm run monitor:changes</code>.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
              <p className="font-semibold">3. Read the signal, ignore the noise</p>
              <p className="text-slate-300">
                Use the
                <code className="font-mono text-[11px]"> /feed</code>
                {" "}
                page or
                <code className="font-mono text-[11px]"> /api/changes</code>
                {" "}
                to drive alerts, dashboards or your own AI agent.
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
            Today, this is a small self‑hosted tool you can plug into your own stack. If it proves useful, a hosted
            version with email alerts and AI summaries could look like this:
          </p>
          <div className="grid gap-4 md:grid-cols-2 text-xs md:text-sm">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold text-slate-50">Builder (now)</p>
              <p className="text-slate-300">Self‑hosted • Free</p>
              <ul className="space-y-1 text-slate-300 mt-1">
                <li>• All code on GitHub.</li>
                <li>• Local scraping & diffing for your own sources.</li>
                <li>• JSON API + simple feed UI you can customise.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-700/60 bg-emerald-950/40 p-4 space-y-2">
              <p className="font-semibold text-emerald-100">Pro (idea)</p>
              <p className="text-emerald-200">Hosted • ~19$/mo</p>
              <ul className="space-y-1 text-emerald-100/90 mt-1">
                <li>• Managed scraping for multiple countries & sources.</li>
                <li>• Daily or weekly email & Telegram summaries.</li>
                <li>• Plain‑language explanations ready to paste into your product.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
