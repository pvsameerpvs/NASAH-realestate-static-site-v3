// app/contact/page.tsx (or wherever your Contact is)
"use client";

import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
      {/* Half-side background image (right side) */}
      <div
        className="
          absolute inset-y-0 right-0 
          w-full md:w-1/2
          bg-[url('/hero5.jpg')]
          bg-cover bg-center bg-no-repeat
          opacity-25 dark:opacity-20
          -z-10
        "
      />
      {/* Soft overlay for readability */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-gradient-to-l from-white/80 via-white/40 dark:from-black/70 dark:via-black/40 -z-10" />

      <div className="grid lg:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] gap-12 items-start">
        {/* LEFT: Heading + contact info */}
        <div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Contact
          </h1>
          <p className="mt-4 max-w-xl opacity-70 text-base md:text-lg">
            Tell us what you’re looking for — whether it’s a new property,
            wholesale partnership, or a custom requirement, the Nasah team will
            get back to you shortly.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {/* Email card */}
            <div className="card p-6 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10">
              <h3 className="font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </h3>
              <p className="mt-2 text-sm md:text-base opacity-80">
                hello@nasah.com
              </p>
            </div>

            {/* Office card */}
            <div className="card p-6 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10">
              <h3 className="font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Office
              </h3>
              <p className="mt-2 text-sm md:text-base opacity-80">
                NASAH Goods Wholesalers Co LLC <br />
                Al Ras, Deira <br />
                Dubai, United Arab Emirates
              </p>
            </div>

            {/* Phone card */}
            <div className="card p-6 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10">
              <h3 className="font-semibold flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone
              </h3>
              <p className="mt-2 text-sm md:text-base opacity-80">
                +971 50 000 0000
              </p>
            </div>

            {/* WhatsApp card */}
            <div className="card p-6 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10">
              <h3 className="font-semibold flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </h3>
              <p className="mt-2 text-sm md:text-base opacity-80">
                Chat with us on WhatsApp for quick enquiries and property
                details.
              </p>
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm font-semibold acc-text"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full acc-bg text-white">
                  <MessageCircle className="w-4 h-4" />
                </span>
                <span>Open WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="card rounded-3xl bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/5 dark:border-white/10 p-6 md:p-8 shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold">
            Send us a message
          </h2>
          <p className="mt-2 text-sm md:text-base opacity-70">
            Share your requirements and our team will reach out with the best
            options tailored for you.
          </p>

          <form className="mt-6 grid gap-4">
            <input
              className="border border-black/10 dark:border-white/15 bg-transparent rounded-xl px-4 py-3 text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))]"
              placeholder="Your name"
            />
            <input
              className="border border-black/10 dark:border-white/15 bg-transparent rounded-xl px-4 py-3 text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))]"
              placeholder="Email"
              type="email"
            />
            <input
              className="border border-black/10 dark:border-white/15 bg-transparent rounded-xl px-4 py-3 text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))]"
              placeholder="Phone / WhatsApp"
            />
            <textarea
              className="border border-black/10 dark:border-white/15 bg-transparent rounded-xl px-4 py-3 h-32 md:h-40 text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--acc))]"
              placeholder="Tell us what you are looking for..."
            />

            <button
              type="submit"
              className="px-6 py-3 rounded-xl acc-bg text-white font-semibold w-fit flex items-center gap-2"
            >
              Send Message
            </button>
          </form>

          {/* WhatsApp hint after form */}
          <div className="mt-4 flex items-center gap-3 text-xs md:text-sm opacity-80">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-500/90 text-white">
              <MessageCircle className="w-4 h-4" />
            </span>
            <p>
              Prefer WhatsApp?{" "}
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold acc-text"
              >
                Tap here to chat instantly.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
