import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "WhatsApp Appointment Automation",
    highlight: "for Dental Clinics",
    desc: "Reduce missed appointments and automate patient follow-ups without complex software.",
    countries: "India • UAE • Saudi Arabia",
  },
  {
    title: "Automated Patient Reminders",
    highlight: "Built for Modern Clinics",
    desc: "Send confirmations, reminders and rebooking messages automatically via WhatsApp.",
    countries: "India • UAE • Australia",
  },
];

export default function HeroClinic() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6">

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-black/80 to-indigo-900/60 backdrop-blur-2xl"></div>

      {/* Glow */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] bg-blue-500/20 rounded-full blur-[160px] animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] bg-indigo-500/20 rounded-full blur-[160px] animate-pulse"></div>

      <div className="relative z-10 max-w-7xl w-full text-center lg:text-left text-white">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
          >

            {/* Country Badge */}
            <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-xl">
              <span className="text-xs font-semibold tracking-wide text-blue-300">
                Serving Clinics in {slides[index].countries}
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl mx-auto lg:mx-0">
              {slides[index].title}
              <span className="block text-blue-400">
                {slides[index].highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
              {slides[index].desc}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="rounded-full bg-blue-600 px-10 py-4 text-sm md:text-base font-bold text-white shadow-2xl hover:scale-105 transition"
              >
                Get Free Clinic Growth Audit
              </Link>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 bg-white/10 px-10 py-4 text-sm md:text-base font-semibold text-white backdrop-blur hover:bg-white/20 transition"
              >
                Chat on WhatsApp
              </a>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Static Trust Strip */}
        <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-400">
          <span>🌍 Multi-Country Deployment</span>
          <span>⚡ 24/7 WhatsApp Automation</span>
          <span>📈 Higher Patient Retention</span>
        </div>

      </div>
    </section>
  );
}
