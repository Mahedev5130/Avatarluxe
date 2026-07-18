"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { ArrowRight, Plus, CheckCircle, } from "lucide-react";
import { MenuBar } from "@/components/MenuBar";
import Footer from "@/components/footer";   
import { Button } from "@/components/ui/button";
import CTA from "@/components/Cta";
import { BackgroundBeams } from "@/components/ui/background-beams";

const SERVICE_CATEGORY_IMAGE_SIZES = "(max-width: 1024px) 100vw, 25vw";

const SERVICE_CATEGORIES = [
    {
    id: "facials",
    title: "Facials & Medi-Facials",
    description: "Advanced facials and medi-facials designed to deeply cleanse, hydrate, and rejuvenate the skin, delivering instant glow and long-term skin health using clinically proven techniques and medical-grade products.",
    treatments: [
        {
            name: "Hydrafacial – The Original",
            detail: "A multi-step medical facial that cleanses, exfoliates, and hydrates the skin using patented technology. At our clinic, we offer authentic Hydrafacial treatments for instant glow and improved skin texture.",
            benefits: [
                "Deep cleansing and hydration",
                "Improves skin texture and tone",
                "Reduces fine lines and dullness",
                "Instant visible glow",
                "Suitable for all skin types"
            ]
        },
        {
            name: "Obagi Medi-Facial",
            detail: "A medical-grade facial using Obagi products to target skin concerns like pigmentation, acne, and aging with clinically proven formulations.",
            benefits: [
                "Improves skin clarity and tone",
                "Targets pigmentation and acne",
                "Enhances skin health",
                "Safe and dermatologist-approved",
                "Long-term skin improvement"
            ]
        },
        {
            name: "Insta Bright Medi-Facial",
            detail: "A quick glow-boosting facial designed to brighten dull skin and restore radiance instantly.",
            benefits: [
                "Instant brightening effect",
                "Improves skin glow",
                "Refreshes tired skin",
                "Ideal before events",
                "Quick and effective treatment"
            ]
        },
        {
            name: "Fire & Ice Facial",
            detail: "An intensive facial that resurfaces and rejuvenates the skin using a combination of warming and cooling treatments.",
            benefits: [
                "Improves skin texture",
                "Reduces fine lines",
                "Boosts circulation",
                "Enhances glow",
                "Safe and effective"
            ]
        },
        {
            name: "Carbon Facial",
            detail: "A laser-based facial that deeply cleanses pores, controls oil, and improves skin tone.",
            benefits: [
                "Reduces acne and oiliness",
                "Minimizes pores",
                "Improves skin clarity",
                "Brightens complexion",
                "Non-invasive procedure"
            ]
        },
        {
            name: "Medi-Facial",
            detail: "Customized medical facials tailored to individual skin concerns using advanced techniques and products.",
            benefits: [
                "Personalized skin treatment",
                "Improves overall skin health",
                "Hydrates and nourishes skin",
                "Enhances glow and texture",
                "Suitable for all skin types"
            ]
        }
    ],
    image: "/images/services/medi-facials.webp"
},

{
    id: "resurfacing",
    title: "Skin Resurfacing & Exfoliation",
    description: "Advanced exfoliation and resurfacing treatments that remove dead skin cells, improve texture, and promote smoother, brighter, and healthier skin.",
    treatments: [
        {
            name: "Diamond Tip Microdermabrasion",
            detail: "A non-invasive exfoliation treatment that gently removes dead skin and polishes the skin surface.",
            benefits: [
                "Smoothens skin texture",
                "Improves skin tone",
                "Reduces dullness",
                "Enhances product absorption",
                "Safe and painless"
            ]
        },
        {
            name: "Crystal Microdermabrasion",
            detail: "A deep exfoliation treatment using fine crystals to remove dead skin cells and improve skin clarity.",
            benefits: [
                "Deep exfoliation",
                "Improves skin brightness",
                "Reduces pigmentation",
                "Smoothens rough skin",
                "Promotes skin renewal"
            ]
        },
        {
            name: "Chemical Peel",
            detail: "A medical-grade treatment that exfoliates damaged skin layers to reveal fresh, healthier skin.",
            benefits: [
                "Reduces pigmentation and acne marks",
                "Improves skin texture",
                "Boosts skin renewal",
                "Evens skin tone",
                "Visible skin improvement"
            ]
        },
        {
            name: "Exfoliation of Face & Scalp",
            detail: "A specialized treatment to remove buildup and dead skin from the face and scalp, improving overall skin and hair health.",
            benefits: [
                "Removes dead skin buildup",
                "Improves scalp health",
                "Enhances skin clarity",
                "Promotes healthy hair growth",
                "Refreshes skin"
            ]
        }
    ],
    image: "/images/services/skin-exfoliation.webp"
},

{
    id: "laser",
    title: "Laser Treatments",
    description: "Precision-based laser treatments designed to address unwanted hair, pigmentation, and skin concerns with safe, effective, and long-lasting results.",
    treatments: [
        {
            name: "Laser Hair Removal",
            detail: "A long-term solution for unwanted hair using advanced laser technology.",
            benefits: [
                "Permanent hair reduction",
                "Smooth and hair-free skin",
                "Safe for multiple body areas",
                "Reduces ingrown hair",
                "Quick and effective sessions"
            ]
        },
        {
            name: "Laser Toning",
            detail: "A skin treatment that improves pigmentation, uneven tone, and dullness using laser technology.",
            benefits: [
                "Reduces pigmentation",
                "Improves skin tone",
                "Brightens complexion",
                "Enhances skin clarity",
                "Non-invasive procedure"
            ]
        },
        {
            name: "Tattoo Removal",
            detail: "A laser procedure to safely remove unwanted tattoos with minimal skin damage.",
            benefits: [
                "Gradual tattoo removal",
                "Safe and effective",
                "Minimal scarring",
                "Suitable for different ink types",
                "Improves skin appearance"
            ]
        }
    ],
    image: "/images/services/Laser-Treatment.webp"
},

{
    id: "pigmentation",
    title: "Pigmentation & Skin Concerns",
    description: "Targeted treatments for pigmentation, uneven skin tone, and specific skin conditions using advanced dermatological solutions.",
    treatments: [
        {
            name: "Melasma Treatment",
            detail: "Advanced treatments to reduce stubborn melasma and restore even skin tone.",
            benefits: [
                "Reduces dark patches",
                "Improves skin tone",
                "Prevents recurrence",
                "Safe and effective",
                "Long-term results"
            ]
        },
        {
            name: "Pigmentation Treatment",
            detail: "Customized solutions to treat hyperpigmentation and uneven skin tone.",
            benefits: [
                "Evens skin tone",
                "Reduces dark spots",
                "Improves skin clarity",
                "Enhances glow",
                "Personalized treatment"
            ]
        },
        {
            name: "Freckles Treatment",
            detail: "Treatments designed to lighten and reduce the appearance of freckles.",
            benefits: [
                "Reduces freckles visibility",
                "Improves skin tone",
                "Brightens complexion",
                "Safe procedures",
                "Long-lasting results"
            ]
        },
        {
            name: "Nevus of Ota Treatment",
            detail: "Specialized treatment for deep pigmentation conditions using advanced laser techniques.",
            benefits: [
                "Reduces deep pigmentation",
                "Improves skin clarity",
                "Safe and effective",
                "Gradual visible results",
                "Expert-led treatment"
            ]
        }
    ],
    image: "/images/services/skin-pigmentation.webp"
},

{
    id: "antiaging",
    title: "Anti-Aging & Rejuvenation",
    description: "Advanced skin rejuvenation treatments that stimulate collagen, reduce signs of aging, and restore youthful, healthy skin.",
    treatments: [
        {
            name: "Microneedling (Face & Hair)",
            detail: "A collagen-inducing treatment that improves skin texture and stimulates hair growth.",
            benefits: [
                "Boosts collagen production",
                "Reduces scars and wrinkles",
                "Improves skin texture",
                "Promotes hair growth",
                "Natural rejuvenation"
            ]
        },
        {
            name: "Mesotherapy (Face & Hair)",
            detail: "A technique that delivers nutrients directly into the skin or scalp for rejuvenation and hair growth.",
            benefits: [
                "Nourishes skin and scalp",
                "Improves hydration",
                "Promotes hair growth",
                "Enhances skin glow",
                "Minimally invasive"
            ]
        },
        {
            name: "PRP / GFC (Face & Hair)",
            detail: "A regenerative treatment using your own growth factors to improve skin and hair health.",
            benefits: [
                "Natural skin rejuvenation",
                "Improves hair growth",
                "Enhances skin texture",
                "Reduces signs of aging",
                "Safe and effective"
            ]
        },
        {
            name: "Botox & Fillers",
            detail: "Non-surgical treatments to reduce wrinkles and restore facial volume.",
            benefits: [
                "Reduces fine lines and wrinkles",
                "Restores facial volume",
                "Enhances facial contours",
                "Quick and non-invasive",
                "Immediate visible results"
            ]
        }
    ],
    image: "/images/services/anti-aging-treatment.webp"
},

{
    id: "wellness",
    title: "Skin Wellness & Clinical Treatments",
    description: "Holistic and clinical treatments focused on improving overall skin health, detoxification, and targeted correction of minor skin concerns.",
    treatments: [
        {
            name: "Lymphatic Therapy",
            detail: "A treatment that improves circulation and detoxifies the skin.",
            benefits: [
                "Reduces puffiness",
                "Improves circulation",
                "Detoxifies skin",
                "Enhances glow",
                "Promotes skin health"
            ]
        },
        {
            name: "Detoxification",
            detail: "Therapies designed to cleanse and purify the skin from within.",
            benefits: [
                "Removes toxins",
                "Improves skin clarity",
                "Boosts skin health",
                "Enhances glow",
                "Refreshes skin"
            ]
        },
        {
            name: "Whitening Treatments",
            detail: "Advanced treatments to brighten and even out skin tone.",
            benefits: [
                "Improves skin brightness",
                "Evens complexion",
                "Reduces dullness",
                "Enhances glow",
                "Safe and effective"
            ]
        },
        {
            name: "Natural Glow Treatments",
            detail: "Treatments focused on enhancing natural radiance and skin health.",
            benefits: [
                "Improves skin glow",
                "Hydrates and nourishes",
                "Enhances skin texture",
                "Safe and gentle",
                "Suitable for all skin types"
            ]
        },
        {
            name: "Electrocautery",
            detail: "A minor procedure to remove skin tags, warts, and small lesions.",
            benefits: [
                "Removes unwanted skin growths",
                "Quick and safe procedure",
                "Minimal downtime",
                "Effective results",
                "Performed by experts"
            ]
        },
        {
            name: "ZO Skin Care / Obagi",
            detail: "Medical-grade skincare solutions recommended for maintaining healthy, radiant skin.",
            benefits: [
                "Clinically proven products",
                "Improves skin health",
                "Targets multiple concerns",
                "Long-term results",
                "Dermatologist recommended"
            ]
        }
    ],
    image: "/images/services/skin-wellness.webp"
}
];

