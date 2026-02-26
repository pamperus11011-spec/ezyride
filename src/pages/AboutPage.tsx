import AppShell from '../components/AppShell'

function AboutPage() {
  return (
    <AppShell>
      <main className="flex-1 px-6 pb-8 space-y-4 text-xs text-neutral/60 pt-2">
        <header className="pb-2">
          <p className="text-xs text-neutral/70 uppercase tracking-[0.25em]">
            About
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">Ezyride</h1>
          <p className="mt-1 text-xs text-neutral/60">
            A campus‑first electric cycle rental PWA designed for SRM RMP.
          </p>
        </header>
        <section className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-neutral/70">
            Mission
          </p>
          <p className="mt-2">
            Make short‑distance travel inside campus simple, fast, and
            eco‑friendly using shared electric cycles and a seamless digital
            experience.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-neutral/70">
            Vision
          </p>
          <p className="mt-2">
            Become the default way students move between hostels, classrooms,
            labs, and clubs without relying on fuel‑based transport.
          </p>
        </section>
      </main>
    </AppShell>
  )
}

export default AboutPage

