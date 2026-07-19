"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export function BeforeAfterSlider({
  beforeSrc = "/images/hair-treatment/hair-before.webp",
  afterSrc = "/images/hair-treatment/hair-after.webp",
  beforeAlt = "Before hair transplant",
  afterAlt = "After hair transplant",
  className = "",
  fill = false,
  priority = false,
}) {
  const sliderRef = useRef(null);
  const [revealPct, setRevealPct] = useState(50);
  const [showHint, setShowHint] = useState(true);
  const dragging = useRef(false);

  const setFromClientX = (clientX) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    setRevealPct(pct);
  };

  const onPointerDown = (e) => {
    dragging.current = true;
    setShowHint(false);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={sliderRef}
      className={`relative cursor-ew-resize overflow-hidden bg-zinc-900 select-none ${
        fill ? "absolute inset-0 h-full w-full" : "aspect-[4/5] rounded border border-[#D4AF37]/15"
      } ${className}`}
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      onMouseLeave={onPointerUp}
      onTouchStart={(e) => {
        dragging.current = true;
        setShowHint(false);
        setFromClientX(e.touches[0].clientX);
      }}
      onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
      onTouchEnd={onPointerUp}
    >
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 40vw"
        priority={priority}
      />

      <div
        className="absolute inset-0 overflow-hidden border-r-2 border-[#D4AF37]"
        style={{ clipPath: `inset(0 ${100 - revealPct}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority={priority}
        />
      </div>

      <div
        className="absolute top-1/2 z-10 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-black bg-[#D4AF37] text-sm font-bold text-black"
        style={{ left: `${revealPct}%` }}
      >
        ⟷
      </div>

      <span className="absolute bottom-18 left-4 z-10 rounded bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.18em]">
        Before
      </span>
      <span className="absolute bottom-18 right-4 z-10 rounded bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.18em]">
        After
      </span>

      {showHint && (
        <span className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded bg-black/50 px-3.5 py-1.5 text-[11px] tracking-wider text-white/50">
          Drag to reveal
        </span>
      )}
    </div>
  );
}
