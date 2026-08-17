import './BigButton.css'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'success'
  disabled?: boolean
  type?: 'button' | 'submit'
  className?: string
}

export default function BigButton({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = '',
}: Props) {
  return (
    <button
      type={type}
      className={`big-btn big-btn--${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
