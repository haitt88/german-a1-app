import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CinnamorollMascot from '../components/mascot/CinnamorollMascot'
import BigButton from '../components/ui/BigButton'
import ProgressBar from '../components/ui/ProgressBar'
import { LESSONS } from '../data/lessons'
import { useProgress } from '../state/ProgressContext'
import { playTap, playWrong, speakGerman } from '../lib/audio'
import './HomePage.css'

const TOTAL_SECTIONS = LESSONS.length * 3

export default function HomePage() {
  const navigate = useNavigate()
  const { progress, childName, setChildName, unlocked, reset, unlockAll, setUnlockAll } =
    useProgress()
  const [nameDraft, setNameDraft] = useState('')
  const [lockedHint, setLockedHint] = useState<number | null>(null)
  const [showParent, setShowParent] = useState(false)

  const badges = LESSONS.filter((l) => progress.lessons[l.meta.id]?.badgeEarned)

  function openLesson(id: number) {
    if (!unlocked(id)) {
      playWrong()
      setLockedHint(id)
      return
    }
    playTap()
    navigate(`/lektion/${id}`)
  }

  return (
    <div className="home">
      {/* Lời chào */}
      <section className="home__hero">
        <CinnamorollMascot variant="welcome" size="lg" />
        <div className="home__hero-text">
          <h2 className="home__hello">
            {childName ? `Hallo, ${childName}!` : 'Hallo! Xin chào bé!'}
          </h2>
          <p className="home__hello-sub">
            Mình là Cinnamoroll ☁️ Hôm nay mình cùng học tiếng Đức nhé!
          </p>
          <button
            className="home__speak"
            onClick={() => speakGerman(childName ? `Hallo ${childName}!` : 'Hallo! Guten Tag!')}
          >
            🔊 Nghe Cinnamoroll chào
          </button>
        </div>
      </section>

      {!childName && (
        <section className="card home__name">
          <p className="home__name-q">Bé tên là gì nè? 💙</p>
          <div className="home__name-row">
            <input
              className="home__input"
              value={nameDraft}
              maxLength={16}
              placeholder="Tên của bé..."
              onChange={(e) => setNameDraft(e.target.value)}
            />
            <BigButton
              className="home__name-btn"
              onClick={() => {
                const n = nameDraft.trim()
                if (!n) return
                playTap()
                setChildName(n)
              }}
            >
              Lưu
            </BigButton>
          </div>
        </section>
      )}

      {/* Tiến độ chung */}
      <section className="card home__progress">
        <div className="home__progress-head">
          <h3>Tiến độ của bé</h3>
          <span className="home__progress-count">
            {progress.stars}/{TOTAL_SECTIONS} phần
          </span>
        </div>
        <ProgressBar
          current={progress.stars}
          total={TOTAL_SECTIONS}
          label={`${Math.round((progress.stars / TOTAL_SECTIONS) * 100)}%`}
        />
        <div className="home__badges">
          {LESSONS.map((l) => {
            const earned = progress.lessons[l.meta.id]?.badgeEarned
            return (
              <span
                key={l.meta.id}
                className={`home__badge ${earned ? 'is-earned' : ''}`}
                title={earned ? l.meta.badgeName : 'Chưa nhận được huy hiệu này'}
              >
                {earned ? l.meta.badgeIcon : '🔒'}
              </span>
            )
          })}
        </div>
        {badges.length > 0 && (
          <p className="home__badge-note">
            Huy hiệu mới nhất: <strong>{badges[badges.length - 1].meta.badgeName}</strong> 🎉
          </p>
        )}
      </section>

      {/* Danh sách bài học */}
      <h3 className="home__section-title">📚 7 bài học của bé</h3>
      <div className="home__lessons">
        {LESSONS.map((lesson) => {
          const { meta } = lesson
          const p = progress.lessons[meta.id]
          const open = unlocked(meta.id)
          const done = [p?.learn, p?.practice, p?.test]
          return (
            <button
              key={meta.id}
              className={`lesson-card ${open ? '' : 'is-locked'}`}
              style={{ '--accent': meta.color } as React.CSSProperties}
              onClick={() => openLesson(meta.id)}
            >
              <span className="lesson-card__num">{meta.id}</span>
              <span className="lesson-card__icon" aria-hidden="true">
                {open ? meta.icon : '🔒'}
              </span>
              <span className="lesson-card__text">
                <span className="lesson-card__de">{meta.titleDe}</span>
                <span className="lesson-card__vi">{meta.titleVi}</span>
                <span className="lesson-card__dots">
                  {['Học', 'Luyện', 'Kiểm tra'].map((label, i) => (
                    <span key={label} className={`dot ${done[i] ? 'is-done' : ''}`}>
                      {done[i] ? '✓' : '•'} {label}
                    </span>
                  ))}
                </span>
              </span>
              {p?.badgeEarned && (
                <span className="lesson-card__badge" aria-hidden="true">
                  {meta.badgeIcon}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {lockedHint !== null && (
        <div className="home__locked-msg card">
          <CinnamorollMascot variant="think" size="sm" />
          <p>
            Bài {lockedHint} còn khoá nè! Bé hoàn thành <strong>Bài {lockedHint - 1}</strong> để nhận
            huy hiệu rồi mình mở tiếp nha 🐾
          </p>
          <button className="home__locked-close" onClick={() => setLockedHint(null)}>
            OK
          </button>
        </div>
      )}

      {/* Góc bố mẹ */}
      <button className="home__parent-toggle" onClick={() => setShowParent((v) => !v)}>
        ⚙️ Góc bố mẹ
      </button>
      {showParent && (
        <section className="card home__parent">
          <label className="home__parent-row">
            <input
              type="checkbox"
              checked={unlockAll}
              onChange={(e) => setUnlockAll(e.target.checked)}
            />
            <span>Mở khoá tất cả 7 bài (không cần học lần lượt)</span>
          </label>
          <button
            className="home__reset"
            onClick={() => {
              if (confirm('Xoá toàn bộ tiến độ và bắt đầu lại từ đầu?')) reset()
            }}
          >
            🗑️ Xoá tiến độ, học lại từ đầu
          </button>
          <p className="home__parent-note">
            Tiến độ được lưu ngay trên máy của bé (localStorage), không gửi đi đâu cả.
          </p>
        </section>
      )}
    </div>
  )
}
