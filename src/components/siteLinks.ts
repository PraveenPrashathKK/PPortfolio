import { BriefcaseBusiness, Code2, Globe } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export type Social = {
  id: string
  label: string
  detail: string
  url: string
  icon: LucideIcon
}

export const socials: Social[] = [
  {
    id: 'github',
    label: 'GitHub',
    detail: 'Projects & repositories',
    url: 'https://github.com/PraveenPrashathKK',
    icon: Code2,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    detail: 'Professional profile',
    url: 'https://www.linkedin.com/in/kk-praveen-prashath-b76a921b7/',
    icon: BriefcaseBusiness,
  },
  {
    id: 'codolio',
    label: 'Codolio',
    detail: 'Coding profile',
    url: 'https://codolio.com/profile/PraveenPrashath_KK',
    icon: Globe,
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    detail: 'Problem solving',
    url: 'https://leetcode.com/u/PraveenPrashath_KK/',
    icon: Code2,
  },
]
