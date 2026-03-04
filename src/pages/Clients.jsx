// import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ClientsPortfolio from '../components/ClientsPortfolio';
import ClinicTestimonials from '../components/ClinicTestimonials';
import FinalCTASection from '../components/FinalCTASection';

export default function Clients() {




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
            <span className="text-green-400">Our Happy Clinics & Partners</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            We help dental and dermatology clinics grow online with websites, appointments, Google ranking, paid ads, and branding.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full transition-all">
              Book Free Consultation
            </Link>
            <button className="border border-slate-500 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all">
              View Case Studies
            </button>
          </div>
        </motion.div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full -z-10"></div>
      </section>
      <ClientsPortfolio />
      <ClinicTestimonials />

      <FinalCTASection />

    </main>
  );
}