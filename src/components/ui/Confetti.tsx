import { useMemo } from 'react'
import './Confetti.css'

const PIECES = ['⭐', '💙', '🎉', '✨', '🎈', '🍬', '☁️', '💖']

export default function Confetti({ count = 26 }: { count?: number }) {
  const bits = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 1.2,
        duration: 2.4 + Math.random() * 1.8,
        size: 16 + Math.random() * 18,
        char: PIECES[Math.floor(Math.random() * PIECES.length)],
      })),
    [count],
  )

  return (
    <div className="confetti" aria-hidden="true">
      {bits.map((b) => (
        <span
          key={b.id}
          className="confetti__bit"
          style={{
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            fontSize: `${b.size}px`,
          }}
        >
          {b.char}
        </span>
      ))}
    </div>
  )
}
