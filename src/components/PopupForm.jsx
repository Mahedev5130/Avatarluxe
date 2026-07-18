"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { CheckCircle } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { BackgroundBeams } from "../components/ui/background-beams";

const PHONE_HREF = "tel:+919884469279";
const WHATSAPP_HREF = "https://wa.me/919884469279";

export default function PopupForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setForm({ name: "", phone: "" });
        setSubmitted(true);
      } else {
        alert("Error sending message");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-black border border-white/10 rounded-xl p-6 md:p-8 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl z-20"
            aria-label="Close"
          >
            ✕
          </button>

          <div className="relative z-10">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center sm:py-14">
                <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
                  <CheckCircle className="h-8 w-8" strokeWidth={1.75} />
                </span>
                <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                  Thank You
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-400">
                  Your appointment request has been received. Our team will get in touch with you shortly to confirm your consultation.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 rounded-lg bg-[#D4AF37] px-8 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                  Book Appointment
                </h2>

                <form onSubmit={handleSubmit} className="mt-6">
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full mt-3 bg-black border border-gray-800 px-4 py-3 text-white rounded-lg"
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full mt-3 bg-black border border-gray-800 px-4 py-3 text-white rounded-lg"
                    required
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 bg-[#D4AF37] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-70"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>

                  <div className="mt-3 grid grid-cols-2 gap-3">
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
                </form>
              </>
            )}
          </div>

          <div className="absolute inset-0 z-0 pointer-events-none">
            <BackgroundBeams />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
