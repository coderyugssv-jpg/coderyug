import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Stethoscope, Sparkles, LayoutGrid, 
  Users, TrendingUp, MapPin, 
  Star, ArrowUpRight, Filter
} from 'lucide-react';
import ClinicTestimonials from '../components/ClinicTestimonials';
import FinalCTASection from '../components/FinalCTASection';

export default function CaseStudies() {
  const [filter, setFilter] = useState('All');

  const stats = [
    { icon: <Users className="text-blue-500" />, label: "Clinics Helped", value: 100, suffix: "+" },
    { icon: <TrendingUp className="text-emerald-500" />, label: "Avg. New Patients", value: 25, suffix: "/mo" },
    { icon: <ArrowUpRight className="text-purple-500" />, label: "Traffic Increase", value: 70, suffix: "%" },
    { icon: <MapPin className="text-red-500" />, label: "Google Maps", value: 3, suffix: " Top" },
    { icon: <Star className="text-amber-500" />, label: "Avg. Reviews", value: 4.8, suffix: "★" },
  ];

  const cases = [
    { id: 1, name: "Smile Dental Clinic", type: "Dental", result: "+25 new patients/month", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600" },
    { id: 2, name: "Glow Skin Clinic", type: "Dermatology", result: "+32 new patients/month", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600" },
    { id: 3, name: "Apex Multi-Specialty", type: "Dental", result: "+18 high-value leads/week", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600" },
    { id: 4, name: "Radiant Aesthetics", type: "Dermatology", result: "70% booking rate increase", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600" }
  ];

  // Filter cases based on selected filter
  const filteredCases = filter === 'All' ? cases : cases.filter(c => c.type === filter);

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
            See How Coderyug Helps Clinics <span className="text-green-400">Grow Online & Attract More Patients</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Explore our dental and dermatology clinic case studies to see real results from websites, appointment systems, Google ranking, paid ads, and branding.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full transition-all">
              Book Free Consultation
            </Link>
            <button className="border border-slate-500 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all">
              View All Case Studies
            </button>
          </div>
        </motion.div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full -z-10"></div>
      </section>

      {/* 2️⃣ FILTER SECTION */}
      <section className="pt-32 pb-12 px-6 text-center">
        <h2 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-4 flex items-center justify-center gap-2">
          <Filter size={14}/> Filter by Clinic Type
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { id: 'All', label: 'All Projects', icon: <LayoutGrid size={16}/> },
            { id: 'Dental', label: 'Dental Clinics', icon: <Stethoscope size={16}/> },
            { id: 'Dermatology', label: 'Dermatology Clinics', icon: <Sparkles size={16}/> }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all border-2 ${
                filter === btn.id 
                  ? 'bg-slate-900 border-slate-900 text-white shadow-xl scale-105' 
                  : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'
              }`}
            >
              {btn.icon} {btn.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3️⃣ CASE STUDIES GRID */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map(item => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/30">
                      {item.type}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.name}</h4>
                  <div className="flex items-center gap-2 text-emerald-600 font-black text-sm uppercase mb-6 tracking-tighter">
                    <TrendingUp size={16}/> {item.result}
                  </div>
                  <button className="w-full py-4 bg-slate-50 text-slate-900 font-bold rounded-2xl flex items-center justify-center gap-2 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    Read Case Study <ArrowUpRight size={18}/>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4️⃣ HIGHLIGHTED RESULTS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Our Clinics See Real Growth</h3>
          <p className="text-slate-500 font-medium italic mb-16">Verified data from 100+ healthcare partnerships.</p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-200 text-center shadow-sm relative overflow-hidden group hover:border-blue-200 transition-all"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h5 className="text-3xl font-black text-slate-900 mb-1">{stat.value}{stat.suffix}</h5>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                </div>
                <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-blue-50/50 blur-3xl rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ClinicTestimonials />
      <FinalCTASection />

    </main>
  );
}