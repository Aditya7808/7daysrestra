"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Navigation,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send data to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-cream-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">
            Visit Us or <span className="text-burgundy-500">Reach Out</span>
          </h2>
          <p className="section-description">
            We&apos;d love to hear from you. Reserve a table, ask a question, or just say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Left: Contact info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 group hover:shadow-2xl transition-all">
                <MapPin size={22} className="text-burgundy-500 mb-3" />
                <h4 className="font-heading font-bold text-dark-800 mb-1">Address</h4>
                <p className="text-sm text-dark-700/60 leading-relaxed">
                  Main Gate Deoria Rd, MMMUT,<br />
                  Divya Nagar, Kunraghat,<br />
                  Gorakhpur, UP
                </p>
              </div>
              <div className="glass-card p-5 group hover:shadow-2xl transition-all">
                <Clock size={22} className="text-burgundy-500 mb-3" />
                <h4 className="font-heading font-bold text-dark-800 mb-1">Hours</h4>
                <p className="text-sm text-dark-700/60">
                  Monday – Sunday<br />
                  <span className="font-semibold text-dark-800">10:00 AM – 11:30 PM</span>
                </p>
              </div>
              <div className="glass-card p-5 group hover:shadow-2xl transition-all">
                <Phone size={22} className="text-burgundy-500 mb-3" />
                <h4 className="font-heading font-bold text-dark-800 mb-1">Phone</h4>
                <p className="text-sm text-dark-700/60">
                  +91 86047-90727
                </p>
                <a
                  href="tel:+918604790727"
                  className="text-xs text-burgundy-500 font-semibold mt-1 inline-block hover:underline"
                >
                  Call Now →
                </a>
              </div>
              <div className="glass-card p-5 group hover:shadow-2xl transition-all">
                <Mail size={22} className="text-burgundy-500 mb-3" />
                <h4 className="font-heading font-bold text-dark-800 mb-1">Email</h4>
                <p className="text-sm text-dark-700/60">
                  7daysrestra@gmail.com
                </p>
                <a
                  href="mailto:7daysrestra@gmail.com"
                  className="text-xs text-burgundy-500 font-semibold mt-1 inline-block hover:underline"
                >
                  Write to Us →
                </a>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/918604790727?text=Hi! I'd like to reserve a table."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs py-2.5"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <a
                href="https://maps.google.com/?q=7Days+Restra+Kunraghat+Gorakhpur"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2.5"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-cream-300 h-64 md:h-80">
              <iframe
                src="https://maps.google.com/maps?q=26.729584,83.431124&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="7Days Restra Location"
              />
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-heading text-2xl font-bold text-dark-800 mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-dark-700/60 mb-6">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6 text-sm"
                >
                  ✓ Thank you! We&apos;ll get back to you shortly.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-medium text-dark-800 mb-1 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-dark-800 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-500/30 focus:border-burgundy-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="text-sm font-medium text-dark-800 mb-1 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-dark-800 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-500/30 focus:border-burgundy-500 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="text-sm font-medium text-dark-800 mb-1 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-dark-800 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-500/30 focus:border-burgundy-500 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-sm font-medium text-dark-800 mb-1 block">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-dark-800 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-500/30 focus:border-burgundy-500 transition-all resize-none"
                    placeholder="I'd like to reserve a table for..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
