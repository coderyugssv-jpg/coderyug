import React from 'react';
import { motion } from "framer-motion";
import { 
  Settings, Globe, Star, Calendar, 
  PieChart, CheckCircle2, ChevronRight,
  Camera, Map, MessageSquare, ListChecks,
  Search
} from 'lucide-react';

export default function DetailedFeatures() {
  const features = [
    {
      title: "Google Business Profile Optimization",
      icon: <Settings className="text-blue-500" />,
      points: [
        "Complete profile setup (Name, Address, Phone, Hours)",
        "Medical categories & services optimization",
        "High-quality clinic & equipment images uploaded",
        "Business description & local keywords optimized"
      ],
      visualLabel: "Dashboard Setup"
    },
    {
      title: "Local SEO & Map Ranking",
      icon: <Map className="text-emerald-500" />,
      points: [
        "Keyword research for your city & specific treatments",
        "On-page SEO for treatment-specific landing pages",
        "Google Maps SEO: citations & local directory listings",
        "Competitor ranking gap analysis"
      ],
      visualLabel: "Maps SEO Report"
    },
    {
      title: "Review & Reputation Management",
      icon: <Star className="text-amber-500" />,
      points: [
        "Review request system for post-consultation",
        "Response templates for professional patient engagement",
        "Boost star rating with verified patient feedback",
        "Negative review mitigation strategy"
      ],
      visualLabel: "Review Analytics"
    },
    {
      title: "Regular Posts & Updates",
      icon: <Calendar className="text-purple-500" />,
      points: [
        "4–8 Professional Google updates per month",
        "Promotional posts for specific treatments/camps",
        "Seasonal/Holiday health awareness posts",
        "Educational snippets to build patient trust"
      ],
      visualLabel: "Content Feed"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 italic">
            Inside the System
          </h2>
          <h3 className="text-4xl font-bold text-slate-900">
            A Complete Management Protocol <br />
            <span className="text-slate-500">For Your Digital Presence</span>
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                  {React.cloneElement(feature.icon, { size: 32 })}
                </div>
                {/* Mockup Placeholder Branding */}
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100 px-3 py-1 rounded-full">
                  <PieChart size={12} /> {feature.visualLabel}
                </div>
              </div>

              <h4 className="text-2xl font-bold mb-6 text-slate-800">{feature.title}</h4>
              
              <ul className="space-y-4 mb-8">
                {feature.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                    <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>

{/* Replace the old Simulator div with this */}
<div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
  <img 
    src="/images/google-ranking-report.png" 
    alt="Google Maps Ranking Report" 
    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
  />
</div>
            </motion.div>
          ))}
        </div>

        {/* Reporting Section (Analytics) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-8 md:p-12 bg-blue-600 rounded-[3rem] text-white overflow-hidden relative"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h4 className="text-3xl font-bold mb-6 italic">Transparent Monthly Reporting</h4>
              <p className="text-blue-100 mb-8 leading-relaxed">
                We don't hide behind jargon. Every month, you receive a clear "Clinical Growth Report" showing:
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">Views</span>
                  <span className="text-blue-200 text-xs uppercase font-medium">Google Profile Reach</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">Clicks</span>
                  <span className="text-blue-200 text-xs uppercase font-medium">To Website & Directions</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">Rank</span>
                  <span className="text-blue-200 text-xs uppercase font-medium">Keyword Tracking</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">Reviews</span>
                  <span className="text-blue-200 text-xs uppercase font-medium">Sentiment & Velocity</span>
                </div>
              </div>
            </div>
            
            {/* Visual: Report Graphic */}
            <div className="bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-sm">
              <div className="flex items-end gap-2 h-40">
                <div className="flex-1 bg-white/20 rounded-t-lg h-[40%]"></div>
                <div className="flex-1 bg-white/40 rounded-t-lg h-[60%]"></div>
                <div className="flex-1 bg-white/60 rounded-t-lg h-[50%]"></div>
                <div className="flex-1 bg-green-400 rounded-t-lg h-[90%]"></div>
                <div className="flex-1 bg-white/80 rounded-t-lg h-[75%]"></div>
              </div>
              <p className="text-center mt-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Patient Flow Trends</p>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </motion.div>
      </div>
    </section>
  );
}