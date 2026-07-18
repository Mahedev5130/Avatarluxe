"use client";

import { TestimonialsSection } from "@/components/breast-augmentation/TestimonialsSection";
import Footer from "@/components/footer";
import { MenuBar } from "@/components/MenuBar";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTA from "@/components/Cta";
import { BackgroundBeams } from "@/components/ui/background-beams";

const stats = [
  { label: "Successful Sessions", value: "10K+" },
  { label: "Client Satisfaction Rate", value: "98%" },
  { label: "Years of Clinical Expertise", value: "15" },
  { label: "International Certifications", value: "20+" },
];

const services = [
  {
    number: "01",
    title: "Milesman: The Next Generation Laser Hair Removal",
    description:
      "Discover the revolutionary Milesman Compact, a 100% Made in Spain laser hair removal machine that sets new standards in painless, effective, and fast treatments. Available exclusively at AvatarLuxe in Koramangala Bangalore, Milesman redefines the best laser hair removal experience for Laser Hair Removal Treatment for Face and Laser Hair Removal Treatment for full-body .",
    benefits: [
      "Safe, FDA-approved silicone implants",
      "Lifetime warranty coverage",
      "Customised size, shape & projection",
      "Natural feel & long-term stability",
      "3D simulation for pre-surgery visualisation",
      "Quick recovery & minimal downtime"
    ],
    idealFor: "Perfect for women wanting significant enhancement with long-lasting, precise results.",
    image: "/images/services/milesman-machine.webp"
  },
  {
    number: "02",
    title: "Painless and No Side Effects",
    subtitle: "100% Natural Breast Enhancement | No Implants | Dual Benefit of Liposuction",
    description:
      "Say goodbye to discomfort and adverse effects! Milesman ensures a painless experience with its unique design. The absence of a hot spot and the use of a colder tip made with sapphire, achieving temperatures as low as -9°C, make Milesman the epitome of comfort in laser hair removal. We have experienced and skilled Laser Hair Removal Doctors for treatment.",
      benefits: [
      "Completely natural & implant-free",
      "Soft, natural feel",
      "Simultaneous body contouring via liposuction",
      "Corrects mild asymmetry",
      "Quick healing & minimal scars"
    ],
    idealFor: "Ideal for women who want soft, natural fullness and subtle enhancement.",
    image: "/images/services/breast-enlargement-fat-transfer.webp"
  },
  {
    number: "03",
    title: "Effective Technology",
    subtitle: "Best Combo for Sagging Breasts + Volume Loss",
    description:
      "Milesman Next Gen stands at the forefront of laser hair removal technology in Europe. The innovative VCSEL technology distributes energy uniformly across the treatment area, eliminating the hotspot or pin effect seen in older technologies. This professional-grade machine is the result of five years of rigorous research conducted in Spanish, German, and US universities, along with collaboration with top engineering companies.",
       benefits: [
      "Elevates drooping breasts",
      "Restores nipple position",
      "Adds volume + firmness",
      "Long-lasting youthful contour",
      "Dramatically transformative results"
    ],
    idealFor: "Perfect for women who want both lift and fullness in a single procedure.",
    image: "/images/services/breast-lift-implants.webp"
  },
  {
    number: "04",
    title: "Comfort Redefined",
    subtitle: "Relief From Pain | Better Posture | Beautiful Shape",
    description:
      "At AvatarLuxe, we prioritise your comfort. Milesman is not only pain and noise-free but also ensures the work area stays cool, creating a spa-like experience during every procedure. Step into a world where laser hair removal treatment is as soothing as it is effective.",
      benefits: [
      "Smaller, lighter, proportionate breasts",
      "Instant relief from pain & discomfort",
      "Improved posture & mobility",
      "Enhanced confidence in clothing",
      "Natural, aesthetic shaping",
      "Minimal, well-placed scars"
    ],
    idealFor: "A surgery that brings comfort, freedom, and renewed self-esteem.",
    image: "/images/services/breast-reduction.webp"
  },
   {
    number: "05",
    title: "Transforming Your Hair Removal Experience",
    subtitle: "Relief From Pain | Better Posture | Beautiful Shape",
    description:
      "AvatarLuxe is proud to bring you the next generation Milesman Compact, delivering painless, effective, and fast laser hair removal exclusively in Bangalore. Say farewell to traditional methods and embrace a new era of confidence and comfort.",
      benefits: [
      "Smaller, lighter, proportionate breasts",
      "Instant relief from pain & discomfort",
      "Improved posture & mobility",
      "Enhanced confidence in clothing",
      "Natural, aesthetic shaping",
      "Minimal, well-placed scars"
    ],
    idealFor: "A surgery that brings comfort, freedom, and renewed self-esteem.",
    image: "/images/services/breast-reduction.webp"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <MenuBar />
      <main>
        <section className="relative min-h-[92vh] w-full">
      
              <div className="absolute inset-0 bg-black/70" />
      
              <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16">
      
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-2 sm:mb-2">
                <CheckCircle className="size-4" style={{ color: '#D4AF37' }} />
                <span className="text-xs sm:text-sm text-white/80">Advanced Laser Technology</span>
              </div>
      
                <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold">
                  Permanent <span style={{ color: '#D4AF37' }}>Laser Hair Removal</span> in Bangalore with Next-Gen Milesman Technology
                </h1>
      
                <p className="mt-7 max-w-3xl text-zinc-300">
                  Experience the future of laser hair removal in Bangalore with Milesman Next-Gen technology at AvatarLuxe, Koramangala. Designed and manufactured in Europe, this advanced system delivers safe, virtually painless, and long-lasting hair reduction for all skin types. At AvatarLuxe, our expert-led treatments ensure precision, comfort, and visible results from the very first session. Whether it’s facial hair, underarms, bikini line, or full body, our medical-grade laser technology targets hair at the root, minimizing regrowth while protecting your skin. Choose a smarter, more effective solution to unwanted hair with clinically proven laser treatments that offer smoother skin, reduced irritation, and confidence that lasts.
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
                <BackgroundBeams />
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
        </section>

        <section className="bg-black text-white py-16 sm:py-20 lg:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                       Smooth, confident skin
                    </p>
                    <h2 className="mt-5 text-3xl sm:text-5xl font-normal">
                        Advanced Laser Hair Removal in Bangalore for Smooth, Lasting Results
                    </h2>
                    <p className="mt-8 mb-8 text-zinc-300 font-normal">
                        Whether you’re looking for full body laser hair removal, underarms, facial hair removal, bikini treatment, or precise laser beard shaping, AvatarLuxe offers some of the best laser hair removal in Bangalore. Our advanced treatments are designed to deliver smooth, long-lasting results with minimal discomfort.
                        <br /><br />
                        Laser hair removal in Bangalore is a popular and effective solution for achieving hair-free skin. At AvatarLuxe, we use medical-grade laser technology to target hair follicles at the root, significantly reducing regrowth and eliminating the need for frequent shaving or waxing.
                        <br /><br />
                        For those seeking laser hair removal for the face in Bangalore, our expert team ensures safe, precise, and customized treatments for every skin type. Experience painless laser hair removal in Koramangala, Bangalore, and enjoy smoother skin, reduced irritation, and long-lasting confidence with minimal downtime
                    </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                            src="/images/services/laser-hair-removal.webp"
                            alt="Luxury Medical Clinic Interior"
                            className="w-full h-full object-cover"
                        />
                        </div>
                        
                        {/* Accent Box */}
                        <div className="absolute -bottom-6 -left-6 text-black p-6 rounded-lg max-w-xs hidden sm:block" style={{ backgroundColor: '#D4AF37' }}>
                        <div className="text-2xl mb-1">Next-Gen</div>
                        <div className="text-sm">Laser Hair Removal</div>
                        </div>
                    </div>
                    </div>
                </div>
        </section>

        <section id="treatments" className="bg-black text-white py-5 sm:py-20 lg:py-28">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                  {/* Left Side - Sticky */}
                  <div className="lg:sticky lg:top-32 lg:self-start">
                    
                    <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                        Reduces Hair Growth
                    </p>
                    <h2 className="mt-5 mb-5 text-3xl sm:text-5xl font-normal">
                       Benefits of Laser Hair Removal at AvatarLuxe
                    </h2>
                    <p className="text-zinc-300 leading-relaxed">
                        At AvatarLuxe, we offer advanced laser hair removal in Bangalore designed to deliver smooth, long-lasting results with precision and care. Our treatments significantly reduce hair growth, eliminate ingrown hair, and minimize skin irritation caused by shaving or waxing.

With medical-grade technology and expert supervision, every session is safe, virtually painless, and tailored to your skin type—helping you achieve consistently smoother, healthier-looking skin.
                    </p>
                    <a href="/contact-us">
                    <div className="flex items-center gap-4 text-gold group cursor-pointer mt-10">
                      <span className="font-semibold tracking-wider uppercase text-sm text-[#D4AF37]">Book a Consultation</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-[#D4AF37]" />
                    </div>
                    </a>
                  </div>
        
                  {/* Right Side - Scrollable Services */}
                  <div className="space-y-16 lg:space-y-20">
                    <div>
                    <img src="images/services/milesman-laser-machine.webp" />
                    </div>
                    {services.map((service) => (
                      <div key={service.number} className="space-y-6">
 
                        {/* Number and Title */}
                        <div className="flex items-start gap-4">
                          <span className="text-5xl sm:text-6xl" style={{ color: '#D4AF37' }}>
                            {service.number}
                          </span>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-tight">
                            {service.title}
                          </h3>
                        </div>
    
                        {/* Description */}
                        <p className="text-zinc-300 leading-relaxed">
                          {service.description}
                        </p>
        
                      </div>
                    ))}
                  </div>
                </div>
              </div>
        </section>

        <TestimonialsSection />

        <CTA />

      </main>
      <Footer />
    </div>
  );
}