"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Instagram,
  Facebook,
} from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-900 text-cream-200 pt-16 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 relative h-[72px] w-[180px]">
              <Image src="/logo.png" alt="7Days Restra Logo" fill sizes="180px" className="object-contain object-left" />
            </div>
            <p className="text-cream-200/50 text-sm leading-relaxed mb-4">
              Authentic Chinese & Indian cuisine in the heart of Gorakhpur.
              Fresh flavors, warm hospitality, every single day.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-burgundy-500 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-burgundy-500 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/918604790727"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-cream-50 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-200/50 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-bold text-cream-50 mb-4">Opening Hours</h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-sm">
                <Clock size={14} className="text-primary-400 flex-shrink-0" />
                <span className="text-cream-200/50">Monday – Sunday</span>
              </div>
              <p className="text-cream-50 font-semibold text-base ml-[22px]">
                10:00 AM – 11:30 PM
              </p>
              <p className="text-primary-400 text-xs font-semibold ml-[22px] mt-3">
                ✦ Open Every Day – No Weekly Off
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-cream-50 mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-cream-200/50">
                  Main Gate Deoria Rd, MMMUT,
                  Divya Nagar, Kunraghat, Gorakhpur
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+918604790727" className="text-cream-200/50 hover:text-primary-400 transition-colors">
                  +91 86047-90727
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:7daysrestra@gmail.com" className="text-cream-200/50 hover:text-primary-400 transition-colors">
                  7daysrestra@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4">
          <p className="text-xs text-cream-200/30">
            © 2024 7Days Restra. All rights reserved. | Crafted with ❤️ in Gorakhpur
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-burgundy-500 flex items-center justify-center text-white hover:bg-burgundy-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/918604790727?text=Hi! I'd like to order from 7Days Restra."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}
