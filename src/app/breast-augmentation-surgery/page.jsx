"use client";

import { Hero } from "@/components/breast-augmentation/Hero";
import { AboutSection } from "@/components/breast-augmentation/AboutSection";
import { ServicesSection } from "@/components/breast-augmentation/ServicesSection";
import  WhyChooseSection  from "@/components/breast-augmentation/WhyChooseSection";
import { TestimonialsSection } from "@/components/breast-augmentation/TestimonialsSection";
import { CTASection } from "@/components/breast-augmentation/CTASection";
import Footer from "@/components/footer";
import { MenuBar } from "@/components/MenuBar";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <MenuBar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}