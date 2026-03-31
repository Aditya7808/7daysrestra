"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/gallery/food-7.jpg", alt: "Full Indian Thali Experience" },
  { src: "/gallery/food-1.jpg", alt: "Signature Chilli Paneer dish" },
  { src: "/gallery/food-2.jpg", alt: "Fresh Hakka Noodles preparation" },
  { src: "/gallery/food-3.jpg", alt: "Paneer Butter Masala served hot" },
  { src: "/gallery/interior-1.jpg", alt: "Warm and inviting dining area" },
  { src: "/gallery/food-4.jpg", alt: "Crispy Spring Rolls appetizer" },
  { src: "/gallery/food-5.jpg", alt: "Cold Coffee with chocolate drizzle" },
  { src: "/gallery/food-6.jpg", alt: "Traditional Dal Makhani" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () =>
    setLightbox((p) => (p !== null ? (p - 1 + galleryImages.length) % galleryImages.length : null));
  const next = () =>
    setLightbox((p) => (p !== null ? (p + 1) % galleryImages.length : null));

  return (
    <section id="gallery" className="section-padding bg-cream-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Gallery</p>
          <h2 className="section-title">
            A Feast for <span className="text-burgundy-500">Your Eyes</span>
          </h2>
          <p className="section-description">
            Take a peek at our dishes and the warm ambiance that awaits you
          </p>
        </motion.div>

        {/* Uniform grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-12">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => openLightbox(i)}
            >
              <div className="aspect-square relative flex items-center justify-center">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-6 right-6 text-white/80 hover:text-white z-50"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white z-50"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white z-50"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
          <motion.div
            key={lightbox}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
              <Image
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                fill
                className="object-contain rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
