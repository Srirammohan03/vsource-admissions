"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

/* ---------------------------- MENU STRUCTURE ---------------------------- */
type Uni = { name: string; href: string };
type Category = { key: "georgia" | "russia"; label: string; items: Uni[] };

const CATEGORIES: Category[] = [
  {
    key: "georgia",
    label: "MBBS IN GEORGIA",
    items: [
      { name: "The University Of Georgia", href: "/mbbs-abroad/georgia/university-of-georgia" },
      { name: "Ken Walker International University", href: "/mbbs-abroad/georgia/ken-walker-international-university" },
      { name: "Tbilisi State Medical University", href: "/mbbs-abroad/georgia/tbilisi-state-medical-university" },
      { name: "Ilia State University", href: "/mbbs-abroad/georgia/ilia-state-university" },
      { name: "Akaki Tsereteli State University", href: "/mbbs-abroad/georgia/akaki-tsereteli-state-university" },
    ],
  },
  {
    key: "russia",
    label: "MBBS IN RUSSIA",
    items: [
      {
        name: "Belgorod State National Research University",
        href: "/mbbs-abroad/russia/belgorod-state-national-research-university",
      },
    ],
  },
];

/* --------------------------------- HEADER --------------------------------- */
export function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false); // mobile
  const [openDropdown, setOpenDropdown] = useState(false); // desktop MBBS dropdown
  const [tab, setTab] = useState<Category["key"]>("georgia"); // active left tab in dropdown
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ddRef = useRef<HTMLDivElement | null>(null);

  // Scroll effects
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const top = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (top / docH) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click-away (desktop dropdown)
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      const prev = body.style.overflow;
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  const linkCls = (active: boolean) =>
    cn(
      "font-medium tracking-wide px-1 transition-colors",
      active
        ? "text-brand-red"
        : isScrolled
        ? "text-black hover:text-brand-red"
        : "text-white hover:text-brand-red"
    );

  const currentCategory = CATEGORIES.find((c) => c.key === tab)!;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 py-2",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      {/* top row */}
      <div className="w-full max-w-[1400px] mx-auto px-6  h-20 flex items-center justify-between gap-4">
        {/* Logos */}
         <Link href="/" className="flex items-center gap-2 relative z-20">
          <img
            alt="Vsource Logo"
            className="h-16 md:h-20 w-auto object-contain rounded-xl"
            src="/images/vsourcess.png"
          />
            <img
            alt="Vsource Logo"
            className="h-16 md:h-20 w-auto object-contain rounded-xl"
            src="/images/20 years logo-01.png"
          />

        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className={linkCls(isActive("/"))}>
            Home
          </Link>
          <Link href="/about" className={linkCls(isActive("/about"))}>
            About
          </Link>

          {/* MBBS-ABROAD DROPDOWN (two-pane style) */}
          <div
            className="relative"
            ref={ddRef}
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown((v) => !v)}
              className={cn("flex items-center gap-1", linkCls(false))}
            >
              MBBS-ABROAD <ChevronDown className="h-4 w-4" />
            </button>

            {/* Dropdown panel (centered & always above header) */}
<div
  className={cn(
    "fixed left-1/2 mt-3  w-[720px] max-w-[95vw] grid grid-cols-[220px_1fr] rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-200 z-50",
    openDropdown ? "opacity-100 visible" : "opacity-0 invisible"
  )}
  style={{ top: "5rem" }} // match your header height (h-20 = 80px = 5rem)
>
  {/* Left tabs with flags */}
  <div className="p-3 space-y-2">
    {CATEGORIES.map((c) => (
      <button
        key={c.key}
        onMouseEnter={() => setTab(c.key)}
        onFocus={() => setTab(c.key)}
        onClick={() => setTab(c.key)}
        className={cn(
          "w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold transition-colors",
          tab === c.key
            ? "text-brand-blue bg-brand-gray/40"
            : "text-gray-700 hover:bg-gray-100 hover:text-brand-red"
        )}
      >
        {c.label}
      </button>
    ))}
  </div>

  {/* Right list */}
  <div className="p-3">
    <ul className="divide-y">
      {currentCategory.items.map((u) => (
        <li key={u.href}>
          <Link
            href={u.href}
            className="block px-3 py-2 hover:bg-gray-100 hover:text-brand-red rounded-md text-gray-900 transition-colors text-sm md:text-base"
          >
            {u.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>

          </div>

          <Link href="/360-view" className={linkCls(isActive("/360-view"))}>
            360_VIEW
          </Link>
          <Link href="/gallery" className={linkCls(isActive("/gallery"))}>
            GALLERY
          </Link>
          <Link href="/contact" className={linkCls(isActive("/contact"))}>
            CONTACT
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={cn(isScrolled ? "text-black" : "text-white", "md:hidden")}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* scroll progress bar */}
      {scrollProgress > 0 && (
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-200">
          <div
            className="h-[3px] bg-brand-red transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

      {/* Mobile menu (full-screen) */}
      {isOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-white flex flex-col" role="dialog" aria-modal="true">
          {/* top bar */}
          <div className="w-full border-b">
            <div className="container h-20 flex items-center justify-between">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <Image
                  src="/images/vsourcess.png"
                  alt="VSource Logo"
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                />
                <Image
                  src="/images/20 years logo-01.png"
                  alt="20 Years"
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>
              <button
                aria-label="Close menu"
                className="text-gray-800 hover:text-brand-red"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* scrollable body */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            <div className="container py-4 space-y-3">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2 text-lg font-medium transition-colors",
                  isActive("/") ? "text-brand-red" : "text-gray-800 hover:text-brand-red"
                )}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2 text-lg font-medium transition-colors",
                  isActive("/about") ? "text-brand-red" : "text-gray-800 hover:text-brand-red"
                )}
              >
                About
              </Link>

              {/* Accordion for MBBS-ABROAD */}
              <MobileAccordion label="MBBS-ABROAD">
                <div className="space-y-4">
                  {CATEGORIES.map((c) => (
                    <div key={c.key}>
                      <div className="mt-2 mb-1 text-xs font-semibold uppercase text-gray-500">{c.label}</div>
                      <div className="space-y-1">
                        {c.items.map((u) => (
                          <Link
                            key={u.href}
                            href={u.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "block py-2 text-sm transition-colors",
                              isActive(u.href) ? "text-brand-red" : "text-gray-800 hover:text-brand-red"
                            )}
                          >
                            {u.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </MobileAccordion>

              <Link
                href="/360-view"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2 text-lg font-medium transition-colors",
                  isActive("/360-view") ? "text-brand-red" : "text-gray-800 hover:text-brand-red"
                )}
              >
                360 View
              </Link>
              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2 text-lg font-medium transition-colors",
                  isActive("/gallery") ? "text-brand-red" : "text-gray-800 hover:text-brand-red"
                )}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2 text-lg font-medium transition-colors",
                  isActive("/contact") ? "text-brand-red" : "text-gray-800 hover:text-brand-red"
                )}
              >
                Contact
              </Link>

              <div className="h-10" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* --------------------------- MobileAccordion --------------------------- */
function MobileAccordion({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-gray-200">
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 font-semibold text-gray-900"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden px-4 pb-4">{children}</div>
      </div>
    </div>
  );
}

export default Header;
