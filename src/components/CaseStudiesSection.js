'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const CASE_STUDY_IMAGE_SIZES = '(max-width: 768px) 100vw, 50vw'

const FILM_GRAIN_BG =
  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/%3E%3C/svg%3E")'

/* ---------- data ---------- */
const caseStudies = [
  {
    beforeimage: '/images/home/case-studies/Zainab-before.webp',
    afterimage: '/images/home/case-studies/Zainab-after.webp',
    title: 'Zainab',
    service: 'Hydra Facial',
    para:
      'Achieving radiant, hydrated skin starts with the right care. Zainab’s skin was treated using our advanced Hydra Facial protocol, targeting dullness, uneven texture, and dehydration. With deep cleansing, exfoliation, and intense hydration, her skin now appears visibly brighter, smoother, and refreshed—restoring a natural, healthy glow.' },
  {
    beforeimage: '/images/home/case-studies/dr-atul-before.webp',
    afterimage: '/images/home/case-studies/dr-atul-new-after.webp',
    title: 'Dr. Atul',
    service: 'Hair Transplant',
    para:
      'Precision and natural results were the focus of Dr. Atul’s hair restoration journey. Using advanced hair transplant techniques, we carefully redesigned the hairline and improved density in thinning areas. The result is a fuller, natural-looking hairline that enhances overall appearance and confidence.'},
  {
    beforeimage: '/images/home/case-studies/divya-before.webp',
    afterimage: '/images/home/case-studies/divya-after.webp',
    title: 'Divya',
    service: 'Hair Transplant',
    para:
      'Hair thinning can impact both appearance and confidence. For Divya, we addressed visible scalp exposure and low density with a customized hair transplant solution. The transformation shows significantly improved coverage and volume, delivering a natural look that blends seamlessly with existing hair.'},
  {
    beforeimage: '/images/home/case-studies/arun-before.webp',
    afterimage: '/images/home/case-studies/arun-after.webp',
    title: 'Arun Roberts',
    service: 'Hair Transplant',
    para:
      'Arun’s case focused on restoring hairline definition and improving side density. With meticulous graft placement and a personalized approach, we achieved a sharper, fuller hairline while maintaining a completely natural finish. The result is a well-balanced look that complements his facial features.'},
]

