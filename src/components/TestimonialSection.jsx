'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';


/* ---------- your data (unchanged) ---------- */
const testimonials = [
  {
    quote:
      "This is my first visit in Avatarluxe I came here to remove my tattoos the welcome & respects I got from the staff & Doc it’s really awesome..",
    name: "Milton Chakma",
    title: "Tattoo Removal",
    image: "/images/Testimonial/Milton-Chakma.webp",
  },
  {
    quote:
      "This was my first time in getting a hydra facial done I have always been wanting to get it done. So happy I chose Avatarluxe for it.",
    name: "Shruti Bhat",
    title: "Hydra Facial",
    image: "/images/Testimonial/Shruti-Bhat.webp",
  },
  {
    quote:
      "Was clearly explained about my hair loss condition & justified the solution provided. Extremely satisfied with the treatment. The clinic looks and feels extremely luxurious yet affordable.",
    name: "Pravesh Kumar",
    title: "Hair Treatment",
    image: "/images/Testimonial/Pravesh-Kumar.webp",
  },
];
/* ------------------------------------------ */

/* clamp helper */
const clamp = (v, a, b) => Math.min(Math.max(v, a), b);

export default function SingleTallSectionObserver() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const refs = useRef([]); // testimonial refs
  const sectionRef = useRef(null); // section DOM node
  const stackRef = useRef(null); // the fixed stack DOM node
  const [showFixed, setShowFixed] = useState(false);
  const [visible, setVisible] = useState(false); // handy for CSS fade

  const vhPerTestimonial = 100;
  const totalVH = testimonials.length * vhPerTestimonial;

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);

  /* active index detection (same approach you had) */
  useEffect(() => {
    refs.current = refs.current.slice(0, testimonials.length);
    const thresholds = [0, 0.25, 0.5, 0.75, 1];

    const observer = new IntersectionObserver(
      () => {
        let maxRatio = 0;
        let maxIndex = -1;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        refs.current.forEach((el, idx) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const elHeight = rect.height || 1;
          const visibleTop = Math.max(rect.top, 0);
          const visibleBottom = Math.min(rect.bottom, viewportHeight);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const ratio = visibleHeight / elHeight;
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxIndex = idx;
          }
        });

        if (maxRatio >= 0.5 && maxIndex !== -1) {
          setActiveIndex(maxIndex);
        } else {
          setActiveIndex(-1);
        }
      },
      { threshold: thresholds }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    // also run initial check & on resize/scroll for snappy behaviour
    const computeAndSet = () => {
      let maxRatio = 0;
      let maxIndex = -1;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      refs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elHeight = rect.height || 1;
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const ratio = visibleHeight / elHeight;
        if (ratio > maxRatio) {
          maxRatio = ratio;
          maxIndex = idx;
        }
      });

      if (maxRatio >= 0.5 && maxIndex !== -1) {
        setActiveIndex(maxIndex);
      } else {
        setActiveIndex(-1);
      }
    };

    let rafId = null;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        computeAndSet();
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    computeAndSet();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  /* show fixed stack when section intersects viewport (small threshold) */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        // toggle showFixed when a small part of the section is visible
        setShowFixed(e.intersectionRatio >= 0.02);
      },
      { threshold: [0, 0.01, 0.02, 0.05] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* compute and clamp fixed stack position using DOCUMENT coordinates (robust) */
  useEffect(() => {
    const computeAndApply = () => {
      const sec = sectionRef.current;
      const stack = stackRef.current;
      if (!sec || !stack || typeof window === 'undefined') return;

      // section rect relative to viewport
      const secRect = sec.getBoundingClientRect();
      // document Y of section top/bottom:
      const secTopDoc = secRect.top + window.scrollY;
      const secBottomDoc = secRect.bottom + window.scrollY;

      const stackH = stack.offsetHeight;
      const viewportH = window.innerHeight || document.documentElement.clientHeight;

      // desired document Y to centre stack in viewport:
      const desiredDocY = window.scrollY + Math.round((viewportH - stackH) / 2);

      // clamp to section bounds in document coords:
      const minDocY = secTopDoc;
      const maxDocY = secBottomDoc - stackH;

      // final doc Y (clamped)
      const finalDocY = clamp(desiredDocY, minDocY, maxDocY);

      // convert to viewport top for style.top (px relative to viewport)
      const topForViewport = finalDocY - window.scrollY;

      // apply to DOM (fast, no state, in rAF)
      stack.style.top = `${Math.round(topForViewport)}px`;
    };

    let raf = null;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        computeAndApply();
        raf = null;
      });
    };

    // apply now and add listeners while fixed is shown
    if (showFixed) {
      computeAndApply();
      setVisible(true); // enable fade-in
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
    } else {
      // hide immediately (stack not rendered or will be sticky mobile)
      setVisible(false);
      if (stackRef.current) stackRef.current.style.top = '';
      // remove listeners
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [showFixed]); // re-run when showFixed toggles

  return (
    <main className="bg-black text-white">
      <section className="relative" ref={sectionRef}>
        <div style={{ height: `${isMobile ? "auto" : totalVH + "vh"}` }}>
          <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6">
            {/* LEFT: tall flow */}
            <div className="col-span-12 md:col-span-8">
              <div style={{ height: `${totalVH}vh` }}>
                {testimonials.map((t, i) => (
                  <FlowTestimonial
                    key={i}
                    testimonial={t}
                    index={i}
                    vhPerTestimonial={vhPerTestimonial}
                    innerRef={(el) => (refs.current[i] = el)}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT: sticky on mobile, fixed (conditionally) on desktop */}
            <div className="col-span-12 md:col-span-4 relative">
              {/* Desktop: render fixed stack only when showFixed is true.
                  top is set by JS (stackRef.style.top), we control visibility via opacity. */}
              {showFixed && (
                <div
                  ref={stackRef}
                  className="hidden md:flex fixed right-20 z-50 flex-col items-center gap-8"
                  style={{
                    top: 0, // will be overwritten by JS
                    transition: 'opacity 200ms ease, transform 160ms ease',
                    opacity: visible ? 1 : 0,
                    pointerEvents: visible ? 'auto' : 'none',
                  }}
                >
                  {testimonials.map((t, i) => (
                    <RightImage key={i} src={t.image} alt={t.name} isActive={i === activeIndex} />
                  ))}
                </div>
              )}

              {/* Mobile fallback: sticky inside column so it scrolls with section (no fixed behaviour) */}
              <div className="md:hidden sticky top-20 flex flex-col items-center gap-8">
                {testimonials.map((t, i) => (
                  <RightImage key={i} src={t.image} alt={t.name} isActive={i === activeIndex} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* FlowTestimonial: each full-viewport testimonial block */
function FlowTestimonial({ testimonial, index, vhPerTestimonial, innerRef }) {
  return (
    <section
      ref={innerRef}
      data-idx={index}
      style={{ minHeight: `${vhPerTestimonial}vh` }}
      className="flex items-center px-6 md:px-12 lg:px-20 border-b border-neutral-800"
    >
      <div className="w-full">
        <p className="text-[4vw] md:text-[3vw] lg:text-[3.5vw] leading-[0.95] font-light">
          “{testimonial.quote}”
        </p>

        <div className="mt-8">
          <h4 className="font-semibold">{testimonial.name}</h4>
          {/* title in gold */}
          <p className="text-[#D4AF37]">{testimonial.title}</p>
        </div>
      </div>
    </section>
  );
}

/* RightImage: avatar with active/inactive animation.
   Active: 5px #D4AF37 border.
   Inactive: 2px subtle white border.
*/
function RightImage({ src, alt, isActive }) {
  const variants = {
    inactive: { scale: 0.85, filter: 'brightness(60%)', opacity: 0.85 },
    active: { scale: 1.18, filter: 'brightness(100%)', opacity: 1 },
  };

  // border values for active / inactive
  const borderColor = isActive ? '#D4AF37' : 'rgba(255,255,255,0.12)';
  const borderWidth = isActive ? 3 : 2;

  return (
    <motion.img
      src={src}
      alt={alt}
      className="rounded-full object-cover"
      style={{
        borderStyle: 'solid',
        borderColor,
        borderWidth,
        boxShadow: isActive ? '0 10px 30px rgba(217,174,105,0.12)' : 'none',
      }}
      variants={variants}
      initial="inactive"
      animate={isActive ? 'active' : 'inactive'}
      transition={{ duration: 0.35, ease: [0.2, 0.9, 0.3, 1] }}
    />
  );
}
