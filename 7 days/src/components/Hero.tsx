"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, UtensilsCrossed, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient z-10" />
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg"
          alt="7Days Restra Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-burgundy-500/10 rounded-full blur-3xl z-10" />

      {/* Content */}
      <div className="container-custom relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/20"
          >
            <UtensilsCrossed size={14} className="text-primary-400" />
            <span className="text-cream-100 text-sm font-medium tracking-wide">
              Chinese & Indian Cuisine
            </span>
          </motion.div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
            Authentic Flavors,{" "}
            <span className="text-primary-400">Fresh Ingredients</span>,{" "}
            <span className="italic">Every Day</span>
          </h1>

          {/* Subheading */}
          <p className="text-cream-200/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            From sizzling Chinese specialties to rich Indian main course dishes —
            experience culinary excellence at Gorakhpur&apos;s favorite restaurant,
            open 7 days a week.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#menu"
              className="btn-primary bg-primary-600 hover:bg-primary-700 text-base px-8 py-4"
            >
              <UtensilsCrossed size={18} />
              Explore Our Menu
            </a>
            <a
              href="https://wa.me/918604790727?text=Hi! I'd like to reserve a table."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order on WhatsApp
            </a>
          </div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-cream-200/70"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < 4 ? "fill-primary-400 text-primary-400" : "fill-primary-400/50 text-primary-400/50"}
                  />
                ))}
              </div>
              <span className="text-sm">4.5/5 Rating</span>
            </div>
            <div className="text-sm">
              <span className="text-primary-400 font-bold">45+</span> Happy Customers
            </div>
            <div className="text-sm">
              Open <span className="text-primary-400 font-bold">7 Days</span> a Week
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={28} className="text-white/60" />
        </a>
      </motion.div>
    </section>
  );
}
