export type MascotVariant = 'welcome' | 'hearts' | 'sparkle' | 'think' | 'sad' | 'cheer'

export type Section = 'learn' | 'practice' | 'test'

export interface LessonMeta {
  id: number
  titleDe: string
  titleVi: string
  icon: string
  badgeName: string
  badgeIcon: string
  color: string
}

export interface LessonProgress {
  learn: boolean
  practice: boolean
  test: boolean
  badgeEarned: boolean
  bestScore: number
}

export interface Progress {
  lessons: Record<number, LessonProgress>
  stars: number
}

/* ---------- Phần HỌC ---------- */

export interface VocabItem {
  de: string
  vi: string
  emoji?: string
  example?: string
  exampleVi?: string
}

export interface AlphabetLetter {
  letter: string
  say: string
  word: string
  vi: string
  emoji: string
}

export type LearnBlock =
  | { kind: 'vocab'; title: string; hint?: string; items: VocabItem[] }
  | { kind: 'alphabet'; title: string; hint?: string; letters: AlphabetLetter[] }
  | {
      kind: 'grammar'
      title: string
      note: string
      rows: { de: string; vi: string }[]
    }

/* ---------- Phần LUYỆN ---------- */

export interface DialogueLine {
  speaker: 'mascot' | 'user'
  de: string
  vi: string
  /** Nếu có: bé phải chọn câu trả lời đúng */
  options?: string[]
}

export interface Dialogue {
  id: string
  title: string
  scene: string
  emoji: string
  lines: DialogueLine[]
}

/* ---------- Phần KIỂM TRA ---------- */

export interface QuizExercise {
  kind: 'quiz'
  id: string
  question: string
  questionVi?: string
  options: string[]
  correct: number
  explain?: string
}

export interface FillExercise {
  kind: 'fill'
  id: string
  question: string
  /** Câu có dấu ___ tại vị trí cần điền */
  sentence: string
  vi: string
  options: string[]
  correct: number
}

export interface OrderExercise {
  kind: 'order'
  id: string
  question: string
  /** Thứ tự đúng của các mảnh */
  answer: string[]
  vi: string
}

export interface SpellExercise {
  kind: 'spell'
  id: string
  question: string
  word: string
  vi?: string
}

export interface MatchExercise {
  kind: 'match'
  id: string
  question: string
  pairs: { emoji: string; de: string }[]
}

export interface PickExercise {
  kind: 'pick'
  id: string
  question: string
  questionVi?: string
  options: { label: string; correct: boolean }[]
}

export type Exercise =
  | QuizExercise
  | FillExercise
  | OrderExercise
  | SpellExercise
  | MatchExercise
  | PickExercise

export interface LessonContent {
  meta: LessonMeta
  intro: string
  learn: LearnBlock[]
  practice: Dialogue[]
  test: Exercise[]
}
