"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { MapPin, Plus } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MenuBar } from "@/components/MenuBar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import PopupForm from "@/components/PopupForm";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { HeroImageSwiper } from "./HeroImageSwiper";
import { FadeUp, FadeIn } from "./ScrollReveal";
import {
  TICKER_ITEMS,
  TRUST_ITEMS,
  BA_POINTS,
  TREATMENT_TABS,
  COST_ROWS,
  PROCESS_STEPS,
  STATS_BAND,
  REVIEWS,
  DOCTORS,
  FAQS,
  WHY_CARDS,
} from "./data";

const VALID_TABS = new Set(TREATMENT_TABS.map((t) => t.id));

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SectionEyebrow({ children }) {
  return (
    <p className="mb-3.5 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
      <span className="block h-px w-6 bg-[#D4AF37]" />
      {children}
    </p>
  );
}

function SectionEyebrowNoLine({ children }) {
  return (
    <p className="mb-3.5 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
      {children}
    </p>
  );
}

function CounterStat({ target }) {
  const ref = useRef(null);
  const [value, setValue] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let start = 0;
        const duration = 1800;
        const startTime = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = Math.floor(eased * target);
          setValue(val >= 1000 ? `${Math.floor(val / 1000)}k+` : `${val}+`);
          if (progress < 1) requestAnimationFrame(tick);
          else setValue(`${Math.floor(target / 1000)}k+`);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl font-light text-white sm:text-4xl">
      {value}
    </div>
  );
}

