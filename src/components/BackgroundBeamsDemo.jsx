"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BackgroundBeams } from "../components/ui/background-beams";

export function BackgroundBeamsDemo() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

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
        setForm({
          name: "",
          phone: "",
        });
        router.push("/thank-you");
      } else {
        alert("Error sending message");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center overflow-hidden py-12 sm:py-16 antialiased">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-4 w-full relative z-10">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative px-1">
          BE FIRST. BE EXCLUSIVE.
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mt-4 text-center text-sm sm:text-base md:text-lg z-10 relative px-1">
          Book a consultation with our board-certified plastic surgeons,
          dermatologists, and aesthetic physicians to begin your transformation
          with AvatarLuxe.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto mt-8 w-full bg-black rounded-xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-lg border border-gray-800 focus:ring-2 focus:ring-[#00FFD1] w-full mt-6 bg-black placeholder:text-gray-600 px-4 py-3 text-white transition-all duration-300"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="rounded-lg border border-gray-800 focus:ring-2 focus:ring-[#00FFD1] w-full mt-6 bg-black placeholder:text-gray-600 px-4 py-3 text-white transition-all duration-300"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-[#D9AE69] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#00e6bd] transition-all duration-300"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <BackgroundBeams />
    </div>
  );
}
