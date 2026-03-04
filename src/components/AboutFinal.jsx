import React from 'react';
import { motion } from "framer-motion";
import { 
  CheckCircle, BarChart, Headset, 
  Layers, Lightbulb, Search, 
  Puzzle, LineChart, Linkedin, 
  Mail, ExternalLink
} from 'lucide-react';

export default function AboutFinal() {
  
  const trustPoints = [
    { title: "Tailored for Dentists & Dermas", desc: "No generic templates. We speak the language of medical procedures and patient psychology." },
    { title: "Transparent Reporting", desc: "Access real-time dashboards showing exactly where your leads and ROI are coming from." },
    { title: "End-to-End Execution", desc: "We handle the code, the creative, and the strategy so you can handle the surgery." },
    { title: "Proven Growth Systems", desc: "Our strategies are based on data from 100+ healthcare success stories." }
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">
      
      {/* 4️⃣ WHY CHOOSE US */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 italic">The Coderyug Edge</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Why Clinics Trust Us</h3>
            
            <div className="grid gap-6">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
                  <div className="bg-blue-600 text-white p-2 rounded-xl h-fit group-hover:rotate-12 transition-transform">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{point.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative p-10 bg-slate-900 rounded-[3rem] overflow-hidden">
             {/* Simple Metric Infographic */}
             <div className="relative z-10 space-y-8 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-sm font-bold opacity-60">Avg. Patient Growth</span>
                  <span className="text-2xl font-black text-emerald-400">+25/mo</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-sm font-bold opacity-60">Trust Score</span>
                  <span className="text-2xl font-black text-blue-400">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold opacity-60">Visibility Increase</span>
                  <span className="text-2xl font-black text-purple-400">70%</span>
                </div>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 5️⃣ OUR APPROACH: THE 4-STEP FLOW */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Methodology</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-16 tracking-tight">How We Work</h3>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>
            
            {[
              { icon: <Search />, step: "Audit", desc: "Diagnostic check of your digital presence." },
              { icon: <Puzzle />, step: "Strategy", desc: "Custom roadmap & package selection." },
              { icon: <Lightbulb />, step: "Execute", desc: "Systems, Ads, and Brand Launch." },
              { icon: <LineChart />, step: "Growth", desc: "Optimization & scale." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 relative z-10 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-black text-slate-900 mb-2">{item.step}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ MEET THE TEAM: FOUNDER & CEO */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="w-64 h-64 rounded-[3rem] overflow-hidden bg-slate-800 shrink-0 border-4 border-white/10 shadow-2xl">
              <img 
                src="https://via.placeholder.com/400" 
                alt="Vishal Rai" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            
            <div>
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Founder & CEO</span>
              <h3 className="text-5xl font-black mb-6 tracking-tighter italic">Vishal Rai</h3>
              <p className="text-xl text-slate-400 leading-relaxed italic mb-8 max-w-2xl">
                “I’m passionate about helping clinics grow online. My goal is to bridge the gap between clinical expertise and digital authority, ensuring the best doctors aren't invisible to the patients who need them.”
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/10 rounded-xl hover:bg-blue-600 transition-all"><Linkedin size={20}/></a>
                <a href="#" className="p-3 bg-white/10 rounded-xl hover:bg-blue-600 transition-all"><Mail size={20}/></a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 p-8 opacity-10">
            <CheckCircle size={200} />
          </div>
        </div>
      </section>

    </div>
  );
}