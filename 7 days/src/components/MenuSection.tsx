"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

type MenuPage = {
  title: string;
  image: string;
  category: string;
};

const menuPages: MenuPage[] = [
  { title: "Starters", image: "/menu/starter.png", category: "Starters" },
  { title: "Tandoor", image: "/menu/tandoor.png", category: "Starters" },
  { title: "Main Course", image: "/menu/main-course.png", category: "Main Course" },
  { title: "Paneer Dishes", image: "/menu/paneer-dishes.png", category: "Main Course" },
  { title: "Mushroom & Kulcha", image: "/menu/mushroom-dishes.png", category: "Main Course" },
  { title: "Dal & Rice", image: "/menu/dal-rice.png", category: "Main Course" },
  { title: "Paratha & Roti", image: "/menu/paratha-roti.png", category: "Breads" },
  { title: "Thali's", image: "/menu/thalis.png", category: "Thali" },
  { title: "Chinese", image: "/menu/chinese.png", category: "Chinese" },
  { title: "Momos & Noodles", image: "/menu/momos-noodles.png", category: "Chinese" },
  { title: "Chilli & Fries", image: "/menu/chilli-fries.png", category: "Chinese" },
  { title: "Rice & Roll", image: "/menu/rice-roll.png", category: "Chinese" },
  { title: "Sandwich & Soup", image: "/menu/sandwich-soup.png", category: "Snacks" },
  { title: "Side Order & Sweets", image: "/menu/side-order.png", category: "Snacks" },
  { title: "Beverages", image: "/menu/beverages.png", category: "Beverages" },
];

const categories = ["All", "Starters", "Main Course", "Breads", "Thali", "Chinese", "Snacks", "Beverages"];

export default function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPages =
    activeCategory === "All"
      ? menuPages
      : menuPages.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPages.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredPages.length) % filteredPages.length
      );
    }
  };

  return (
    <section id="menu" className="section-padding bg-dark-gradient" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle text-primary-400">Our Menu</p>
          <h2 className="section-title text-cream-50">
            Explore Our <span className="text-primary-400">Culinary</span> Creations
          </h2>
          <p className="section-description text-cream-200/60">
            Browse through our complete menu — tap any page to view it full size
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-12 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                cat === activeCategory
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                  : "bg-white/10 text-cream-200 hover:bg-white/20 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu images grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {filteredPages.map((page, i) => (
            <motion.div
              key={page.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => openLightbox(i)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary-500/10"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h3 className="font-heading text-lg font-bold text-cream-50 group-hover:text-primary-400 transition-colors">
                  {page.title}
                </h3>
                <p className="text-xs text-cream-200/60 mt-1">Tap to view full menu</p>
              </div>

              {/* Hover ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary-500/0 group-hover:border-primary-500/40 transition-all duration-500 z-30 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-cream-200/50 text-sm mb-4">
            Want to order? Contact us directly on WhatsApp!
          </p>
          <a
            href="https://wa.me/918604790727?text=Hi! I'd like to place an order."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 sm:left-6 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[85vh] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredPages[lightboxIndex].image}
                alt={filteredPages[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Title & counter */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <h3 className="font-heading text-xl font-bold text-primary-400">
                {filteredPages[lightboxIndex].title}
              </h3>
              <p className="text-cream-200/50 text-sm mt-1">
                {lightboxIndex + 1} / {filteredPages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
