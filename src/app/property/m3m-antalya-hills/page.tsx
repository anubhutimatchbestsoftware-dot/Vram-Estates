"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";

export default function M3MAntalyaHillsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-white">
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
            <Link href="/#home" className="hover:text-white transition">Home</Link>
            <Link href="/#about" className="hover:text-white transition">About</Link>
            <Link href="/listings" className="hover:text-white transition">Listings</Link>
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

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/M3M Antalya Hills.jpg"
          alt="M3M Antalya Hills"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 pb-16 text-white md:px-12">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm uppercase tracking-wider text-white/80">Sector 79, Gurgaon</p>
              <h1 className="mt-2 font-serif text-5xl md:text-7xl">M3M Antalya Hills</h1>
              <p className="mt-4 text-xl">Premium Low-Rise Luxury Apartments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl text-[var(--foreground)]">Overview</h2>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            M3M Antalya Hills is a premium low-rise residential project by M3M India, located in Sector 79, Gurgaon. 
            This exclusive development offers spacious 4 BHK apartments designed with contemporary architecture and 
            world-class amenities. The project features low-density living with only a few floors, ensuring privacy, 
            exclusivity, and abundant natural light in every residence.
          </p>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
            M3M Antalya Hills is strategically positioned on the Northern Peripheral Road, offering excellent connectivity 
            to major business districts and entertainment zones. The project combines luxury with comfort, featuring 
            expansive layouts, premium finishes, and comprehensive amenities. With its unique low-rise concept and 
            thoughtful design, this development offers a perfect blend of modern living and serene environment.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-l-4 border-[var(--accent)] bg-[#f7f1e8] p-6">
              <h3 className="font-serif text-2xl text-[var(--foreground)]">Configuration</h3>
              <p className="mt-2 text-[var(--muted)]">4 BHK Apartments</p>
            </div>
            <div className="border-l-4 border-[var(--accent)] bg-[#f7f1e8] p-6">
              <h3 className="font-serif text-2xl text-[var(--foreground)]">Area</h3>
              <p className="mt-2 text-[var(--muted)]">2564 - 6100 sq.ft.</p>
            </div>
            <div className="border-l-4 border-[var(--accent)] bg-[#f7f1e8] p-6">
              <h3 className="font-serif text-2xl text-[var(--foreground)]">Price Range</h3>
              <p className="mt-2 text-[var(--muted)]">₹5 Cr - ₹12 Cr</p>
            </div>
            <div className="border-l-4 border-[var(--accent)] bg-[#f7f1e8] p-6">
              <h3 className="font-serif text-2xl text-[var(--foreground)]">Location</h3>
              <p className="mt-2 text-[var(--muted)]">Sector 79, Gurgaon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl text-[var(--foreground)]">Location Highlights</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">Connectivity</h3>
              <ul className="mt-4 space-y-3 text-[var(--muted)]">
                <li>• Located on Northern Peripheral Road (NPR)</li>
                <li>• 15 minutes from Cyber City</li>
                <li>• 25 minutes from IGI Airport</li>
                <li>• Easy access to Dwarka Expressway</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">Nearby</h3>
              <ul className="mt-4 space-y-3 text-[var(--muted)]">
                <li>• Premium Shopping Malls</li>
                <li>• International Schools</li>
                <li>• Multi-specialty Hospitals</li>
                <li>• Entertainment and Dining Hubs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#18120f] px-6 py-16 text-white md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Schedule a Site Visit</h2>
          <p className="mt-6 text-lg text-white/80">
            Experience the luxury of M3M Antalya Hills firsthand. Contact us to schedule your personal site visit.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="min-w-48 border border-white/70 px-8 py-4 text-lg font-medium transition hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
            <Link
              href="/listings"
              className="min-w-48 border border-white/20 bg-white/8 px-8 py-4 text-lg font-medium transition hover:bg-white/14"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

