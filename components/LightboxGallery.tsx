"use client";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, FileDown } from "lucide-react";
import Link from "next/link";

const images = [
  { src: "/images/cert1.jpg", alt: "Registration 1" },
  { src: "/images/cert2.jpg", alt: "Registration 2" },
  { src: "/images/cert3.jpg", alt: "Incorporation" },
  { src: "/images/cert4.jpg", alt: "Agreement" },
  { src: "/images/cert5.jpg", alt: "Collaboration" },
];

export function LightboxGallery({ large=false }:{ large?: boolean }){
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [zoom, setZoom] = useState(1);

  const openAt = (i:number) => { setIdx(i); setZoom(1); setOpen(true); };
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);

  return (
    <div className={`mt-8 grid ${large? 'sm:grid-cols-3 md:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5'} gap-4`}>
      {images.map((img, i) => (
        <button key={i} onClick={()=>openAt(i)} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
          <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition" />
        </button>
      ))}

      <Link href="/pdfs/incorporation-sample.pdf" target="_blank" className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white grid place-items-center border">
        <div className="flex flex-col items-center text-center p-4">
          <FileDown />
          <div className="mt-2 text-sm">View MCA Incorporation PDF</div>
        </div>
      </Link>

      {open && (
        <div className="lightbox-backdrop" onClick={()=>setOpen(false)}>
          <div className="relative" onClick={e=>e.stopPropagation()}>
            <button className="absolute -top-10 right-0 text-white" onClick={()=>setOpen(false)} aria-label="Close"><X className="h-8 w-8"/></button>
            <div className="flex items-center gap-3 justify-between mb-2">
              <button className="btn btn-outline" onClick={prev}><ChevronLeft/></button>
              <div className="flex items-center gap-2">
                <button className="btn btn-outline" onClick={()=>setZoom(z=>Math.max(1, z-0.2))}><ZoomOut/></button>
                <button className="btn btn-outline" onClick={()=>setZoom(z=>Math.min(3, z+0.2))}><ZoomIn/></button>
              </div>
              <button className="btn btn-outline" onClick={next}><ChevronRight/></button>
            </div>
            <img src={images[idx].src} alt={images[idx].alt} className="lightbox-img" style={{ transform: `scale(${zoom})` }} />
          </div>
        </div>
      )}
    </div>
  );
}
