import AppShell from '../components/AppShell'

function GalleryPage() {
  return (
    <AppShell>
      <main className="flex-1 px-6 pb-8 pt-2">
        <header className="pb-2">
          <p className="text-xs text-neutral/70 uppercase tracking-[0.25em]">
            Gallery
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">
            Ezyride cycles
          </h1>
          <p className="mt-1 text-xs text-neutral/60">
            This section will showcase real photos of your electric cycles and
            stands around campus.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="aspect-video rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-[11px] text-neutral/60"
            >
              Cycle photo placeholder
            </div>
          ))}
        </div>
      </main>
    </AppShell>
  )
}

export default GalleryPage