const stats = [
    { label: "TRANSFORMATIVE SKIN SESSIONS", value: "3.5k+" },
    { label: "CLIENT SATISFACTION RATE", value: "98%" },
    { label: "ADVANCED SKIN TECHNOLOGIES", value: "8" },
    { label: "YEARS OF SKIN EXPERTISE", value: "12+" }
];

const videos = [
    { id: "-9rtUhR1pRs", title: "GFC for hairloss", name: "Bye Bye Hairloss" },
    { id: "Giig67nMzVU", title: "Synthetic Hair Transplant", name: "Biofibre" },
    { id: "OPiQa5uBUr8", title: "Hair Transplant Process", name: "Laser Hair Reduction" },
    { id: "gsLLV1qmOYY", title: "Hydra Facial", name: "Hydra Facial" },
    { id: "wAshxi4ghfs", title: "Skin Brightening", name: "Glutathione" },
    { id: "k2EHaGBGWjg", title: "Insta Bright", name: "Instant Laser Skin Toning" },
];

export default function HomePage() {

    const containerRef = useRef(null)

    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(null)

    const openYouTube = (id) => {
        setActive(id)
        setOpen(true)
        document.body.style.overflow = "hidden"
    }

    const closeYouTube = () => {
        setOpen(false)
        setActive(null)
        document.body.style.overflow = ""
    }

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const scaleX = useSpring(scrollYProgress)

    return (

        <div ref={containerRef} className="bg-black text-white min-h-screen">

            <MenuBar />

            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
                style={{ scaleX }}
            />

            <main>

                {/* HERO */}

                     <section className="relative min-h-[92vh] w-full">
        
                        <div className="absolute inset-0 bg-black/70" />
                
                        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16">
                
                            <div className="inline-flex items-center gap-2 py-2 bg-white/10 backdrop-blur-sm px-4 rounded-full mb-2 sm:mb-2">
                                <CheckCircle className="size-4" style={{ color: '#D4AF37' }} />
                                <span className="text-xs sm:text-sm text-white/80">Skincare Treatments</span>
                          </div>
                                          
                          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold">
                            Radiant Skin with Advanced Clinical <span style={{ color: '#D4AF37' }}>Skin Care</span> Treatments
                           </h1>
                                            
                          <p className="mt-7 max-w-3xl text-zinc-300">
                            Our skin care treatments are designed to restore, rejuvenate, and enhance your natural beauty using a blend of advanced dermatological science and personalized care. From deep cleansing therapies to targeted clinical solutions, we focus on improving skin health, texture, and glow—safely and effectively.

Whether you're dealing with dullness, acne, pigmentation, or early signs of aging, our expert specialists tailor every treatment to your skin type and goals, ensuring visible and long-lasting results.
                          </p>
                
                          <div className="mt-10 flex flex-wrap gap-4">
                            <a href="#services">
                            <Button
                              className="rounded-none border border-white/30 bg-white px-7 py-6 text-xs font-bold uppercase tracking-[0.2em] text-black hover:bg-zinc-200"
                            >
                              Checkout Our Services
                            </Button>
                            </a>
                            <a href="/contact-us">
                            <Button
                              variant="outline"
                              className="rounded-none border-white/35 bg-transparent px-7 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black"
                              
                            >
                              Book an Appointment Now
                            </Button>
                            </a>
                          </div>
                          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-5 border-t border-white/10 pt-7">

                            {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-3xl font-semibold">{stat.value}</p>
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                                {stat.label}
                                </p>
                            </div>
                            ))}

                        </div>
                
                        </div>
                        <BackgroundBeams/>
                      </section>

                {/* SERVICES */}

                <section id="services">

                    {SERVICE_CATEGORIES.map((category, index) => (
                        <ServiceBlock
                            key={category.id}
                            category={category}
                            index={index}
                        />
                    ))}

                </section>

                {/* VIDEO SECTION */}

                <section className="bg-black text-white py-16">

                    <h2 className="text-4xl text-center mb-10">Hear Them Out</h2>

                    <div className="flex gap-6 overflow-x-auto px-6">

                        {videos.map(v => (
                            <div
                                key={v.id}
                                className="w-[320px] flex-shrink-0 cursor-pointer"
                                onClick={() => openYouTube(v.id)}
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                                    className="rounded-lg"
                                />

                                <h4 className="mt-3">{v.name}</h4>

                            </div>
                        ))}

                    </div>

                </section>

                {/* YOUTUBE MODAL */}

                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center ${open ? '' : 'hidden'}`}
                >

                    <div
                        onClick={closeYouTube}
                        className="absolute inset-0 bg-black/80"
                    />

                    <div className="relative w-full max-w-3xl">

                        <div className="aspect-video">

                            {active && (

                                <iframe
                                    src={`https://www.youtube.com/embed/${active}?autoplay=1`}
                                    allow="autoplay"
                                    allowFullScreen
                                    className="w-full h-full"
                                />

                            )}

                        </div>

                        <button
                            onClick={closeYouTube}
                            className="absolute top-4 right-4 bg-black text-white p-2 rounded-full"
                        >
                            ✕
                        </button>

                    </div>

                </div>

                <CTA />

            </main>

            <Footer />

        </div>

    )

}



