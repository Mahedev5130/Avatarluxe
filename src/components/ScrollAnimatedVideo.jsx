'use client'; // if using Next.js App Router

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollAnimatedVideo() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'], // from top of element to leaving viewport
  });

  // Transform styles based on scroll
  const size = useTransform(scrollYProgress, [0, 1], ['160px', '100vw']);
  const radius = useTransform(scrollYProgress, [0, 1], ['50%', '0%']);
  const height = useTransform(scrollYProgress, [0, 1], ['160px', '100vh']);

  return (
    <section className="relative h-[200vh] bg-black" ref={ref}>
      <motion.div
        style={{
          width: size,
          height: height,
          borderRadius: radius,
        }}
        className="overflow-hidden fixed top-0 left-0 mx-auto right-0 z-10 transition-all ease-in-out"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/avatar_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
}
