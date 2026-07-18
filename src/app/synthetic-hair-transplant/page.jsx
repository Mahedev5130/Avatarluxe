"use client";

import { TestimonialsSection } from "@/components/breast-augmentation/TestimonialsSection";
import Footer from "@/components/footer";
import { MenuBar } from "@/components/MenuBar";
import CTA from "@/components/Cta";
import { CheckCircle} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BackgroundBeams } from "@/components/ui/background-beams";



const stats = [
  { label: "Successful Sessions", value: "10K+" },
  { label: "Client Satisfaction Rate", value: "98%" },
  { label: "Years of Clinical Expertise", value: "15" },
  { label: "International Certifications", value: "20+" },
];

 const steps = [
    {
      title: "Hooked Needle Implantation",
      desc: "Precision placement",
      icon: (
        <img src="/images/services/crochet.webp" width="40"/>
      ),
    },
    {
      title: "Fibres Implanted Deeper",
      desc: "No natural root",
      icon: (
        <img src="/images/services/hair.webp" width="40"/>
      ),
    },
    {
      title: "Anchoring 20–30 Days",
      desc: "Secure bonding",
      icon: (
        <img src="/images/services/hourglass.webp" width="30"/>
      ),
    },
    {
      title: "Multiple Sessions Every 5 Weeks",
      desc: "For best coverage",
      icon: (
        <img src="/images/services/consultation.webp" width="35"/>
      ),
    },
  ];

