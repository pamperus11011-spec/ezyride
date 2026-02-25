function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <header className="px-6 pt-8 pb-4">
        <p className="text-xs text-neutral/70 uppercase tracking-[0.25em]">
          Support
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">
          Contact us
        </h1>
        <p className="mt-1 text-xs text-neutral/60">
          Reach out for issues, feedback, or partnership opportunities on your
          campus.
        </p>
      </header>

      <main className="flex-1 px-6 pb-8 space-y-4">
        <section className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-neutral/60 space-y-1.5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-neutral/70">
            Contact info
          </p>
          <p>Email: support@ezyride.example</p>
          <p>Campus: SRM RMP</p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-neutral/60 space-y-2">
          <p className="text-[11px] uppercase tracking-[0.18em] text-neutral/70">
            Contact form (UI only)
          </p>
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs outline-none focus:border-accent focus:ring-1 focus:ring-accent/60 resize-none"
          />
          <button className="mt-1 w-full rounded-2xl bg-white text-slate-950 border border-accent px-4 py-2 text-xs font-semibold shadow-md active:scale-[0.98]">
            Submit (coming soon)
          </button>
        </section>
      </main>
    </div>
  )
}

export default ContactPage