export default function HairTreatmentsSeoPage() {
  const searchParams = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(
    tabFromUrl && VALID_TABS.has(tabFromUrl) ? tabFromUrl : "transplant",
  );
  const [openFaq, setOpenFaq] = useState(null);
  const [showAppointment, setShowAppointment] = useState(false);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && VALID_TABS.has(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const activePanel = TREATMENT_TABS.find((t) => t.id === activeTab);

  return (
    <div className="min-h-screen bg-black text-white">
      <MenuBar />

      {/* Ticker */}
      <div
        className="mt-[68px] overflow-hidden bg-[#D4AF37] py-2"
        role="marquee"
        aria-label="Hospital highlights"
      >
        <div className="flex w-max animate-[ticker_32s_linear_infinite]">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="px-10 text-[11px] font-semibold uppercase tracking-[0.14em] text-black before:content-['✦__']"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 py-10 sm:px-10 lg:px-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_60%_50%,rgba(212,175,55,0.05),transparent_70%)]" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <FadeUp delay={50}>
                <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/30 bg-zinc-900 px-4 py-2">
                  <svg
                    className="size-5"
                    viewBox="0 0 24 24"
                    aria-label="Google"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-[#D4AF37]">★★★★★</span>
                  <span className="text-xs text-zinc-400">
                    <strong className="font-medium text-white">4.9 / 5</strong>{" "}
                    · 500+ Google Reviews · Bengaluru
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={100}>
                <SectionEyebrowNoLine>
                  Best Hair Transplant Hospital in Bangalore
                </SectionEyebrowNoLine>
              </FadeUp>

              <FadeUp delay={200}>
                <h1 className="mb-5 text-4xl font-light leading-[1.1] sm:text-5xl lg:text-6xl">
                  Bangalore&apos;s #1
                  <br />
                  <em className="not-italic text-[#D4AF37]">Hair Transplant</em>
                  <br />
                  Hospital. 10,000+
                  <br />
                  Lives Restored.
                </h1>
              </FadeUp>

              <FadeUp delay={300}>
                <div className="mb-5 inline-flex items-center gap-2 rounded border border-[#D4AF37]/30 bg-zinc-900 px-3.5 py-1.5 text-xs text-zinc-400">
                  <MapPin className="size-3.5" />
                  <strong className="font-medium text-[#D4AF37]">
                    Koramangala
                  </strong>
                  <span>·</span>
                  <strong className="font-medium text-[#D4AF37]">
                    Whitefield
                  </strong>
                  <span>· Bengaluru, Karnataka</span>
                </div>
              </FadeUp>

              <FadeUp delay={350}>
                <p className="mb-8 max-w-md text-[15px] leading-relaxed text-zinc-400">
                  Avatar Luxe is Bangalore&apos;s only{" "}
                  <strong className="font-medium text-white">
                    KPME Level-2 certified hair hospital
                  </strong>{" "}
                  — offering FUE, FUT, DHT, Sapphire Blade, hair grafting, hair
                  replacement, GFC, and synthetic Bio-fibre hair implant.
                  Transparent pricing per graft.
                </p>
              </FadeUp>

              <FadeUp delay={400}>
                <div className="mb-12 flex flex-wrap gap-3.5">
                  <Button
                    className="rounded-sm bg-[#D4AF37] px-7 py-6 text-xs font-semibold uppercase tracking-[0.12em] text-black hover:bg-[#E8D5B0]"
                    onClick={() => setShowAppointment(true)}
                  >
                    Book Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-sm border-[#8B6B3D] bg-transparent px-7 py-6 text-xs uppercase tracking-[0.1em] text-[#D4AF37] hover:border-[#D4AF37]"
                    onClick={() => scrollTo("cost")}
                  >
                    View Hair Transplant Cost
                  </Button>
                </div>
              </FadeUp>

              <FadeUp delay={500}>
                <div className="flex flex-wrap gap-9">
                  <div>
                    <CounterStat target={10000} />
                    <span className="mt-1 block text-[11px] uppercase tracking-[0.08em] text-zinc-600">
                      Procedures Done
                    </span>
                  </div>
                  <div>
                    <span className="block text-3xl font-light text-white">
                      4.9 ★
                    </span>
                    <span className="mt-1 block text-[11px] uppercase tracking-[0.08em] text-zinc-600">
                      Google Rating
                    </span>
                  </div>
                  <div>
                    <span className="block text-3xl font-light text-white">
                      15+
                    </span>
                    <span className="mt-1 block text-[11px] uppercase tracking-[0.08em] text-zinc-600">
                      Years of Experience
                    </span>
                  </div>
                  <div>
                    <span className="block text-3xl font-light text-white">
                      15
                    </span>
                    <span className="mt-1 block text-[11px] uppercase tracking-[0.08em] text-zinc-600">
                      Global Awards
                    </span>
                  </div>
                </div>
              </FadeUp>
            </div>

            <FadeIn
              delay={400}
              className="relative mx-auto w-full max-w-sm lg:max-w-none"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded border border-[#D4AF37]/15 bg-zinc-900">
                <div className="absolute inset-0">
                  <HeroImageSwiper priority />
                </div>
                {/* <div className="pointer-events-none absolute bottom-0 left-0 z-20 min-w-[140px] rounded bg-[#D4AF37] px-5 py-4 text-black">
                  <span className="block text-3xl font-light leading-none">
                    15
                  </span>
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.12em] opacity-80">
                    Global Awards
                  </span>
                </div> */}

                {/* <div className="pointer-events-none absolute top-0 right-0 z-20 rounded border border-[#D4AF37]/30 bg-zinc-900/95 px-3.5 py-3 backdrop-blur-sm">
                  <span className="block text-[9px] uppercase tracking-[0.14em] text-[#D4AF37]">
                    Certified
                  </span>
                  <span className="mt-1 block text-xs font-medium">
                    Level-2 Hospital
                  </span>
                  <span className="text-[10px] text-zinc-600">
                    KPME · Karnataka
                  </span>
                </div> */}

                <div className="pointer-events-none absolute bottom-0 left-0 z-20 rounded border border-[#D4AF37]/30 bg-zinc-900/95 px-2.5 py-2 sm:px-3.5 sm:py-3 backdrop-blur-sm">
                  <span className="block text-[9px] uppercase tracking-[0.14em] text-[#D4AF37]">
                    Certified
                  </span>
                  <span className="mt-1 block text-xs font-medium">
                    Level-2 Hospital
                  </span>
                  <span className="text-[10px] text-zinc-600">
                    KPME · Karnataka
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Trust strip */}
        <FadeUp>
          <div className="grid grid-cols-2 border-y border-[#D4AF37]/15 bg-zinc-950 px-4 py-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:px-20">
            {TRUST_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-2.5 px-3 py-2 sm:px-7 sm:py-1 ${i < TRUST_ITEMS.length - 1 ? "sm:border-r sm:border-[#D4AF37]/15" : ""}`}
                >
                  <span className="flex shrink-0 text-[#D4AF37]">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="text-xs text-zinc-400">
                    <strong className="block text-sm font-medium text-white">
                      {item.title}
                    </strong>
                    {item.subtitle}
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>

        {/* Before / After */}
        <section id="results" className="bg-zinc-950">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeUp className="ba-copy">
                <div>
                  <SectionEyebrow>
                    Real Results · Bangalore Patients
                  </SectionEyebrow>
                  <h2 className="mb-4 text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
                    Hair transplant{" "}
                    <em className="not-italic text-[#D4AF37]">
                      transformations
                    </em>{" "}
                    that speak for themselves
                  </h2>
                  <p className="mb-6 max-w-lg text-[15px] leading-relaxed text-zinc-400">
                    Every hair restoration procedure at Avatar Luxe is
                    documented with clinical-grade photography. Real patients
                    from Koramangala and Whitefield — no filters, no retouching.
                  </p>
                  <div className="space-y-3">
                    {BA_POINTS.map((p) => (
                      <div key={p.title} className="flex gap-3">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-[#D4AF37]" />
                        <p className="text-sm leading-relaxed text-zinc-400">
                          <strong className="font-medium text-white">
                            {p.title}
                          </strong>{" "}
                          — {p.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="mt-8 rounded-sm border-[#8B6B3D] text-xs uppercase tracking-wider text-[#D4AF37]"
                    onClick={() => setShowAppointment(true)}
                  >
                    Book Free Hair Assessment
                  </Button>
                </div>
              </FadeUp>
              <FadeIn>
                <BeforeAfterSlider
                  beforeSrc="/images/home/case-studies/arun-before.webp"
                  afterSrc="/images/home/case-studies/arun-after.webp"
                  beforeAlt="Arun Roberts before hair transplant"
                  afterAlt="Arun Roberts after hair transplant"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section id="treatments" className="bg-black">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
            <FadeUp>
              <SectionEyebrow>Hair Treatments in Bangalore</SectionEyebrow>
              <h2 className="mb-3 text-3xl font-light sm:text-4xl lg:text-5xl">
                Every path to{" "}
                <em className="not-italic text-[#D4AF37]">hair restoration</em>,
                covered
              </h2>
              <p className="mb-12 max-w-xl text-[15px] leading-relaxed text-zinc-400">
                From FUE hair transplant and Sapphire Blade hair grafting to
                synthetic Bio-fibre hair implants and non-surgical hair
                replacement — the most comprehensive hair restoration menu in
                Bangalore.
              </p>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="mb-9 overflow-x-auto">
                <div className="flex gap-2 whitespace-nowrap">
                  {TREATMENT_TABS.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`shrink-0 rounded border px-5 py-2 text-xs tracking-wider transition ${
                        activeTab === tab.id
                          ? "border-[#D4AF37] bg-[#D4AF37]/6 text-[#D4AF37]"
                          : "border-[#D4AF37]/15 text-zinc-400 hover:border-[#8B6B3D] hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </FadeUp>

            {activePanel && (
              <FadeUp delay={150}>
                <div className="grid gap-px overflow-hidden rounded border border-[#D4AF37]/15 bg-[#D4AF37]/15 sm:grid-cols-2 lg:grid-cols-3">
                  {activePanel.treatments.map((tx) => (
                    <div
                      key={tx.name}
                      className={`relative flex flex-col bg-zinc-950 p-7 transition hover:bg-zinc-900 ${tx.featured ? "bg-zinc-900" : ""}`}
                    >
                      {tx.featured && (
                        <span className="absolute top-0 right-0 bg-[#D4AF37] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-black">
                          Most Popular
                        </span>
                      )}
                      <span className="mb-3.5 text-[9px] font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
                        {tx.tag}
                      </span>
                      <h3 className="mb-3 text-xl font-normal text-white">
                        {tx.name}
                      </h3>
                      <p className="flex-1 text-[13px] leading-relaxed text-zinc-400">
                        {tx.desc}
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          tx.link === "#cost"
                            ? scrollTo("cost")
                            : setShowAppointment(true)
                        }
                        className="mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#D4AF37]"
                      >
                        {tx.link === "#cost" ? "View Cost" : "Book Consult"} →
                      </button>
                    </div>
                  ))}
                  {activePanel.cta && (
                    <div className="flex flex-col items-center justify-center gap-4 bg-zinc-900 p-7 text-center sm:col-span-2 lg:col-span-1">
                      <p className="whitespace-pre-line text-lg text-zinc-400">
                        {activePanel.cta.title}
                      </p>
                      {activePanel.cta.subtitle && (
                        <p className="text-xs text-zinc-600">
                          {activePanel.cta.subtitle}
                        </p>
                      )}
                      <Button
                        className="rounded-sm bg-[#D4AF37] text-[11px] font-semibold uppercase text-black"
                        onClick={() => setShowAppointment(true)}
                      >
                        {activePanel.cta.button}
                      </Button>
                    </div>
                  )}
                </div>
              </FadeUp>
            )}
          </div>
        </section>

        {/* Cost */}
        <section id="cost" className="border-y border-[#D4AF37]/15 bg-zinc-900">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
            <FadeUp>
              <SectionEyebrow>Hair Transplant Cost in Bangalore</SectionEyebrow>
              <h2 className="mb-3 text-3xl font-light sm:text-4xl lg:text-5xl">
                Transparent pricing.{" "}
                <em className="not-italic text-[#D4AF37]">
                  No hidden charges.
                </em>
              </h2>
              <p className="mb-14 max-w-xl text-[15px] leading-relaxed text-zinc-400">
                Hair transplant price in Bangalore depends on technique, graft
                count, and hair loss pattern. Complete pricing transparency —
                what you see is what you pay.
              </p>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="w-full">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-zinc-800">
                      <th className="px-4 py-2.5 text-left text-[10px] uppercase tracking-[0.16em] text-[#D4AF37]">
                        Treatment / Technique
                      </th>
                      <th className="px-4 py-2.5 text-right text-[10px] uppercase tracking-[0.16em] text-[#D4AF37]">
                        Approx. Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COST_ROWS.map(([treatment, cost]) => (
                      <tr
                        key={treatment}
                        className="border-b border-[#D4AF37]/15 hover:bg-zinc-800/50"
                      >
                        <td className="px-4 py-3.5 text-[13px] text-zinc-400">
                          {treatment}
                        </td>
                        <td className="px-4 py-3.5 text-right">
                          <button
                            type="button"
                            onClick={() => setShowAppointment(true)}
                            className="inline-flex items-center justify-end rounded-sm border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1.5 text-[13px] font-medium text-[#D4AF37] transition hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/20"
                          >
                            {cost}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-3 text-[11px] leading-relaxed text-zinc-600">
                  * Hair transplant cost varies based on graft count
                  (1,000–5,000+ grafts), technique, and hair loss stage. All
                  pricing discussed at your free consultation.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button
                    className="rounded-sm bg-[#D4AF37] text-xs font-semibold uppercase text-black"
                    onClick={() => setShowAppointment(true)}
                  >
                    Get Your Free Cost Estimate
                  </Button>
                  <a
                    href="tel:+919884469279"
                    className="inline-flex items-center rounded-sm border border-[#8B6B3D] px-6 py-3 text-xs uppercase tracking-wider text-[#D4AF37]"
                  >
                    Call for Pricing
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-zinc-950">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
            <FadeUp>
              <SectionEyebrow>
                How Hair Transplant Works · Bangalore
              </SectionEyebrow>
              <h2 className="mb-14 text-3xl font-light sm:text-4xl lg:text-5xl">
                Your hair restoration{" "}
                <em className="not-italic text-[#D4AF37]">
                  journey in 4 steps
                </em>
              </h2>
            </FadeUp>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step, i) => (
                <FadeUp key={step.num} delay={100 + i * 100}>
                  <div>
                    <span className="mb-5 block text-5xl font-light text-[#D4AF37]/30">
                      {step.num}
                    </span>
                    <h3 className="mb-2.5 text-sm font-medium text-white">
                      {step.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-zinc-400">
                      {step.body}
                    </p>
                    <div className="mt-8 h-px bg-gradient-to-r from-[#8B6B3D] to-transparent" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Stats band */}
        {/* <div className="bg-[#D4AF37]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-0 px-6 py-14 sm:px-20 lg:grid-cols-4">
            {STATS_BAND.map((s, i) => (
              <div key={s.label} className={`px-5 text-center ${i < STATS_BAND.length - 1 ? "lg:border-r lg:border-black/20" : ""}`}>
                <span className="block text-5xl font-light text-black">{s.value}</span>
                <span className="mt-2 block text-xs uppercase tracking-wider text-black/65">{s.label}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Reviews */}
        <section id="proof" className="bg-zinc-950">
          <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10 lg:px-20 lg:py-24">
            <FadeUp>
              <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <SectionEyebrow>
                    Google Reviews · Hair Transplant Bangalore
                  </SectionEyebrow>
                  <h2 className="text-3xl font-light sm:text-4xl lg:text-5xl">
                    What Bangalore patients{" "}
                    <em className="not-italic text-[#D4AF37]">
                      say about Avatar Luxe
                    </em>
                  </h2>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-light text-[#D4AF37]">
                    4.9
                  </span>
                  <div>
                    <span className="text-lg tracking-widest text-[#D4AF37]">
                      ★★★★★
                    </span>
                    <p className="text-xs text-zinc-400">
                      500+ Verified Google Reviews
                    </p>
                    <p className="text-[11px] text-zinc-600">
                      Best Hair Transplant Hospital in Bangalore
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="grid gap-4 md:grid-cols-3">
                {REVIEWS.map((r) => (
                  <div
                    key={r.name}
                    className="flex flex-col gap-4 rounded border border-[#D4AF37]/15 bg-zinc-900 p-6"
                  >
                    <span className="text-xs tracking-wider text-[#D4AF37]">
                      ★★★★★
                    </span>
                    <p className="flex-1 text-base font-light italic leading-relaxed text-zinc-200">
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-9 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-zinc-800 text-sm font-medium text-[#D4AF37]">
                        {r.initials}
                      </div>
                      <div>
                        <span className="block text-[13px] font-medium">
                          {r.name}
                        </span>
                        <span className="block text-[11px] text-zinc-600">
                          {r.treatment}
                        </span>
                        <span className="text-[10px] tracking-wider text-[#D4AF37]">
                          ✓ Verified Google Review
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Doctors */}
        <section className="bg-black">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
            <FadeUp>
              <SectionEyebrow>
                Our Hair Transplant Doctors · Bangalore
              </SectionEyebrow>
              <h2 className="mb-12 text-3xl font-light sm:text-4xl lg:text-5xl">
                The hands behind{" "}
                <em className="not-italic text-[#D4AF37]">every result</em>
              </h2>
            </FadeUp>
            <div className="grid gap-6 md:grid-cols-2">
              {DOCTORS.map((doc, i) => (
                <FadeUp key={doc.id} delay={100 + i * 100}>
                  <div className="flex gap-6 rounded border border-[#D4AF37]/15 bg-zinc-900 p-7">
                    <div className="relative size-[72px] shrink-0 overflow-hidden rounded-full border border-[#D4AF37]/30 bg-zinc-800">
                      {doc.image ? (
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          fill
                          sizes="72px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="flex size-full items-center justify-center text-2xl text-[#D4AF37]">
                          {doc.initial}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="mb-1 text-xl font-normal">{doc.name}</h3>
                      <p className="mb-2.5 text-[11px] tracking-wider text-[#D4AF37]">
                        {doc.cred}
                      </p>
                      <p className="text-[13px] leading-relaxed text-zinc-400">
                        {doc.bio}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={200}></FadeUp>
          </div>
        </section>

        {/* SEO text */}
        <section className="border-t border-[#D4AF37]/15 bg-zinc-900">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-20">
            <FadeUp>
              <SectionEyebrow>
                About Hair Transplant in Bangalore
              </SectionEyebrow>
              <h2 className="mb-9 text-3xl font-light sm:text-4xl">
                Why Bangalore chooses{" "}
                <em className="not-italic text-[#D4AF37]">Avatar Luxe</em>
              </h2>
            </FadeUp>
            <FadeUp delay={100}>
              <div className="grid gap-px overflow-hidden rounded border border-[#D4AF37]/15 bg-[#D4AF37]/15 sm:grid-cols-2 lg:grid-cols-3">
                {WHY_CARDS.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.num}
                      className={`group relative flex flex-col overflow-hidden bg-zinc-950 px-8 pb-8 pt-9 transition-colors hover:bg-zinc-900 ${card.featured ? "bg-zinc-900" : ""}`}
                    >
                      <div
                        className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#8B6B3D] via-[#D4AF37] to-[#8B6B3D] transition-opacity ${
                          card.featured
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                      <div className="mb-5 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[10px] border border-[#D4AF37]/20 bg-[#D4AF37]/10 transition group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/15">
                        <Icon
                          className="h-[22px] w-[22px] text-[#D4AF37]"
                          strokeWidth={1.6}
                        />
                      </div>
                      <span className="mb-2.5 block text-[11px] uppercase tracking-[0.22em] text-[#8B6B3D]">
                        {card.num}
                      </span>
                      <h3 className="mb-3 text-base font-medium leading-snug text-white">
                        {card.title}
                      </h3>
                      <p className="flex-1 text-[13px] leading-relaxed text-zinc-400">
                        {card.before}
                        <strong className="font-medium text-white">
                          {card.strong}
                        </strong>
                        {card.after}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 py-1.5 pl-2 pr-3 text-[11px] tracking-wide text-[#D4AF37]">
                        <svg
                          className="h-3 w-3 shrink-0"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden
                        >
                          <polyline
                            points="2,6 5,9 10,3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {card.pill}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-zinc-950">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
            <FadeUp>
              <SectionEyebrow>Hair Transplant FAQ · Bangalore</SectionEyebrow>
              <h2 className="mb-12 text-3xl font-light sm:text-4xl lg:text-5xl">
                Common questions,{" "}
                <em className="not-italic text-[#D4AF37]">honest answers</em>
              </h2>
            </FadeUp>
            <FadeUp delay={100}>
              <div className="grid gap-x-16 lg:grid-cols-2">
                {FAQS.map((faq, i) => (
                  <div
                    key={faq.q}
                    className="border-b border-[#D4AF37]/15 py-5"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="text-sm font-medium leading-snug text-white">
                        {faq.q}
                      </span>
                      <Plus
                        className={`size-4 shrink-0 text-[#D4AF37] transition-transform ${openFaq === i ? "rotate-45" : ""}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all ${openFaq === i ? "mt-3 max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <p className="text-[13px] leading-relaxed text-zinc-400">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="border-t border-[#D4AF37]/15 bg-zinc-900">
          <FadeUp>
            <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-10">
              <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]">
                Book Free Consultation · Hair Transplant Bangalore
              </p>
              <h2 className="mb-4 text-3xl font-light sm:text-5xl">
                Ready to restore your hair and your{" "}
                <em className="not-italic text-[#D4AF37]">confidence?</em>
              </h2>
              <p className="mx-auto mb-11 max-w-md text-[15px] leading-relaxed text-zinc-400">
                A free 30-minute consultation with our senior trichologist at
                Koramangala or Whitefield. No pressure — just a genuine clinical
                assessment and transparent pricing.
              </p>
              <div className="mb-8 flex flex-wrap justify-center gap-3.5">
                <Button
                  className="rounded-sm bg-[#D4AF37] px-8 py-6 text-xs font-semibold uppercase text-black"
                  onClick={() => setShowAppointment(true)}
                >
                  Book Free Consultation
                </Button>
                <a
                  href="tel:+919884469279"
                  className="inline-flex items-center rounded-sm border border-[#8B6B3D] px-7 py-3 text-xs uppercase tracking-wider text-[#D4AF37]"
                >
                  Call +91 98844 69279
                </a>
              </div>
              <p className="text-xs text-zinc-600">
                Tue – Sun · 10:30 AM – 7:30 PM · Koramangala &amp; Whitefield,
                Bangalore
              </p>
            </div>
          </FadeUp>
        </section>
      </main>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-3 bg-[#D4AF37] px-4 py-3 sm:hidden">
        <button
          type="button"
          onClick={() => setShowAppointment(true)}
          className="min-w-0 flex-1 text-left"
        >
          <span className="block text-[13px] font-semibold tracking-wider text-black">
            Book Free Hair Consultation
          </span>
        </button>
        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href="tel:+919884469279"
            aria-label="Call us"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-[#D4AF37] animate-[icon-soft_2.4s_ease-in-out_infinite]"
          >
            <FaPhoneAlt className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/919884469279"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white animate-[icon-soft_2.4s_ease-in-out_infinite] [animation-delay:0.35s]"
          >
            <span
              className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] animate-[icon-ring_2.4s_ease-out_infinite] [animation-delay:0.35s]"
              aria-hidden
            />
            <FaWhatsapp className="relative z-10 h-[18px] w-[18px]" />
          </a>
        </div>
      </div>

      {showAppointment && (
        <PopupForm onClose={() => setShowAppointment(false)} />
      )}

      <div className="pb-16 sm:pb-0">
        <Footer />
      </div>
    </div>
  );
}
