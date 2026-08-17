import './CloudBackground.css'

export default function CloudBackground() {
  return (
    <div className="cloud-bg" aria-hidden="true">
      <svg className="cloud cloud-1" viewBox="0 0 120 60" width="120" height="60">
        <ellipse cx="40" cy="35" rx="35" ry="22" fill="#FFFFFF" opacity="0.7" />
        <ellipse cx="70" cy="30" rx="28" ry="20" fill="#FFFFFF" opacity="0.6" />
        <ellipse cx="90" cy="38" rx="22" ry="16" fill="#E8F4FD" opacity="0.8" />
      </svg>
      <svg className="cloud cloud-2" viewBox="0 0 100 50" width="100" height="50">
        <ellipse cx="35" cy="28" rx="30" ry="18" fill="#FFE4EC" opacity="0.6" />
        <ellipse cx="60" cy="25" rx="25" ry="16" fill="#FFFFFF" opacity="0.5" />
      </svg>
      <svg className="cloud cloud-3" viewBox="0 0 80 40" width="80" height="40">
        <ellipse cx="30" cy="22" rx="25" ry="15" fill="#87CEEB" opacity="0.3" />
        <ellipse cx="55" cy="20" rx="20" ry="12" fill="#FFFFFF" opacity="0.5" />
      </svg>
    </div>
  )
}
