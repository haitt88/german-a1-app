import type { MascotVariant } from '../../types'
import './CinnamorollMascot.css'

interface Props {
  variant?: MascotVariant
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = { sm: 84, md: 124, lg: 168 }

const LINE = '#9FC6E8'
const FUR = '#FFFFFF'
const EAR_IN = '#FFEFF5'
const PINK = '#FFB6C1'
const EYE = '#3F7FBF'

type Face = 'happy' | 'smile' | 'sad' | 'think'

/** Chú cún mây trắng: đầu tròn, tai dài mềm, má hồng */
function Puppy({ face, children }: { face: Face; children?: React.ReactNode }) {
  return (
    <g>
      {/* Tai trái */}
      <g transform="rotate(34 28 64)">
        <ellipse cx="28" cy="64" rx="10.5" ry="25" fill={FUR} stroke={LINE} strokeWidth="2.4" />
        <ellipse cx="28" cy="70" rx="5" ry="14" fill={EAR_IN} />
      </g>
      {/* Tai phải */}
      <g transform="rotate(-34 92 64)">
        <ellipse cx="92" cy="64" rx="10.5" ry="25" fill={FUR} stroke={LINE} strokeWidth="2.4" />
        <ellipse cx="92" cy="70" rx="5" ry="14" fill={EAR_IN} />
      </g>

      {/* Thân */}
      <ellipse cx="60" cy="92" rx="23" ry="19" fill={FUR} stroke={LINE} strokeWidth="2.4" />
      <ellipse cx="47" cy="107" rx="8.5" ry="5.5" fill={FUR} stroke={LINE} strokeWidth="2.2" />
      <ellipse cx="73" cy="107" rx="8.5" ry="5.5" fill={FUR} stroke={LINE} strokeWidth="2.2" />

      {/* Đuôi xoắn */}
      <path
        d="M82 88 Q95 86 94 76 Q93 69 86 72"
        fill="none"
        stroke={LINE}
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Đầu */}
      <circle cx="60" cy="54" r="28" fill={FUR} stroke={LINE} strokeWidth="2.4" />

      {/* Má hồng */}
      <ellipse cx="41" cy="62" rx="6" ry="4.5" fill={PINK} opacity="0.6" />
      <ellipse cx="79" cy="62" rx="6" ry="4.5" fill={PINK} opacity="0.6" />

      {/* Mắt */}
      {face === 'happy' ? (
        <>
          <path d="M44 53 Q50 46 56 53" fill="none" stroke={EYE} strokeWidth="3" strokeLinecap="round" />
          <path d="M64 53 Q70 46 76 53" fill="none" stroke={EYE} strokeWidth="3" strokeLinecap="round" />
        </>
      ) : face === 'sad' ? (
        <>
          <path d="M44 50 Q50 56 56 50" fill="none" stroke={EYE} strokeWidth="3" strokeLinecap="round" />
          <path d="M64 50 Q70 56 76 50" fill="none" stroke={EYE} strokeWidth="3" strokeLinecap="round" />
        </>
      ) : (
        <>
          <ellipse cx="50" cy="52" rx="4.6" ry="6" fill={EYE} />
          <ellipse cx="70" cy="52" rx="4.6" ry="6" fill={EYE} />
          <circle cx="51.6" cy="50" r="1.7" fill="#fff" />
          <circle cx="71.6" cy="50" r="1.7" fill="#fff" />
        </>
      )}

      {/* Mũi & miệng */}
      <ellipse cx="60" cy="62.5" rx="3.2" ry="2.4" fill="#F79FB8" />
      {face === 'sad' ? (
        <path d="M55 71 Q60 67 65 71" fill="none" stroke={LINE} strokeWidth="2.2" strokeLinecap="round" />
      ) : face === 'think' ? (
        <path d="M56 69 Q60 71 64 69" fill="none" stroke={LINE} strokeWidth="2.2" strokeLinecap="round" />
      ) : (
        <path d="M53 67 Q60 74 67 67" fill="none" stroke={LINE} strokeWidth="2.2" strokeLinecap="round" />
      )}

      {children}
    </g>
  )
}

/* ---------- Phụ kiện quanh nhân vật (không che mặt) ---------- */

function Balloons() {
  return (
    <>
      <path d="M18 24 Q14 40 22 52" fill="none" stroke="#C9D8E6" strokeWidth="1.4" />
      <ellipse cx="17" cy="18" rx="8" ry="9.5" fill="#4DA6FF" opacity="0.85" />
      <path d="M104 20 Q108 36 100 48" fill="none" stroke="#C9D8E6" strokeWidth="1.4" />
      <ellipse cx="105" cy="14" rx="7" ry="8.5" fill="#FFD93D" opacity="0.9" />
      {/* Chân vẫy tay */}
      <ellipse cx="88" cy="80" rx="8" ry="6.5" fill={FUR} stroke={LINE} strokeWidth="2.2" transform="rotate(-28 88 80)" />
    </>
  )
}

