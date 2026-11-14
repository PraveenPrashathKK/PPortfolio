import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme'

function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme()
  const light = theme === 'light'

  return (
    <button
      type="button"
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      title={light ? 'Dark mode' : 'Light mode'}
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        toggle({ x: r.left + r.width / 2, y: r.top + r.height / 2 })
      }}
      className={`group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 transition hover:border-blue-500 hover:bg-blue-500/10 ${className}`}
    >
      <Sun
        className={`absolute h-4 w-4 text-blue-400 transition-all duration-500 ${
          light ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 text-blue-400 transition-all duration-500 ${
          light ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
    </button>
  )
}

export default ThemeToggle
