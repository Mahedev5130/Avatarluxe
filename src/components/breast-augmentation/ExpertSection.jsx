import { GraduationCap, Award, Briefcase, Heart } from "lucide-react";

export function ExpertSection() {
  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Meet the Expert Behind{" "}
            <span style={{ color: '#D4AF37' }}>Every Transformation</span>
          </h2>
        </div>

        {/* Expert Profile */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Doctor Image */}
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] rounded-xl overflow-hidden border-2" style={{ borderColor: '#D4AF37' }}>
                <img
                  src="https://images.unsplash.com/photo-1772987057599-2f1088c1e993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQyMjY4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dr. Ashrith Iyanahally"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <div className="text-xl sm:text-2xl mb-1">Dr. Ashrith Iyanahally</div>
                <div className="text-sm sm:text-base text-white/60">Board-Certified Plastic Surgeon</div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                Dr. Ashrith Iyanahally is one of Bangalore's most respected and sought-after 
                plastic surgeons, specializing in breast aesthetics and reconstructive surgery. 
                With international training and over 15 years of experience, Dr. Ashrith has 
                transformed the lives of thousands of women.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-black rounded-lg border" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <div className="size-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D4AF37' }}>
                    <GraduationCap className="size-5 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Education</div>
                    <div className="text-sm sm:text-base">Board-Certified with International Training</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-black rounded-lg border" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <div className="size-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D4AF37' }}>
                    <Briefcase className="size-5 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Experience</div>
                    <div className="text-sm sm:text-base">15+ Years in Plastic Surgery</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-black rounded-lg border" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <div className="size-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D4AF37' }}>
                    <Award className="size-5 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Recognition</div>
                    <div className="text-sm sm:text-base">20+ International Awards</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-black rounded-lg border" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <div className="size-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D4AF37' }}>
                    <Heart className="size-5 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Procedures</div>
                    <div className="text-sm sm:text-base">10,000+ Successful Surgeries</div>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 pl-4 sm:pl-6 py-2 italic text-white/70 text-base sm:text-lg" style={{ borderColor: '#D4AF37' }}>
                "My goal is to help every woman feel beautiful, confident, and comfortable in 
                her own body. Each procedure is personalized with surgical precision and 
                artistic care."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}