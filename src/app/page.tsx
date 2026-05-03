"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Footer from "./components/Footer";
import SiteHeader from "./components/SiteHeader";

const heroVideos = [
  {
    src: "/videos/vid1.mp4",
    title: "Intelligence in Every Investment",
    caption: "We are not brokers. We are consultants.",
  },
  {
    src: "/videos/vid2.mp4",
    title: "Decisions, Not Deals",
    caption: "A curated approach to DLF, M3M, Adani, luxury villas, and penthouse projects.",
  },
  {
    src: "/videos/vid3.mp4",
    title: "Capital meets Clarity",
    caption: "We help buyers and investors compare opportunities with more confidence.",
  },
  {
    src: "/videos/viid5.mp4",
    title: "Where Advice Comes Before Action",
    caption: "Premium real estate advisory for decisions that deserve more than a sales pitch.",
  },
];

const listings = [
  {
    id: "dlf",
    name: "DLF",
    text: "Recognized communities, premium planning, and long-term brand strength.",
  },
  {
    id: "m3m",
    name: "M3M",
    text: "Modern inventory with investor appeal and ambitious luxury positioning.",
  },
  {
    id: "adani",
    name: "Adani",
    text: "Large-format developments with scale, structure, and premium surroundings.",
  },
  {
    id: "luxury-villa",
    name: "Luxury Villa",
    text: "Private residences for buyers prioritizing land value, privacy, and lifestyle.",
  },
  {
    id: "penthouse",
    name: "Penthouse Projects",
    text: "Statement homes designed around skyline views, exclusivity, and top-floor living.",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const hideArrowsTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveVideo((current) => (current + 1) % heroVideos.length);
    }, 15000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 10;
      setIsScrolled(nextIsScrolled);
      if (nextIsScrolled) {
        setShowArrows(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = () => {
    setShowArrows(true);
    if (hideArrowsTimeout.current) {
      clearTimeout(hideArrowsTimeout.current);
    }
    hideArrowsTimeout.current = setTimeout(() => {
      setShowArrows(false);
    }, 3000);
  };

  const handleClick = () => {
    setShowArrows(true);
    if (hideArrowsTimeout.current) {
      clearTimeout(hideArrowsTimeout.current);
    }
    hideArrowsTimeout.current = setTimeout(() => {
      setShowArrows(false);
    }, 3000);
  };

  const goToPrevious = () => {
    setActiveVideo((current) => (current - 1 + heroVideos.length) % heroVideos.length);
  };

  const goToNext = () => {
    setActiveVideo((current) => (current + 1) % heroVideos.length);
  };

  return (
    <main className="bg-[var(--page-bg)] text-[var(--foreground)]">
      <section id="home" className="relative min-h-screen overflow-hidden bg-black" onMouseMove={handleMouseMove} onClick={handleClick}>
        <div className="absolute inset-0">
          {heroVideos.map((video, index) => (
            <div
              key={video.src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                activeVideo === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <video
                className="absolute inset-0 h-full w-full bg-black object-cover"
                style={{ filter: 'brightness(0.7) contrast(0.9)' }}
                src={video.src}
                autoPlay
                muted
                playsInline
                loop
                preload="auto"
              />
              <div className="absolute inset-0 bg-[#7d7d7d]/35" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        <SiteHeader />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-20 pt-20 text-center md:px-12 md:pt-24">
          <div className="mx-auto max-w-5xl text-white">
            <p className="text-lg leading-8 text-white/82">
              VRAM Estates
            </p>
            <h1 className="mt-4 font-serif text-[34px] leading-tight tracking-tight text-white sm:text-[40px] md:text-[46px] xl:text-[50px]">
              {heroVideos[activeVideo].title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/82">
              {heroVideos[activeVideo].caption}
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link
                href="/contact"
                className="border border-white/70 px-10 py-4 text-lg font-medium text-white transition hover:bg-white hover:text-black"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className={`absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-4 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/70 md:left-12 ${
            showArrows && !isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Previous video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className={`absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-4 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/70 md:right-12 ${
            showArrows && !isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Next video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </section>

      {/* Why Work With Us Section with Team Background */}
      <section className="relative min-h-[600px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/mb-team.jpg"
            alt="VRAM Estates team"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-white/75" />
        </div>

        <div className="relative z-10 px-6 py-20 md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">OUR STATS</p>
            <h2 className="mt-4 font-serif text-5xl tracking-tight text-[var(--foreground)] md:text-6xl">
              WHY WORK WITH US
            </h2>

            <div className="mt-16 grid gap-12 md:grid-cols-3">
              <div className="text-center">
                <p className="font-serif text-6xl font-bold text-[var(--foreground)]">₹2,000 Cr+</p>
                <p className="mt-3 text-sm uppercase tracking-wider text-[var(--muted)]">IN SALES</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-6xl font-bold text-[var(--foreground)]">98%</p>
                <p className="mt-3 text-sm uppercase tracking-wider text-[var(--muted)]">SATISFACTION</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-6xl font-bold text-[var(--foreground)]">0</p>
                <p className="mt-3 text-sm uppercase tracking-wider text-[var(--muted)]">LEGAL DISPUTES</p>
              </div>
            </div>

            <div className="mt-16 border-l-4 border-[var(--accent)] bg-white/40 p-8 backdrop-blur-sm">
              <p className="text-lg italic leading-relaxed text-[var(--foreground)]">
                "We don't just sell properties. We engineer wealth creation through strategic real estate investments for clients who deserve the best."
              </p>
              <p className="mt-4 text-sm font-semibold text-[var(--accent-deep)]">
                — Founder & CEO, VRAM Estates
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative min-h-[600px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/luxury-house.jpg"
            alt="Luxury property"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 flex min-h-[500px] items-center px-6 py-16 md:px-12">
          <div className="mx-auto grid w-full max-w-6xl lg:grid-cols-2">
            <div className="bg-black/70 p-8 md:p-10 text-white backdrop-blur-sm">
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                WORK WITH US
              </h2>
              <div className="mt-4 h-0.5 w-12 bg-white"></div>
              <p className="mt-6 text-sm leading-7 text-white/90">
                VRAM Estates has consistently championed a culture of insight, integrity, and innovation. From its foundation, VRAM has sought to redefine real estate by shifting the focus from transactions to strategic advisory. We bring a global perspective—from California to Gurgaon—while fostering a collaborative environment where clients are guided with clarity, data-driven insights, and long-term vision. At VRAM, every opportunity is approached with precision, ensuring that decisions are informed, aligned, and built for lasting value.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block border border-white/70 px-6 py-3 text-base font-medium text-white transition hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section id="listings" className="bg-black px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="border-l-4 border-white pl-6 font-serif text-4xl leading-tight text-white md:text-5xl">
            OUR PRESENCE
          </h2>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* DLF Privana West */}
            <div className="group relative overflow-hidden bg-[#1a1a1a]">
              <div className="relative h-80">
                <Image
                  src="/images/dlf privana west.jpg"
                  alt="DLF Privana West"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mt-2 font-serif text-2xl text-white">DLF Privana West</h3>
                <p className="mt-2 text-sm text-white/60">Sector 76-77, Gurgaon</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
                  <span>4 BHK</span>
                  <span>•</span>
                  <span>1895 - 3800 sqft</span>
                </div>
                <p className="mt-4 font-serif text-xl text-white">₹3.5 Cr - ₹7 Cr</p>
                <Link
                  href="/property/dlf-privana-west"
                  className="mt-4 inline-block border border-white/70 px-6 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                >
                  View More
                </Link>
              </div>
            </div>

            {/* Adani Samsara Vilasa */}
            <div className="group relative overflow-hidden bg-[#1a1a1a]">
              <div className="relative h-80">
                <Image
                  src="/images/villas.jpg"
                  alt="Adani Samsara Vilasa"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mt-2 font-serif text-2xl text-white">Adani Samsara Vilasa</h3>
                <p className="mt-2 text-sm text-white/60">Sector 63A, Gurgaon</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
                  <span>5 BHK</span>
                  <span>•</span>
                  <span>3200 - 6400 sqft</span>
                </div>
                <p className="mt-4 font-serif text-xl text-white">₹7 Cr - ₹14 Cr</p>
                <Link
                  href="/property/adani-samsara-vilasa"
                  className="mt-4 inline-block border border-white/70 px-6 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                >
                  View More
                </Link>
              </div>
            </div>

            {/* Max Estates 361 */}
            <div className="group relative overflow-hidden bg-[#1a1a1a]">
              <div className="relative h-80">
                <Image
                  src="/images/Max_Estates_361.jpg"
                  alt="Max Estates 361"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mt-2 font-serif text-2xl text-white">Max Estates 361</h3>
                <p className="mt-2 text-sm text-white/60">Sector 36A, Gurgaon</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
                  <span>3 BHK</span>
                  <span>•</span>
                  <span>1750 - 3450 sqft</span>
                </div>
                <p className="mt-4 font-serif text-xl text-white">₹2.8 Cr - ₹5.5 Cr</p>
                <Link
                  href="/property/max-estates-361"
                  className="mt-4 inline-block border border-white/70 px-6 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/listings"
              className="inline-block bg-[#d4a269] border-2 border-[#d4a269] px-12 py-4 text-lg font-bold text-white transition hover:bg-transparent hover:text-[#d4a269] shadow-lg"
            >
              See More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
