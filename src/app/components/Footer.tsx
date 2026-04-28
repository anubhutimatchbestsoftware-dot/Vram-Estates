import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#18120f] px-6 py-16 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center border border-white/50 font-serif text-2xl font-semibold">
                VE
              </div>
              <div>
                <p className="text-xl font-semibold">VRAM Estates</p>
                <p className="text-xs text-white/70">Luxury Property Consultants</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-white/70">
              Delhi NCR&apos;s premier luxury real estate advisory, connecting discerning clients with the finest properties since 2015.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-white/70 hover:text-white transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Navigation</h3>
            <ul className="mt-6 space-y-3">
              <li><Link href="/#home" className="text-sm text-white/70 hover:text-white transition">Our Journey</Link></li>
              <li><Link href="/#about" className="text-sm text-white/70 hover:text-white transition">About Us</Link></li>
              <li><Link href="/listings" className="text-sm text-white/70 hover:text-white transition">All Properties</Link></li>
              <li><Link href="/#listings" className="text-sm text-white/70 hover:text-white transition">Developers</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Featured Projects</h3>
            <ul className="mt-6 space-y-3">
              <li><Link href="/property/dlf-privana-west" className="text-sm text-white/70 hover:text-white transition">DLF Privana West</Link></li>
              <li><Link href="/property/adani-samsara-vilasa" className="text-sm text-white/70 hover:text-white transition">Adani Samsara Vilasa</Link></li>
              <li><Link href="/property/max-estates-361" className="text-sm text-white/70 hover:text-white transition">Max Estates 361</Link></li>
              <li><Link href="/property/m3m-golf-estate" className="text-sm text-white/70 hover:text-white transition">M3M Golf Estate</Link></li>
              <li><Link href="/property/godrej-aristocrat" className="text-sm text-white/70 hover:text-white transition">Godrej Aristocrat</Link></li>
              <li><Link href="/property/dlf-the-camellias" className="text-sm text-white/70 hover:text-white transition">DLF The Camellias</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                reach@vramestates.com
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                DLF Cyber City, Phase II<br />Sector 24, Gurgaon 122002
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} VRAM Estates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
