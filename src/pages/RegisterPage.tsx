import type { FormEvent } from 'react'
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

function RegisterPage() {
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  function isCampusEmail(value: string) {
    return value.toLowerCase().endsWith('.srmrmp.edu.in')
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setError(null)
    setMessage(null)

    if (!isCampusEmail(email)) {
      setError('Please use your .srmrmp.edu.in college email.')
      return
    }

    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    })

    setLoading(false)

    if (signUpError) {
      setError(signUpError.message)
      return
    }

    setMessage(
      'Account created. Please check your email for a verification link, then come back here and log in.',
    )
    // Optional: take them to login after a short delay
    setTimeout(() => {
      navigate('/login')
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <header className="px-6 pt-8 pb-4">
        <p className="text-xs text-neutral/70 uppercase tracking-[0.25em]">
          Create account
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">Ezyride</h1>
        <p className="mt-1 text-sm text-neutral/60">
          Use your <span className="font-medium">.srmrmp.edu.in</span> email to
          register.
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
              placeholder="you@xxx.srmrmp.edu.in"
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
              placeholder="Create a strong password"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-neutral/60">
              Confirm password
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>

          <label className="mt-2 flex items-start gap-2 text-xs text-neutral/60">
            <input
              type="checkbox"
              required
              className="mt-[2px] h-4 w-4 rounded border border-white/20 bg-white/5 accent-accent"
            />
            <span>
              I agree to the campus rental terms and understand that a valid
              SRM RMP email is required to use Ezyride.
            </span>
          </label>

          {error && (
            <p className="text-xs text-red-400 bg-red-500/10 rounded-xl px-3 py-2">
              {error}
            </p>
          )}

          {message && (
            <p className="text-xs text-emerald-300 bg-emerald-500/10 rounded-xl px-3 py-2">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-3 w-full rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-slate-950 shadow-md active:scale-[0.98] disabled:opacity-60"
          >
            {loading ? 'Registering…' : 'Register'}
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
            to="/login"
            className="block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white/90"
          >
            I already have an account (Log in)
          </Link>

          <p className="text-center text-xs text-neutral/60">
            Already have an account?{' '}
            <Link to="/login" className="text-accent font-medium">
              Log in
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default RegisterPage