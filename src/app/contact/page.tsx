"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";
import SiteHeader from "../components/SiteHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        console.error('Error response:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      {/* Contact Section with Video Background */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/contact.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 flex min-h-screen items-start px-3 pb-16 pt-36 md:px-12 md:pb-20 md:pt-44">
          <div className="mx-auto w-full max-w-[540px]">
            <div className="border border-white/10 bg-black/55 p-4 shadow-2xl backdrop-blur-md md:p-6">
              <div className="mb-5 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4a269]">
                  GET IN TOUCH
                </p>
                <h1 className="mt-2 font-serif text-3xl text-white md:text-4xl">
                  Contact Us
                </h1>
                <p className="mt-2 text-base text-white/80">
                  Let us help you find your perfect property
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:border-[#d4a269] focus:ring-1 focus:ring-[#d4a269] focus:bg-black/40 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:border-[#d4a269] focus:ring-1 focus:ring-[#d4a269] focus:bg-black/40 outline-none transition"
                    placeholder="+91 98765 43210"
                  />
                </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:border-[#d4a269] focus:ring-1 focus:ring-[#d4a269] focus:bg-black/40 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:border-[#d4a269] focus:ring-1 focus:ring-[#d4a269] focus:bg-black/40 outline-none transition resize-none"
                    placeholder="Tell us about your property requirements..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 backdrop-blur-sm border border-green-400/50 text-white rounded">
                    Thank you for contacting us! We&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 backdrop-blur-sm border border-red-400/50 text-white rounded">
                    Something went wrong. Please try again later.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d4a269] text-white px-8 py-3 text-base font-medium transition hover:bg-[#c49158] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
