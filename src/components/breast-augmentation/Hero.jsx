import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";


const stats = [
  { label: "Successful Procedures", value: "10K+" },
  { label: "Patient Satisfaction", value: "98%" },
  { label: "Years of Excellence", value: "15" },
  { label: "International Awards", value: "20+" },
];

export function Hero() {
  return (
    
            <section className="relative min-h-[92vh] w-full">
      
              <div className="absolute inset-0 bg-black/70" />
      
              <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16">
      
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-2 sm:mb-2">
                <CheckCircle className="size-4" style={{ color: '#D4AF37' }} />
                <span className="text-xs sm:text-sm text-white/80">KPME Level-2 Certified Hospital</span>
              </div>
      
                <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold">
                  Redefining Confidence Through <span style={{ color: '#D4AF37' }}>Breast Augmentation</span> & Aesthetic Breast Surgery
                </h1>
      
                <p className="mt-7 max-w-3xl text-zinc-300">
                  At Avatarluxe, Koramangala’s premier Level-2 aesthetic and plastic surgery hospital, we offer advanced breast augmentation, lift, and reduction procedures tailored for natural-looking results. Led by Dr. Ashrith Iyanahally, a board-certified plastic surgeon in Bangalore, our treatments are designed to enhance your confidence with safety, precision, and personalized care.
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


    
  );
}