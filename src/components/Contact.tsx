
import { useState } from "react"
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  Code2,
  ExternalLink,
  BriefcaseBusiness,
  Globe,
} from "lucide-react"

const email = "praveenprashath27@gmail.com"

const contactLinks = [
  {
    label: "GitHub",
    detail: "Projects & repositories",
    url: "https://github.com/PraveenPrashathKK",
    number: "01",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    detail: "Professional profile",
    url: "https://www.linkedin.com/in/kk-praveen-prashath-b76a921b7/",
    number: "02",
    icon: BriefcaseBusiness,
  },
  {
    label: "Codolio",
    detail: "Coding profile",
    url: "https://codolio.com/profile/PraveenPrashath_KK",
    number: "03",
    icon: Globe,
  },
  {
    label: "LeetCode",
    detail: "Problem-solving journey",
    url: "https://leetcode.com/u/PraveenPrashath_KK/",
    number: "04",
    icon: Code2,
  },
]

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-600/[0.09] blur-[130px]" />
      <div className="pointer-events-none absolute -left-48 bottom-0 h-72 w-72 rounded-full bg-blue-500/[0.06] blur-[120px]" />

      <div className="relative">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />
            <p className="text-xs tracking-[0.24em] text-blue-400">
              THE OPEN CHANNEL
            </p>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Let's make
            <br />
            something
            <span className="text-blue-400"> happen.</span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
            Have an idea, an opportunity, or just want to talk tech?
            I'm always open to connecting, collaborating, and learning
            from new perspectives.
          </p>
        </div>

        {/* Email connection */}
        <div className="relative mt-20 border-y border-white/10 py-9 sm:py-11">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-[10px] tracking-[0.2em] text-gray-500">
                  01 / DIRECT CONNECTION
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl">
                Start a conversation.
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-gray-500">
                For collaborations, opportunities, or simply a good
                conversation. My inbox is open.
              </p>
            </div>

            <div className="min-w-0">
              <a
                href={`mailto:${email}`}
                className="group inline-flex max-w-full items-center gap-3 text-base font-medium text-gray-200 transition-colors hover:text-blue-300 sm:text-xl"
              >
                <span className="break-all">{email}</span>
                <ArrowUpRight
                  size={19}
                  className="shrink-0 text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 border border-white/10 px-4 py-2.5 text-xs text-gray-400 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-400/[0.06] hover:text-blue-300"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copied to clipboard" : "Copy email"}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-blue-300"
                >
                  Send an email
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social profiles */}
        <div className="mt-20 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-blue-400" />
              <p className="text-[10px] tracking-[0.2em] text-gray-500">
                02 / FIND ME ONLINE
              </p>
            </div>

            <h3 className="mt-6 max-w-xs text-3xl font-medium leading-tight tracking-tight">
              A little more about what I do.
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500">
              Explore my work, follow my learning journey, or connect
              with me across these platforms.
            </p>
          </div>

          <div className="border-t border-white/10">
            {contactLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.number}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 border-b border-white/10 py-5 transition-all duration-300 hover:border-blue-400/30 sm:py-6"
                >
                  <span className="w-6 shrink-0 text-[10px] tabular-nums text-gray-600">
                    {link.number}
                  </span>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.08] bg-white/[0.025] text-gray-500 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-400/[0.08] group-hover:text-blue-300">
                    <Icon size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-medium text-gray-200 transition-colors group-hover:text-blue-300 sm:text-base">
                      {link.label}
                    </h4>
                    <p className="mt-1 text-xs text-gray-500">
                      {link.detail}
                    </p>
                  </div>

                  <ExternalLink
                    size={16}
                    className="shrink-0 text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                  />
                </a>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 border-t border-white/10 pt-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs tracking-[0.15em] text-gray-600">
                UNTIL THEN,
              </p>

              <p className="mt-3 text-lg font-medium text-gray-300">
                Keep building. Keep exploring.
                <span className="text-blue-400"> ↗</span>
              </p>

              <p className="mt-5 text-xs text-gray-600">
                Designed & developed by{" "}
                <span className="text-gray-400">Praveen.</span>
              </p>
            </div>

            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="group inline-flex w-fit items-center gap-3 text-xs text-gray-500 transition-colors hover:text-blue-300"
            >
              Back to top
              <span className="flex h-9 w-9 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-400/[0.06]">
                <ArrowDown
                  size={15}
                  className="rotate-180 transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