/* ---------------- SplitReveal (keeps your functionality from Code 2) ---------------- */
function SplitReveal({ before, after, priority = false }) {
  const DIVIDER_PX = 3
  const GOLD = '#D4AF37'

  const containerRef = useRef(null)
  const overlayRef = useRef(null)
  const dividerRef = useRef(null)
  const handleRef = useRef(null)
  const tooltipRef = useRef(null)
  const beforeWrapRef = useRef(null)
  const afterWrapRef = useRef(null)

  // refs for performance
  const posRef = useRef(0.5)
  const rafRef = useRef(null)
  const rectRef = useRef({ left: 0, width: 1 })
  const isDraggingRef = useRef(false)
  const hoverScrubRef = useRef(false)

  const [posState, setPosState] = useState(50)
  const [showPulse, setShowPulse] = useState(true)
  const [showTooltip, setShowTooltip] = useState(true)

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const applyDOM = () => {
    const pos = posRef.current
    const pct = pos * 100

    if (overlayRef.current) {
      overlayRef.current.style.width = `${pct}%`
      overlayRef.current.style.transition = isDraggingRef.current ? 'none' : reduceMotion ? 'none' : 'width 120ms linear'
      overlayRef.current.style.willChange = 'width'
    }

    if (dividerRef.current) {
      dividerRef.current.style.left = `${pct}%`
      dividerRef.current.style.transform = 'translateX(-50%)'
      dividerRef.current.style.transition = isDraggingRef.current ? 'none' : reduceMotion ? 'none' : 'transform 120ms linear'
    }

    const handleLeftCalc = `calc(${pct}% - ${DIVIDER_PX / 2}px)`

    if (handleRef.current) {
      handleRef.current.style.left = handleLeftCalc
      handleRef.current.style.transform = 'translate(-50%, -50%)'
      handleRef.current.style.transition = isDraggingRef.current ? 'none' : reduceMotion ? 'none' : 'transform 120ms linear'
      handleRef.current.style.willChange = 'transform'
    }

    if (tooltipRef.current) {
      tooltipRef.current.style.left = handleLeftCalc
      tooltipRef.current.style.transform = 'translate(-50%, 0)'
      tooltipRef.current.style.transition = isDraggingRef.current ? 'none' : 'opacity 240ms ease'
    }

    rafRef.current = null
  }

  const scheduleApply = () => {
    if (rafRef.current == null) rafRef.current = requestAnimationFrame(applyDOM)
  }

  const updateRect = () => {
    const el = containerRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    rectRef.current.left = r.left
    rectRef.current.width = r.width || 1
  }

  useEffect(() => {
    let raf = null
    const onResize = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        updateRect()
        raf = null
      })
    }
    window.addEventListener('resize', onResize)
    updateRect()
    return () => {
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    posRef.current = 0.5
    setPosState(50)
    applyDOM()
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  /* Drag handling (knob) */
  useEffect(() => {
    const handleEl = handleRef.current
    const containerEl = containerRef.current
    if (!handleEl || !containerEl) return

    let pointerId = null

    const clientXToPos = (clientX) => {
      const { left, width } = rectRef.current
      let x = (clientX - left) / width
      x = Math.max(0, Math.min(1, x))
      posRef.current = x
      scheduleApply()
    }

    const onPointerDown = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      e.preventDefault()
      e.stopPropagation()

      setShowPulse(false)
      setShowTooltip(false)

      updateRect()
      pointerId = e.pointerId
      isDraggingRef.current = true

      try {
        handleEl.setPointerCapture(pointerId)
      } catch (err) {}

      clientXToPos(e.clientX)

      const onDocMove = (ev) => {
        ev.preventDefault()
        clientXToPos(ev.clientX)
      }
      const onDocUp = (ev) => {
        ev.preventDefault()
        try {
          handleEl.releasePointerCapture && handleEl.releasePointerCapture(pointerId)
        } catch (err) {}
        isDraggingRef.current = false
        setPosState(Math.round(posRef.current * 100))
        document.removeEventListener('pointermove', onDocMove, { passive: false })
        document.removeEventListener('pointerup', onDocUp)
      }

      document.addEventListener('pointermove', onDocMove, { passive: false })
      document.addEventListener('pointerup', onDocUp)
    }

    handleEl.addEventListener('pointerdown', onPointerDown)
    return () => {
      handleEl.removeEventListener('pointerdown', onPointerDown)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [])

  /* Keyboard */
  useEffect(() => {
    const onKey = (e) => {
      if (document.activeElement !== handleRef.current) return
      if (showPulse) setShowPulse(false)
      if (showTooltip) setShowTooltip(false)

      if (e.key === 'ArrowLeft') {
        posRef.current = Math.max(0, posRef.current - 0.05)
        scheduleApply()
        setPosState(Math.round(posRef.current * 100))
        e.preventDefault()
      } else if (e.key === 'ArrowRight') {
        posRef.current = Math.min(1, posRef.current + 0.05)
        scheduleApply()
        setPosState(Math.round(posRef.current * 100))
        e.preventDefault()
      } else if (e.key === 'Home') {
        posRef.current = 0
        scheduleApply()
        setPosState(0)
        e.preventDefault()
      } else if (e.key === 'End') {
        posRef.current = 1
        scheduleApply()
        setPosState(100)
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showPulse, showTooltip])

  /* Parallax + hover scrub */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let raf = null
    const onPointerMove = (e) => {
      const rect = el.getBoundingClientRect()
      const localX = e.clientX - rect.left
      const localY = e.clientY - rect.top
      const nx = (localX / rect.width) * 2 - 1
      const ny = (localY / rect.height) * 2 - 1

      const px = nx * 6
      const py = ny * 6
      if (beforeWrapRef.current) beforeWrapRef.current.style.transform = `translate(${px}px, ${py}px) scale(1.02)`
      if (afterWrapRef.current) afterWrapRef.current.style.transform = `translate(${px * 0.6}px, ${py * 0.6}px) scale(1.015)`

      if (!isDraggingRef.current && !hoverScrubRef.current) {
        hoverScrubRef.current = true
        updateRect()
      }

      if (!isDraggingRef.current && hoverScrubRef.current) {
        const x = Math.max(0, Math.min(1, localX / rect.width))
        posRef.current = x
        scheduleApply()
        setPosState(Math.round(x * 100))
      }

      if (!raf) raf = requestAnimationFrame(() => {
        raf = null
      })
    }

    const onPointerLeave = () => {
      if (beforeWrapRef.current) beforeWrapRef.current.style.transform = ''
      if (afterWrapRef.current) afterWrapRef.current.style.transform = ''
      hoverScrubRef.current = false
      posRef.current = parseFloat((posState / 100).toFixed(2)) || 0.5
      scheduleApply()
    }

    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerleave', onPointerLeave)
    return () => {
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerleave', onPointerLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [posState])

  const sameImage = before === after

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none rounded-lg overflow-hidden bg-neutral-900"
      aria-hidden={sameImage}
    >

    {/* BEFORE label */}
      <div className="absolute top-3 left-3 z-50 bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded">
        Before
      </div>

      {/* AFTER label */}
      <div className="absolute top-3 right-3 z-50 bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded">
        After
      </div>

      {/* AFTER */}
      <div className="absolute inset-0 z-10">
        <div ref={afterWrapRef} className="absolute inset-0 transition-transform will-change-transform">
          <Image
            src={after}
            alt="after"
            fill
            sizes={CASE_STUDY_IMAGE_SIZES}
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            className="object-cover object-[60%_30%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: FILM_GRAIN_BG, backgroundSize: '300px' }} />
      </div>

      {/* BEFORE overlay */}
      <div ref={overlayRef} className="absolute inset-0 z-20 overflow-hidden" style={{ width: '50%' }}>
        <div ref={beforeWrapRef} className="absolute inset-0 transition-transform will-change-transform">
          <Image
            src={before}
            alt="before"
            fill
            sizes={CASE_STUDY_IMAGE_SIZES}
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/30 mix-blend-multiply" />
      </div>

      {/* divider */}
      <div
        ref={dividerRef}
        className="absolute top-0 bottom-0 z-40 pointer-events-none"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          width: `${DIVIDER_PX}px`,
          background: 'rgba(255,255,255,0.06)',
          boxShadow: '0 0 8px rgba(0,0,0,0.6)',
          borderRadius: `${DIVIDER_PX / 2}px`,
        }}
      />

      {/* knob */}
      <button
        ref={handleRef}
        role="slider"
        aria-label="Before / After slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={posState}
        className="absolute top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-50 focus:outline-none"
        style={{
          left: `calc(50% - ${DIVIDER_PX / 2}px)`,
          width: 64,
          height: 64,
          background: 'linear-gradient(180deg,#0b0b0b,#111)',
          borderRadius: 9999,
          touchAction: 'none',
          boxShadow: '0 10px 28px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.02)',
          border: `2px solid rgba(217, 174, 105, 0.06)`,
        }}
        onPointerDown={() => { isDraggingRef.current = true }}
        onPointerUp={() => { isDraggingRef.current = false }}
      >
        <div className={`w-14 h-14 rounded-full overflow-hidden flex items-center justify-center ${showPulse ? 'pulse-hint' : ''}`} style={{ border: `2px solid ${GOLD}22`, padding: 2 }}>
          <Image src="/images/home/case-studies/avatar-logo.webp" alt="knob" width={52} height={52} className="object-cover rounded-full" />
        </div>
      </button>

      {/* tooltip */}
      <div
        ref={tooltipRef}
        className={`absolute -top-12 -translate-x-1/2 px-3 py-1 rounded-full text-xs text-white bg-black/80 pointer-events-none transition-opacity duration-300 ${showTooltip ? 'opacity-100' : 'opacity-0' } z-50`}
        style={{ left: `calc(50% - ${DIVIDER_PX / 2}px)` }}
        aria-hidden={!showTooltip}
      >
        Drag to compare
      </div>

      <style jsx>{`
        @keyframes subtlePulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.06); opacity: 0.95; }
          100% { transform: scale(1); opacity: 1; }
        }
        .pulse-hint { animation: subtlePulse 1.6s ease-in-out 0.2s infinite; }
      `}</style>
    </div>
  )
}

/* -------------------- Main component: design from Code 2 + sticky mapping from Code 1 + clamped indicator -------------------- */
export default function CaseStudiesScrolly() {
  const [current, setCurrent] = useState(0)
  const [showProgress, setShowProgress] = useState(false)
  const sectionRef = useRef(null)
  const slideRefs = useRef([])
  const indicatorRef = useRef(null) // ref for the fixed/clamped indicator

  useEffect(() => {
    // keep refs array in sync
    slideRefs.current = slideRefs.current.slice(0, caseStudies.length)
    const observers = []

    slideRefs.current.forEach((el, idx) => {
      if (!el) return
      // threshold similar to working code previously
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
              setCurrent(idx)
            }
          })
        },
        { root: null, threshold: [0.45] }
      )
      io.observe(el)
      observers.push(io)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // show/hide progress indicator only while the section is in view
  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setShowProgress(entry.isIntersecting && entry.intersectionRatio > 0.01))
      },
      { threshold: [0, 0.01] }
    )
    io.observe(sec)
    return () => io.disconnect()
  }, [])

  const pad = (n) => String(n + 1).padStart(2, '0')

  const scrollToSlide = (idx) => {
    const el = slideRefs.current[idx]
    if (!el) return
    // align slide top with sticky offset (top-20)
    const topOffset = 80 // approx top-20 (adjust if needed)
    const top = el.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: top - topOffset, behavior: 'smooth' })
  }

  // clamp the fixed indicator so it stays inside the section vertical bounds
  useEffect(() => {
    const sec = sectionRef.current
    const indicator = indicatorRef.current
    if (!sec || !indicator) return

    let rafId = null
    const update = () => {
      const secRect = sec.getBoundingClientRect()
      const viewportH = window.innerHeight
      const desiredCenter = viewportH / 2

      // padding to keep the indicator from touching exact edges
      const padding = 24 // px - adjust for visual spacing

      // compute min and max center positions that keep the indicator inside section
      const minCenter = Math.max(padding, secRect.top + padding)
      const maxCenter = Math.min(viewportH - padding, secRect.bottom - padding)

      // clamp the center
      const clampedCenter = Math.max(minCenter, Math.min(maxCenter, desiredCenter))

      // set top for the fixed element so its center aligns to clampedCenter
      indicator.style.top = `${clampedCenter}px`

      rafId = null
    }

    const onScrollOrResize = () => {
      if (rafId == null) rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    update()

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [showProgress])

  return (
    <section ref={sectionRef} className="relative bg-black text-white">
      {/* Left fixed progress indicator — only while this section is in view.
          indicatorRef is used to clamp position so it never visually overflows the section */}
      {showProgress && (
        <div
          ref={indicatorRef}
          className="fixed left-6 z-50 hidden md:flex"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-start">
              <div className="text-sm text-neutral-400">Case</div>
              <div className="text-3xl font-semibold tracking-widest leading-none mt-1">{pad(current)}</div>
              <div className="text-sm text-neutral-500 mt-1">/ {String(caseStudies.length).padStart(2, '0')}</div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all ${current === i ? 'bg-[#D4AF37] scale-110' : 'bg-neutral-700 hover:bg-neutral-500'}`}
                  aria-label={`Go to case ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Slides: each slide container is sticky (like your Code 1 behaviour) */}
      <div className="space-y-20">
        {caseStudies.map((item, index) => {
          const isReversed = index % 2 === 1
          return (
            <div
              key={index}
              ref={(el) => (slideRefs.current[index] = el)}
              className="sticky top-20 h-[80vh] flex items-center justify-center px-4 md:px-10"
              style={{ zIndex: index + 1 }}
            >
              <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row pt-5" style={{ minHeight: 450 }}>
                {/* Text */}
                <div className={`relative flex flex-col justify-center px-8 md:px-12 py-10 md:py-14 w-full md:w-2/5 ${isReversed ? 'order-2 md:order-1' : 'order-1'}`}>
                  <div className="absolute -top-6 left-8 text-[160px] font-serif text-white/6 leading-none select-none z-0">“</div>

                  <div className="relative z-10 max-w-[46ch]">
                    <h2 className="text-4xl md:text-5xl font-normal text-white leading-tight">{item.title}</h2>

                    {item.service && (
                      <div className="inline-block mt-4 px-4 py-1 rounded-full border text-xs tracking-wide uppercase font-medium" style={{ borderColor: '#3f3f3f', color: '#D4AF37' }}>
                        {item.service}
                      </div>
                    )}

                    {item.para && (
                      <p className="mt-6 text-lg text-neutral-300 leading-relaxed">{item.para}</p>
                    )}

                    <div className="mt-8 flex gap-4 items-center">
                      <button className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold text-black bg-neutral-100 border border-neutral-700 shadow-sm hover:translate-y-[-1px] transition">
                        Explore <span className="text-lg">→</span>
                      </button>

                      <div className="text-sm text-neutral-400">Case {index + 1} of {caseStudies.length}</div>
                    </div>
                  </div>
                </div>

                {/* Media */}
                <div className={`flex items-center justify-center p-6 md:p-8 w-full md:w-3/5 ${isReversed ? 'order-1 md:order-2' : 'order-2'}`}>
                  <div className="w-full h-full rounded-xl overflow-hidden border border-neutral-800 shadow-inner" style={{ maxWidth: 820 }}>
                    <div className="w-full h-full p-3 bg-neutral-900">
                      <div className="w-full h-full rounded-md overflow-hidden bg-neutral-800">
                        <SplitReveal before={item.beforeimage} after={item.afterimage} priority={index === 0} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* accent */}
                <div className="absolute left-8 bottom-6 h-px w-28 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent rounded" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
