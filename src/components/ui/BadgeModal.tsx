import { useEffect } from 'react'
import CinnamorollMascot from '../mascot/CinnamorollMascot'
import Confetti from './Confetti'
import BigButton from './BigButton'
import { playFanfare } from '../../lib/audio'
import './BadgeModal.css'

interface Props {
  badgeName: string
  badgeIcon: string
  lessonTitle: string
  onClose: () => void
}

export default function BadgeModal({ badgeName, badgeIcon, lessonTitle, onClose }: Props) {
  useEffect(() => {
    playFanfare()
  }, [])

  return (
    <div className="badge-modal" role="dialog" aria-modal="true">
      <Confetti />
      <div className="badge-modal__card">
        <CinnamorollMascot variant="cheer" size="lg" />
        <h2 className="badge-modal__title">Chúc mừng bé! 🎉</h2>
        <p className="badge-modal__sub">Bé đã hoàn thành {lessonTitle}</p>

        <div className="badge-modal__badge">
          <span className="badge-modal__icon" aria-hidden="true">
            {badgeIcon}
          </span>
          <span className="badge-modal__name">{badgeName}</span>
        </div>

        <p className="badge-modal__cheer">Cinnamoroll tự hào về bé lắm luôn! 💙</p>
        <BigButton variant="success" onClick={onClose}>
          Tuyệt vời! 🐾
        </BigButton>
      </div>
    </div>
  )
}
