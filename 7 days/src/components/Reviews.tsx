"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "Best Chinese food in Gorakhpur! The Chilli Paneer and Hakka Noodles are absolutely amazing. Great ambiance and friendly staff. A must-visit!",
    time: "2 weeks ago",
    avatar: "RS",
  },
  {
    name: "Priya Singh",
    rating: 5,
    text: "We had a wonderful family dinner here. The Paneer Butter Masala was rich and creamy, and the Dal Makhani was cooked to perfection. Will definitely come back!",
    time: "1 month ago",
    avatar: "PS",
  },
  {
    name: "Amit Kumar",
    rating: 4,
    text: "Affordable and delicious food near MMMUT campus. The Schezwan Fried Rice is my go-to order. Quick service and pocket-friendly prices.",
    time: "3 weeks ago",
    avatar: "AK",
  },
  {
    name: "Sneha Gupta",
    rating: 5,
    text: "The best part about 7Days is the consistency. Every time I visit, the food tastes just as amazing. Love the Crispy Chilli Potato!",
    time: "1 week ago",
    avatar: "SG",
  },
  {
    name: "Vikash Yadav",
    rating: 4,
    text: "Good variety of Chinese and Indian dishes. The Cold Coffee is refreshing and the ambiance is perfect for hanging out with friends.",
    time: "2 months ago",
    avatar: "VY",
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((p) => (p - 1 + reviews.length) % reviews.length);
  const nextSlide = () => setCurrent((p) => (p + 1) % reviews.length);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Show 3 on desktop, 1 on mobile
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(current + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section id="reviews" className="section-padding bg-section-gradient" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title">
            What Our <span className="text-burgundy-500">Guests</span> Say
          </h2>
          <p className="section-description">
            Real reviews from real food lovers who experienced our hospitality
          </p>
        </motion.div>

        {/* Review cards */}
        <div className="mt-12 relative">
          <div className="grid md:grid-cols-3 gap-6">
            {getVisibleReviews().map((review, i) => (
              <motion.div
                key={`${review.name}-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card p-6 md:p-8 relative ${i > 0 ? "hidden md:block" : ""}`}
              >
                <Quote
                  size={32}
                  className="text-primary-200 absolute top-4 right-4"
                />
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className={
                        s < review.rating
                          ? "fill-primary-500 text-primary-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-dark-700/70 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-burgundy-500 flex items-center justify-center text-white font-semibold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-dark-800 text-sm">{review.name}</p>
                    <p className="text-xs text-dark-700/50">{review.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nav arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-dark-700/20 flex items-center justify-center hover:border-burgundy-500 hover:text-burgundy-500 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-burgundy-500 w-6" : "bg-dark-700/20"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-dark-700/20 flex items-center justify-center hover:border-burgundy-500 hover:text-burgundy-500 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
