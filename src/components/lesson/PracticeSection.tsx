import { useEffect, useMemo, useState } from 'react'
import type { Dialogue, LessonContent } from '../../types'
import BigButton from '../ui/BigButton'
import MascotSays from '../ui/MascotSays'
import CinnamorollMascot from '../mascot/CinnamorollMascot'
import { playCorrect, playTap, playWrong, speakGerman, stopSpeaking } from '../../lib/audio'
import { praiseCorrect, praiseWrong } from '../../lib/praise'
import './PracticeSection.css'

interface Props {
  lesson: LessonContent
  onFinish: () => void
}

export default function PracticeSection({ lesson, onFinish }: Props) {
  const [openId, setOpenId] = useState<string | null>(null)
  const [done, setDone] = useState<string[]>([])

  const dialogue = lesson.practice.find((d) => d.id === openId) ?? null
  const allDone = done.length >= lesson.practice.length

  useEffect(() => () => stopSpeaking(), [])

  if (dialogue) {
    return (
      <DialoguePlayer
        dialogue={dialogue}
        onExit={() => {
          stopSpeaking()
          setOpenId(null)
        }}
        onComplete={() => {
          setDone((d) => (d.includes(dialogue.id) ? d : [...d, dialogue.id]))
        }}
      />
    )
  }

  return (
    <div className="practice">
      <MascotSays
        text="Mình cùng tập nói nhé! Bé chọn đúng câu trả lời cho Cinnamoroll nha 🎧"
        variant="sparkle"
      />

      <div className="practice__list">
        {lesson.practice.map((d, i) => (
          <button
            key={d.id}
            className={`practice__card ${done.includes(d.id) ? 'is-done' : ''}`}
            onClick={() => {
              playTap()
              setOpenId(d.id)
            }}
          >
            <span className="practice__emoji" aria-hidden="true">
              {d.emoji}
            </span>
            <span className="practice__text">
              <strong>
                Hội thoại {i + 1}: {d.title}
              </strong>
              <em>{d.scene}</em>
            </span>
            <span className="practice__state">{done.includes(d.id) ? '✅' : '▶️'}</span>
          </button>
        ))}
      </div>

      <BigButton variant={allDone ? 'success' : 'secondary'} onClick={onFinish} disabled={!allDone}>
        {allDone ? '✅ Luyện xong rồi!' : `Còn ${lesson.practice.length - done.length} hội thoại nữa`}
      </BigButton>
    </div>
  )
}

/* ---------- Chơi từng hội thoại ---------- */

function DialoguePlayer({
  dialogue,
  onExit,
  onComplete,
}: {
  dialogue: Dialogue
  onExit: () => void
  onComplete: () => void
}) {
  const [step, setStep] = useState(0)
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null)
  const [wrongPick, setWrongPick] = useState<string | null>(null)
  const [finished, setFinished] = useState(false)

  const lines = dialogue.lines
  const current = lines[step]

  // Câu của Cinnamoroll: đọc lên rồi tự chuyển sang câu của bé
  useEffect(() => {
    if (!current || current.speaker !== 'mascot') return
    speakGerman(current.de)
    const t = setTimeout(() => {
      setStep((s) => Math.min(s + 1, lines.length - 1))
    }, 2200)
    return () => clearTimeout(t)
  }, [step, current, lines.length])

  const shuffled = useMemo(() => {
    if (!current || current.speaker !== 'user' || !current.options) return []
    return [...current.options].sort(() => Math.random() - 0.5)
  }, [current])

  function choose(option: string) {
    if (!current) return
    if (option === current.de) {
      playCorrect()
      speakGerman(current.de)
      setFeedback({ ok: true, msg: praiseCorrect() })
      setWrongPick(null)
      setTimeout(() => {
        setFeedback(null)
        if (step >= lines.length - 1) {
          setFinished(true)
          onComplete()
        } else {
          setStep(step + 1)
        }
      }, 1400)
    } else {
      playWrong()
      setWrongPick(option)
      setFeedback({ ok: false, msg: praiseWrong() })
    }
  }

  return (
    <div className="dialog">
      <button className="dialog__back" onClick={onExit}>
        ← Chọn hội thoại khác
      </button>

      <div className="dialog__scene">
        <span aria-hidden="true">{dialogue.emoji}</span> {dialogue.scene}
      </div>

      <div className="dialog__lines">
        {lines.slice(0, step + 1).map((line, i) => {
          const answered = i < step || finished
          if (line.speaker === 'mascot') {
            return (
              <div key={i} className="bubble bubble--mascot">
                <CinnamorollMascot variant="welcome" size="sm" />
                <div className="bubble__body">
                  <p className="bubble__de">{line.de}</p>
                  <p className="bubble__vi">{line.vi}</p>
                  <button className="bubble__play" onClick={() => speakGerman(line.de)}>
                    🔊 Nghe lại
                  </button>
                </div>
              </div>
            )
          }
          if (!answered) return null
          return (
            <div key={i} className="bubble bubble--user">
              <div className="bubble__body">
                <p className="bubble__de">{line.de}</p>
                <p className="bubble__vi">{line.vi}</p>
                <button className="bubble__play" onClick={() => speakGerman(line.de)}>
                  🔊 Nghe lại
                </button>
              </div>
              <span className="bubble__avatar" aria-hidden="true">
                🧒
              </span>
            </div>
          )
        })}
      </div>

      {current?.speaker === 'user' && !finished && (
        <div className="dialog__choices">
          <p className="dialog__ask">Bé trả lời thế nào? 💬</p>
          {shuffled.map((opt) => (
            <button
              key={opt}
              className={`choice ${wrongPick === opt ? 'is-wrong animate-shake' : ''}`}
              onClick={() => choose(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {feedback && (
        <div className="dialog__feedback">
          <MascotSays
            text={feedback.msg}
            variant={feedback.ok ? 'hearts' : 'sad'}
            tone={feedback.ok ? 'success' : 'oops'}
          />
        </div>
      )}

      {finished && (
        <div className="dialog__done">
          <MascotSays text="Hội thoại xong rồi! Bé nói hay lắm! 🎉" variant="cheer" tone="success" />
          <BigButton variant="success" onClick={onExit}>
            Quay lại chọn hội thoại
          </BigButton>
        </div>
      )}
    </div>
  )
}
