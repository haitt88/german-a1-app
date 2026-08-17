import { useState } from 'react'
import type { LessonContent } from '../../types'
import ExerciseView from './Exercises'
import ProgressBar from '../ui/ProgressBar'
import BigButton from '../ui/BigButton'
import MascotSays from '../ui/MascotSays'
import CinnamorollMascot from '../mascot/CinnamorollMascot'
import { playTap } from '../../lib/audio'
import { praiseCorrect, praiseWrong, scoreMessage } from '../../lib/praise'
import './TestSection.css'

interface Props {
  lesson: LessonContent
  onFinish: (score: number, total: number) => void
}

export default function TestSection({ lesson, onFinish }: Props) {
  const items = lesson.test
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [solved, setSolved] = useState(false)
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null)
  const [finished, setFinished] = useState(false)
  const [round, setRound] = useState(0) // đổi key để làm mới bài tập khi làm lại

  const ex = items[idx]
  const isLast = idx === items.length - 1

  function handleAttempt(ok: boolean) {
    setFeedback({ ok, msg: ok ? praiseCorrect() : praiseWrong() })
  }

  function handleDone(firstTry: boolean) {
    setSolved(true)
    if (firstTry) setScore((s) => s + 1)
  }

  function next() {
    playTap()
    setFeedback(null)
    setSolved(false)
    if (isLast) {
      setFinished(true)
    } else {
      setIdx(idx + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function retry() {
    playTap()
    setIdx(0)
    setScore(0)
    setSolved(false)
    setFeedback(null)
    setFinished(false)
    setRound((r) => r + 1)
  }

  if (finished) {
    const stars = Math.max(1, Math.round((score / items.length) * 3))
    return (
      <div className="test__result">
        <CinnamorollMascot variant="cheer" size="lg" />
        <h2 className="test__result-title">Xong bài kiểm tra rồi! 🎉</h2>
        <div className="test__stars" aria-hidden="true">
          {'⭐'.repeat(stars)}
          {'☆'.repeat(3 - stars)}
        </div>
        <p className="test__score">
          Đúng ngay lần đầu: <strong>{score}</strong>/{items.length}
        </p>
        <p className="test__msg">{scoreMessage(score, items.length)}</p>
        <div className="test__result-actions">
          <BigButton variant="success" onClick={() => onFinish(score, items.length)}>
            🏅 Nhận huy hiệu!
          </BigButton>
          <BigButton variant="secondary" onClick={retry}>
            🔁 Làm lại
          </BigButton>
        </div>
      </div>
    )
  }

  return (
    <div className="test">
      <div className="test__head">
        <ProgressBar
          current={idx + (solved ? 1 : 0)}
          total={items.length}
          label={`Câu ${idx + 1}/${items.length}`}
        />
      </div>

      <ExerciseView
        key={`${ex.id}-${round}`}
        ex={ex}
        onAttempt={handleAttempt}
        onDone={handleDone}
      />

      {feedback && (
        <MascotSays
          text={feedback.msg}
          variant={feedback.ok ? 'hearts' : 'sad'}
          tone={feedback.ok ? 'success' : 'oops'}
        />
      )}

      {solved && (
        <BigButton variant="success" onClick={next}>
          {isLast ? 'Xem kết quả 🎊' : 'Câu tiếp theo →'}
        </BigButton>
      )}
    </div>
  )
}
