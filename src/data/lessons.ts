import type { LessonContent } from '../types'
import lektion1 from './lektion1'
import lektion2 from './lektion2'
import lektion3 from './lektion3'
import lektion4 from './lektion4'
import lektion5 from './lektion5'
import lektion6 from './lektion6'
import lektion7 from './lektion7'

export const LESSONS: LessonContent[] = [
  lektion1,
  lektion2,
  lektion3,
  lektion4,
  lektion5,
  lektion6,
  lektion7,
]

export function getLesson(id: number): LessonContent | undefined {
  return LESSONS.find((l) => l.meta.id === id)
}
