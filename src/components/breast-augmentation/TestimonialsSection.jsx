import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    procedure: "Breast Augmentation",
    rating: 5,
    text: "I was nervous about getting implants, but Dr. Ashrith and his team made me feel so comfortable. The 3D simulation helped me visualize exactly what I wanted. The results are beautiful and natural-looking. I finally feel confident in my body!",
    image: "https://images.unsplash.com/photo-1770235622504-3851a96ac6ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjB3b21hbiUyMGVsZWdhbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQyNDc1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Anjali M.",
    procedure: "Breast Reduction",
    rating: 5,
    text: "After years of back pain and discomfort, breast reduction changed my life. Dr. Ashrith understood exactly what I needed. The hospital facilities are top-notch, and the care I received was exceptional. I wish I had done this sooner!",
    image: "https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDE2NjQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Divya K.",
    procedure: "Breast Lift with Implants",
    rating: 5,
    text: "Post-pregnancy, I wanted to restore what I had lost. The combination of lift and implants gave me the youthful shape I was hoping for. The all-female nursing staff made the experience so comfortable. Avatarluxe truly is premium in every way.",
    image: "https://images.unsplash.com/photo-1707124760574-077d74fc3784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGFlc3RoZXRpYyUyMGx1eHVyeXxlbnwxfHx8fDE3NzQyNDc1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonial" className="bg-black text-white ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mx-auto mb-12 sm:mb-16 mt-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-left mt-3">
            What Our Clients Say
          </h2>
          {/* <p className="text-white/70 text-base sm:text-lg text-left">
            Real stories from real women who transformed their lives at Avatarluxe
          </p>
   
          
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              What Our Clients Say
            </h2> */}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black p-6 sm:p-8 rounded-xl border transition-all relative"
              style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="size-16 sm:size-20" style={{ color: '#D4AF37' }} />
              </div>

              {/* Rating */}
              {/* <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="size-4 sm:size-5 fill-current" style={{ color: '#D4AF37' }} />
                ))}
              </div> */}

              {/* Testimonial Text */}
              <p className="text-white/70 mb-6 text-sm sm:text-base leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                {/* <div className="size-12 sm:size-14 rounded-full overflow-hidden flex-shrink-0">
                  <div className="w-full h-full" style={{ background: `linear-gradient(135deg, #D4AF37 0%, #8B7923 100%)` }} />
                </div> */}
                <div>
                  <div className="text-base sm:text-lg mb-1">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-white/60">{testimonial.procedure}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 sm:px-8 py-4 sm:py-6 bg-black rounded-xl border" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl mb-1">4.9/5.0</div>
              <div className="text-sm text-white/60">Average Rating</div>
            </div>
            <div className="h-12 w-px hidden sm:block" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }} />
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl mb-1">500+</div>
              <div className="text-sm text-white/60">Happy Clients</div>
            </div>
            <div className="h-12 w-px hidden sm:block" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }} />
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl mb-1">98%</div>
              <div className="text-sm text-white/60">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}