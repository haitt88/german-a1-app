import { useMemo, useState } from 'react'
import type {
  Exercise,
  QuizExercise,
  FillExercise,
  OrderExercise,
  SpellExercise,
  MatchExercise,
  PickExercise,
} from '../../types'
import { playCorrect, playWrong, speakGerman, spellGerman } from '../../lib/audio'
import './Exercises.css'

export interface ExProps<T extends Exercise> {
  ex: T
  onAttempt: (ok: boolean) => void
  onDone: (firstTry: boolean) => void
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function ExerciseView(props: ExProps<Exercise>) {
  const { ex } = props
  switch (ex.kind) {
    case 'quiz':
      return <QuizView {...(props as ExProps<QuizExercise>)} />
    case 'fill':
      return <FillView {...(props as ExProps<FillExercise>)} />
    case 'order':
      return <OrderView {...(props as ExProps<OrderExercise>)} />
    case 'spell':
      return <SpellView {...(props as ExProps<SpellExercise>)} />
    case 'match':
      return <MatchView {...(props as ExProps<MatchExercise>)} />
    case 'pick':
      return <PickView {...(props as ExProps<PickExercise>)} />
  }
}

/* ---------- Trắc nghiệm ---------- */

function QuizView({ ex, onAttempt, onDone }: ExProps<QuizExercise>) {
  const [wrong, setWrong] = useState<number[]>([])
  const [solved, setSolved] = useState(false)

  function pick(i: number) {
    if (solved) return
    if (i === ex.correct) {
      playCorrect()
      setSolved(true)
      onAttempt(true)
      onDone(wrong.length === 0)
    } else {
      playWrong()
      setWrong((w) => [...w, i])
      onAttempt(false)
    }
  }

  return (
    <div className="ex">
      <h3 className="ex__q">{ex.question}</h3>
      {ex.questionVi && <p className="ex__qvi">{ex.questionVi}</p>}
      <div className="ex__options">
        {ex.options.map((opt, i) => (
          <button
            key={opt}
            className={`opt ${wrong.includes(i) ? 'is-wrong animate-shake' : ''} ${
              solved && i === ex.correct ? 'is-right' : ''
            }`}
            onClick={() => pick(i)}
            disabled={solved && i !== ex.correct}
          >
            <span className="opt__letter">{['A', 'B', 'C', 'D'][i]}</span>
            {opt}
          </button>
        ))}
      </div>
      {solved && ex.explain && <p className="ex__explain">💡 {ex.explain}</p>}
    </div>
  )
}

/* ---------- Điền vào chỗ trống ---------- */

function FillView({ ex, onAttempt, onDone }: ExProps<FillExercise>) {
  const [wrong, setWrong] = useState<number[]>([])
  const [solved, setSolved] = useState(false)

  const filled = solved ? ex.sentence.replace('___', ex.options[ex.correct]) : ex.sentence

  function pick(i: number) {
    if (solved) return
    if (i === ex.correct) {
      playCorrect()
      setSolved(true)
      speakGerman(ex.sentence.replace('___', ex.options[ex.correct]))
      onAttempt(true)
      onDone(wrong.length === 0)
    } else {
      playWrong()
      setWrong((w) => [...w, i])
      onAttempt(false)
    }
  }

  return (
    <div className="ex">
      <h3 className="ex__q">{ex.question}</h3>
      <div className={`fill__sentence ${solved ? 'is-solved' : ''}`}>{filled}</div>
      <p className="fill__vi">{ex.vi}</p>
      <div className="ex__options ex__options--row">
        {ex.options.map((opt, i) => (
          <button
            key={opt}
            className={`opt opt--chip ${wrong.includes(i) ? 'is-wrong animate-shake' : ''} ${
              solved && i === ex.correct ? 'is-right' : ''
            }`}
            onClick={() => pick(i)}
            disabled={solved}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ---------- Sắp xếp ---------- */

function OrderView({ ex, onAttempt, onDone }: ExProps<OrderExercise>) {
  const pool = useMemo(() => shuffle(ex.answer.map((w, i) => ({ w, id: `${w}-${i}` }))), [ex])
  const [picked, setPicked] = useState<{ w: string; id: string }[]>([])
  const [solved, setSolved] = useState(false)
  const [mistakes, setMistakes] = useState(0)
  const [shakeIt, setShakeIt] = useState(false)

  const remaining = pool.filter((p) => !picked.some((x) => x.id === p.id))

  function check(next: { w: string; id: string }[]) {
    const ok = next.every((p, i) => p.w === ex.answer[i])
    if (ok) {
      playCorrect()
      setSolved(true)
      // bỏ emoji trước khi đọc để giọng đọc không bị lạ
      speakGerman(ex.answer.join(' ').replace(/[^\p{L}\p{M}\s.,!?-]/gu, ''))
      onAttempt(true)
      onDone(mistakes === 0)
    } else {
      playWrong()
      setMistakes((m) => m + 1)
      setShakeIt(true)
      setTimeout(() => setShakeIt(false), 450)
      onAttempt(false)
      setPicked([])
    }
  }

  return (
    <div className="ex">
      <h3 className="ex__q">{ex.question}</h3>
      <p className="ex__qvi">{ex.vi}</p>

      <div className={`order__slot ${shakeIt ? 'animate-shake' : ''} ${solved ? 'is-solved' : ''}`}>
        {picked.length === 0 && <span className="order__placeholder">Bấm các mảnh bên dưới…</span>}
        {picked.map((p) => (
          <button
            key={p.id}
            className="chip chip--picked"
            disabled={solved}
            onClick={() => setPicked((cur) => cur.filter((x) => x.id !== p.id))}
          >
            {p.w}
          </button>
        ))}
      </div>

      <div className="order__pool">
        {remaining.map((p) => (
          <button
            key={p.id}
            className="chip"
            onClick={() => {
              const next = [...picked, p]
              setPicked(next)
              if (next.length === ex.answer.length) check(next)
            }}
          >
            {p.w}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ---------- Đánh vần ---------- */

const EXTRA_LETTERS = ['B', 'K', 'R', 'S', 'T', 'L', 'E', 'O']

function SpellView({ ex, onAttempt, onDone }: ExProps<SpellExercise>) {
  const word = ex.word.toUpperCase()
  const [typed, setTyped] = useState('')
  const [mistakes, setMistakes] = useState(0)
  const [badKey, setBadKey] = useState<string | null>(null)
  const solved = typed === word

  const keys = useMemo(() => {
    const need = Array.from(new Set(word.split('')))
    const extra = EXTRA_LETTERS.filter((l) => !need.includes(l)).slice(0, 5)
    return shuffle([...need, ...extra])
  }, [word])

  function press(letter: string) {
    if (solved) return
    speakGerman(letter, 0.6)
    if (word[typed.length] === letter) {
      const next = typed + letter
      setTyped(next)
      if (next === word) {
        playCorrect()
        setTimeout(() => speakGerman(word), 400)
        onAttempt(true)
        onDone(mistakes === 0)
      }
    } else {
      playWrong()
      setMistakes((m) => m + 1)
      setBadKey(letter)
      setTimeout(() => setBadKey(null), 450)
      onAttempt(false)
    }
  }

  return (
    <div className="ex">
      <h3 className="ex__q">{ex.question}</h3>
      {ex.vi && <p className="ex__qvi">{ex.vi}</p>}

      <button className="spell__listen" onClick={() => spellGerman(word)}>
        🔊 Nghe đánh vần
      </button>

      <div className="spell__slots">
        {word.split('').map((ch, i) => (
          <span key={i} className={`spell__slot ${i < typed.length ? 'is-filled' : ''}`}>
            {i < typed.length ? ch : '_'}
          </span>
        ))}
      </div>

      <div className="spell__keys">
        {keys.map((k) => (
          <button
            key={k}
            className={`spell__key ${badKey === k ? 'is-wrong animate-shake' : ''}`}
            onClick={() => press(k)}
            disabled={solved}
          >
            {k}
          </button>
        ))}
      </div>

      {typed.length > 0 && !solved && (
        <button className="spell__undo" onClick={() => setTyped(typed.slice(0, -1))}>
          ⌫ Xoá một chữ
        </button>
      )}
    </div>
  )
}

/* ---------- Ghép hình ---------- */

function MatchView({ ex, onAttempt, onDone }: ExProps<MatchExercise>) {
  const emojis = useMemo(() => shuffle(ex.pairs), [ex])
  const words = useMemo(() => shuffle(ex.pairs), [ex])
  const [selected, setSelected] = useState<string | null>(null)
  const [matched, setMatched] = useState<string[]>([])
  const [mistakes, setMistakes] = useState(0)
  const [badWord, setBadWord] = useState<string | null>(null)

  function chooseWord(de: string) {
    if (!selected || matched.includes(de)) return
    if (selected === de) {
      playCorrect()
      speakGerman(de)
      const next = [...matched, de]
      setMatched(next)
      setSelected(null)
      onAttempt(true)
      if (next.length === ex.pairs.length) onDone(mistakes === 0)
    } else {
      playWrong()
      setMistakes((m) => m + 1)
      setBadWord(de)
      setTimeout(() => setBadWord(null), 450)
      onAttempt(false)
    }
  }

  return (
    <div className="ex">
      <h3 className="ex__q">{ex.question}</h3>
      <p className="ex__qvi">Bấm vào hình trước, rồi bấm vào từ tiếng Đức đúng nhé!</p>

      <div className="match">
        <div className="match__col">
          {emojis.map((p) => (
            <button
              key={p.de}
              className={`match__emoji ${selected === p.de ? 'is-selected' : ''} ${
                matched.includes(p.de) ? 'is-matched' : ''
              }`}
              disabled={matched.includes(p.de)}
              onClick={() => setSelected(p.de)}
            >
              {p.emoji}
            </button>
          ))}
        </div>
        <div className="match__col match__col--words">
          {words.map((p) => (
            <button
              key={p.de}
              className={`match__word ${matched.includes(p.de) ? 'is-matched' : ''} ${
                badWord === p.de ? 'is-wrong animate-shake' : ''
              }`}
              disabled={matched.includes(p.de)}
              onClick={() => chooseWord(p.de)}
            >
              {p.de}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Chọn nhiều đáp án ---------- */

function PickView({ ex, onAttempt, onDone }: ExProps<PickExercise>) {
  const options = useMemo(() => shuffle(ex.options), [ex])
  const [chosen, setChosen] = useState<string[]>([])
  const [solved, setSolved] = useState(false)
  const [mistakes, setMistakes] = useState(0)
  const [shakeIt, setShakeIt] = useState(false)

  function toggle(label: string) {
    if (solved) return
    setChosen((c) => (c.includes(label) ? c.filter((x) => x !== label) : [...c, label]))
  }

  function check() {
    const correctSet = ex.options.filter((o) => o.correct).map((o) => o.label)
    const ok =
      chosen.length === correctSet.length && correctSet.every((label) => chosen.includes(label))
    if (ok) {
      playCorrect()
      setSolved(true)
      onAttempt(true)
      onDone(mistakes === 0)
    } else {
      playWrong()
      setMistakes((m) => m + 1)
      setShakeIt(true)
      setTimeout(() => setShakeIt(false), 450)
      onAttempt(false)
    }
  }

  return (
    <div className="ex">
      <h3 className="ex__q">{ex.question}</h3>
      {ex.questionVi && <p className="ex__qvi">{ex.questionVi}</p>}

      <div className={`ex__options ${shakeIt ? 'animate-shake' : ''}`}>
        {options.map((o) => (
          <button
            key={o.label}
            className={`opt opt--check ${chosen.includes(o.label) ? 'is-chosen' : ''} ${
              solved && o.correct ? 'is-right' : ''
            }`}
            onClick={() => toggle(o.label)}
            disabled={solved}
          >
            <span className="opt__box">{chosen.includes(o.label) ? '✔' : ''}</span>
            {o.label}
          </button>
        ))}
      </div>

      {!solved && (
        <button className="ex__check" onClick={check} disabled={chosen.length === 0}>
          Kiểm tra đáp án
        </button>
      )}
    </div>
  )
}
