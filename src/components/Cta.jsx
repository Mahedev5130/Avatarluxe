"use client";
import { BackgroundBeams } from "../components/ui/background-beams";

import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-16">
      <div className="container mx-auto px-4 sm:px-2 lg:px-2">
        <div className="max-w-5xl mx-auto">

          {/* Main CTA Box */}
          <div
            className="relative overflow-hidden rounded-2xl p-8 sm:p-12 lg:p-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)",
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 size-32 sm:size-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 size-24 sm:size-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
                <Sparkles className="size-4 text-white" />
                <span className="text-xs sm:text-sm text-white">
                  Smooth Skin. Timeless Confidence.
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black mb-4 sm:mb-6">
                Smooth. Effortless. Permanent.
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-black/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Whether you want to eliminate unwanted facial hair, achieve
                silky-smooth skin, or reduce constant shaving and waxing,
                AvatarLuxe offers advanced laser hair removal tailored to your
                skin and lifestyle. Experience safe, virtually painless
                treatments powered by next-generation technology—designed for
                long-lasting results and flawless confidence.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="/contact-us">
                  <Button className="bg-black text-white hover:bg-black/90 transition-colors h-12 px-8 uppercase">
                    Schedule Consultation
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                </a>

                <a href="tel:+919884469279">
                  <Button
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-black hover:text-white transition-colors h-12 px-8"
                  >
                    CALL NOW
                  </Button>
                </a>
              </div>

              {/* Footer text */}
              <p className="text-xs sm:text-sm text-black/80 mt-6">
                Say goodbye to unwanted hair. Say hello to smooth, confident
                skin—every day.
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 sm:mt-12">
            {[
              { title: "✓ FDA Approved", desc: "Safe Implants" },
              { title: "✓ Lifetime Warranty", desc: "On Implants" },
              { title: "✓ Level-2 Hospital", desc: "KPME Certified" },
              { title: "✓ 24/7 Support", desc: "Post-Op Care" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-4 bg-black rounded-lg border"
                style={{ borderColor: "rgba(212, 175, 55, 0.2)" }}
              >
                <div className="text-lg sm:text-xl mb-1">
                  {item.title}
                </div>
                <div className="text-xs sm:text-sm text-white/60">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
    
  );
  <BackgroundBeams />
}