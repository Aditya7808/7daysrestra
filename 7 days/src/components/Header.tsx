"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-dark-900 text-cream-200 text-xs py-2 px-4 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              Mon–Sun: 10:00 AM – 11:30 PM
            </span>
            <span className="flex items-center gap-1">
              <Phone size={12} />
              +91 86047-90727
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} />
            Near MMMUT, Kunraghat, Gorakhpur
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-dark-900/5"
            : "bg-white/60 backdrop-blur-md"
        }`}
      >
        <div className="container-custom flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group relative h-14 w-32">
            <Image src="/logo.png" alt="7Days Restra Logo" fill sizes="128px" className="object-contain object-left group-hover:scale-105 transition-transform" priority />
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-dark-700 hover:text-burgundy-500 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-burgundy-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/918604790727"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-5"
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-dark-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-cream-300 overflow-hidden"
            >
              <nav className="container-custom py-4 flex flex-col gap-3" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-dark-700 hover:text-burgundy-500 py-2 border-b border-cream-200 last:border-0 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/918604790727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2.5 text-center mt-2"
                >
                  Reserve Table
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
