import { 
  ArrowRight, 
} from 'lucide-react';

const services = [
  {
    number: "01",
    title: "Breast Enlargement with Implants",
    subtitle: "Lifetime Warranty Implants | FDA-Approved | Natural, Predictable Results",
    description:
      "If you're dreaming of fuller, shapely, symmetrical breasts, Breast Implants offer the most reliable enhancement. At Avatarluxe, we use only the world's best silicone gel implants with a lifetime warranty, trusted by millions worldwide.",
    benefits: [
      "Safe, FDA-approved silicone implants",
      "Lifetime warranty coverage",
      "Customised size, shape & projection",
      "Natural feel & long-term stability",
      "3D simulation for pre-surgery visualisation",
      "Quick recovery & minimal downtime"
    ],
    idealFor: "Perfect for women wanting significant enhancement with long-lasting, precise results.",
    image: "/images/services/breast-enlargement-implants.webp"
  },
  {
    number: "02",
    title: "Breast Enlargement with Fat Transfer",
    subtitle: "100% Natural Breast Enhancement | No Implants | Dual Benefit of Liposuction",
    description:
      "Fat transfer breast augmentation uses your own fat to naturally enhance size and shape. A favourite among women seeking a more subtle, organic look.",
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
    title: "Breast Lift with Implants",
    subtitle: "Best Combo for Sagging Breasts + Volume Loss",
    description:
      "A breast lift with implants restores youthful shape, firmness, and upper pole fullness — especially after pregnancy, breastfeeding, weight loss, or ageing.",
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
    title: "Breast Reduction",
    subtitle: "Relief From Pain | Better Posture | Beautiful Shape",
    description:
      "Large, heavy breasts can cause back pain, neck pain, bra strap grooving, rashes, and emotional distress. Breast reduction is one of the most life-improving procedures for women.",
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

export function ServicesSection() {
  return (
    <section id="treatments" className="bg-black text-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="mt-5 mb-5 text-3xl sm:text-5xl font-normal">
               Types of Breast Augmentation & Breast Surgery at Avatarluxe
            </h2>
            <p className="text-zinc-300 leading-relaxed">
            At Avatarluxe, we offer a curated selection of augmentation techniques tailored to your unique anatomy and aesthetic goals. Every procedure is performed with precision and an artistic eye for symmetry.
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

                {/* Image */}
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Subtitle */}
                <p className="text-sm sm:text-base uppercase tracking-wide" style={{ color: '#D4AF37' }}>
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-zinc-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits List */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="mt-1.5">
                        <div className="size-1.5 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
                      </div>
                      <span className="text-zinc-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="bg-black rounded-lg p-4 sm:p-6 border" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <div className="flex items-start gap-3">
                    <span className="text-sm" style={{ color: '#D4AF37' }}>Ideal For :</span>
                    <span className="text-white/60 text-sm italic flex-1">{service.idealFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}