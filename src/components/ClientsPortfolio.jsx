import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  Stethoscope, Sparkles, LayoutGrid, 
  MapPin, TrendingUp, ArrowRight,
  Quote, ChevronLeft, ChevronRight, Star
} from 'lucide-react';

export default function ClientsPortfolio() {
  const [filter, setFilter] = useState('All');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const clients = [
    {
      id: 1,
      name: "Smile Dental Clinic",
      type: "Dental",
      location: "Mumbai, MH",
      result: "+25 Patients/Month",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400",
      featured: true,
      desc: "Implemented a full-funnel Google Ads strategy and local SEO cleanup, resulting in a dominant 'Top 3' ranking for dental implants."
    },
    {
      id: 2,
      name: "Glow Skin Clinic",
      type: "Dermatology",
      location: "Delhi, NCR",
      result: "40% Lead Growth",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400",
      featured: true,
      desc: "Designed a premium authority brand identity and managed aesthetic-focused Instagram campaigns that doubled treatment inquiries."
    },
    {
      id: 3,
      name: "White Orthodontics",
      type: "Dental",
      location: "Bangalore, KA",
      result: "Top 3 Ranking",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400",
      featured: false
    },
    {
      id: 4,
      name: "Radiant Skin Care",
      type: "Dermatology",
      location: "Pune, MH",
      result: "15+ High-Value Leads",
      img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400",
      featured: false
    }
  ];

  const testimonials = [
    {
      quote: "Coderyug didn't just build a website; they built a patient-generating machine. Our ROI was visible within the first 45 days.",
      author: "Dr. Sameer Kulkarni",
      clinic: "Smile Dental",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "The branding they created for my dermatology clinic finally reflects the premium quality of our treatments.",
      author: "Dr. Neha Kapoor",
      clinic: "Glow Skin Clinic",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const filteredClients = filter === 'All' ? clients : clients.filter(c => c.type === filter);
  const featuredClients = clients.filter(c => c.featured);

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 2️⃣ FILTER SECTION */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-6 italic">Filter by Clinic Type</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'All', label: 'All Clinics', icon: <LayoutGrid size={18}/> },
              { id: 'Dental', label: 'Dental', icon: <Stethoscope size={18}/> },
              { id: 'Dermatology', label: 'Dermatology', icon: <Sparkles size={18}/> }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all border-2 ${
                  filter === btn.id ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-100 text-slate-500 hover:border-blue-200'
                }`}
              >
                {btn.icon} {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ FEATURED CLIENTS (HIGHLIGHTED) */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-slate-900">Featured Clinics</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredClients.map((client) => (
            <motion.div 
              key={client.id}
              whileHover={{ y: -10 }}
              className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col md:flex-row gap-8 items-center border border-white/10"
            >
              <div className="w-full md:w-1/2 aspect-square rounded-[2rem] overflow-hidden">
                <img src={client.img} alt={client.name} className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="md:w-1/2">
                <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em]">{client.type}</span>
                <h4 className="text-2xl font-bold mt-2 mb-4">{client.name}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{client.desc}</p>
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-6">
                  <TrendingUp size={18}/> {client.result}
                </div>
                <button className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest hover:text-blue-400 transition-colors">
                  View Case Study <ArrowRight size={16}/>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3️⃣ CLIENTS SHOWCASE GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredClients.map((client) => (
              <motion.div
                layout
                key={client.id}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-6 hover:shadow-2xl hover:shadow-blue-900/5 transition-all"
              >
                <div className="mb-6 rounded-2xl overflow-hidden aspect-video relative">
                  <img src={client.img} alt={client.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-xs">View Result</button>
                  </div>
                </div>
                
                <h4 className="font-bold text-slate-900 mb-1">{client.name}</h4>
                <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold uppercase mb-4">
                  <MapPin size={10}/> {client.location}
                </div>
                
                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-emerald-600 font-black text-xs uppercase tracking-tighter">{client.result}</span>
                  <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">{client.type}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>


    </div>
  );
}