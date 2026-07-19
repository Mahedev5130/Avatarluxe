"use client";

import "./about.css";
import { Award, Cpu, HeartPulse, KeyRound, Quote, CheckCircle} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Footer from "@/components/footer";
import { MenuBar } from "@/components/MenuBar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TestimonialsSection } from "@/components/breast-augmentation/TestimonialsSection";

const stats = [
  { label: "Transformations", value: "10K+" },
  { label: "Success Rate", value: "98%" },
  { label: "Years of Precision", value: "15" },
  { label: "Global Clients", value: "20+" },
];

const highlights = [
  {
    title: "Consult with the Best",
    description:
      "Consultants with a collective experience of 25+ years in Hair, Skin, Laser, and Plastic Surgery collectively assist you with the right solutions to achieve your goal.",
    icon: Award,
  },
  {
    title: "Patient-Centric Care",
    description:
      "We believe any treatment achieves its peak solution when you and we walk hand-in-hand, starting with educating you in detail about the issue and planning the solution together to address the concern and eliminate it.",
    icon: HeartPulse,
  },
  {
    title: "Next Gen Technology",
    description:
      "Incorporated with state-of-the-art next-generation machines and tools to combat skin concerns, alongside European-standard surgical instruments and undetectable non-surgical hair systems, creating a pain-free, quick recovery & results.",
    icon: Cpu,
  },
  {
    title: "Unparalleled Results & Experience",
    description:
      "Bringing together over 30 years of combined experience with senior celebrity plastic surgeons, aesthetic physicians, and the latest devices in the field of Dermatology to indulge yourself in a luxurious modern European-style set-up to pamper yourself.",
    icon: KeyRound,
  },
];

const teamMembers = [
   {
    name: "Ashrith Iyanahally",
    role: "MBBS, MS, MCh Plastic Surgery",
    image:
      "/images/dr-ashrith-iyanahally.webp",
  },
  {
    name: "Dr. Ankitha",
    role: "MBBS, MD DVL",
    image:
      "/images/dr-ankitha.webp",
  },
];

const reviews = [
  {
    text: "From the first consultation to post-care, the experience felt deeply personal and incredibly premium.",
    author: "Noah W.",
  },
  {
    text: "Their precision and honesty stood out. The results look natural, and my confidence is fully back.",
    author: "Isabella R.",
  },
  {
    text: "The team blends medical excellence with aesthetics better than any clinic I evaluated.",
    author: "Daniel K.",
  },
];

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};

