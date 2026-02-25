import type { FormEvent } from 'react'
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

function LoginPage() {
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setError(null)
    setLoading(true)

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (signInError) {
      if (
        signInError.message.toLowerCase().includes('email not confirmed') ||
        signInError.message.toLowerCase().includes('email not confirmed')
      ) {
        setError(
          'Please confirm your email first. Check your inbox for the verification link from Ezyride / Supabase.',
        )
      } else {
        setError(signInError.message)
      }
      return
    }

    // Success → go to home
    navigate('/home')
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <header className="px-6 pt-8 pb-4">
        <p className="text-xs text-neutral/70 uppercase tracking-[0.25em]">
          Welcome to
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">Ezyride</h1>
        <p className="mt-1 text-sm text-neutral/60">
          Sign in with your campus email to rent electric cycles.
        </p>
      </header>

      <main className="flex-1 px-6 pb-8">
        <form ref={formRef} className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-xs font-medium text-neutral/60">
              College email
            </label>
            <input
              type="email"
              placeholder="you@srmrmp.edu.in"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-neutral/60">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="mt-1 text-[11px] text-neutral/60 underline underline-offset-2"
            >
              Forgot password?
            </button>
          </div>

          {error && (
            <p className="text-xs text-red-400 bg-red-500/10 rounded-xl px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-slate-950 shadow-md active:scale-[0.98] disabled:opacity-60"
          >
            {loading ? 'Logging in…' : 'Log in'}
          </button>

          <button
            type="button"
            onClick={() => formRef.current?.requestSubmit()}
            disabled={loading}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 active:scale-[0.98] disabled:opacity-60"
          >
            Continue
          </button>
        </form>

        <div className="mt-4 space-y-3">
          <Link
            to="/register"
            className="block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white/90"
          >
            Create new account
          </Link>

          <p className="text-center text-xs text-neutral/60">
            New to Ezyride?{' '}
            <Link to="/register" className="text-accent font-medium">
              Register here
            </Link>
          </p>
        </div>

        <p className="mt-6 text-[11px] text-neutral/60">
          By continuing, you agree to our campus rental terms and privacy
          policy.
        </p>
      </main>
    </div>
  )
}

export default LoginPage