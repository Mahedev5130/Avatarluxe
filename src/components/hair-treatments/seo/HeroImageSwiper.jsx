"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const HERO_SLIDES = [
  {
    src: "/images/hair-treatment/1new.webp",
    alt: "Hair transplant before result",
  },
  {
    src: "/images/hair-treatment/2new.webp",
    alt: "Arun Roberts hair transplant result",
  },
  {
    src: "/images/hair-treatment/3new.webp",
    alt: "Dr. Atul hair transplant result",
  },
];

export function HeroImageSwiper({ priority = false }) {
  return (
    <div className="hero-image-swiper relative h-full w-full">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {HERO_SLIDES.map((slide, i) => (
          <SwiperSlide key={slide.src}>
            <div className="relative flex h-full w-full items-center justify-center">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={priority && i === 0}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-image-swiper .swiper,
        .hero-image-swiper .swiper-wrapper,
        .hero-image-swiper .swiper-slide {
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
