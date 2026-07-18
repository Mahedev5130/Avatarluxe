'use client';

import React, { useRef, useLayoutEffect, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScrollCarousel = ({
  items = [],
  cardWidth = 320,
  cardGap = 40,
  title,
  subtitle,
  extraPx = 20, // small safety buffer so the end isn't clipped
}) => {
  const targetRef = useRef(null);   // tall section that drives scroll
  const containerRef = useRef(null); // sticky container (page-level)
  const viewportRef = useRef(null);  // <-- the actual visible viewport (max-w wrapper)
  const contentRef = useRef(null);   // horizontal row

  const [maxX, setMaxX] = useState(0); // negative px
  const [sectionHeightPx, setSectionHeightPx] = useState(0);
  const [measured, setMeasured] = useState(false);

  // framer hook referencing the tall section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // map progress to px translation (0 -> maxX)
  const x = useTransform(scrollYProgress, [0, 1], [0, maxX]);

  // wait for images in content to load (with timeout fallback)
  const waitForImages = useCallback((timeout = 2500) => {
    return new Promise((resolve) => {
      const content = contentRef.current;
      if (!content) return resolve();

      const imgs = Array.from(content.querySelectorAll('img'));
      if (imgs.length === 0) return resolve();

      let finished = false;
      let remaining = imgs.length;

      const checkOne = () => {
        remaining = Math.max(0, remaining - 1);
        if (remaining === 0 && !finished) {
          finished = true;
          resolve();
        }
      };

      imgs.forEach((img) => {
        if (img.complete && img.naturalWidth !== 0) {
          checkOne();
        } else {
          img.addEventListener('load', checkOne, { once: true });
          img.addEventListener('error', checkOne, { once: true });
        }
      });

      // safety timeout in case images never fire events
      setTimeout(() => {
        if (!finished) {
          finished = true;
          resolve();
        }
      }, timeout);
    });
  }, []);

  // measure using the viewport ref (the element that actually clips the horizontal content)
  const measure = useCallback(async () => {
    if (!viewportRef.current || !contentRef.current || !targetRef.current) return;

    // wait images (so scrollWidth is accurate)
    await waitForImages(3000);

    const viewportW = viewportRef.current.clientWidth;  // the visible width (important)
    const viewportH = viewportRef.current.clientHeight; // visible height
    const contentW = contentRef.current.scrollWidth;    // total width of the horizontal items

    const overflow = Math.max(0, contentW - viewportW); // px that content needs to move
    const computedMaxX = -overflow; // negative or 0

    // vertical height should be visible viewport height + horizontal overflow
    const computedTotalHeightPx = Math.max(viewportH, Math.round(viewportH + overflow + extraPx));

    setMaxX(computedMaxX);
    setSectionHeightPx(computedTotalHeightPx);
    setMeasured(true);
  }, [waitForImages, extraPx]);

  // initial measure + re-measure on resize / DOM changes
  useLayoutEffect(() => {
    measure();

    const ro = new ResizeObserver(() => {
      // remeasure when layout changes
      measure();
    });

    if (viewportRef.current) ro.observe(viewportRef.current);
    if (contentRef.current) ro.observe(contentRef.current);
    if (targetRef.current) ro.observe(targetRef.current);

    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [items, cardWidth, cardGap, measure]);

  // re-measure when images are lazy-loaded later
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    const imgs = Array.from(content.querySelectorAll('img'));
    const onImgEvent = () => measure();
    imgs.forEach((img) => {
      img.addEventListener('load', onImgEvent);
      img.addEventListener('error', onImgEvent);
    });
    return () => {
      imgs.forEach((img) => {
        img.removeEventListener('load', onImgEvent);
        img.removeEventListener('error', onImgEvent);
      });
    };
  }, [items, measure]);

  // until measured, fall back to vh-height to avoid collapse
  const sectionStyle = sectionHeightPx ? { height: `${sectionHeightPx}px` } : { height: `${Math.max(1, items.length * 100)}vh` };

  return (
    <section ref={targetRef} className="relative bg-black text-white" style={sectionStyle}>
      <div
        className="sticky top-16 flex flex-col items-center space-y-5 px-6 md:px-16 pb-24"
        ref={containerRef}
      >
        {/* Title */}
           {subtitle && (
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] text-center mb-5">
          {subtitle}
        </p>
        )}

        {title && (
    
          <h2 className=" text-3xl sm:text-5xl text-center fadeUp mb-5">
               {title}
            </h2>
        )}

        {/* VISIBLE viewport (this is what we measure) */}
        <div className="w-full max-w-[1400px] flex items-center overflow-hidden mt-6" ref={viewportRef}>
          <motion.div ref={contentRef} style={{ x }} className="flex">
            {items.map((item, idx) => (
              <motion.div
                key={item.id ?? idx}
                style={{
                  minWidth: `${cardWidth}px`,
                  marginRight: idx === items.length - 1 ? 0 : `${cardGap}px`,
                }}
                className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/10 border border-white/10 bg-black/10 shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
                tabIndex={0}
                aria-label={item.name}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              >
                <div className="w-full aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Frosted caption */}
                <div className="absolute left-4 right-4 bottom-4 rounded-xl px-6 py-3 bg-black/40 backdrop-blur-sm border border-white/10">
                  <div className="text-lg md:text-xl font-semibold text-white/95">
                    {item.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* optional debug info (remove in production) */}
      {/* <div className="fixed left-4 bottom-4 z-50 text-xs text-white/80">
        <div>measured: {measured ? 'yes' : 'no'}</div>
        <div>maxX: {maxX}px</div>
        <div>sectionHeight: {sectionHeightPx}px</div>
      </div> */}
    </section>
  );
};

export default HorizontalScrollCarousel;