export default function App() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fadeUp", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="min-h-screen bg-black">
      <MenuBar />
      <main>
        <section className="relative min-h-[92vh] w-full">
      
              <div className="absolute inset-0 bg-black/70" />
      
              <div className="relative mx-auto max-w-7xl px-6 pt-28">
      
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-2 sm:mb-2">
                <CheckCircle className="size-4" style={{ color: '#D4AF37' }} />
                <span className="text-xs sm:text-sm text-white/80">Advanced Hair Transplant</span>
              </div>
      
                <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold">
                  Synthetic Hair Transplant in Bangalore <span style={{ color: '#D4AF37' }}>(Biofibre & Nido Hair Implant)</span>
                </h1>
      
                <p className="mt-7 max-w-3xl text-zinc-300">
                  A Biofibre hair transplant / Nido synthetic hair transplant is an innovative approach to artificial hair restoration. It allows individuals who are not suitable candidates for a natural hair transplant to achieve a full head of hair. 
                </p>
      
                <div className="mt-10 flex flex-wrap gap-4">
      
                  <Button
                    className="rounded-none border border-white/30 bg-white px-7 py-6 text-xs font-bold uppercase tracking-[0.2em] text-black hover:bg-zinc-200"
                    onClick={() => scrollToSection("about-story-section")}
                  >
                    CHECKOUT OUR SERVICES
                  </Button>
      
                  <Button
                    variant="outline"
                    className="rounded-none border-[#D4AF37]/35 bg-transparent px-7 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black"
                    onClick={() => scrollToSection("team-section")}
                  >
                    SCHEDULE CONSULTATION
                  </Button>
      
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

        <section className="bg-black text-white mt-30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                       Smooth, confident skin
                    </p>
                    <h2 className="mt-5 text-3xl sm:text-5xl font-normal">
                        Biofibre (Italy) & Nido (Japan): Synthetic Hair Transplant in Bangalore
                    </h2>
                    <p className="mt-8 mb-8 text-zinc-300 font-normal">
                     Discover a proven solution to hair loss with biofibre synthetic hair transplant technology in Bangalore. Avatarluxe stands at the forefront of advanced artificial hair implant techniques, offering one of the most effective and innovative hair restoration solutions available today.
                    </p>
                    <p>
                      People with conditions such as:
                    </p>
                    <ul className=" pl-2 mt-3 space-y-1 text-zinc-300">
                        <li className="flex items-start gap-2">
                          <span className="text-[#D4AF37]">•</span>
                          Scarring alopecia
                          
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D4AF37]">•</span>
                          Advanced male pattern baldness
                          
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D4AF37]">•</span>
                          Female pattern baldness
                          
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D4AF37]">•</span>
                          Hair graft over-harvesting
                          
                        </li>
                    </ul>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                            src="/images/services/synthetic-hair-transplant.webp"
                            alt="Synthetic Hair Transplant"
                            className="w-full h-full object-cover"
                        />
                        </div>
                        
                        {/* Accent Box */}
                        <div className="absolute -bottom-6 -left-6 text-black p-6 rounded-lg max-w-xs hidden sm:block" style={{ backgroundColor: '#D4AF37' }}>
                        <div className="text-2xl mb-1">Biofibre & Nido</div>
                        <div className="text-sm">Instant Result</div>
                        </div>
                    </div>
                    </div>
                </div>
        </section>

        <section
      ref={sectionRef}
      className="bg-black text-white px-6 md:px-16 overflow-hidden mt-30"
    >
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* RIGHT IMAGE */}
          <div className="fadeUp relative group">
            <img
              src="/images/services/synthetic-hair-implants.webp"
              className="rounded-2xl shadow-2xl group-hover:scale-105 transition duration-700"
              alt="hair transplant"
            />

            <div className="absolute bottom-6 left-6 bg-[#D4AF37] text-black px-5 py-3 rounded-lg font-semibold shadow-xl">
              Medical Grade Safety <br />
              <span className="text-sm font-normal">
                Grade VI Polymer
              </span>
            </div>
          </div>       
          {/* RIGHT*/}
          <div className="fadeUp">
            <p className="text-[#D4AF37] mb-3 tracking-widest text-sm">
              BIOFIBRE/NIDO
            </p>

            <h2 className="mt-5 text-3xl sm:text-5xl font-normal mb-5">
               What is Biofibre Hair Transplant?
            </h2>

            <p className="text-gray-300 text-lg mb-6">
              At <span className="text-white font-semibold">Avatarluxe Aestheticians</span>, 
              we perform advanced <span className="text-[#D4AF37]">Biofibre hair implants</span> 
              and Nido hair transplants in Bangalore—delivering instant,
              natural-looking results with cutting-edge technology.
            </p>

            {/* Comparison */}
            <div>
              <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Natural transplant → Transplant healthy hair follicles into the bald area of the scalp
                          
              </li>
              <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  Synthetic transplant → Artificial fibres implanted into the scalp
                          
              </li>
            </div>
          </div>
        </div>
        </div>
        </section>

        {/* HIGHLIGHTS */}

        <section className="bg-black text-white px-6 md:px-16 overflow-hidden mt-30">
       
        <div className=" flex flex-row items-center">
          <div className="flex-1 pr-25">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              NO DONOR. NO PROBLEM
            </p>
            <h2 className=" text-3xl sm:text-5xl text-left fadeUp mt-5">
              Key Highlights of the Procedure
            </h2>
            <p className="text-zinc-300 mt-5">
              Experience cutting-edge biofibre hair implant technology designed to deliver instant results, precise density control, and long-lasting confidence — even for patients with no donor hair.
            </p>
            <Button
                    variant="outline"
                    className="rounded-none border-[#D4AF37]/35 bg-transparent px-7 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black mt-10"
                    onClick={() => scrollToSection("team-section")}
                  >
                    SCHEDULE CONSULTATION
            </Button>
         </div>
          <div className="flex flex-1 flex-col gap-5 fadeup">
            {/* LEFT */}
            <div className="flex flex-row gap-10">
                <div className="flex-1 flex flex-col items-center bg-white/5 p-6 border-b-1 border-[#D4AF37] rounded-l h-[150px]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
                      stroke="#D4AF37"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h4 className="font-semibold mb-2 mt-5 text-center">
                    Immediate Visible Results
                  </h4>
                  <p className="text-center text-zinc-300">No waiting for growth</p>
                </div>

                <div className="flex-1 flex flex-col items-center bg-white/5 p-6 border-b-1 border-[#D4AF37] rounded-l h-[150px]">
                  <img src="/images/services/hair.webp" width="30" height="30"/>
                  <h4 className="font-semibold mb-2 mt-5">
                    Full Control Over Density
                  </h4>
                  <p className="text-zinc-300">Customize hair volume</p>
                </div>
            </div>
            <div className="flex flex-row gap-10">
                <div className="flex-1 flex flex-col items-center bg-white/5 p-6 border-b-1 border-[#D4AF37] rounded-l h-[150px]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#D4AF37" strokeWidth="1.8"/>
                    <line x1="8" y1="8" x2="16" y2="16" stroke="#D4AF37" strokeWidth="1.8"/>
                  </svg>
                  <h4 className=" font-semibold  mb-2 mt-5 text-center">
                    No Donor Needed required
                  </h4>
                  <p className="text-zinc-300">Severe hair loss solution</p>
                </div>

                <div className="flex-1 flex flex-col items-center bg-white/5 p-6  border-b-1 border-[#D4AF37] rounded-l h-[150px]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="#D4AF37"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="9" stroke="#D4AF37" strokeWidth="1.8"/>
                  </svg>
                  <h4 className="font-semibold mb-2 mt-5">
                    High Success Rate
                  </h4>
                  <p className="text-zinc-300">95-98% proven results</p>
                </div>
            </div>
          </div>

        </div>
        </section>

        {/* TYPES */}

        <section className="bg-black text-white px-6 md:px-16 overflow-hidden mt-30">
        
        <div className=" flex flex-row items-center">

          <div className="flex flex-1 flex-col gap-5 fadeup">
                <div className=" flex flex-col items-start bg-white/5 p-6 border-b-1 border-[#D4AF37] rounded-l">
                  <div className="inline-flex items-center bg-[#D4AF37] rounded-full p-[2px]">
                    <div className="inline-flex items-center rounded-full px-4 py-2 bg-[#D4AF37]">

                      <span className="text-black font-semibold text-sm mr-3">
                        Biofibre 4.0
                      </span>

                      <span className="bg-black/80 text-white text-xs px-3 py-[2px] rounded-full">
                        Standard
                      </span>

                    </div>
                  </div>
                  <p className="text-zinc-300 mb-2 mt-5">
                    Biofibre 4.0 is the standard hair used for procedures, with 1,000 fibres being equivalent to 3,000 natural hairs. The standard Biofibre hairs are used to lower the hairline.
                  </p>
                </div>

                <div className=" flex flex-col items-start bg-white/5 p-6 border-b-1 border-[#D4AF37] rounded-l">
                  <div className="inline-flex items-center bg-[#D4AF37] rounded-full p-[2px]">
                    <div className="inline-flex items-center rounded-full px-4 py-2 bg-[#D4AF37]">

                      <span className="text-black font-semibold text-sm mr-3">
                        Medicap High Density
                      </span>

                      <span className="bg-black/80 text-white text-xs px-3 py-[2px] rounded-full">
                        MHD
                      </span>

                    </div>
                  </div>
                  <p className="text-zinc-300 mb-2 mt-5">
                    The high-density Medicap High Density (MHD) has three hairs implanted per follicle, allowing for a fuller appearance. MHD hairs are recommended to be used for crown hair transplants, 
                  </p>
                </div>

          </div>
          <div className="flex-1 pl-25">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              TYPES
            </p>
            <h2 className="mt-5 text-3xl sm:text-5xl mb-5 text-left fadeUp">
              Types of Biofibre
            </h2>
            <p className="text-zinc-300">
              Experience cutting-edge biofibre hair implant technology designed to deliver instant results, precise density control, and long-lasting confidence — even for patients with no donor hair.
            </p>
            <Button
                    variant="outline"
                    className="rounded-none border-[#D4AF37]/35 bg-transparent px-7 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black mt-10"
                    onClick={() => scrollToSection("team-section")}
                  >
                    SCHEDULE CONSULTATION
            </Button>
          </div>

        </div>
        </section>

        {/* PROCEDURE */}
    <section className="bg-black text-white px-6 md:px-16 overflow-hidden mt-30">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              PROCESS
        </p>
        <h2 className=" text-3xl sm:text-5xl fadeUp text-center mb-20 text-left mt-3">
              Procedure Details
        </h2>

        <div className="relative">
          {/* GOLD LINE */}
          <div className="absolute top-10 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center relative">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                
                {/* ICON CIRCLE */}
                <div className="relative mb-6 group">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center 
                    bg-black border border-[#D4AF37]/40
                    shadow-[0_0_25px_rgba(212,175,55,0.4)]
                    transform transition-all duration-500 ease-out
                    group-hover:-translate-y-3
                    group-hover:shadow-[0_10px_40px_rgba(212,175,55,0.6)]">

                    {step.icon}
                  </div>
                </div>

                {/* TEXT */}
                <h4 className="font-semibold mb-2 text-sm md:text-base">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {step.desc}
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>
        </section>

        {/* WARNING */}

      <section className="mt-30">
        <TestimonialsSection />
      </section>

      <CTA />

      </main>
      <Footer />
    </div>
  );
}