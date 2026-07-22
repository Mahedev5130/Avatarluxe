"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGE_SIZES = "(max-width: 1024px) 100vw, 40vw";
const DIVIDER_PX = 3;
const GOLD = "#D4AF37";

export function BeforeAfterSlider({
  beforeSrc = "/images/hair-treatment/hair-before.webp",
  afterSrc = "/images/hair-treatment/hair-after.webp",
  beforeAlt = "Before hair transplant",
  afterAlt = "After hair transplant",
  className = "",
  fill = false,
  priority = false,
}) {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const dividerRef = useRef(null);
  const handleRef = useRef(null);
  const posRef = useRef(0.5);
  const rafRef = useRef(null);
  const rectRef = useRef({ left: 0, width: 1 });
  const isDraggingRef = useRef(false);

  const [posState, setPosState] = useState(50);
  const [showPulse, setShowPulse] = useState(true);

  const applyDOM = () => {
    const pct = posRef.current * 100;

    if (overlayRef.current) {
      overlayRef.current.style.width = `${pct}%`;
    }
    if (dividerRef.current) {
      dividerRef.current.style.left = `${pct}%`;
    }
    if (handleRef.current) {
      handleRef.current.style.left = `calc(${pct}% - ${DIVIDER_PX / 2}px)`;
    }
    rafRef.current = null;
  };

  const scheduleApply = () => {
    if (rafRef.current == null) rafRef.current = requestAnimationFrame(applyDOM);
  };

  const updateRect = () => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rectRef.current.left = r.left;
    rectRef.current.width = r.width || 1;
  };

  useEffect(() => {
    updateRect();
    applyDOM();
    const onResize = () => updateRect();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const handleEl = handleRef.current;
    if (!handleEl) return;

    const clientXToPos = (clientX) => {
      const { left, width } = rectRef.current;
      posRef.current = Math.max(0, Math.min(1, (clientX - left) / width));
      scheduleApply();
    };

    const onPointerDown = (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      setShowPulse(false);
      updateRect();
      isDraggingRef.current = true;
      try {
        handleEl.setPointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
      clientXToPos(e.clientX);

      const onDocMove = (ev) => {
        ev.preventDefault();
        clientXToPos(ev.clientX);
      };
      const onDocUp = () => {
        isDraggingRef.current = false;
        setPosState(Math.round(posRef.current * 100));
        document.removeEventListener("pointermove", onDocMove);
        document.removeEventListener("pointerup", onDocUp);
      };

      document.addEventListener("pointermove", onDocMove, { passive: false });
      document.addEventListener("pointerup", onDocUp);
    };

    handleEl.addEventListener("pointerdown", onPointerDown);
    return () => handleEl.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden bg-zinc-900 ${
        fill
          ? "absolute inset-0 h-full w-full"
          : "aspect-[4/5] rounded border border-[#D4AF37]/15"
      } ${className}`}
    >
      <div className="absolute top-3 left-3 z-50 rounded bg-black/80 px-3 py-1 text-xs font-semibold text-white">
        Before
      </div>
      <div className="absolute top-3 right-3 z-50 rounded bg-black/80 px-3 py-1 text-xs font-semibold text-white">
        After
      </div>

      <div className="absolute inset-0 z-10">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes={IMAGE_SIZES}
          priority={priority}
          className="object-cover object-[60%_30%]"
        />
      </div>

      <div
        ref={overlayRef}
        className="absolute inset-0 z-20 overflow-hidden"
        style={{ width: "50%" }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes={IMAGE_SIZES}
          priority={priority}
          className="object-cover"
        />
      </div>

      <div
        ref={dividerRef}
        className="pointer-events-none absolute top-0 bottom-0 z-40"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          width: `${DIVIDER_PX}px`,
          background: "rgba(255,255,255,0.06)",
          boxShadow: "0 0 8px rgba(0,0,0,0.6)",
        }}
      />

      <button
        ref={handleRef}
        type="button"
        role="slider"
        aria-label="Before / After slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={posState}
        className="absolute top-1/2 z-50 flex items-center justify-center rounded-full focus:outline-none"
        style={{
          left: `calc(50% - ${DIVIDER_PX / 2}px)`,
          width: 64,
          height: 64,
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(180deg,#0b0b0b,#111)",
          touchAction: "none",
          boxShadow:
            "0 10px 28px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.02)",
          border: "2px solid rgba(217, 174, 105, 0.06)",
        }}
      >
        <div
          className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-full ${
            showPulse ? "animate-[icon-soft_1.6s_ease-in-out_infinite]" : ""
          }`}
          style={{ border: `2px solid ${GOLD}22`, padding: 2 }}
        >
          <Image
            src="/images/home/case-studies/avatar-logo.webp"
            alt=""
            width={52}
            height={52}
            className="rounded-full object-cover"
          />
        </div>
      </button>
    </div>
  );
}
