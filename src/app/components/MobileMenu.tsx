"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isListingsOpen, setIsListingsOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed right-0 top-0 z-50 h-full w-80 bg-black/95 backdrop-blur-md shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <Link href="/" className="flex items-center gap-3" onClick={onClose}>
              <div className="flex h-14 w-14 items-center justify-center">
                <Image src="/images/icon.svg" alt="VRAM Estates Logo" width={120} height={120} className="object-contain" />
              </div>
              <div className="leading-tight">
                <p className="whitespace-nowrap text-lg font-semibold tracking-tight text-white">VRAM Estates</p>
                <p className="text-xs text-white/80">Luxury Property Consultants</p>
              </div>
            </Link>
            <button 
              onClick={onClose}
              className="cursor-pointer p-2 text-white hover:bg-white/10 rounded"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-2 overflow-y-auto">
            <Link 
              href="/" 
              className="px-4 py-3 text-lg text-white/90 hover:bg-white/10 hover:text-white transition rounded"
              onClick={onClose}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-3 text-lg text-white/90 hover:bg-white/10 hover:text-white transition rounded"
              onClick={onClose}
            >
              About
            </Link>
            <div>
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between border border-white/20 bg-white/10 px-4 py-3 text-left text-lg text-white/90 transition hover:bg-white/15"
                onClick={() => setIsListingsOpen((current) => !current)}
                aria-expanded={isListingsOpen}
              >
                <span className="text-sm font-semibold uppercase tracking-wide">Listings</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`h-4 w-4 transition-transform ${isListingsOpen ? "rotate-180" : ""}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className={`ml-4 mt-2 flex flex-col gap-1 overflow-hidden transition-all duration-200 ${isListingsOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                <Link
                  href="/property/dlf-privana-west"
                  className="px-3 py-2 text-base text-white/80 hover:bg-white/10 hover:text-white transition rounded"
                  onClick={onClose}
                >
                  DLF
                </Link>
                <Link
                  href="/property/m3m-golf-estate"
                  className="px-3 py-2 text-base text-white/80 hover:bg-white/10 hover:text-white transition rounded"
                  onClick={onClose}
                >
                  M3M
                </Link>
                <Link
                  href="/property/adani-samsara-vilasa"
                  className="px-3 py-2 text-base text-white/80 hover:bg-white/10 hover:text-white transition rounded"
                  onClick={onClose}
                >
                  Adani
                </Link>
                <Link
                  href="/property/godrej-aristocrat"
                  className="px-3 py-2 text-base text-white/80 hover:bg-white/10 hover:text-white transition rounded"
                  onClick={onClose}
                >
                  Godrej
                </Link>
                <Link
                  href="/property/max-estates-361"
                  className="px-3 py-2 text-base text-white/80 hover:bg-white/10 hover:text-white transition rounded"
                  onClick={onClose}
                >
                  Max Estates
                </Link>
              </div>
            </div>
            <Link 
              href="/contact" 
              className="px-4 py-3 text-lg text-white/90 hover:bg-white/10 hover:text-white transition rounded"
              onClick={onClose}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
