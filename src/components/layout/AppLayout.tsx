import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import CloudBackground from '../ui/CloudBackground'
import { useProgress } from '../../state/ProgressContext'
import { isMuted, setMuted, playTap, stopSpeaking } from '../../lib/audio'
import './AppLayout.css'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { progress } = useProgress()
  const [muted, setMutedState] = useState(isMuted())

  const isHome = location.pathname === '/'

  function toggleSound() {
    const next = !muted
    setMuted(next)
    setMutedState(next)
    if (next) stopSpeaking()
    else playTap()
  }

  return (
    <div className="app-shell">
      <CloudBackground />

      <header className="app-header">
        {isHome ? (
          <div className="app-header__brand">
            <span className="app-header__logo" aria-hidden="true">
              🐶
            </span>
            <div>
              <h1 className="app-header__title">Tiếng Đức A1</h1>
              <p className="app-header__sub">cùng Cinnamoroll</p>
            </div>
          </div>
        ) : (
          <button
            className="app-header__back"
            onClick={() => {
              playTap()
              stopSpeaking()
              navigate('/')
            }}
          >
            <span aria-hidden="true">←</span> Trang chính
          </button>
        )}

        <div className="app-header__right">
          <div className="app-header__stars" title="Số ngôi sao bé đã kiếm được">
            <span aria-hidden="true">⭐</span> {progress.stars}
          </div>
          <button
            className="app-header__sound"
            onClick={toggleSound}
            aria-label={muted ? 'Bật âm thanh' : 'Tắt âm thanh'}
            title={muted ? 'Bật âm thanh' : 'Tắt âm thanh'}
          >
            {muted ? '🔇' : '🔊'}
          </button>
        </div>
      </header>

      <main className="app-main">{children}</main>

      <footer className="app-footer">
        Schritte plus Neu A1.1 · Học vui mỗi ngày cùng Cinnamoroll ☁️
      </footer>
    </div>
  )
}
