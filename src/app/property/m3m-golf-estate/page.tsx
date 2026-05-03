"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import SiteHeader from "../../components/SiteHeader";

export default function M3MGolfEstatePage() {

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/M3M Golf Estate.jpg"
          alt="M3M Golf Estate"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 pb-16 text-white md:px-12">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm uppercase tracking-wider text-white/80">Sector 65, Gurgaon</p>
              <h1 className="mt-2 font-serif text-5xl md:text-7xl">M3M Golf Estate</h1>
              <p className="mt-4 text-xl">Ultra-Luxury Golf-Facing Residences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl text-[var(--foreground)]">Overview</h2>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            M3M Golf Estate is an ultra-luxury residential project by M3M India, strategically located in Sector 65, 
            Gurgaon. This prestigious development offers spacious 4 BHK apartments with breathtaking views of the 
            golf course. The project is designed to provide an unparalleled lifestyle experience, combining modern 
            architecture with world-class amenities and premium specifications.
          </p>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
            Set in the heart of Golf Course Extension Road, M3M Golf Estate represents the pinnacle of luxury living. 
            The residences feature expansive layouts, high-end finishes, and floor-to-ceiling windows that offer 
            panoramic views. With its prime location, exceptional design, and comprehensive amenities, this project 
            caters to discerning homebuyers seeking the finest in contemporary living.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-l-4 border-[var(--accent)] bg-[#f7f1e8] p-6">
              <h3 className="font-serif text-2xl text-[var(--foreground)]">Configuration</h3>
              <p className="mt-2 text-[var(--muted)]">4 BHK Apartments</p>
            </div>
            <div className="border-l-4 border-[var(--accent)] bg-[#f7f1e8] p-6">
              <h3 className="font-serif text-2xl text-[var(--foreground)]">Area</h3>
              <p className="mt-2 text-[var(--muted)]">2000 - 4300 sq.ft.</p>
            </div>
            <div className="border-l-4 border-[var(--accent)] bg-[#f7f1e8] p-6">
              <h3 className="font-serif text-2xl text-[var(--foreground)]">Price Range</h3>
              <p className="mt-2 text-[var(--muted)]">₹4.2 Cr - ₹9 Cr</p>
            </div>
            <div className="border-l-4 border-[var(--accent)] bg-[#f7f1e8] p-6">
              <h3 className="font-serif text-2xl text-[var(--foreground)]">Location</h3>
              <p className="mt-2 text-[var(--muted)]">Sector 65, Gurgaon</p>
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
                <li>• Located on Golf Course Extension Road</li>
                <li>• 10 minutes from Cyber Hub and DLF Cyber City</li>
                <li>• 20 minutes from IGI Airport</li>
                <li>• Excellent connectivity to NH-8 and Sohna Road</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">Nearby</h3>
              <ul className="mt-4 space-y-3 text-[var(--muted)]">
                <li>• Premium Golf Courses</li>
                <li>• International Schools and Colleges</li>
                <li>• Multi-specialty Hospitals</li>
                <li>• Luxury Shopping and Entertainment Hubs</li>
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
            Experience the luxury of M3M Golf Estate firsthand. Contact us to schedule your personal site visit.
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

