import { useCallback, useEffect, useRef, useState } from 'react'
import { ExternalLink, RefreshCw } from 'lucide-react'
import { useTheme } from '../theme'

/* ───────── Configuration ───────── */
const USERNAME = 'PraveenPrashath_KK'
const PROFILE_URL = `https://leetcode.com/u/${USERNAME}/`
const PRIMARY_API = `https://leetcode-api-faisalshohag.vercel.app/${USERNAME}`
const FALLBACK_API = `https://alfa-leetcode-api.onrender.com/${USERNAME}/solved`
const CACHE_KEY = 'leetcode-stats-v1'

type Stats = {
  solved: number
  total: number
  easy: number
  easyTotal: number
  medium: number
  mediumTotal: number
  hard: number
  hardTotal: number
  rank: number | null
  submissions: number | null
  activeDays: number | null
  maxStreak: number | null
  calendar: Record<string, number> | null
  updated: number | null
}

/** Shown until live data arrives, or if every API is unreachable. Update by hand if you like. */
const SNAPSHOT: Stats = {
  solved: 107,
  total: 4110,
  easy: 98,
  easyTotal: 975,
  medium: 9,
  mediumTotal: 2146,
  hard: 0,
  hardTotal: 989,
  rank: 1652901,
  submissions: 138,
  activeDays: 95,
  maxStreak: 77,
  calendar: null,
  updated: null,
}

type Source = 'live' | 'cached' | 'snapshot'

/* ───────── Data helpers ───────── */
const dayKey = (d: Date) => d.toISOString().slice(0, 10)

function normaliseCalendar(raw: unknown): Record<string, number> | null {
  if (!raw || typeof raw !== 'object') return null
  const out: Record<string, number> = {}
  for (const [ts, count] of Object.entries(raw as Record<string, unknown>)) {
    const n = Number(count)
    const t = Number(ts)
    if (!Number.isFinite(t) || !Number.isFinite(n)) continue
    const key = dayKey(new Date(t * 1000))
    out[key] = (out[key] ?? 0) + n
  }
  return out
}

function lastYearDays(): Date[] {
  const today = new Date()
  const end = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()))
  const days: Date[] = []
  for (let i = 364; i >= 0; i--) days.push(new Date(end.getTime() - i * 86400000))
  return days
}

function calendarMetrics(cal: Record<string, number>) {
  let submissions = 0
  let activeDays = 0
  let maxStreak = 0
  let run = 0
  for (const d of lastYearDays()) {
    const c = cal[dayKey(d)] ?? 0
    submissions += c
    if (c > 0) {
      activeDays++
      run++
      maxStreak = Math.max(maxStreak, run)
    } else run = 0
  }
  return { submissions, activeDays, maxStreak }
}

async function getJSON(url: string, ms = 12000) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), ms)
  try {
    const res = await fetch(url, { signal: ctrl.signal })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
  } finally {
    clearTimeout(timer)
  }
}

async function fetchLive(): Promise<Stats> {
  try {
    const d = await getJSON(PRIMARY_API)
    if (typeof d.totalSolved !== 'number') throw new Error('Unexpected response')
    const calendar = normaliseCalendar(d.submissionCalendar)
    const m = calendar ? calendarMetrics(calendar) : null
    return {
      solved: d.totalSolved,
      total: d.totalQuestions ?? SNAPSHOT.total,
      easy: d.easySolved ?? 0,
      easyTotal: d.totalEasy ?? SNAPSHOT.easyTotal,
      medium: d.mediumSolved ?? 0,
      mediumTotal: d.totalMedium ?? SNAPSHOT.mediumTotal,
      hard: d.hardSolved ?? 0,
      hardTotal: d.totalHard ?? SNAPSHOT.hardTotal,
      rank: typeof d.ranking === 'number' ? d.ranking : null,
      submissions: m?.submissions ?? null,
      activeDays: m?.activeDays ?? null,
      maxStreak: m?.maxStreak ?? null,
      calendar,
      updated: Date.now(),
    }
  } catch {
    const d = await getJSON(FALLBACK_API)
    const solved = d.solvedProblem ?? d.solved
    if (typeof solved !== 'number') throw new Error('Unexpected response')
    return {
      ...SNAPSHOT,
      solved,
      easy: d.easySolved ?? SNAPSHOT.easy,
      medium: d.mediumSolved ?? SNAPSHOT.medium,
      hard: d.hardSolved ?? SNAPSHOT.hard,
      submissions: null,
      activeDays: null,
      maxStreak: null,
      calendar: null,
      updated: Date.now(),
    }
  }
}

function readCache(): Stats | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    return raw ? (JSON.parse(raw) as Stats) : null
  } catch {
    return null
  }
}

function writeCache(s: Stats) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(s))
  } catch {
    /* storage unavailable */
  }
}

