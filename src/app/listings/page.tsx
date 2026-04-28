"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const properties = [
  {
    id: 1,
    name: "DLF Privana West",
    developer: "DLF",
    location: "Sector 76-77, Gurgaon",
    bhk: "4 BHK",
    sqft: "1895 - 3800 sqft",
    price: "₹3.5 Cr - ₹7 Cr",
    pricePerSqft: "₹18,500/sqft",
    image: "/images/dlf privana west.jpg",
  },
  {
    id: 2,
    name: "Adani Samsara Vilasa",
    developer: "ADANI REALTY",
    location: "Sector 63A, Gurgaon",
    bhk: "5 BHK",
    sqft: "3200 - 6400 sqft",
    price: "₹7 Cr - ₹14 Cr",
    pricePerSqft: "₹22,000/sqft",
    image: "/images/villas.jpg",
  },
  {
    id: 3,
    name: "Max Estates 361",
    developer: "MAX ESTATES",
    location: "Sector 36A, Gurgaon",
    bhk: "3 BHK",
    sqft: "1750 - 3450 sqft",
    price: "₹2.8 Cr - ₹5.5 Cr",
    pricePerSqft: "₹16,000/sqft",
    image: "/images/Max_Estates_361.jpg",
  },
  {
    id: 4,
    name: "M3M Golf Estate",
    developer: "M3M",
    location: "Sector 65, Gurgaon",
    bhk: "4 BHK",
    sqft: "2000 - 4300 sqft",
    price: "₹4.2 Cr - ₹9 Cr",
    pricePerSqft: "₹21,000/sqft",
    image: "/images/M3M Golf Estate.jpg",
  },
  {
    id: 5,
    name: "Godrej Aristocrat",
    developer: "GODREJ PROPERTIES",
    location: "Sector 49, Gurgaon",
    bhk: "3 BHK",
    sqft: "3600 - 3100 sqft",
    price: "₹2.2 Cr - ₹4.5 Cr",
    pricePerSqft: "₹14,500/sqft",
    image: "/images/Godrej_Aristocrat.jpg",
  },
  {
    id: 6,
    name: "DLF The Camellias",
    developer: "DLF",
    location: "DLF 5, Gurgaon",
    bhk: "5 BHK",
    sqft: "7200 - 15000 sqft",
    price: "₹40 Cr - ₹100 Cr",
    pricePerSqft: "₹55,000/sqft",
    image: "/images/DLF_The_Camellias.jpg",
  },
  {
    id: 7,
    name: "M3M Antalya Hills",
    developer: "M3M",
    location: "Sector 79, Gurgaon",
    bhk: "4 BHK",
    sqft: "2564 - 6100 sqft",
    price: "₹5 Cr - ₹12 Cr",
    pricePerSqft: "₹19,500/sqft",
    image: "/images/M3M Antalya Hills.jpg",
  },
  {
    id: 8,
    name: "Godrej Meridien",
    developer: "GODREJ PROPERTIES",
    location: "Sector 106, Gurgaon",
    bhk: "3 BHK",
    sqft: "1500 - 3160 sqft",
    price: "₹1.8 Cr - ₹3.8 Cr",
    pricePerSqft: "₹12,000/sqft",
    image: "/images/Godrej Meridien.jpg",
  },
];

export default function ListingsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-[var(--foreground)]">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-20 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-10 py-[18px] text-white">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex items-center justify-center h-16 w-16">
              <Image src="/images/icon.svg" alt="VRAM Estates Logo" width={120} height={120} className="object-contain" />
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight">VRAM Estates</p>
              <p className="text-xs text-white/80">Luxury Property Consultants</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-base text-white/90 md:flex">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/listings" className="hover:text-white transition text-white">Listings</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </nav>

          <button 
            className="flex flex-col gap-1.5 p-2 z-30" 
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            <span className="h-0.5 w-7 bg-white"></span>
            <span className="h-0.5 w-7 bg-white"></span>
            <span className="h-0.5 w-7 bg-white"></span>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      {/* Hero Section with Background Image */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/all listing.jpg"
            alt="All Properties"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center text-white pt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4a269]">
            PREMIUM PORTFOLIO
          </p>
          <h1 className="mt-4 font-serif text-6xl md:text-7xl">All Properties</h1>
          <p className="mt-4 text-base text-white/80">
            8 Premium Projects · Gurgaon, Delhi NCR · Handpicked by Experts
          </p>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="bg-[#f7f1e8] px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {properties.map((property) => (
            <div key={property.id} className="group overflow-hidden bg-white shadow-[0_8px_30px_rgba(40,24,12,0.08)] border border-black/8">
              <div className="relative h-56">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg text-[var(--foreground)]">{property.name}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-[var(--muted)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-3 w-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {property.location}
                </p>
                <div className="mt-2 flex items-center gap-3 text-xs text-[var(--muted)]">
                  <span>{property.bhk}</span>
                  <span>•</span>
                  <span>{property.sqft}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="font-serif text-base text-[var(--foreground)]">{property.price}</p>
                    <p className="text-[10px] text-[var(--muted)]">{property.pricePerSqft}</p>
                  </div>
                  <button className="flex items-center gap-1 text-xs font-medium text-[#d4a269] transition hover:text-[var(--accent-deep)]">
                    <Link href={`/property/${property.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-1">
                      View
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
