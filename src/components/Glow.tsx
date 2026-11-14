type GlowProps = {
  side: 'left' | 'right'
  top?: string
}

/** Soft blue light, same look as the glow beside the hero heading. Drifts gently and follows the pointer. */
function Glow({ side, top = '4rem' }: GlowProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className={`parallax absolute h-[28rem] w-[28rem] ${
          side === 'left' ? '-left-40' : '-right-40'
        }`}
        style={{ top }}
      >
        <div className="glow-drift h-full w-full rounded-full bg-blue-600/[0.10] blur-[120px]" />
      </div>
    </div>
  )
}

export default Glow
