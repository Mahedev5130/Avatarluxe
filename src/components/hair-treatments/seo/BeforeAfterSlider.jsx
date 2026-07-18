"use client";

import { useRef, useState } from "react";

export function BeforeAfterSlider() {
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
      className="relative aspect-[4/5] cursor-ew-resize overflow-hidden rounded border border-[#D4AF37]/15 bg-zinc-900 select-none"
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
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-900 to-zinc-800">
        <span className="text-4xl opacity-20">🧑</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Before Hair Transplant</span>
      </div>

      <div className="absolute inset-0 overflow-hidden border-r-2 border-[#D4AF37]" style={{ width: `${revealPct}%` }}>
        <div className="absolute inset-0 flex min-w-[600%] flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-950 to-emerald-950/40">
          <span className="text-4xl opacity-20">😊</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">After Hair Restoration</span>
        </div>
        <div className="absolute top-1/2 right-0 flex size-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border-[3px] border-black bg-[#D4AF37] text-sm font-bold text-black">
          ⟷
        </div>
      </div>

      <span className="absolute bottom-4 left-4 rounded bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.18em]">Before</span>
      <span className="absolute bottom-4 right-4 rounded bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.18em]">After</span>

      {showHint && (
        <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-black/50 px-3.5 py-1.5 text-[11px] tracking-wider text-white/50">
          Drag to reveal
        </span>
      )}
    </div>
  );
}
