import type { FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function OtpVerifyPage() {
  const [searchParams] = useSearchParams()
  const email = searchParams.get('email')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    // Later this will verify the OTP via backend and activate the account.
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <header className="px-6 pt-8 pb-4">
        <p className="text-xs text-neutral/70 uppercase tracking-[0.25em]">
          Verify email
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">Enter OTP</h1>
        <p className="mt-1 text-sm text-neutral/60">
          We&apos;ll send a 6-digit code to your campus email once email
          delivery is connected.
        </p>
        {email && (
          <p className="mt-2 text-xs text-white/80">
            Email: <span className="font-medium">{email}</span>
          </p>
        )}
      </header>

      <main className="flex-1 px-6 pb-8">
        <form className="mt-4 space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-xs font-medium text-neutral/60">
              6-digit OTP
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              placeholder="••••••"
              className="tracking-[0.6em] text-center w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-lg font-semibold outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
              required
            />
            <p className="mt-1 text-[11px] text-neutral/60">
              Enter the 6 digits from the email. This is UI-only for now; real
              verification comes after we connect Supabase and Twilio.
            </p>
          </div>

          <div className="flex items-center justify-between text-[11px] text-neutral/60">
            <span>Didn&apos;t get a code?</span>
            <button
              type="button"
              className="text-accent font-medium disabled:opacity-40"
              disabled
            >
              Resend OTP (coming soon)
            </button>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-slate-950 shadow-md active:scale-[0.98]"
          >
            Verify &amp; activate
          </button>
        </form>

        <p className="mt-4 text-xs text-neutral/60">
          Wrong email?{' '}
          <Link to="/register" className="text-accent font-medium">
            Go back to registration
          </Link>
        </p>

        <Link
          to="/login"
          className="mt-3 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white/90"
        >
          Back to login
        </Link>
      </main>
    </div>
  )
}

export default OtpVerifyPage

