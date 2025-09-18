"use client";
import React, { useState, useEffect, useRef } from "react";

const stats = [
  {
    id: 1,
    value: 100000,
    suffix: "+",
    label: "Students Empowered",
    icon: "https://cdn-icons-gif.flaticon.com/6454/6454106.gif",
  },
  {
    id: 2,
    value: 20,
    suffix: "+",
    label: "Years of Experience",
    icon: "https://cdn-icons-gif.flaticon.com/15370/15370761.gif",
  },
  {
    id: 3,
    value: 10,
    suffix: "+",
    label: "Study Destinations",
    icon: "https://cdn-icons-gif.flaticon.com/15747/15747340.gif",
  },
];

/* Counter hook */
function useCounter(end: number, active: boolean, start = 0, duration = 2000) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [end, start, duration, active]);

  return count;
}

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* LEFT TEXT SECTION */}
        <div className=" w-[60%]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e73be] mb-4">
            About Vsource Admissions
          </h2>

          <p className="text-lg md:text-xl font-semibold text-black mb-4">
            South India&apos;s Leading Educational Group for Higher Education
          </p>

          <p className="text-black mb-4 leading-relaxed">
            Vsource Admissions specializes in assisting aspiring doctors with
            their journey to study MBBS abroad. We provide end-to-end guidance,
            from university selection to visa processing, ensuring a seamless
            and worry-free experience.
          </p>

          <p className="text-black mb-4 leading-relaxed">
            We are proud to offer{" "}
            <span className="font-semibold text-black">
              100% Educational Loan Assistance
            </span>{" "}
            to all eligible students, helping you achieve your dream of becoming
            a doctor without financial barriers. Our focus is on placing you in
            globally recognized universities with no capitation fees.
          </p>

          <ul className="mt-4 space-y-2 list-disc list-inside text-black text-base">
            <li>Top Medical Universities Globally</li>
            <li>No NEET for Admissions</li>
            <li>Direct Admissions & Visa Processing</li>
            <li>MCI / NMC & WHO Recognitions</li>
            <li>Complete Financial & Post-Admission Support</li>
          </ul>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className=" flex flex-col items-center  text-center border border-gray-300 rounded-xl p-2">
          <img
            src="https://vsourcevarsity.com/assets/images/founder.webp"
            alt="Founder"
            className="rounded-lg w-full max-w-sm object-cover"
          />
          <p className="mt-4 text-sm md:text-base text-gray-700 italic">
            <strong className="text-xl">“</strong>
            Redefining Education for Tomorrow’s Innovators
            <strong className="text-xl">”</strong>
          </p>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, i) => {
          const count = useCounter(stat.value, isVisible);
          return (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center border border-blue-400 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white text-center"
            >
              <div className="flex items-center gap-3">
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-10 h-10 object-contain"
                />
                <p className="text-2xl md:text-3xl font-extrabold text-[#1e73be]">
                  {count.toLocaleString("en-US")}
                  {stat.suffix}
                </p>
              </div>
              <p className="mt-2 text-sm md:text-base font-semibold text-gray-800">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
