"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Handshake, Globe2 } from "lucide-react";

function useCountUp(target: number, duration = 1200){
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current; if(!el) return;
    let started = false;
    const io = new IntersectionObserver(([e]) => {
      if(e.isIntersecting && !started){
        started = true;
        const start = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          setVal(Math.floor(p * target));
          if(p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { ref, val };
}

function CounterCard({icon, label, target}:{icon: React.ReactNode; label: string; target: number;}){
  const { ref, val } = useCountUp(target);
  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-2xl border border-brand-blue/40 p-6 flex items-center gap-4 bg-white"
    >
      <div className="text-brand-blue">{icon}</div>
      <div>
        <div className="text-3xl font-extrabold text-brand-blue">{val.toLocaleString()}+</div>
        <div className="text-gray-800">{label}</div>
      </div>
    </motion.div>
  );
}

export function CounterStrip(){
  return (
    <section className="section bg-white">
      <div className="container grid md:grid-cols-3 gap-6">
        <CounterCard icon={<GraduationCap />} label="Students Empowered" target={100000} />
        <CounterCard icon={<Handshake />} label="Years of Experience" target={20} />
        <CounterCard icon={<Globe2 />} label="Study Destinations" target={10} />
      </div>
    </section>
  );
}
