import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { Progress, Section } from '../types'
import {
  loadProgress,
  markSection,
  resetProgress,
  isUnlocked,
  loadName,
  saveName,
  loadUnlockAll,
  saveUnlockAll,
} from '../lib/storage'

interface ProgressCtx {
  progress: Progress
  childName: string
  setChildName: (name: string) => void
  complete: (lessonId: number, section: Section, score?: number) => boolean
  unlocked: (lessonId: number) => boolean
  reset: () => void
  unlockAll: boolean
  setUnlockAll: (value: boolean) => void
}

const Ctx = createContext<ProgressCtx | null>(null)

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<Progress>(() => loadProgress())
  const [childName, setChildNameState] = useState<string>(() => loadName())

  const setChildName = useCallback((name: string) => {
    setChildNameState(name)
    saveName(name)
  }, [])

  /** Trả về true nếu vừa mở khoá huy hiệu mới */
  const complete = useCallback(
    (lessonId: number, section: Section, score = 0) => {
      const had = progress.lessons[lessonId]?.badgeEarned ?? false
      const next = markSection(progress, lessonId, section, score)
      setProgress(next)
      return !had && next.lessons[lessonId].badgeEarned
    },
    [progress],
  )

  const [unlockAll, setUnlockAllState] = useState<boolean>(() => loadUnlockAll())

  const setUnlockAll = useCallback((value: boolean) => {
    saveUnlockAll(value)
    setUnlockAllState(value)
  }, [])

  const unlocked = useCallback(
    (lessonId: number) => unlockAll || isUnlocked(progress, lessonId),
    [progress, unlockAll],
  )

  const reset = useCallback(() => setProgress(resetProgress()), [])

  const value = useMemo(
    () => ({
      progress,
      childName,
      setChildName,
      complete,
      unlocked,
      reset,
      unlockAll,
      setUnlockAll,
    }),
    [progress, childName, setChildName, complete, unlocked, reset, unlockAll, setUnlockAll],
  )

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useProgress() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useProgress phải dùng bên trong <ProgressProvider>')
  return ctx
}
