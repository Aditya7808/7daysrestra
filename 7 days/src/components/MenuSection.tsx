"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Flame, Leaf, Star } from "lucide-react";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: "popular" | "new" | "veg";
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    name: "Starters",
    items: [
      {
        name: "Crispy Chilli Potato",
        description: "Golden fried potatoes tossed in spicy Indo-Chinese sauce with bell peppers",
        price: "₹120",
        tag: "popular",
      },
      {
        name: "Veg Manchurian Dry",
        description: "Handmade vegetable dumplings in tangy Manchurian glaze",
        price: "₹140",
        tag: "veg",
      },
      {
        name: "Paneer Tikka",
        description: "Charcoal grilled cottage cheese marinated in aromatic spices",
        price: "₹160",
        tag: "popular",
      },
      {
        name: "Spring Rolls",
        description: "Crispy rolls stuffed with mixed vegetables and glass noodles",
        price: "₹110",
        tag: "veg",
      },
    ],
  },
  {
    name: "Chinese",
    items: [
      {
        name: "Veg Hakka Noodles",
        description: "Wok-tossed noodles with fresh vegetables and soy sauce",
        price: "₹130",
        tag: "popular",
      },
      {
        name: "Schezwan Fried Rice",
        description: "Fragrant rice stir-fried with vegetables in fiery Schezwan sauce",
        price: "₹140",
      },
      {
        name: "Chilli Paneer",
        description: "Paneer cubes sautéed with peppers, onions and green chillies",
        price: "₹170",
        tag: "popular",
      },
      {
        name: "Hot & Sour Soup",
        description: "Classic Chinese soup balanced with spice and tang",
        price: "₹90",
        tag: "new",
      },
    ],
  },
  {
    name: "Main Course",
    items: [
      {
        name: "Full Indian Thali",
        description: "A grand platter with dal, paneer, seasonal sabzi, rice, roti, raita, salad, papad & dessert",
        price: "₹250",
        tag: "popular",
      },
      {
        name: "Paneer Butter Masala",
        description: "Silky tomato-cashew gravy with soft paneer cubes, served with naan",
        price: "₹180",
        tag: "popular",
      },
      {
        name: "Dal Makhani",
        description: "Slow-cooked black lentils simmered overnight in butter and cream",
        price: "₹150",
        tag: "veg",
      },
      {
        name: "Kadai Vegetable",
        description: "Mixed vegetables in aromatic kadai masala with fresh coriander",
        price: "₹160",
      },
      {
        name: "Butter Naan / Roti",
        description: "Freshly baked tandoor bread, soft and flaky",
        price: "₹30 / ₹15",
        tag: "veg",
      },
    ],
  },
  {
    name: "Desserts & Drinks",
    items: [
      {
        name: "Gulab Jamun",
        description: "Soft milk dumplings soaked in rose-cardamom sugar syrup",
        price: "₹60",
        tag: "popular",
      },
      {
        name: "Cold Coffee",
        description: "Creamy blended coffee with ice cream and chocolate drizzle",
        price: "₹80",
        tag: "new",
      },
      {
        name: "Mango Lassi",
        description: "Chilled yogurt drink blended with fresh Alphonso mango pulp",
        price: "₹70",
      },
      {
        name: "Brownie with Ice Cream",
        description: "Warm fudge brownie topped with vanilla ice cream",
        price: "₹120",
        tag: "new",
      },
    ],
  },
];

const tagConfig = {
  popular: { icon: Star, label: "Popular", cls: "bg-primary-100 text-primary-800" },
  new: { icon: Flame, label: "New", cls: "bg-burgundy-50 text-burgundy-600" },
  veg: { icon: Leaf, label: "Veg", cls: "bg-green-50 text-green-700" },
};

export default function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

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
            Every dish is prepared fresh with handpicked ingredients and authentic recipes
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mt-12 mb-12"
        >
          {menuData.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                i === activeCategory
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                  : "bg-white/10 text-cream-200 hover:bg-white/20 border border-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Menu items grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-4"
        >
          {menuData[activeCategory].items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-heading text-lg font-bold text-cream-50 group-hover:text-primary-400 transition-colors">
                      {item.name}
                    </h4>
                    {item.tag && (
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          tagConfig[item.tag].cls
                        }`}
                      >
                        {(() => {
                          const Icon = tagConfig[item.tag].icon;
                          return <Icon size={10} />;
                        })()}
                        {tagConfig[item.tag].label}
                      </span>
                    )}
                  </div>
                  <p className="text-cream-200/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="font-heading text-xl font-bold text-primary-400 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
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
            Want to see the full menu? Order directly on WhatsApp!
          </p>
          <a
            href="https://wa.me/918604790727?text=Hi! Can I see the full menu?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            View Full Menu on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
