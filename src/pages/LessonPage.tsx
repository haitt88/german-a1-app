import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getLesson } from '../data/lessons'
import type { Section } from '../types'
import { useProgress } from '../state/ProgressContext'
import LearnSection from '../components/lesson/LearnSection'
import PracticeSection from '../components/lesson/PracticeSection'
import TestSection from '../components/lesson/TestSection'
import BadgeModal from '../components/ui/BadgeModal'
import MascotSays from '../components/ui/MascotSays'
import { playTap, stopSpeaking } from '../lib/audio'
import './LessonPage.css'

const TABS: { key: Section; label: string; icon: string }[] = [
  { key: 'learn', label: 'Học', icon: '📖' },
  { key: 'practice', label: 'Luyện', icon: '🎧' },
  { key: 'test', label: 'Kiểm tra', icon: '🏆' },
]

export default function LessonPage() {
  const { id, section } = useParams()
  const navigate = useNavigate()
  const { progress, complete } = useProgress()
  const [badgeOpen, setBadgeOpen] = useState(false)
  const [note, setNote] = useState<string | null>(null)

  const lessonId = Number(id)
  const lesson = getLesson(lessonId)
  const active = (section ?? 'learn') as Section

  useEffect(() => {
    stopSpeaking()
  }, [active])

  useEffect(() => {
    setNote(null)
  }, [lessonId])

  useEffect(() => {
    if (!lesson) navigate('/', { replace: true })
  }, [lesson, navigate])

  if (!lesson) return null

  const p = progress.lessons[lessonId]
  const doneMap: Record<Section, boolean> = {
    learn: !!p?.learn,
    practice: !!p?.practice,
    test: !!p?.test,
  }

  function goTab(next: Section) {
    playTap()
    stopSpeaking()
    setNote(null)
    navigate(`/lektion/${lessonId}/${next}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function finishSection(sec: Section, score = 0) {
    const earnedBadge = complete(lessonId, sec, score)
    if (earnedBadge) {
      setBadgeOpen(true)
      return
    }
    if (sec === 'learn') {
      goTab('practice')
      setNote('Giỏi lắm! Giờ mình luyện nói với Cinnamoroll nhé 🎧')
    } else if (sec === 'practice') {
      goTab('test')
      setNote('Bé luyện hay quá! Thử sức bài kiểm tra nào 🏆')
    } else {
      setNote('Bé đã làm xong bài kiểm tra! 🎉 Bé quay lại làm nốt phần còn thiếu nhé.')
    }
  }

  return (
    <div className="lesson">
      <header className="lesson__head" style={{ '--accent': lesson.meta.color } as React.CSSProperties}>
        <span className="lesson__num">Lektion {lesson.meta.id}</span>
        <h2 className="lesson__title">
          <span aria-hidden="true">{lesson.meta.icon}</span> {lesson.meta.titleDe}
        </h2>
        <p className="lesson__sub">{lesson.meta.titleVi}</p>
      </header>

      <nav className="lesson__tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`lesson__tab ${active === t.key ? 'is-active' : ''}`}
            onClick={() => goTab(t.key)}
          >
            <span aria-hidden="true">{t.icon}</span>
            {t.label}
            {doneMap[t.key] && <span className="lesson__tick">✓</span>}
          </button>
        ))}
      </nav>

      {note && <MascotSays text={note} variant="sparkle" tone="success" />}

      {active === 'learn' && (
        <LearnSection lesson={lesson} onFinish={() => finishSection('learn')} />
      )}
      {active === 'practice' && (
        <PracticeSection lesson={lesson} onFinish={() => finishSection('practice')} />
      )}
      {active === 'test' && (
        <TestSection lesson={lesson} onFinish={(score) => finishSection('test', score)} />
      )}

      {badgeOpen && (
        <BadgeModal
          badgeName={lesson.meta.badgeName}
          badgeIcon={lesson.meta.badgeIcon}
          lessonTitle={`Lektion ${lesson.meta.id}: ${lesson.meta.titleVi}`}
          onClose={() => {
            setBadgeOpen(false)
            navigate('/')
          }}
        />
      )}
    </div>
  )
}
