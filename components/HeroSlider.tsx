"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "/images/hero1.jpg",
    title: "Study MBBS Abroad",
    subtitle: "Top universities • Transparent guidance • End-to-end support",
    cta: { href: "/contact", label: "Get Counselling" },
  },
  {
    img: "/images/hero2.jpg",
    title: "MBBS in Georgia & Russia",
    subtitle: "Affordable tuition • International exposure",
    cta: { href: "/mbbs-abroad/georgia", label: "Explore Georgia" },
  },
  {
    img: "/images/hero3.jpg",
    title: "Prefix Your Name With Doctor",
    subtitle: "18+ years • 100,000+ enrolled students",
    cta: { href: "/about", label: "Why VSource" },
  },
];

export function HeroSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
      <section className="relative overflow-hidden">
      <div className="relative h-[65vh] md:h-[80vh] w-full">
        <AnimatePresence>
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <img
              src={slides[idx].img}
              alt={slides[idx].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Content Layer */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-[1400px] mx-auto px-6 text-white">
            <motion.h1
              key={`title-${idx}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-3xl text-white"
            >
              {slides[idx].title}
            </motion.h1>

            <motion.p
              key={`subtitle-${idx}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-3 text-lg sm:text-xl md:text-2xl max-w-2xl text-white/90"
            >
              {slides[idx].subtitle}
            </motion.p>

            <motion.div
              key={`cta-${idx}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href={slides[idx].cta.href}
                className="btn btn-primary px-5 py-2 text-sm md:text-base bg-red-600 text-white rounded-lg hover:bg-white hover:text-red-600 transition-colors"
              >
                {slides[idx].cta.label}
              </a>
              <a
                href="#"
                className="btn btn-outline border border-white text-red-600 px-5 py-2 text-sm md:text-base rounded-lg hover:bg-red-600 hover:text-white transition-colors"
              >
                Gallery
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
