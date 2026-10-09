import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import '../../../css/Login.css';

export default function Login({ status, canResetPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('login'), {
      onFinish: () => reset('password'),
    });
  }

  return (
    <div className="auth-page-container">
      <Head title="Sign in - Dracoola Multimedia" />

      <div className="frame">
        <div className="brand">
          <div className="brand__glow"></div>

          <svg className="corner corner--tl" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 44C2 20 20 2 44 2" stroke="#c9a24a" strokeWidth="1.2" />
            <path d="M2 30C2 14 14 2 30 2" stroke="#c9a24a" strokeWidth="1" />
            <circle cx="2" cy="44" r="2.5" fill="#c9a24a" />
          </svg>
          <svg className="corner corner--br" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 44C2 20 20 2 44 2" stroke="#c9a24a" strokeWidth="1.2" />
            <path d="M2 30C2 14 14 2 30 2" stroke="#c9a24a" strokeWidth="1" />
            <circle cx="2" cy="44" r="2.5" fill="#c9a24a" />
          </svg>

          <div className="wordmark">
            <Link href="/">
              <img 
                src="/images/logo.png" 
                alt="Dracoola Logo"
              />
            </Link>
          </div>
          <p className="brand__tagline">Immortalize your site — domain &amp; hosting yang selalu hidup.</p>
        </div>

        <div className="form-side">
          <h1>Sign in</h1>
          <p className="lead">Masukkan email dan kata sandi Anda.</p>

          {status && <div className="status-message">{status}</div>}

          <form onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="email">Email</label>
              <div className="control">
                <input
                  id="email"
                  type="email"
                  placeholder="nama@contoh.com"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  required
                />
              </div>
              {errors.email && <div className="field-error">{errors.email}</div>}
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <div className="control">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-pass"
                  aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M3 3l18 18M10.6 10.6a3 3 0 0 0 4.2 4.2M6.5 6.7C4 8.3 1.5 12 1.5 12s3.5 7 10.5 7c2 0 3.7-.5 5.1-1.3M17.9 17.9C20.4 16.3 22.5 12 22.5 12S19.5 5.6 13 5.1" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <div className="field-error">{errors.password}</div>}
            </div>

            <div className="row-between">
              <label className="remember">
                <input
                  type="checkbox"
                  checked={data.remember}
                  onChange={(e) => setData('remember', e.target.checked)}
                />
                <span className="checkbox">
                  <svg viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5L4 7.5L8.5 2" stroke="#1a1408" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Ingat saya
              </label>
              {(canResetPassword ?? true) && (
                <Link href={route('password.request')} className="link">
                  Lupa kata sandi?
                </Link>
              )}
            </div>

            <button type="submit" className="submit" disabled={processing}>
              {processing ? 'Memproses…' : 'Log in'}
            </button>
          </form>

          <p className="footline">
            Belum punya akun? <Link href={route('register')} className="link">Daftar sekarang</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

