import './ProgressBar.css'

interface Props {
  current: number
  total: number
  label?: string
}

export default function ProgressBar({ current, total, label }: Props) {
  const pct = total === 0 ? 0 : Math.min(100, Math.round((current / total) * 100))
  return (
    <div className="pbar">
      <div className="pbar__track">
        <div className="pbar__fill" style={{ width: `${pct}%` }}>
          <span className="pbar__dog" aria-hidden="true">
            🐶
          </span>
        </div>
      </div>
      <span className="pbar__label">{label ?? `${current}/${total}`}</span>
    </div>
  )
}
