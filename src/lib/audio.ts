/**
 * Âm thanh của app: hiệu ứng vui (Web Audio) + đọc tiếng Đức (Speech Synthesis).
 * Không cần file mp3 nào — chạy được offline.
 */

let ctx: AudioContext | null = null
let muted = false

const MUTE_KEY = 'cinna-de-a1-muted'

if (typeof localStorage !== 'undefined') {
  muted = localStorage.getItem(MUTE_KEY) === '1'
}

export function isMuted() {
  return muted
}

export function setMuted(value: boolean) {
  muted = value
  localStorage.setItem(MUTE_KEY, value ? '1' : '0')
  if (value) window.speechSynthesis?.cancel()
}

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const AC = window.AudioContext || (window as any).webkitAudioContext
    if (!AC) return null
    ctx = new AC()
  }
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

interface ToneOptions {
  freq: number
  start: number
  duration: number
  type?: OscillatorType
  volume?: number
}

function playTones(tones: ToneOptions[]) {
  if (muted) return
  const audio = getCtx()
  if (!audio) return
  const now = audio.currentTime

  for (const t of tones) {
    const osc = audio.createOscillator()
    const gain = audio.createGain()
    osc.type = t.type ?? 'sine'
    osc.frequency.setValueAtTime(t.freq, now + t.start)
    const vol = t.volume ?? 0.18
    gain.gain.setValueAtTime(0.0001, now + t.start)
    gain.gain.exponentialRampToValueAtTime(vol, now + t.start + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + t.start + t.duration)
    osc.connect(gain)
    gain.connect(audio.destination)
    osc.start(now + t.start)
    osc.stop(now + t.start + t.duration + 0.05)
  }
}

/** Tiếng "đúng rồi!" – 3 nốt đi lên vui tai */
export function playCorrect() {
  playTones([
    { freq: 659.25, start: 0, duration: 0.14 },
    { freq: 783.99, start: 0.11, duration: 0.14 },
    { freq: 1046.5, start: 0.22, duration: 0.28 },
  ])
}

/** Tiếng "thử lại nha" – nhẹ nhàng, không đáng sợ */
export function playWrong() {
  playTones([
    { freq: 349.23, start: 0, duration: 0.16, type: 'triangle', volume: 0.14 },
    { freq: 261.63, start: 0.13, duration: 0.26, type: 'triangle', volume: 0.14 },
  ])
}

/** Tiếng bấm nút */
export function playTap() {
  playTones([{ freq: 880, start: 0, duration: 0.07, type: 'sine', volume: 0.08 }])
}

/** Nhạc mừng khi nhận huy hiệu */
export function playFanfare() {
  playTones([
    { freq: 523.25, start: 0, duration: 0.16 },
    { freq: 659.25, start: 0.14, duration: 0.16 },
    { freq: 783.99, start: 0.28, duration: 0.16 },
    { freq: 1046.5, start: 0.42, duration: 0.4 },
    { freq: 1318.5, start: 0.5, duration: 0.5, volume: 0.12 },
  ])
}

/* ---------- Đọc tiếng Đức ---------- */

let germanVoice: SpeechSynthesisVoice | null = null

function pickGermanVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null
  if (germanVoice) return germanVoice
  const voices = window.speechSynthesis.getVoices()
  germanVoice =
    voices.find((v) => v.lang?.toLowerCase().startsWith('de-de')) ??
    voices.find((v) => v.lang?.toLowerCase().startsWith('de')) ??
    null
  return germanVoice
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    germanVoice = null
    pickGermanVoice()
  }
}

export function speakGerman(text: string, rate = 0.85) {
  if (muted) return
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  const voice = pickGermanVoice()
  if (voice) u.voice = voice
  u.lang = 'de-DE'
  u.rate = rate
  u.pitch = 1.15
  window.speechSynthesis.speak(u)
}

/** Đọc từng chữ cái, chậm rãi – dùng cho bài đánh vần */
export function spellGerman(word: string) {
  if (muted) return
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const voice = pickGermanVoice()
  for (const ch of word.split('')) {
    if (ch === ' ') continue
    const u = new SpeechSynthesisUtterance(ch)
    if (voice) u.voice = voice
    u.lang = 'de-DE'
    u.rate = 0.6
    u.pitch = 1.15
    window.speechSynthesis.speak(u)
  }
}

export function stopSpeaking() {
  window.speechSynthesis?.cancel()
}

export function hasGermanVoice(): boolean {
  return pickGermanVoice() !== null
}
