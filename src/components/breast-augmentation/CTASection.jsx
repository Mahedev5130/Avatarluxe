import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-15">
      <div className="container mx-auto px-4 sm:px-2 lg:px-2">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Box */}
          <div className="relative overflow-hidden rounded-2xl p-8 sm:p-12 lg:p-16 text-center" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)' }}>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 size-32 sm:size-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 size-24 sm:size-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
                <Sparkles className="size-4 text-white" />
                <span className="text-xs sm:text-sm text-white">Begin Your Journey</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black mb-4 sm:mb-6">
                Enhance. Refine. <span className="italic">Reveal.</span>
              </h2>

              <p className="text-base sm:text-lg text-black/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Whether you wish to enhance, lift, reduce, or completely redesign your 
                silhouette, Avatarluxe gives you the safest and most luxurious experience 
                in Bengaluru.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="/contact-us">
                <Button className="bg-black text-white hover:bg-black/90 transition-colors h-12 px-8 uppercase">
                  Schedule Consultation
                  <ArrowRight className="size-4 ml-2" />
                </Button>
                </a>
                <a href="tel:+91 988 446 9279">
                <Button 
                  variant="outline" 
                  className="border-2 border-black text-black hover:bg-black hover:text-white transition-colors h-12 px-8"
                >
                  CALL NOW
                </Button>
                </a>
              </div>

              <p className="text-xs sm:text-sm text-black/80 mt-6">
                Your confidence deserves world-class care. Your body deserves expert hands.
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 sm:mt-12">
            <div className="text-center p-4 bg-black rounded-lg border" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
              <div className="text-lg sm:text-xl mb-1">✓ FDA Approved</div>
              <div className="text-xs sm:text-sm text-white/60">Safe Implants</div>
            </div>
            <div className="text-center p-4 bg-black rounded-lg border" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
              <div className="text-lg sm:text-xl mb-1">✓ Lifetime Warranty</div>
              <div className="text-xs sm:text-sm text-white/60">On Implants</div>
            </div>
            <div className="text-center p-4 bg-black rounded-lg border" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
              <div className="text-lg sm:text-xl mb-1">✓ Level-2 Hospital</div>
              <div className="text-xs sm:text-sm text-white/60">KPME Certified</div>
            </div>
            <div className="text-center p-4 bg-black rounded-lg border" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
              <div className="text-lg sm:text-xl mb-1">✓ 24/7 Support</div>
              <div className="text-xs sm:text-sm text-white/60">Post-Op Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}