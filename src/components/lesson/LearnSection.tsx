import { useState } from 'react'
import type { LearnBlock, LessonContent } from '../../types'
import BigButton from '../ui/BigButton'
import MascotSays from '../ui/MascotSays'
import { speakGerman, playTap } from '../../lib/audio'
import './LearnSection.css'

interface Props {
  lesson: LessonContent
  onFinish: () => void
}

export default function LearnSection({ lesson, onFinish }: Props) {
  const [step, setStep] = useState(0)
  const blocks = lesson.learn
  const block = blocks[step]
  const isLast = step === blocks.length - 1

  function go(next: number) {
    playTap()
    setStep(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="learn">
      <MascotSays text={lesson.intro} variant="welcome" />

      <div className="learn__nav">
        {blocks.map((b, i) => (
          <button
            key={b.title}
            className={`learn__chip ${i === step ? 'is-active' : ''}`}
            onClick={() => go(i)}
          >
            {i + 1}. {b.title}
          </button>
        ))}
      </div>

      <BlockView block={block} />

      <div className="learn__actions">
        {step > 0 && (
          <BigButton variant="secondary" onClick={() => go(step - 1)}>
            ← Quay lại
          </BigButton>
        )}
        {!isLast ? (
          <BigButton onClick={() => go(step + 1)}>Tiếp theo →</BigButton>
        ) : (
          <BigButton variant="success" onClick={onFinish}>
            ✅ Bé học xong rồi!
          </BigButton>
        )}
      </div>
    </div>
  )
}

function BlockView({ block }: { block: LearnBlock }) {
  if (block.kind === 'vocab') {
    return (
      <section className="learn__block">
        <h3 className="learn__title">{block.title}</h3>
        {block.hint && <p className="learn__hint">{block.hint}</p>}
        <div className="vocab-grid">
          {block.items.map((item) => (
            <button key={item.de} className="vocab-card" onClick={() => speakGerman(item.de)}>
              <span className="vocab-card__emoji" aria-hidden="true">
                {item.emoji ?? '💬'}
              </span>
              <span className="vocab-card__de">{item.de}</span>
              <span className="vocab-card__vi">{item.vi}</span>
              {item.example && (
                <span className="vocab-card__ex">
                  💡 {item.example}
                  <em>{item.exampleVi}</em>
                </span>
              )}
              <span className="vocab-card__speaker" aria-hidden="true">
                🔊
              </span>
            </button>
          ))}
        </div>
      </section>
    )
  }

  if (block.kind === 'alphabet') {
    return (
      <section className="learn__block">
        <h3 className="learn__title">{block.title}</h3>
        {block.hint && <p className="learn__hint">{block.hint}</p>}
        <div className="abc-grid">
          {block.letters.map((l) => (
            <button
              key={l.letter}
              className="abc-tile"
              onClick={() => speakGerman(`${l.letter}. ${l.letter} wie ${l.word}.`, 0.75)}
            >
              <span className="abc-tile__letter">{l.letter}</span>
              <span className="abc-tile__say">đọc: {l.say}</span>
              <span className="abc-tile__emoji" aria-hidden="true">
                {l.emoji}
              </span>
              <span className="abc-tile__word">{l.word}</span>
              <span className="abc-tile__vi">{l.vi}</span>
            </button>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="learn__block">
      <h3 className="learn__title">{block.title}</h3>
      <p className="learn__note">📌 {block.note}</p>
      <div className="grammar-list">
        {block.rows.map((r) => (
          <button key={r.de} className="grammar-row" onClick={() => speakGerman(r.de)}>
            <span className="grammar-row__de">{r.de}</span>
            <span className="grammar-row__vi">{r.vi}</span>
            <span className="grammar-row__speaker" aria-hidden="true">
              🔊
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
