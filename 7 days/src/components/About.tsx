"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Award, Users, ChefHat, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "1500+", label: "Happy Customers" },
  { icon: Award, value: "4.5★", label: "Google Rating" },
  { icon: ChefHat, value: "50+", label: "Signature Dishes" },
  { icon: Heart, value: "7", label: "Days a Week" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-section-gradient" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Our Story</p>
          <h2 className="section-title">
            Crafted with <span className="text-burgundy-500">Passion</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <Image
                src="/about-restaurant.jpg"
                alt="Inside 7Days Restra - warm, inviting dining space"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 glass-card p-4 md:p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-burgundy-500 flex items-center justify-center">
                  <ChefHat size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-dark-800 text-lg">Quality First</p>
                  <p className="text-xs text-dark-700/60">Fresh ingredients daily</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark-800 mb-6">
              Where Every Meal Tells a Story
            </h3>
            <p className="text-dark-700/70 leading-relaxed mb-4">
              At 7Days Restra, we believe that great food brings people together. Nestled in the
              heart of Kunraghat, near MMMUT Engineering College in Gorakhpur, our restaurant
              has become a beloved destination for food lovers seeking authentic Chinese and
              Indian cuisine.
            </p>
            <p className="text-dark-700/70 leading-relaxed mb-6">
              Our chefs blend traditional recipes with fresh, locally sourced ingredients to
              create dishes that delight the senses. From aromatic stir-fries to rich curries,
              every plate is crafted with care and served with warmth. Whether you&apos;re a student
              grabbing a quick bite or a family enjoying a weekend dinner, we promise an
              unforgettable dining experience — seven days a week.
            </p>

            {/* Values */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Fresh Ingredients", "Hygienic Kitchen", "Quick Service", "Affordable Prices"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-primary-50 text-primary-800 rounded-full text-xs font-semibold border border-primary-100"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center group hover:shadow-2xl transition-all duration-300"
            >
              <stat.icon
                size={28}
                className="mx-auto mb-3 text-burgundy-500 group-hover:scale-110 transition-transform"
              />
              <p className="font-heading text-3xl font-bold text-dark-800">{stat.value}</p>
              <p className="text-sm text-dark-700/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
