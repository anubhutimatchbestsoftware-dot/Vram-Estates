"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

export default function AboutPage() {
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
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/about" className="hover:text-white transition text-white">About</Link>
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



      {/* About VRAM Estates Section */}
      <section className="px-6 py-16 md:px-12 bg-[#f7f1e8]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4a269]">
              OUR STORY
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[var(--foreground)]">
              About VRAM Estates
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h3 className="font-serif text-2xl text-[var(--foreground)] mb-6">
                Redefining Real Estate Advisory
              </h3>
              <p className="text-base leading-8 text-[var(--muted)] mb-6">
                Founded with a vision to transform the real estate landscape, VRAM Estates stands as Delhi NCR's premier luxury property consultancy. We don't just sell properties; we craft investment strategies that align with our clients' long-term financial goals.
              </p>
              <p className="text-base leading-8 text-[var(--muted)] mb-6">
                Our approach is rooted in deep market analysis, transparent communication, and unwavering commitment to client success. With over ₹2,000 crores in successful transactions and a 98% client satisfaction rate, we've established ourselves as trusted advisors in the luxury real estate segment.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <p className="font-serif text-2xl font-bold text-[#d4a269]">₹2,000 Cr+</p>
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Sales Volume</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-2xl font-bold text-[#d4a269]">98%</p>
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-2xl font-bold text-[#d4a269]">0</p>
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Legal Disputes</p>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/luxury-house.jpg"
                alt="VRAM Estates Office"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MatchBest Group Section */}
      <section className="px-6 py-16 md:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4a269]">
              PART OF
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[var(--foreground)]">
              MatchBest Group
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-96">
              <Image
                src="/images/mb-team.jpg"
                alt="MatchBest Group Team"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[var(--foreground)] mb-6">
                Innovation Across Industries
              </h3>
              <p className="text-base leading-8 text-[var(--muted)] mb-6">
                VRAM Estates is proudly part of the MatchBest Group, a diversified conglomerate that spans technology, real estate, and strategic consulting. MatchBest Group is known for its innovative approach to business solutions and commitment to excellence across all verticals.
              </p>
              <p className="text-base leading-8 text-[var(--muted)] mb-6">
                The group's expertise in artificial intelligence, data analytics, and digital transformation enhances VRAM Estates' ability to provide cutting-edge market insights and predictive analysis to our real estate clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4a269] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)]">Technology Integration</h4>
                    <p className="text-sm text-[var(--muted)]">Leveraging AI and data analytics for market predictions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4a269] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)]">Strategic Consulting</h4>
                    <p className="text-sm text-[var(--muted)]">Comprehensive business solutions across industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4a269] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)]">Innovation Focus</h4>
                    <p className="text-sm text-[var(--muted)]">Continuous research and development in emerging technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-16 md:px-12 bg-[#18120f] text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl">Our Values</h2>
            <p className="mt-4 text-lg text-white/80">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4a269] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-4">Integrity</h3>
              <p className="text-white/80 text-sm leading-6">
                Transparent dealings and honest communication form the foundation of every client relationship.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4a269] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m4.5 0a12.052 12.052 0 00-.438-2.18m-4.062 2.18A12.052 12.052 0 019 18.718m-2.03-2.872c-.497-.498-.997-1.006-1.5-1.524m0 0c-.501-.518-1.002-1.036-1.5-1.554m3 3.078c2.652 0 5.196-.78 7.5-2.25m-7.5 2.25c-2.652 0-5.196-.78-7.5-2.25m15-9c2.652 0 5.196.78 7.5 2.25M4.5 6.75c2.652 0 5.196.78 7.5 2.25" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-4">Excellence</h3>
              <p className="text-white/80 text-sm leading-6">
                We strive for perfection in every aspect of our service, from market analysis to client support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4a269] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-4">Innovation</h3>
              <p className="text-white/80 text-sm leading-6">
                Leveraging cutting-edge technology and market insights to deliver superior investment outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
