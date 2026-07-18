export function AboutSection() {
  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
            Our Goal
          </p>
          <h2 className="mt-8 mb-8 text-3xl sm:text-4xl font-normal italic italic border-l-1 border-[#D4AF37] p-10 pr-0">
              "To help women feel confident, feminine, and empowered with the safest and most advanced breast enhancement procedures in India."
          </h2>
        </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/images/about/avatarluxe-clinic.webp"
                alt="Luxury Medical Clinic Interior"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Accent Box */}
            <div className="absolute -bottom-6 -left-6 text-black p-6 rounded-lg max-w-xs hidden sm:block" style={{ backgroundColor: '#D4AF37' }}>
              <div className="text-2xl mb-1">Level-2</div>
              <div className="text-sm">KPME Certified Surgical Hospital</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}