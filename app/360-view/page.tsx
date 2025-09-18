"use client";
import { useState } from "react";

export default function ThreeSixty(){
  const [frame, setFrame] = useState(1);
  const frames = 24;

  const prev = () => setFrame(f => (f - 1 < 1 ? frames : f - 1));
  const next = () => setFrame(f => (f + 1 > frames ? 1 : f + 1));

  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">360° View</h1>
        <div className="mt-6 card flex flex-col items-center">
          <div className="w-full aspect-video bg-gray-100 rounded-2xl grid place-items-center">
            <div className="text-center">
              <div className="text-6xl">{frame}°</div>
              <p className="text-gray-600">(Replace with actual 360° images)</p>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button className="btn btn-outline" onClick={prev}>Prev</button>
            <button className="btn btn-primary" onClick={next}>Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}
