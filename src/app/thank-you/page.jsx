import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MenuBar } from "@/components/MenuBar";
import Footer from "@/components/footer";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const metadata = {
  title: "Thank You | Avatar Luxe",
  description:
    "Your appointment request has been received. Our team will get in touch with you shortly to confirm your consultation.",
};

const PHONE_HREF = "tel:+919884469279";
const WHATSAPP_HREF = "https://wa.me/919884469279";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MenuBar />

      <main className="relative flex min-h-[calc(100vh-68px)] items-center justify-center overflow-hidden px-6 py-24">
        <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center">
          <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
            <CheckCircle className="h-8 w-8" strokeWidth={1.75} />
          </span>
          <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 sm:text-4xl">
            Thank You
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-400">
            Your appointment request has been received. Our team will get in
            touch with you shortly to confirm your consultation.
          </p>

          <div className="mt-8 grid w-full max-w-md grid-cols-2 gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#D4AF37]/40 bg-zinc-950 px-4 py-3 text-sm font-semibold text-[#D4AF37] transition hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
            >
              <FaPhoneAlt className="h-3.5 w-3.5" aria-hidden />
              Call Now
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
          </div>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-lg bg-[#D4AF37] px-8 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Back to Home
          </Link>
        </div>

        <div className="pointer-events-none absolute inset-0 z-0">
          <BackgroundBeams />
        </div>
      </main>

      <Footer />
    </div>
  );
}
