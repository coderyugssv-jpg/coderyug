"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2 } from "lucide-react";

export default function LeadMagnetSection() {
  return (
    <section className="py-24 bg-white border-y border-slate-100 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative">
          
          {/* Abstract background shape */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/50 rounded-full blur-3xl"></div>

          {/* Left: Visual Representation of the Lead Magnet */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="bg-white p-6 rounded-2xl shadow-2xl border border-blue-100 transform -rotate-2 relative z-10">
              <div className="bg-blue-600 h-2 w-20 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 underline decoration-blue-500">
                The 24/7 Clinic Growth Roadmap
              </h3>
              <p className="text-slate-500 text-sm mb-4 italic">Lead-Gen Secrets for Dental & Dermatology</p>
              
              <div className="space-y-3 mb-6">
                {[
                  "The '10-Second Rule' for Clinic Websites",
                  "Reducing No-Shows with Automated Logic",
                  "Turning Instagram Visitors into Appointments"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="text-blue-500 w-4 h-4" /> {text}
                  </div>
                ))}
              </div>
              <div className="h-40 bg-slate-50 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-200 text-slate-400">
                <FileText size={48} />
              </div>
            </div>
            {/* Shadow decoration */}
            <div className="absolute inset-0 bg-blue-200/50 rounded-2xl blur-xl transform translate-y-4 translate-x-4"></div>
          </motion.div>

          {/* Right: Content & Form */}
          <div className="w-full lg:w-1/2 relative z-10 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Stop Losing Patients to Your <br /> 
              <span className="text-blue-600 font-extrabold italic">Competitor's Website.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              I’ve analyzed hundreds of Dental & Derm websites over 6 years. Most clinics lose 40% of their digital leads due to 3 simple mistakes. 
              <strong> Get my free guide on how to fix them today.</strong>
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="flex-grow px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                required
              />
              <button 
                type="submit"
                className="bg-[#0F172A] hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                Get The Guide <Download size={18} />
              </button>
            </form>
            
            <p className="mt-4 text-xs text-slate-400">
              Join 50+ Clinic Owners who’ve received our growth insights. No spam, ever.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}