/* ───────── UI helpers ───────── */
function useCountUp(target: number, duration = 1000) {
  const [value, setValue] = useState(target)
  const from = useRef(target)
  useEffect(() => {
    const start = performance.now()
    const begin = from.current
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(begin + (target - begin) * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
      else from.current = target
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

function timeAgo(ms: number | null) {
  if (!ms) return 'saved snapshot'
  const s = Math.max(0, Math.round((Date.now() - ms) / 1000))
  if (s < 60) return 'just now'
  if (s < 3600) return `${Math.round(s / 60)} min ago`
  if (s < 86400) return `${Math.round(s / 3600)} h ago`
  return `${Math.round(s / 86400)} d ago`
}

const PALETTES = {
  dark: {
    diff: { easy: '#60A5FA', medium: '#22D3EE', hard: '#818CF8' },
    levels: ['rgba(255,255,255,0.05)', '#14532d', '#166534', '#22C55E', '#86EFAC'],
  },
  light: {
    diff: { easy: '#2563EB', medium: '#0891B2', hard: '#4F46E5' },
    levels: ['rgba(15,23,42,0.07)', '#bbf7d0', '#86efac', '#22c55e', '#15803d'],
  },
}
type Palette = (typeof PALETTES)['dark']

function level(c: number) {
  if (c <= 0) return 0
  if (c === 1) return 1
  if (c <= 3) return 2
  if (c <= 6) return 3
  return 4
}

function Ring({ s, DIFF }: { s: Stats; DIFF: Palette['diff'] }) {
  const R = 74
  const C = 2 * Math.PI * R
  const parts = [
    { v: s.easy, color: DIFF.easy },
    { v: s.medium, color: DIFF.medium },
    { v: s.hard, color: DIFF.hard },
  ]
  const sum = Math.max(1, parts.reduce((a, p) => a + p.v, 0))
  let offset = 0
  const gap = parts.filter((p) => p.v > 0).length > 1 ? 5 : 0
  return (
    <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90">
      <circle cx="90" cy="90" r={R} fill="none" stroke="currentColor" className="text-white/[0.06]" strokeWidth="9" />
      {parts.map((p) => {
        if (p.v <= 0) return null
        const len = (p.v / sum) * C
        const el = (
          <circle
            key={p.color}
            cx="90"
            cy="90"
            r={R}
            fill="none"
            stroke={p.color}
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={`${Math.max(0, len - gap)} ${C}`}
            strokeDashoffset={-offset}
            className="transition-all duration-1000"
          />
        )
        offset += len
        return el
      })}
    </svg>
  )
}

function Heatmap({ calendar, LEVELS }: { calendar: Record<string, number>; LEVELS: string[] }) {
  const scroller = useRef<HTMLDivElement>(null)
  const days = lastYearDays()
  const pad = days[0].getUTCDay()
  const cells: (Date | null)[] = [...Array(pad).fill(null), ...days]
  const weeks: (Date | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

  useEffect(() => {
    if (scroller.current) scroller.current.scrollLeft = scroller.current.scrollWidth
  }, [calendar])

  return (
    <div ref={scroller} className="overflow-x-auto pb-2">
      <div className="inline-block min-w-max">
        <div className="mb-2 flex gap-[3px] text-[10px] text-gray-500">
          {weeks.map((w, i) => {
            const first = w.find((d) => d)
            const show = first && first.getUTCDate() <= 7
            return (
              <span key={i} className="w-[11px] overflow-visible whitespace-nowrap">
                {show ? months[first!.getUTCMonth()] : ''}
              </span>
            )
          })}
        </div>
        <div className="flex gap-[3px]">
          {weeks.map((w, i) => (
            <div key={i} className="flex flex-col gap-[3px]">
              {w.map((d, j) => {
                if (!d) return <span key={j} className="h-[11px] w-[11px]" />
                const c = calendar[dayKey(d)] ?? 0
                return (
                  <span
                    key={j}
                    title={`${c} submission${c === 1 ? '' : 's'} · ${dayKey(d)}`}
                    className="h-[11px] w-[11px] rounded-[3px] transition-transform hover:scale-150"
                    style={{ backgroundColor: LEVELS[level(c)] }}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
      <p className="text-[10px] tracking-[0.2em] text-gray-500">{label}</p>
      <p className="mt-1.5 font-mono text-lg text-blue-300">{value}</p>
    </div>
  )
}

/* ───────── Component ───────── */
function LeetCodeTracker() {
  const [stats, setStats] = useState<Stats>(() => readCache() ?? SNAPSHOT)
  const [source, setSource] = useState<Source>(() => (readCache() ? 'cached' : 'snapshot'))
  const [loading, setLoading] = useState(true)

  const apply = useCallback((s: Stats) => {
    // Keep the last known extra stats if a fallback API omitted them
    setStats((prev) => ({
      ...s,
      submissions: s.submissions ?? prev.submissions,
      activeDays: s.activeDays ?? prev.activeDays,
      maxStreak: s.maxStreak ?? prev.maxStreak,
      calendar: s.calendar ?? prev.calendar,
    }))
    writeCache(s)
    setSource('live')
  }, [])

  const load = useCallback(async () => {
    setLoading(true)
    try {
      apply(await fetchLive())
    } catch {
      /* keep showing cached / snapshot */
    } finally {
      setLoading(false)
    }
  }, [apply])

  // First load on mount
  useEffect(() => {
    let alive = true
    fetchLive()
      .then((s) => {
        if (alive) apply(s)
      })
      .catch(() => {
        /* keep showing cached / snapshot */
      })
      .finally(() => {
        if (alive) setLoading(false)
      })
    return () => {
      alive = false
    }
  }, [apply])

  const { theme } = useTheme()
  const DIFF = PALETTES[theme].diff
  const LEVELS = PALETTES[theme].levels
  const solved = useCountUp(stats.solved)
  const bars = [
    { label: 'Easy', v: stats.easy, t: stats.easyTotal, color: DIFF.easy },
    { label: 'Medium', v: stats.medium, t: stats.mediumTotal, color: DIFF.medium },
    { label: 'Hard', v: stats.hard, t: stats.hardTotal, color: DIFF.hard },
  ]
  const fmt = (n: number | null) => (n === null ? '—' : n.toLocaleString())

  return (
    <div className="relative mt-28 overflow-hidden rounded-3xl border border-white/10 bg-panel/70 p-6 sm:p-9">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/[0.10] blur-[100px]"
      />

      {/* Header */}
      <div className="relative flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-[11px] tracking-[0.25em] text-blue-400">PROBLEM SOLVING</p>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            LeetCode<span className="text-blue-500">.</span>
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-gray-300">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                loading ? 'animate-pulse bg-yellow-400' : source === 'live' ? 'bg-green-400' : 'bg-gray-500'
              }`}
            />
            {loading ? 'Syncing…' : source === 'live' ? 'Live' : source === 'cached' ? 'Cached' : 'Snapshot'}
            <span className="text-gray-500">· {timeAgo(stats.updated)}</span>
          </span>
          <button
            type="button"
            onClick={load}
            disabled={loading}
            aria-label="Refresh LeetCode stats"
            className="rounded-full border border-white/10 p-2 text-gray-400 transition hover:border-blue-400/50 hover:text-blue-300 disabled:opacity-50"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-blue-400 transition hover:text-blue-300"
          >
            @{USERNAME} <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Overview */}
      <div className="relative mt-9 grid items-center gap-9 md:grid-cols-[190px_1fr]">
        <div className="relative mx-auto h-[190px] w-[190px]">
          <Ring s={stats} DIFF={DIFF} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-display font-semibold tabular-nums">{solved}</span>
            <span className="mt-1 text-[11px] text-gray-500">/ {stats.total.toLocaleString()} solved</span>
          </div>
        </div>

        <div>
          <div className="space-y-4">
            {bars.map((b) => (
              <div key={b.label}>
                <div className="mb-1.5 flex justify-between text-xs">
                  <span style={{ color: b.color }}>{b.label}</span>
                  <span className="font-mono text-gray-400">
                    {b.v} <span className="text-gray-600">/ {b.t.toLocaleString()}</span>
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${Math.min(100, (b.v / Math.max(1, b.t)) * 100)}%`,
                      minWidth: b.v > 0 ? 4 : 0,
                      backgroundColor: b.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="RANK" value={fmt(stats.rank)} />
            <Stat label="ACTIVE DAYS" value={fmt(stats.activeDays)} />
            <Stat label="MAX STREAK" value={stats.maxStreak === null ? '—' : `${stats.maxStreak} d`} />
            <Stat label="SUBMISSIONS" value={fmt(stats.submissions)} />
          </div>
        </div>
      </div>

      {/* Heatmap */}
      <div className="relative mt-9 border-t border-white/10 pt-7">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[11px] tracking-[0.2em] text-gray-500">
            {stats.submissions !== null ? `${stats.submissions} SUBMISSIONS IN THE PAST YEAR` : 'ACTIVITY'}
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
            Less
            {LEVELS.map((c) => (
              <span key={c} className="h-[10px] w-[10px] rounded-[3px]" style={{ backgroundColor: c }} />
            ))}
            More
          </div>
        </div>
        {stats.calendar ? (
          <Heatmap calendar={stats.calendar} LEVELS={LEVELS} />
        ) : (
          <p className="text-xs text-gray-600">The activity heatmap appears once live data loads.</p>
        )}
      </div>
    </div>
  )
}

export default LeetCodeTracker
