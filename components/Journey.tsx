// StickyLoopSections.tsx
//
// Heading sits ABOVE the slider (not overlaid).
// The slider area below is what gets pinned and scrolled through.
// Uses GSAP + ScrollTrigger (scrub + snap).
//
// npm i gsap

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Slide = {
  desktop: string;
  mobile: string;
  caption: string;
  ctaHref?: string;
  ctaText?: string;
};

const slides: Slide[] = [
  { desktop: "/assets/showcase/slide-1.jpg", mobile: "/assets/showcase/slide-1.jpg", caption: "The University Of Georgia", ctaHref: "/mbbs-abroad/georgia/university-of-georgia", ctaText: "Explore More" },
  { desktop: "/assets/showcase/slide-2.webp", mobile: "/assets/showcase/slide-2.webp", caption: "Ken Walker International University", ctaHref: "/mbbs-abroad/georgia/ken-walker-international-university", ctaText: "Explore More" },
  { desktop: "/assets/showcase/slide-3.jpg", mobile: "/assets/showcase/ganaptuniversity.jpg", caption: "Tbilisi State Medical University", ctaHref:"/mbbs-abroad/georgia/tbilisi-state-medical-university", ctaText: "Explore More" },
  { desktop: "/assets/showcase/slide-4.webp", mobile: "/assets/showcase/slide-4.webp", caption:  "Ilia State University", ctaHref: "/mbbs-abroad/georgia/ilia-state-university" , ctaText: "Explore More" },
  { desktop: "/assets/showcase/slide-5.jpg", mobile: "/assets/showcase/slide-5.jpg", caption:"Akaki Tsereteli State University", ctaHref: "/mbbs-abroad/georgia/akaki-tsereteli-state-university", ctaText: "Explore More" },
  { desktop: "/assets/showcase/slide-6.jpg", mobile: "/assets/showcase/sureshgyan.jpg", caption:"Belgorod State National Research University", ctaHref: "/mbbs-abroad/russia/belgorod-state-national-research-university" , ctaText: "Explore More" },
];

const StickyLoopSections: React.FC = () => {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const pinEl = pinRef.current;
    if (!pinEl) return;

    const panels = Array.from(pinEl.querySelectorAll<HTMLElement>(".loop-panel"));
    const bgs = panels.map((p) => p.querySelector<HTMLElement>(".loop-bg"));
    const captions = panels.map((p) => p.querySelector<HTMLElement>(".loop-caption"));

    // Stack the slides inside the pin area
    gsap.set(panels, { position: "absolute", inset: 0, willChange: "transform, opacity" });
    panels.forEach((p, i) => gsap.set(p, { autoAlpha: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 1.02 }));
    bgs.forEach((bg, i) => bg && gsap.set(bg, { yPercent: i === 0 ? 0 : 12 }));
    captions.forEach((c, i) => c && gsap.set(c, { autoAlpha: i === 0 ? 1 : 0, y: i === 0 ? 0 : 20 }));

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: pinEl,          // pin only the slider box, not the heading above
        start: "top top",
        end: () => `+=${panels.length * 100}%`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        snap: {
          snapTo: (value) => {
            const steps = panels.length - 1;
            return Math.round(value * steps) / steps;
          },
          duration: { min: 0.2, max: 0.5 },
          ease: "power1.out",
        },
        anticipatePin: 1,
        fastScrollEnd: true,
      },
    });

    for (let i = 0; i < panels.length - 1; i++) {
      const current = panels[i];
      const next = panels[i + 1];
      const currentBg = bgs[i];
      const nextBg = bgs[i + 1];
      const currentCap = captions[i];
      const nextCap = captions[i + 1];

      tl.addLabel(`slide-${i}`)
        .to(current, { autoAlpha: 0, scale: 1.03, duration: 0.7 }, ">-0.1")
        .fromTo(next, { autoAlpha: 0, scale: 1.02 }, { autoAlpha: 1, scale: 1, duration: 0.7 }, "<");

      if (currentBg) tl.to(currentBg, { yPercent: -12, duration: 0.7 }, "<");
      if (nextBg) tl.fromTo(nextBg, { yPercent: 12 }, { yPercent: 0, duration: 0.7 }, "<");

      if (currentCap) tl.to(currentCap, { autoAlpha: 0, y: -15, duration: 0.4 }, "<");
      if (nextCap) tl.fromTo(nextCap, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "<+0.1");
    }

    tlRef.current = tl;

    // Optional keyboard control
    const onKey = (e: KeyboardEvent) => {
      const st = tl.scrollTrigger;
      if (!st) return;
      const dir =
        e.code === "ArrowDown" || e.code === "PageDown" || e.code === "Space" ? 1 :
        e.code === "ArrowUp"   || e.code === "PageUp"   ? -1 : 0;
      if (!dir) return;

      const steps = panels.length - 1;
      const currentStep = Math.round(st.progress * steps);
      const targetStep = Math.min(steps, Math.max(0, currentStep + dir));
      const targetProgress = targetStep / steps;

      gsap.to(st, { progress: targetProgress, duration: 0.5, ease: "power2.out" });
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      tl.scrollTrigger?.kill();
      tl.kill();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section className="relative w-full">
      {/* ---- Heading area (NOT over the images) ---- */}
      <div className="w-full flex items-center justify-center px-4 pt-10 pb-6">
        <h2
          className="text-center font-extrabold"
          style={{
            color: "#0F172A", // slate-900 fallback; change to your brand color if needed
            fontSize: "clamp(1.125rem, 3.6vw, 2.5rem)",
            lineHeight: 1.2,
            letterSpacing: "0.02em",
          }}
        >
          Start your Journey in
        </h2>
      </div>

      {/* ---- Pinned slider area (images live here) ---- */}
      <div
        ref={pinRef}
        className="relative w-full h-screen overflow-hidden"
        style={{
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-y",
        }}
      >
        {slides.map((s, idx) => (
          <div key={idx} className="loop-panel">
            {/* Background layer (parallax target) */}
            <div className="loop-bg absolute inset-0 w-full h-full">
              <picture>
                <source media="(max-width: 768px)" srcSet={s.mobile} />
                <img
                  src={s.desktop}
                  alt={s.caption}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading={idx === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </picture>
              {/* Subtle overlay for caption legibility */}
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.18)" }} />
            </div>

            {/* Centered caption/CTA */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="loop-caption text-center max-w-4xl">
                <h3
                  className="text-white font-extrabold leading-tight"
                  style={{
                    fontSize: "clamp(1.1rem, 4.2vw, 3rem)",
                    lineHeight: 1.15,
                    textShadow: "0 3px 16px rgba(0,0,0,0.35)",
                  }}
                >
                  {s.caption}
                </h3>
                {s.ctaHref && (
                  <a
                    href={s.ctaHref}
                    className="inline-block mt-5 rounded-lg px-6 py-3 font-semibold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                  >
                    {s.ctaText || "Explore More"}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StickyLoopSections;
