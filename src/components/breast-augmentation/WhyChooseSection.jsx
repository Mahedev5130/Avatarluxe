import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Shield, Gem, Microscope, Users, Clock } from "lucide-react";

const WhyChooseSection = () => {
  const items = [
    {
      icon: Stethoscope,
      title: "International Expertise",
      description:
        "Dr. Ashrith Iyanahally is widely recognised as one of the best plastic & cosmetic breast surgeons in Bangalore. His results are natural, symmetrical, and personalised — blending artistry with surgical mastery.",
      className: "md:col-span-8 md:row-span-2",
      image: "/images/dr-ashrith-iyanahally.webp",
    },
    {
      icon: Shield,
      title: "Level-2 Hospital",
      description:
        "Avatarluxe is a Level-2 surgical facility offering hospital-grade safety, sterile operation theatres, advanced monitoring systems, and emergency readiness.",
      className: "md:col-span-4 md:row-span-1",
    },
    {
      icon: Gem,
      title: "Premium Lifetime Warranty",
      description:
        "Only globally trusted, premium-quality breast implants with lifetime warranty are used — ensuring safety, durability, and peace of mind.",
      className: "md:col-span-4 md:row-span-1",
    },
    {
      icon: Microscope,
      title: "Digital 3D Planning & Simulation",
      description:
        "See your “after” before the surgery. Our advanced 3D breast simulation helps you choose the perfect size, shape, and proportion.",
      className: "md:col-span-4 md:row-span-1",
    },
    {
      icon: Users,
      title: "Dedicated Women-Centric Care",
      description:
        "A private, comforting environment where your dignity, privacy, and comfort come first. Our all-female nursing and care team ensures a stress-free, smooth experience.",
      className: "md:col-span-4 md:row-span-1",
    },
    {
      icon: Clock,
      title: "Exceptional Post-Operative Care",
      description:
        "From consultation to complete healing, we handhold every patient with personalised recovery plans and regular follow-ups.",
      className: "md:col-span-4 md:row-span-1",
    },
  ];

  return (
    <section className="py-8 bg-black">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="mb-20 w-[60%]">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            Why Avatarluxe
          </p>
          <h2 className="mt-5 text-3xl sm:text-5xl font-normal text-white">
            Why Women Choose Avatarluxe & Dr. Ashrith Iyanahally
          </h2>
        </div>

        {/* SAME GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[210px]">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`group relative rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500
                ${idx === 0
                  ? "justify-end bg-black border-gold/30 p-10 shadow-[0_0_60px_rgba(212,175,55,0.15)]"
                  : "justify-start bg-zinc-900/50 border-white/5 p-5 hover:border-gold/30"
                }
                ${item.className}`}
            >

              {/* IMAGE */}
              {item.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-[center_20%] opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div
                    className={`absolute inset-0 
                      ${idx === 0
                        ? "bg-gradient-to-t from-black via-black/30 to-transparent"
                        : "bg-gradient-to-t from-black via-black/20 to-transparent"
                      }`}
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className="relative z-10">

                {/* ICON */}
                <div
                  className={`mb-4 rounded-xl flex items-center justify-left transition-all duration-500
                    ${idx === 0
                      ? "w-12 h-12 bg-gold/20 text-[#D4AF37]"
                      : "w-10 h-10 bg-gold/10 text-[#D4AF37] group-hover:bg-gold group-hover:text-[#f9e39f]"
                    }`}
                >
                  {React.createElement(item.icon, {
                    className: idx === 0 ? "w-6 h-6" : "w-5 h-5",
                  })}
                </div>

                {/* TITLE */}
                <h4
                  className={`font-serif mb-2 transition-colors
                    ${idx === 0
                      ? "text-2xl md:text-3xl text-white"
                      : "text-xl text-white group-hover:text-gold"
                    }`}
                >
                  {item.title}
                </h4>

                {/* DESCRIPTION */}
                <p
                  className={`leading-relaxed
                    ${idx === 0
                      ? "text-zinc-300 max-w-lg"
                      : "text-sm text-zinc-400"
                    }`}
                >
                  {item.description}
                </p>
              </div>

              {/* HOVER GLOW */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;