"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ContactFormModal from "./ContactFormModal";
import MobileMenu from "./MobileMenu";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isDesktopListingsOpen, setIsDesktopListingsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const isListingsActive = pathname === "/listings" || pathname.startsWith("/property/");
  const isHome = pathname === "/";
  const isTransparent = isHome && !hasScrolled;

  useEffect(() => {
    if (!isHome) {
      setHasScrolled(true);
      return;
    }

    const updateHeaderBackground = () => {
      setHasScrolled(window.scrollY > 0);
    };

    updateHeaderBackground();
    window.addEventListener("scroll", updateHeaderBackground, { passive: true });
    window.addEventListener("resize", updateHeaderBackground);

    return () => {
      window.removeEventListener("scroll", updateHeaderBackground);
      window.removeEventListener("resize", updateHeaderBackground);
    };
  }, [isHome]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-30 ${isTransparent ? "bg-transparent" : "bg-black/80 backdrop-blur-md"}`}>
        <div className="relative mx-auto flex w-full max-w-[1800px] items-center justify-between px-5 py-6 text-white md:px-12 md:py-8">
          <button
            type="button"
            className="z-30 grid h-10 w-10 cursor-pointer place-items-center text-white md:hidden"
            aria-label="Open contact form"
            onClick={() => setIsContactFormOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v10.5H3.75V6.75z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 7.5 7.5 5.25 7.5-5.25" />
            </svg>
          </button>

          <Link href="/" className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 md:static md:translate-x-0 md:gap-4">
            <div className="flex h-12 w-12 items-center justify-center md:h-16 md:w-16">
              <Image src="/images/icon.svg" alt="VRAM Estates Logo" width={120} height={120} className="object-contain" />
            </div>
            <div className="leading-tight">
              <p className="whitespace-nowrap text-[15px] font-semibold tracking-tight md:text-[18px]">VRAM Estates</p>
              <p className="hidden text-[13px] text-white/80 md:block">Luxury Property Consultants</p>
            </div>
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-12 text-[18px] font-medium text-white/90 md:flex">
            <Link href="/" className={`transition hover:text-white ${pathname === "/" ? "text-white" : ""}`}>Home</Link>
            <Link href="/about" className={`transition hover:text-white ${pathname === "/about" ? "text-white" : ""}`}>About</Link>
            <div
              className="relative"
              onMouseEnter={() => setIsDesktopListingsOpen(true)}
              onMouseLeave={() => setIsDesktopListingsOpen(false)}
            >
              <button
                type="button"
                className={`flex cursor-pointer items-center gap-2 transition hover:text-white ${isListingsActive ? "text-white" : ""}`}
                onClick={() => setIsDesktopListingsOpen((current) => !current)}
                aria-expanded={isDesktopListingsOpen}
              >
                Listings
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`h-4 w-4 transition-transform ${isDesktopListingsOpen ? "rotate-180" : ""}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className={`absolute left-1/2 top-full mt-4 w-60 -translate-x-1/2 bg-black/90 py-3 shadow-xl backdrop-blur-md transition-all duration-200 ${
                isDesktopListingsOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
              }`}>
                <Link href="/property/dlf-privana-west" className="block px-5 py-3 text-base text-white/90 transition hover:bg-white/10 hover:text-white">DLF Privana West</Link>
                <Link href="/property/adani-samsara-vilasa" className="block px-5 py-3 text-base text-white/90 transition hover:bg-white/10 hover:text-white">Adani Samsara Vilasa</Link>
                <Link href="/property/max-estates-361" className="block px-5 py-3 text-base text-white/90 transition hover:bg-white/10 hover:text-white">Max Estates 361</Link>
                <Link href="/property/m3m-golf-estate" className="block px-5 py-3 text-base text-white/90 transition hover:bg-white/10 hover:text-white">M3M Golf Estate</Link>
                <Link href="/property/godrej-aristocrat" className="block px-5 py-3 text-base text-white/90 transition hover:bg-white/10 hover:text-white">Godrej Aristocrat</Link>
                <Link href="/property/dlf-the-camellias" className="block px-5 py-3 text-base text-white/90 transition hover:bg-white/10 hover:text-white">DLF The Camellias</Link>
              </div>
            </div>
            <Link href="/contact" className={`transition hover:text-white ${pathname === "/contact" ? "text-white" : ""}`}>Contact</Link>
          </nav>

          <button
            type="button"
            className="z-30 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-2 md:hidden"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            <span className="h-1 w-8 bg-white"></span>
            <span className="h-1 w-8 bg-white"></span>
            <span className="h-1 w-8 bg-white"></span>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <ContactFormModal isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </>
  );
}
