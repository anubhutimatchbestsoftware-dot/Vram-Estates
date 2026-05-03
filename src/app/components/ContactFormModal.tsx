"use client";

import { useState } from "react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-start justify-center bg-black/75 px-3 pb-5 pt-20 backdrop-blur-sm transition-opacity duration-200 md:items-center md:px-6 md:py-8 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className={`w-full max-w-[430px] border border-white/15 bg-black/90 p-4 text-white shadow-2xl transition-transform duration-200 md:max-w-[520px] md:p-6 ${
          isOpen ? "translate-y-0" : "-translate-y-3"
        }`}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Contact form"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="font-serif text-[24px] leading-tight md:text-[30px]">Contact Us</h2>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center border border-white/25 text-white transition hover:bg-white hover:text-black"
            aria-label="Close contact form"
          >
            <span className="text-2xl leading-none">&times;</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <label className="block">
              <span className="mb-1 block text-sm text-white/80">Full Name *</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-white/25 bg-white/5 px-3 py-2 text-[16px] text-white outline-none transition placeholder:text-white/40 focus:border-[#d4a269]"
                placeholder="Name"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm text-white/80">Phone</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-white/25 bg-white/5 px-3 py-2 text-[16px] text-white outline-none transition placeholder:text-white/40 focus:border-[#d4a269]"
                placeholder="Phone"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-1 block text-sm text-white/80">Email *</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-white/25 bg-white/5 px-3 py-2 text-[16px] text-white outline-none transition placeholder:text-white/40 focus:border-[#d4a269]"
              placeholder="Email"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm text-white/80">Message *</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full resize-none border border-white/25 bg-white/5 px-3 py-2 text-[16px] text-white outline-none transition placeholder:text-white/40 focus:border-[#d4a269]"
              placeholder="Message"
            />
          </label>

          {submitStatus === "success" && (
            <p className="border border-green-400/50 bg-green-500/15 px-3 py-2 text-sm text-white">
              Thank you. We will get back to you soon.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="border border-red-400/50 bg-red-500/15 px-3 py-2 text-sm text-white">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#d4a269] px-5 py-3 text-[16px] font-semibold text-white transition hover:bg-[#c49158] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