export default function AboutUsPage() {
  return (
    <main className="about-page min-h-screen overflow-x-hidden bg-black text-white">
      <MenuBar />

      {/* HERO */}
      <section className="relative min-h-[92vh] w-full">


        <div className="absolute inset-0 bg-black/70" />

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16">

          <div className="inline-flex items-center gap-2 py-2 bg-white/10 backdrop-blur-sm px-4 rounded-full mb-2 sm:mb-2">
            <CheckCircle className="size-4" style={{ color: '#D4AF37' }} />
            <span className="text-xs sm:text-sm text-white/80">About Us</span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Crafting Confidence Through <span style={{ color: '#D4AF37' }}>Precision & Care</span>
          </h1>

          <p className="mt-7 max-w-3xl text-zinc-300">
            At our clinic, we blend advanced medical expertise with refined aesthetic artistry to deliver results that feel natural, personal, and transformative. Every treatment is thoughtfully tailored, ensuring each client experiences renewed confidence and lasting satisfaction.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button
              className="rounded-none border border-white/30 bg-white px-7 py-6 text-xs font-bold uppercase tracking-[0.2em] text-black hover:bg-zinc-200"
              onClick={() => scrollToSection("about-story-section")}
            >
              Discover Our Story
            </Button>

            <a href="#team-section">
            <Button
              variant="outline"
              className="rounded-none border-white/35 bg-transparent px-7 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black"
              onClick={() => scrollToSection("team-section")}
            >
              Meet the Team
            </Button>
            </a>

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

      {/* STORY */}
      <section
        id="about-story-section"
        className="mx-auto grid max-w-7xl md:grid-cols-12 gap-12 px-6 py-2 sm:py-20 items-center"
      >

        <div className="md:col-span-6">

          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            Our Vision
          </p>

          <h2 className="mt-5 text-3xl sm:text-5xl font-normal">
            Where Clinical Science Meets Signature Aesthetics
          </h2>

          <div className="mt-6 h-px w-24 bg-white/30" />

          <p className="mt-6 text-zinc-300">
            At Avatarluxe™, we redefine beauty as a seamless fusion of science, artistry, and indulgence. Our philosophy is rooted in creating a serene sanctuary where transformation goes beyond appearance—enhancing confidence, well-being, and self-expression.

<br /><br />Every experience is thoughtfully curated, combining advanced aesthetic innovations with a deeply personalized approach. Our expert team is dedicated to precision, care, and excellence, ensuring each treatment is tailored to individual needs and aspirations.

<br /><br />We believe true luxury lies in the details—in the calm, the comfort, and the confidence you carry when you leave. At Avatarluxe™, every visit is designed to inspire, rejuvenate, and leave you feeling effortlessly radiant.
          </p>

        </div>

        <div className="md:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden border border-white/20 bg-black/40 rounded-xl shadow-[0_20px_60px_rgba(212,175,55,0.2)]">
            <img
              src="/images/about/avatarluxe-clinic.webp"
              alt="Luxury clinic interior"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </section>

      {/* VISION */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="border border-white/10 bg-black px-6 py-16">

          <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-[80px] items-center px-6">

            <div className="md:col-span-4">

              <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                Our Vision
              </p>

              <h2 className="mt-5 text-3xl sm:text-5xl font-normal">
                A More Beautiful And Confident You!
              </h2>

            </div>

            <div className="md:col-span-8">

              <p className="text-zinc-300">
                At Avatarluxe™, we aim to create a haven of beauty and rejuvenation, offering unparalleled indulgence and refinement. Our goal is to epitomize elegance and sophistication in aesthetics, providing an exclusive boutique clinic experience where clients can escape daily pressures. With meticulous attention to detail, our skilled team delivers exceptional results, blending cutting-edge techniques with personalized care. We envision luxury as an experience, leaving clients feeling pampered, empowered, and confidently radiant.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="border border-white/10 bg-black px-6 py-12">

          <div className="grid md:grid-cols-12 gap-12">

            <div className="md:col-span-4">

              <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                Why Choose Us
              </p>

              <h2 className="mt-5 text-3xl sm:text-4xl font-semibold">
                Excellence Built with Expertise, Care, and Innovation
              </h2>

            </div>

            <div className="md:col-span-8 space-y-5">

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="border border-white/15 bg-[#050505] p-5 hover:border-white/40 transition"
                  >

                    <div className="flex gap-4">

                      <div className="flex h-11 w-11 items-center justify-center border border-[#D4AF37]/35 bg-black">
                        <Icon className="h-5 w-10 text-[#D4AF37]" />
                      </div>

                      <div>

                        <h3 className="text-xl font-medium">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-zinc-300">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </article>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* TEAM */}
      <section
        id="team-section"
        className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 md:pb-28 lg:px-12"
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="w-full shrink-0 lg:w-[38%]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
          Team
        </p>

        <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
          Meet the Experts Behind Every Transformation
        </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:w-[62%]">

          {teamMembers.map((member) => {
            const slug = member.name.toLowerCase().replace(/\s+/g, "-");

            return (
              <article
                key={member.name}
                className="group relative aspect-[3/4] overflow-hidden border border-white/10 bg-black"
              >

                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-x-0 bottom-0 translate-y-8 bg-black/85 p-3   pb-5 transition-transform duration-500 group-hover:translate-y-0">

                  <h3 className="text-lg font-medium text-white">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-zinc-300">
                    {member.role}
                  </p>

                </div>
              </article>
            );
          })}

        </div>
        </div>

      </section>

{/* REVIEWS */}
<section className="mx-auto w-full max-w-7xl px-6 pb-24 sm:px-8 md:pb-28 lg:px-12">


<TestimonialsSection />

</section>

<Footer />
    </main>
    
  );
}