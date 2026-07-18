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
        id: "Breast",
        title: "Breast Restructuring",
        description: "Enhance your natural beauty with breast augmentation. This procedure improves breast size and shape using implants or fat transfer, delivering balanced, natural-looking results with a focus on safety and precision.",
        treatments: [
            { 
                name: "Breast Augmentation", 
                detail: "A surgical procedure performed to enhance the size, shape, and overall contour of the breasts using advanced implant or fat transfer techniques. At our clinic, the treatment is carefully planned based on each patient’s body structure and aesthetic goals, ensuring safe, natural-looking, and well-balanced results.",
                benefits: [
                    "Enhances breast volume and contour",
                    "Improves symmetry and overall body proportions",
                    "Restores fullness after weight loss or pregnancy",
                    "Provides natural-looking, long-lasting results",
                    "Performed with advanced techniques for safety and precision"
                ]
            },  
            { 
                name: "Breast Lift", 
                detail: "Breast lift procedure reshapes and lifts sagging breasts by removing excess skin and tightening surrounding tissue to restore a firmer, youthful contour. At our clinic, advanced breast lift techniques are used to achieve natural-looking results tailored to individual body proportions.",
                benefits: [
                    "Lifts and firms sagging breasts",
                    "Improves breast shape and position",
                    "Restores youthful contour",
                    "Natural-looking results",                ]
            },
            { 
                name: "Breast Reduction", 
                detail: "Breast reduction procedure removes excess breast fat, tissue, and skin to achieve a smaller, more proportionate breast size. Our clinic offers precise breast reduction treatments to improve comfort, posture, and overall body balance.",
                benefits: [
                    "Lifts and firms sagging breasts",
                    "Improves breast shape and position",
                    "Restores youthful contour",
                    "Natural-looking results",                ]
            },
            { name: "Gynecomastia", 
              detail: "Gynecomastia surgery is an advanced cosmetic procedure to reduce excess male breast tissue and achieve a flatter, more masculine chest. At our clinic, we offer safe and effective gynecomastia treatment using advanced liposuction and gland removal techniques, performed by experienced surgeons to deliver natural-looking results with minimal scarring and faster recovery.",
              benefits: [
                    "Effective treatment for male chest fat and gland enlargement",
                    "Achieves a flatter, well-defined masculine chest",
                    "Advanced liposuction and gland removal techniques",
                    "Minimally invasive with reduced downtime",
                    "Safe procedure performed by experienced specialists"
                ]
            },
        ],
        image: "/images/services/breast-augmentation.webp"
    },
    {
        id: "body",
        title: "Body Contouring Procedures",
        description: "Body contouring procedures are advanced cosmetic treatments designed to reshape and enhance the body by removing excess fat, tightening skin, and improving overall proportions. At our clinic, we offer a range of personalized solutions to help achieve a more sculpted, toned, and natural-looking physique with safe and effective techniques.",
        treatments: [
            { 
            name: "Brazilian Butt Lift", 
            detail: "A cosmetic procedure that enhances the shape and volume of the buttocks using fat transfer from other areas of the body. At our clinic, we use advanced techniques to deliver natural-looking, well-contoured results with improved body proportions.",
            benefits: [
                    "Enhances buttock volume and shape naturally",
                    "Uses your own fat for a safer, more natural result",
                    "Improves overall body contour and balance",
                    "Dual benefit of fat reduction and augmentation",
                    "Long-lasting and natural-looking outcome"
                ]
            },
            { 
            name: "Tummy Tuck (Abdominoplasty)", 
            detail: "A surgical procedure to remove excess fat and skin from the abdomen while tightening weakened muscles for a firmer, flatter stomach. Our expert surgeons ensure safe procedures with precise contouring and minimal scarring.",
            benefits: [
                    "Removes excess skin and stubborn abdominal fat",
                    "Tightens abdominal muscles for a toned look",
                    "Improves waistline and body contour",
                    "Ideal after weight loss or pregnancy",
                    "Long-lasting, visible results",
                ]
            },
            { 
                name: "Liposuction", 
                detail: "Liposuction is an advanced fat removal procedure that targets stubborn fat deposits resistant to diet and exercise. At our clinic, we use modern liposuction techniques to sculpt and refine body contours safely and effectively.",
                benefits: [
                    "Removes stubborn fat from targeted areas",
                    "Enhances body shape and definition",
                    "Minimally invasive with faster recovery",
                    "Suitable for multiple body areas",
                    "Provides smoother and more contoured appearance",
                ]
            },
            { name: "Six Pack Abs Surgery", 
              detail: "A specialized body contouring procedure that enhances abdominal definition to create a sculpted, athletic six-pack appearance. Our clinic uses precise fat removal techniques to highlight natural muscle contours safely.",
              benefits: [
                    "Creates a defined and athletic abdominal look",
                    "Enhances natural muscle contours",
                    "Ideal for individuals close to ideal body weight",
                    "Long-lasting results with proper lifestyle",
                    "Boosts confidence and body aesthetics",
                ]
            },
            { 
                name: "Body Contouring Procedures", 
                detail: "Body contouring procedures are advanced cosmetic treatments designed to reshape and enhance the body by removing excess fat, tightening skin, and improving overall proportions. At our clinic, we offer personalized solutions for safe, natural-looking, and well-balanced results." ,
                benefits: [
                    "Improves overall body shape and proportions",
                    "Targets stubborn fat and loose skin",
                    "Enhances a toned and sculpted appearance",
                    "Customized treatments for individual goals",
                    "Safe, effective, and long-lasting results",
                ]
            },
            { 
                name: "Mommy Makeover", 
                detail: "Mommy makeover is a combination of procedures designed to restore the body after pregnancy, typically including breast and abdominal treatments. At our clinic, customized treatment plans are created to safely achieve comprehensive and natural-looking results.",
                benefits: [
                    "Restores pre-pregnancy body shape",
                    "Combines multiple procedures",
                    "Improves abdominal and breast contour",
                    "Personalized treatment approach",
                ]
            },
            { 
                name: "Arm Lift (Brachioplasty)", 
                detail: "Arm lift procedure removes excess skin and fat from the upper arms to create a firmer, more toned appearance. Our clinic uses advanced techniques to deliver smooth contours with minimal scarring.",
                benefits: [
                    "Removes loose, sagging skin",
                    "Improves arm contour and tone",
                    "Enhances overall body shape",
                    "Long-lasting results",
                ]
            },
        ],
        image: "/images/services/body-contouring.webp"
    },
    {
        id: "facial",
        title: "Facial Restoration",
        description: "Subtle enhancements designed to restore facial balance, refine features, and achieve a naturally refreshed appearance through advanced surgical and aesthetic procedures.",
        treatments: [
            { 
                name: "Rhinoplasty", 
                detail: "Rhinoplasty surgical procedure reshapes the nose to improve its size, structure, and overall harmony with the face. At our clinic, advanced rhinoplasty techniques are used to deliver precise, natural-looking results tailored to individual facial features.",
                benefits:
                [
                    "Enhances nose shape and proportion",
                    "Improves facial balance",
                    "Corrects structural concerns",
                    "Customized for natural outcomes"
                ]
            },
            { 
                name: "Facelift", 
                detail: "Facelift procedure reduces visible signs of aging by tightening the skin and underlying facial tissues for a smoother, more youthful appearance. Our clinic offers advanced facelift treatments performed with precision to achieve natural, long-lasting results.",benefits:
                [
                    "Reduces wrinkles and sagging",
                    "Tightens facial contours",
                    "Restores youthful appearance",
                    "Long-lasting results"
                ]
            },
            { name: "Chin Liposuction", 
              detail: "Chin liposuction procedure removes excess fat from the chin and neck area to create a more defined jawline and improved facial profile. At our clinic, minimally invasive techniques are used to ensure safe treatment with precise contouring and quick recovery.",
              benefits:
              [
                    "Eliminates double chin",
                    "Defines jawline",
                    "Enhances facial profile",
                    "Minimal downtime"
              ]
            },
            { name: "Liquid Rhinoplasty", 
              detail: "Liquid rhinoplasty is a non-surgical procedure that uses dermal fillers to reshape and enhance the nose by correcting minor irregularities and improving symmetry. At our clinic, precise filler techniques are used to achieve balanced, natural-looking results with minimal downtime.",
              benefits:
              [
                    "Non-surgical nose enhancement",
                    "Improves hair thickness",
                    "Natural-looking results",
                    "Easy to style"
              ]
            },
            { name: "Buccal Fat Removal", 
              detail: "Buccal fat removal procedure reduces excess fat from the cheeks to create a more sculpted and defined facial appearance. At our clinic, the treatment is performed with precision to enhance facial contours while maintaining natural proportions.",
              benefits:
              [
                    "Non-surgical nose enhancement",
                    "Improves hair thickness",
                    "Natural-looking results",
                    "Easy to style"
              ]
            }
        ],
        image: "/images/services/facial-restoration.webp"
    },
    {
        id: "vaginal",
        title: "Intimate Wellness & Vaginal Rejuvenation",
        description: "Intimate wellness and vaginal rejuvenation treatments focus on improving the appearance, function, and overall health of the intimate area. These procedures address concerns related to aging, childbirth, or hormonal changes, helping restore comfort, confidence, and natural balance through advanced surgical and non-surgical techniques.",
        treatments: [
            { 
                name: "Vaginal Rejuvenation", 
                detail: "Vaginal rejuvenation includes treatments that improve the appearance, function, and overall health of the vaginal area. At our clinic, we offer advanced procedures designed to enhance comfort, confidence, and wellness.",
                benefits:
                [
                    "Improves function and appearance",
                    "Enhances comfort and sensitivity",
                    "Addresses post-pregnancy changes",
                    "Boosts confidence",
                ] 
            },
            { 
                name: "Vaginal Fillers", 
                detail: "Vaginal fillers procedure uses dermal fillers to restore volume and improve the appearance of the intimate area. Our clinic provides safe and precise filler treatments for natural-looking enhancement.",
                benefits: 
                [
                    "Restores volume and fullness",
                    "Improves aesthetic appearance",
                    "Minimally invasive procedure",
                    "Quick Recovery",
                ]
            },
            { 
                name: "Designer Vagina", 
                detail: "Designer vagina refers to cosmetic procedures aimed at enhancing the appearance and aesthetics of the vaginal area. At our clinic, treatments are customized to individual preferences while maintaining natural results and safety.",
                benefits: 
                [
                    "Enhances aesthetic appearance",
                    "Personalized treatment approach",
                    "Improves confidence",
                    "Natural-looking outcomes",
                ]
            },
            { 
                name: "Vaginoplasty", 
                detail: "Vaginoplasty procedure tightens the vaginal canal by repairing and strengthening the surrounding muscles and tissues. Our clinic performs this procedure with advanced techniques to improve both function and comfort.",
                benefits: 
                [
                    "Tightens vaginal muscles",
                    "Improves function and control",
                    "Enhances overall comfort",
                    "Long-lasting results",
                ]
            },
            { 
                name: "Vaginal Tightening", 
                detail: "Vaginal tightening treatments are designed to improve firmness and elasticity of the vaginal tissues. At our clinic, both surgical and non-surgical options are available based on individual needs.",
                benefits: 
                [
                    "Improves tightness and elasticity",
                    "Enhances comfort and function",
                    "Non-surgical options available",
                    "Quick recovery",
                ]
            },
            { 
                name: "Labiaplasty", 
                detail: "Labiaplasty procedure reshapes and reduces the size of the labia to improve comfort and appearance. Our clinic offers precise labiaplasty techniques for balanced, natural-looking results.",
                benefits: 
                [
                    "Reduces excess labial tissue",
                    "Improves comfort and hygiene",
                    "Enhances appearance",
                    "Long-lasting results",
                ]
            },
            { 
                name: "Hymenoplasty", 
                detail: "Hymenoplasty procedure restores the hymen through a minor surgical technique. At our clinic, the procedure is performed with care, privacy, and a focus on safe, natural outcomes.",
                benefits: 
                [
                    "Restores hymenal tissue",
                    "Simple and quick procedure",
                    "Maintains privacy and discretion",
                    "Safe and effective",
                ]
            },
        ],
        image: "/images/services/vaginal-rejuvenation.webp"
    }
];

const stats = [
    { label: "Procedures", value: "10k+" },
    { label: "Success Rate", value: "98%" },
    { label: "Global Awards", value: "15" },
    { label: "Years Exp", value: "20+" }
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
                                <span className="text-xs sm:text-sm text-white/80">Surgical Treatments</span>
                         </div>
                
                          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold">
                            Elevating Confidence with Advanced <span style={{color:"#D4AF37"}}>Cosmetic Surgery</span> in Bangalore
                          </h1>
                
                          <p className="mt-7 max-w-3xl text-zinc-300">
                            We offer advanced cosmetic surgery in Bangalore, specializing in breast enhancement, body contouring, facial rejuvenation, and vaginal rejuvenation procedures. Our experienced surgeons use modern techniques to deliver safe, precise, and natural-looking results, tailored to your individual goals with a focus on aesthetics, comfort, and long-term outcomes.
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
                        <BackgroundBeams />
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