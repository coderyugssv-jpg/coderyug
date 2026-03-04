import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


// Import your Final CTA component
import FinalCTASection from "../../components/FinalCTASection";
import BrandingSolution from '../../components/BrandingSolution';
import BrandingFinal from '../../components/BrandingFinal';

export default function DoctorBranding() {


  return (
    <div className="bg-white text-[#0F172A] overflow-x-hidden font-sans">
      
      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 md:px-20 text-center bg-[#0F172A] text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Position Your <span className="text-green-400">Clinic & Doctor</span> as the #1 Authority in Your City
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            We build your clinic’s brand, showcase your expertise, and establish trust to attract high-value patients consistently.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-black font-bold px-10 py-4 rounded-full transition-all shadow-xl shadow-green-500/20">
              Book Free Consultation
            </Link>
            <button className="border border-slate-500 px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all font-semibold">
              See Authority Case Study
            </button>
          </div>
        </motion.div>
        
        {/* Background Decorative Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full -z-0"></div>
      </section>
      <BrandingSolution />
      <BrandingFinal />


      <FinalCTASection />
    </div>
  );
}