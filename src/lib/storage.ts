import type { Progress, LessonProgress, Section } from '../types'
import { LESSONS } from '../data/lessons'

const KEY = 'cinna-de-a1-progress-v1'
const NAME_KEY = 'cinna-de-a1-name'
const UNLOCK_KEY = 'cinna-de-a1-unlock-all'

function emptyLesson(): LessonProgress {
  return { learn: false, practice: false, test: false, badgeEarned: false, bestScore: 0 }
}

export function emptyProgress(): Progress {
  const lessons: Record<number, LessonProgress> = {}
  for (const l of LESSONS) lessons[l.meta.id] = emptyLesson()
  return { lessons, stars: 0 }
}

export function loadProgress(): Progress {
  const base = emptyProgress()
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return base
    const saved = JSON.parse(raw) as Partial<Progress>
    if (saved.lessons) {
      for (const id of Object.keys(base.lessons)) {
        const n = Number(id)
        base.lessons[n] = { ...base.lessons[n], ...saved.lessons[n] }
      }
    }
    base.stars = saved.stars ?? 0
  } catch {
    /* dữ liệu hỏng thì bắt đầu lại từ đầu */
  }
  return base
}

export function saveProgress(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p))
  } catch {
    /* hết dung lượng: bỏ qua, app vẫn chạy được */
  }
}

export function markSection(p: Progress, lessonId: number, section: Section, score = 0): Progress {
  const current = p.lessons[lessonId] ?? emptyLesson()
  const wasDone = current[section]
  const next: LessonProgress = {
    ...current,
    [section]: true,
    bestScore: Math.max(current.bestScore, score),
  }
  next.badgeEarned = next.learn && next.practice && next.test
  const gained = wasDone ? 0 : 1
  const updated: Progress = {
    ...p,
    stars: p.stars + gained,
    lessons: { ...p.lessons, [lessonId]: next },
  }
  saveProgress(updated)
  return updated
}

/** Bài 1 luôn mở; bài sau mở khi bài trước đã có huy hiệu (trừ khi bố mẹ mở khoá hết). */
export function isUnlocked(p: Progress, lessonId: number): boolean {
  if (lessonId <= 1) return true
  if (loadUnlockAll()) return true
  return p.lessons[lessonId - 1]?.badgeEarned ?? false
}

export function loadUnlockAll(): boolean {
  try {
    return localStorage.getItem(UNLOCK_KEY) === '1'
  } catch {
    return false
  }
}

export function saveUnlockAll(value: boolean) {
  try {
    localStorage.setItem(UNLOCK_KEY, value ? '1' : '0')
  } catch {
    /* bỏ qua */
  }
}

export function resetProgress(): Progress {
  const fresh = emptyProgress()
  saveProgress(fresh)
  return fresh
}

export function loadName(): string {
  try {
    return localStorage.getItem(NAME_KEY) ?? ''
  } catch {
    return ''
  }
}

export function saveName(name: string) {
  try {
    localStorage.setItem(NAME_KEY, name)
  } catch {
    /* bỏ qua */
  }
}
