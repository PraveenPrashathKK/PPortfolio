import { useEffect } from 'react'

/** Publishes the pointer position (-1 to 1) so background glows can drift with it. */
function PointerParallax() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const root = document.documentElement
    let raf = 0
    let x = 0
    let y = 0
    const move = (e: PointerEvent) => {
      x = (e.clientX / window.innerWidth) * 2 - 1
      y = (e.clientY / window.innerHeight) * 2 - 1
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0
          root.style.setProperty('--px', x.toFixed(3))
          root.style.setProperty('--py', y.toFixed(3))
        })
      }
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      window.removeEventListener('pointermove', move)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return null
}

export default PointerParallax
