import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AboutUsStory from '../components/AboutStory';
import FinalCTASection from '../components/FinalCTASection';
import AboutFinal from '../components/AboutFinal';

export default function AboutUs() {




  return (
    <main className="min-h-screen font-jakarta selection:bg-[#25D366] selection:text-[#1E293B]">

      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 md:px-20 text-center bg-[#0F172A] text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Helping Clinics<span className="text-green-400"> Grow Online & Attract </span>More Patients
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Coderyug is your partner in clinic growth - websites, appointments, Google ranking, paid ads, and branding, all tailored for dental and dermatology clinics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full transition-all">
              Book Free Consultation
            </Link>
          </div>
        </motion.div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full -z-10"></div>
      </section>
      <AboutUsStory />
      <AboutFinal />

      <FinalCTASection />

    </main>
  );
}