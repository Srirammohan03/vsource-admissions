"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSlider } from "@/components/HeroSlider";
import { CounterStrip } from "@/components/CounterStrip";
import { LightboxGallery } from "@/components/LightboxGallery";
import { GraduationCap, Handshake, Globe2, Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSlider />

      {/* ABOUT (reference layout) */}
      <section className="section">
        <div className="container grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          {/* Left content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="h1 text-brand-blue">About Vsource Company</h2>
            <h3 className="h3 mt-3">South India's Leading Educational Group for Higher Education</h3>
            <p className="mt-3 text-gray-700">Proudly sending the highest number of students every year.</p>
            <p className="mt-2 font-semibold">100% Educational Loan Guidance provided to support your academic journey.</p>

            <div className="my-6 h-px bg-gray-200" />

            {/* Inline counters row */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-brand-blue/40 p-4 flex items-center gap-3">
                <GraduationCap className="shrink-0" />
                <div>
                  <div className="text-2xl font-extrabold text-brand-blue">100000+</div>
                  <div className="text-gray-700">Students Enrolled</div>
                </div>
              </div>
              <div className="rounded-2xl border border-brand-blue/40 p-4 flex items-center gap-3">
                <Handshake className="shrink-0" />
                <div>
                  <div className="text-2xl font-extrabold text-brand-blue">1500+</div>
                  <div className="text-gray-700">Educational Programs</div>
                </div>
              </div>
              <div className="rounded-2xl border border-brand-blue/40 p-4 flex items-center gap-3">
                <Globe2 className="shrink-0" />
                <div>
                  <div className="text-2xl font-extrabold text-brand-blue">10+</div>
                  <div className="text-gray-700">Study Destinations</div>
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-2 list-disc list-inside text-gray-800">
              <li>Master’s Programs Abroad</li>
              <li>B.Tech (CSE, AI/ML, Data Science)</li>
              <li>MBBS Abroad</li>
              <li>B.Sc Agriculture</li>
              <li>Paramedical Studies</li>
            </ul>
          </motion.div>

          {/* Right image card with quote */}
          <motion.div
            className="rounded-3xl border bg-white shadow-soft overflow-hidden"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image src="/images/chairman.jpg" alt="Chairman" fill className="object-cover" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 font-semibold text-brand-blue">DURGA KUMAR KAMINENI <span className="text-gray-500 font-normal">— CHAIRMAN</span></div>
              <div className="mt-2 text-center text-gray-800">
                <Quote className="inline h-4 w-4 mr-1" />
                Redefining Education for Tomorrow’s Innovators
                <Quote className="inline h-4 w-4 ml-1 rotate-180" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CounterStrip />

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
