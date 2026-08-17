import CinnamorollMascot from '../mascot/CinnamorollMascot'
import type { MascotVariant } from '../../types'
import './MascotSays.css'

interface Props {
  text: string
  variant?: MascotVariant
  size?: 'sm' | 'md' | 'lg'
  tone?: 'normal' | 'success' | 'oops'
}

export default function MascotSays({
  text,
  variant = 'welcome',
  size = 'sm',
  tone = 'normal',
}: Props) {
  return (
    <div className={`mascot-says mascot-says--${tone}`}>
      <CinnamorollMascot variant={variant} size={size} />
      <p className="mascot-says__bubble">{text}</p>
    </div>
  )
}