function Hearts() {
  return (
    <>
      <path d="M14 30 C14 24 22 24 22 31 C22 24 30 24 30 30 C30 38 22 44 22 44 C22 44 14 38 14 30Z" fill="#FF9EBB" />
      <path d="M96 22 C96 18 102 18 102 23 C102 18 108 18 108 22 C108 28 102 32 102 32 C102 32 96 28 96 22Z" fill="#4DA6FF" opacity="0.75" />
      <path d="M100 60 C100 57 104 57 104 60.5 C104 57 108 57 108 60 C108 65 104 68 104 68 C104 68 100 65 100 60Z" fill="#FFD93D" opacity="0.9" />
    </>
  )
}

function Sparkles() {
  return (
    <>
      <path d="M16 22 L18.5 29 L26 31.5 L18.5 34 L16 41 L13.5 34 L6 31.5 L13.5 29 Z" fill="#FFD93D" />
      <path d="M104 30 L106 35.5 L111.5 37.5 L106 39.5 L104 45 L102 39.5 L96.5 37.5 L102 35.5 Z" fill="#4DA6FF" opacity="0.8" />
      <circle cx="98" cy="16" r="3" fill="#FFB6C1" />
      <circle cx="22" cy="10" r="2.4" fill="#87CEEB" />
    </>
  )
}

function Thinking() {
  return (
    <>
      <circle cx="97" cy="30" r="4" fill="#EAF4FF" stroke={LINE} strokeWidth="1.6" />
      <circle cx="106" cy="20" r="7" fill="#EAF4FF" stroke={LINE} strokeWidth="1.6" />
      <text x="106" y="25" fontSize="10" fontWeight="800" fill="#4DA6FF" textAnchor="middle">
        ?
      </text>
      <path d="M14 26 L16 31 L21 33 L16 35 L14 40 L12 35 L7 33 L12 31 Z" fill="#FFD93D" opacity="0.8" />
    </>
  )
}

function Tear() {
  return (
    <>
      <path d="M46 58 Q44 66 47 68 Q51 68 49 60 Z" fill="#8FCBF5" />
      <circle cx="102" cy="34" r="3" fill="#CFE2F2" />
      <circle cx="18" cy="30" r="4" fill="#CFE2F2" />
    </>
  )
}

function Party() {
  return (
    <>
      {/* Cờ đuôi nheo */}
      <path d="M6 14 L24 20 L6 28 Z" fill="#FFD93D" />
      <path d="M114 14 L96 20 L114 28 Z" fill="#FF9EBB" />
      <circle cx="30" cy="12" r="3" fill="#4DA6FF" />
      <circle cx="90" cy="10" r="3" fill="#5FD08A" />
      <circle cx="18" cy="48" r="2.6" fill="#FFD93D" />
      <circle cx="102" cy="50" r="2.6" fill="#FF9EBB" />
      {/* Hai chân giơ lên */}
      <ellipse cx="30" cy="86" rx="8" ry="6.5" fill={FUR} stroke={LINE} strokeWidth="2.2" transform="rotate(30 30 86)" />
      <ellipse cx="90" cy="86" rx="8" ry="6.5" fill={FUR} stroke={LINE} strokeWidth="2.2" transform="rotate(-30 90 86)" />
    </>
  )
}

const faces: Record<MascotVariant, Face> = {
  welcome: 'smile',
  hearts: 'happy',
  sparkle: 'happy',
  think: 'think',
  sad: 'sad',
  cheer: 'happy',
}

const extras: Record<MascotVariant, () => React.ReactNode> = {
  welcome: Balloons,
  hearts: Hearts,
  sparkle: Sparkles,
  think: Thinking,
  sad: Tear,
  cheer: Party,
}

const animClass: Record<MascotVariant, string> = {
  welcome: 'animate-float',
  hearts: 'animate-float',
  sparkle: 'animate-float',
  think: '',
  sad: '',
  cheer: 'animate-wiggle',
}

export default function CinnamorollMascot({ variant = 'welcome', size = 'md', className = '' }: Props) {
  const px = sizes[size]
  const Extra = extras[variant]

  return (
    <svg
      className={`mascot ${animClass[variant]} ${className}`}
      width={px}
      height={px}
      viewBox="0 0 120 120"
      aria-hidden="true"
    >
      <Puppy face={faces[variant]} />
      <Extra />
    </svg>
  )
}
