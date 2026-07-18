'use client';
import { MenuBar } from '@/components/MenuBar';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '@/components/footer';
import { BackgroundBeamsDemo } from '@/components/BackgroundBeamsDemo';
import { MapPin, Phone, Mail } from "lucide-react";

export default function Home() {
  const videos = [
    {
      id: '-9rtUhR1pRs',
      title: 'GFC for hairloss at Avatarluxe | PRP',
      name: 'Bye Bye Hairloss',
      creds: 'MBBS, MS, MCh — Plastic Surgery',
    },
    {
      id: 'Giig67nMzVU',
      title: 'Synthetic Hair Transplant in Bangalore',
      name: 'Biofibre',
      creds: 'MBBS, DNB — Dermatology',
    },
    {
      id: 'OPiQa5uBUr8',
      title: 'Hair Transplant Process — Walkthrough',
      name: 'Transplant',
      creds: 'MD — Hair Restoration',
    },
    {
      id: 'gsLLV1qmOYY',
      title: 'Hydra Facial',
      name: 'Cleaner & Brighter Face',
      creds: 'Cosmetic Specialist',
    },
    {
      id: 'wAshxi4ghfs',
      title: 'Skin Brightening',
      name: 'Skin Brightening',
      creds: 'Glutathione Drip',
    },
    {
      id: 'k2EHaGBGWjg',
      title: 'Why choose Avatarluxe? Clinic Tour',
      name: 'Skin Brightening',
      creds: 'QSwitch Laser Toning',
    },
  ];

  const [open, setOpen] = useState(false); // used for YouTube modal
  const [active, setActive] = useState(null); // active video id for modal

  // Open YouTube modal (called when clicking carousel card)
  const openYouTube = (videoId) => {
    setActive(videoId);
    setOpen(true);
    // prevent body scroll while modal open
    document.body.style.overflow = 'hidden';
  };

  const closeYouTube = () => {
    setOpen(false);
    setActive(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <MenuBar />
      <section className="mt-20 mb-10 px-4 sm:px-6">
        <BackgroundBeamsDemo />
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:flex-wrap md:items-start gap-4 md:gap-3 mt-10">

      <div className="flex-1 flex items-start gap-2 bg-black p-6 rounded-xl min-h-[200px] shadow-[0_10px_30px_rgba(212,175,55,0.1),_0_0_0_1px_rgba(0,0,0,0.08)]">

        {/* Icon */}
        <MapPin
          className="w-6 h-6 mt-1 flex-shrink-0"
          style={{ color: "#D4AF37" }}
        />

        {/* Content */}
        <div>
          <h3 className="text-l font-semibold text-white">
            Koramangala
          </h3>

          <address className="not-italic mt-3 text-zinc-300 text-sm font-light leading-relaxed">
            36/C, 1st Main Road, S.T.Bed, Koramangala 4th Block, Bengaluru Karnataka – 560 034
          </address>
        </div>
      </div>

        {/* Left: Address */}
      <div className="flex-1 flex items-start gap-2 bg-black p-6 rounded-xl min-h-[200px] shadow-[0_10px_30px_rgba(212,175,55,0.1),_0_0_0_1px_rgba(0,0,0,0.08)]">

        {/* Icon */}
        <MapPin
          className="w-6 h-6 mt-1 flex-shrink-0"
          style={{ color: "#D4AF37" }}
        />

        {/* Content */}
        <div>
          <h3 className="text-l font-semibold text-white">
            Whitefield
          </h3>

          <address className="not-italic text-sm mt-3 text-zinc-300 font-light leading-relaxed">
            3rd Floor, Aaxis Hospital, Whitefield Main Road, Belathur Village, KR Puram, Whitefield, Bengaluru, Karnataka - 560067
          </address>
        </div>
      </div>

      <div className="flex-1 flex items-start flex-col gap-2 bg-black p-6 rounded-xl min-h-[200px] shadow-[0_10px_30px_rgba(212,175,55,0.1),_0_0_0_1px_rgba(0,0,0,0.08)]">

         <Mail
          className="w-6 h-6 mt-1 flex-shrink-0"
          style={{ color: "#D4AF37" }}
        />

        {/* Content */}
        <div>
          <h3 className="text-l font-semibold text-white">
            Email
          </h3>
          <p className="font-semibold mb-1 text-sm text-zinc-300 mt-3">
            <span className="font-normal"><a href="mailto:contact@avatarluxe.in">contact@avatarluxe.in</a></span>
          </p>
        </div>
      </div>

       <div className="flex-1 flex items-start flex-col gap-2 bg-black p-6 rounded-xl min-h-[200px] shadow-[0_10px_30px_rgba(212,175,55,0.1),_0_0_0_1px_rgba(0,0,0,0.08)]">

        {/* Contact*/}
        <Phone
          className="w-6 h-6 mt-1 flex-shrink-0"
          style={{ color: "#D4AF37" }}
        />

        {/* Content */}
        <div>
          <h3 className="text-l font-semibold text-white">
            Call Us
          </h3>
          <p className="font-semibold mb-1 text-sm text-zinc-300 mt-3">
            <span className="font-normal"><a href="tel:+91 9884469279">+91 9884469279</a></span>
          </p>
          <p className="font-semibold mb-1 text-sm text-zinc-300">
            <span className="font-normal"><a href="tel:+91 80 4111 2827">+91 80 4111 2827</a></span>
          </p>
        </div>
      </div>
      </div>
      </section>

      {/* Video cards carousel - clicking a card opens YouTube modal */}
      <section className="bg-black text-white py-6 pt-10 mt-2">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] text-center mb-5">
          THE CREATORS OF YOUR NEXT LOOK
          </p>
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-5xl lg:text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative mb-4"
          >
            HEAR THEM OUT
          </motion.h2>

          

          <div className="max-w-6xl mx-auto px-4 mt-5">
            <div className="relative">
              <div
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 py-6"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {videos.map((r) => (
                  <div
                    key={r.id}
                    className="snap-start flex-shrink-0 w-[320px] md:w-[380px] rounded-2xl bg-gradient-to-b from-white/3 to-white/2 border border-white/6 shadow-2xl overflow-hidden cursor-pointer"
                    onClick={() => openYouTube(r.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openYouTube(r.id); }}
                  >
                    <div className="relative aspect-video">
                      <img
                        src={`https://img.youtube.com/vi/${r.id}/hqdefault.jpg`}
                        alt={r.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center">
                          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="font-semibold text-lg">{r.name}</h4>
                      <p className="text-sm text-gray-300 mt-1 line-clamp-2">{r.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* left/right subtle gradient fades */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/90 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/90 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Modal */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-60 flex items-center justify-center transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* backdrop */}
        <div
          onClick={closeYouTube}
          className="absolute inset-0 bg-black/75"
        />

        <div className="relative z-70 w-full max-w-3xl mx-4">
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
            {open && active && (
               <iframe
                src={`https://www.youtube.com/embed/${active}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
              />

            )}

            <button
              onClick={closeYouTube}
              aria-label="Close video"
              className="absolute top-3 right-3 z-50 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
