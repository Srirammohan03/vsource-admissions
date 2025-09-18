"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { img: "/images/hero1.jpg", title: "Study MBBS Abroad", subtitle: "Top universities • Transparent guidance • End-to-end support", cta: { href: "/contact", label: "Get Counselling" } },
  { img: "/images/hero2.jpg", title: "MBBS in Georgia & Russia", subtitle: "Affordable tuition • International exposure", cta: { href: "/mbbs-abroad/georgia", label: "Explore Georgia" } },
  { img: "/images/hero3.jpg", title: "Prefix Your Name With Doctor", subtitle: "18+ years • 100,000+ enrolled students", cta: { href: "/about", label: "Why VSource" } }
];

export function HeroSlider(){
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const prev = () => setIdx(i => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx(i => (i + 1) % slides.length);

  return (
    <section className="relative overflow-hidden ">
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="relative h[68vh] md:h-[78vh] h-[68vh]">
          <Image src={slides[idx].img} alt={slides[idx].title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50 " />
          <div className="w-full max-w-[1400px] mx-auto md:pt-40 md:pb-52 pt-28 pb-16 relative z-10 h-full flex flex-col justify-center text-white">
            <motion.h1 initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-3xl md:text-6xl font-bold max-w-3xl">{slides[idx].title}</motion.h1>
            <motion.p initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-3 text-lg md:text-2xl max-w-2xl text-white/90">{slides[idx].subtitle}</motion.p>
            <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 flex gap-3">
              <Link href={slides[idx].cta.href} className="btn btn-primary">{slides[idx].cta.label}</Link>
              <Link href="/gallery" className="btn btn-outline border-white text-white">Gallery</Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* <button onClick={prev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 btn btn-outline bg-white/70"> <ChevronLeft/> </button>
      <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 btn btn-outline bg-white/70"> <ChevronRight/> </button> */}
    </section>
  );
}
