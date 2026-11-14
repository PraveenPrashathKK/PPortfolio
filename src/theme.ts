import { useSyncExternalStore } from 'react'
import { flushSync } from 'react-dom'

export type Theme = 'dark' | 'light'

const KEY = 'theme'
const listeners = new Set<() => void>()

let current: Theme =
  typeof document !== 'undefined' && document.documentElement.dataset.theme === 'light'
    ? 'light'
    : 'dark'

function apply(next: Theme) {
  current = next
  document.documentElement.dataset.theme = next
  try {
    localStorage.setItem(KEY, next)
  } catch {
    /* storage unavailable */
  }
  listeners.forEach((l) => l())
}

type VTDocument = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> }
}

/** Switch theme. With an origin, the new theme expands from that point. */
export function toggleTheme(origin?: { x: number; y: number }) {
  const next: Theme = current === 'dark' ? 'light' : 'dark'
  const doc = document as VTDocument
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (doc.startViewTransition && origin && !reduced) {
    const { x, y } = origin
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    const t = doc.startViewTransition(() => {
      flushSync(() => apply(next))
    })
    t.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 700, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
      )
    })
    return
  }

  const root = document.documentElement
  root.classList.add('theme-fade')
  apply(next)
  window.setTimeout(() => root.classList.remove('theme-fade'), 450)
}

export function useTheme() {
  const theme = useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    () => current,
  )
  return { theme, toggle: toggleTheme }
}
