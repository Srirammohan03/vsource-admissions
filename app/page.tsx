"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSlider } from "@/components/HeroSlider";
import { CounterStrip } from "@/components/CounterStrip";
import { LightboxGallery } from "@/components/LightboxGallery";
import { GraduationCap, Handshake, Globe2, Quote } from "lucide-react";
import AboutSection from "@/components/About/Aboutsectioninside";
import Journey from "@/components/Journey"
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSlider />


      <AboutSection/> 
      
      <Journey />
      {/* UNIVERSITIES */}
      <section className="section bg-white">
        <div className="container">
          <motion.h2 className="h2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>Universities</motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { name: "The University Of Georgia", href: "/mbbs-abroad/georgia/university-of-georgia" },
              { name: "Ken Walker International University", href: "/mbbs-abroad/georgia/ken-walker-international-university" },
              { name: "Tbilisi State Medical University", href: "/mbbs-abroad/georgia/tbilisi-state-medical-university" },
              { name: "Ilia State University", href: "/mbbs-abroad/georgia/ilia-state-university" },
              { name: "Akaki Tsereteli State University", href: "/mbbs-abroad/georgia/akaki-tsereteli-state-university" },
              { name: "Belgorod State National Research University", href: "/mbbs-abroad/russia/belgorod-state-national-research-university" },
            ].map(u => (
              <Link key={u.href} href={u.href} className="card hover:shadow-lg">
                <h3 className="h3">{u.name}</h3>
                <p className="mt-2 text-gray-700">Overview, eligibility, fees, intakes, and how we help.</p>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section">
        <div className="container">
          <motion.h2 className="h2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>Certifications & Gallery</motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <LightboxGallery />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-white">
        <div className="container">
          <motion.h2 className="h2 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>Our Services</motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Dedicated Counsellor", desc: "Personalised guidance & support throughout your journey.", bg: "/images/svc1.jpg" },
              { title: "Universities Shortlisting", desc: "Best-fit universities based on your goals & profile.", bg: "/images/svc2.jpg" },
              { title: "Loan Assistance", desc: "Guidance through edu-loan process with partners.", bg: "/images/svc3.jpg" },
              { title: "Pre & Post Landing Support", desc: "Be prepared before and after you travel abroad.", bg: "/images/svc4.jpg" },
            ].map((s) => (
              <div key={s.title} className="relative overflow-hidden rounded-3xl shadow-soft group hover-lift">
                <Image src={s.bg} alt={s.title} width={900} height={600} className="h-56 w-full object-cover" />
                <div className="absolute inset-0 bg-black/50 transition group-hover:bg-black/60" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="text-xl font-semibold">{s.title}</div>
                  <p className="text-white/90 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