function ServiceBlock({ category, index }) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
     const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    };

    return (

        <div ref={ref} className="border-b border-white/10">

            <div className="grid lg:grid-cols-12 min-h-[600px]">

                <div className="lg:col-span-4 p-10 border-r border-white/10 flex flex-col justify-between">

                    <div>

                        <span className="text-[#D4AF37] text-sm mb-4 block">
                            0{index + 1}
                        </span>

                        <h3 className="text-5xl mb-6 max-w-3xl text-zinc-300">
                            {category.title}
                        </h3>

                        <p className="text-gray-300 max-w-md">
                            {category.description}
                        </p>

                    </div>

                    <Link
                        href="/services"
                        className="flex items-center gap-2 uppercase tracking-widest text-sm"
                    >

                        <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>

                        Explore Details

                        <ArrowRight size={16} />

                    </Link>

                </div>

                <div className="lg:col-span-5 p-10 border-r border-white/10 flex items-center">

                  
 <div className="space-y-4">
      {category.treatments.map((t, index) => (
        <div
          key={index}
          className=" rounded-lg overflow-hidden mb-0"
        >
          {/* HEADER */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-4 group text-left border-b border-white/10 mb-5"
          >
            <div className="flex items-center gap-4">
              <span
                className={`w-2 h-2 rounded-full bg-[#D4AF37] transition ${
                  activeIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />

              <h4 className="text-[18px]">{t.name}</h4>
            </div>

            {/* ICON */}
            <span
              className={`transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {/* CONTENT */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-4 pr-4">
              <p className="ml-6 border-l border-white/10 pl-6 max-w-3xl text-zinc-300">
                {t.detail}
              </p>

              {t.benefits && (
                <ul className="ml-6 pl-6 mt-3 space-y-1 text-zinc-300">
                  {t.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D4AF37]">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>


                </div>

                <div className="lg:col-span-3 relative">

                    <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes={SERVICE_CATEGORY_IMAGE_SIZES}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute bottom-0 right-0 w-12 h-12 border-l border-t border-white/20 bg-black flex items-center justify-center">

                        <Plus size={16} />

                    </div>

                </div>

            </div>

        </div>

    )

}