import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* ⭐ Background Image */}
      <div
        className="
          absolute inset-0 
          bg-[url('/hero4.jpg')]
          bg-cover bg-center bg-no-repeat
          
          -z-10
        "
      />

      {/* ⭐ Dark/Light Overlay for better readability */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/40  -z-10" />

      {/* ⭐ Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">NASAH Realestate</h3>
            <p className="opacity-70 leading-relaxed text-sm">
              Your trusted partner for premium real estate, trading, and
              wholesale solutions in the United Arab Emirates.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2 opacity-80 text-sm">
              <li>
                <a href="/projects" className="hover:text-[rgb(var(--acc))]">
                  Projects
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[rgb(var(--acc))]">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[rgb(var(--acc))]">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[rgb(var(--acc))]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Address</h4>
            <p className="opacity-80 text-sm leading-relaxed">
              NASAH Goods Wholesalers Co LLC <br />
              Al Ras, Deira <br />
              Dubai, United Arab Emirates
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <ul className="space-y-3 opacity-90 text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 hover:text-[rgb(var(--acc))] transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 hover:text-[rgb(var(--acc))] transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 hover:text-[rgb(var(--acc))] transition-colors"
                >
                  <Youtube className="h-4 w-4" />
                  YouTube
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 hover:text-[rgb(var(--acc))] transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
      </div>
    </footer>
  );
}
