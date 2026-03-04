import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, Users, Clock, 
  BarChart3, Plus, Minus, Search, 
  Target, Sparkles, Receipt
} from 'lucide-react';

export default function PaidAdsFinal() {
  const [openIndex, setOpenIndex] = useState(null);

  const benefits = [
    {
      title: "Active Patient Intent",
      desc: "Reach people the exact second they search for high-value treatments in your area.",
      icon: <Search className="text-blue-500" />
    },
    {
      title: "Daily Lead Delivery",
      desc: "Fresh, high-value patient inquiries delivered straight to your WhatsApp or CRM daily.",
      icon: <Target className="text-red-500" />
    },
    {
      title: "Avoid Costly Mistakes",
      desc: "Save thousands by avoiding the 'Boost Post' trap and unoptimized DIY settings.",
      icon: <Receipt className="text-emerald-500" />
    },
    {
      title: "Hands-Free Growth",
      desc: "Ads run 24/7 on autopilot, letting you focus entirely on surgery and patient care.",
      icon: <Sparkles className="text-purple-500" />
    }
  ];

  const faqs = [
    {
      q: "Will I need to spend extra on the actual ads?",
      a: "Yes. Our management fee covers strategy, setup, and optimization. The 'Ad Spend' (the money paid to Google or Meta) is a separate budget paid directly to those platforms. We help you define a budget that ensures a high ROI."
    },
    {
      q: "How quickly will I see results?",
      a: "Unlike SEO, Paid Ads are instant. You typically start seeing leads within the first 1–2 weeks of the campaigns going live. We spend the first month aggressively tracking ROI to refine the quality of those leads."
    },
    {
      q: "Can I target multiple treatments simultaneously?",
      a: "Absolutely. Depending on your package, we can run separate campaigns for Dental Implants, Braces, Laser treatments, or General Consultations at the same time."
    },
    {
      q: "Do you provide the ad images and videos?",
      a: "Yes. Our team handles the copywriting and professional ad design. We also guide you on what kind of clinic photos/videos work best for high-performing ads."
    }
  ];

  return (
    <div className="bg-white">
      
      {/* 7️⃣ BENEFITS FOR CLINIC OWNERS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The ROI Advantage</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Predictable Growth. <br />
              <span className="text-slate-500">Measurable Success.</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
                  <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm group-hover:rotate-6 transition-transform">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">{benefit.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual: Leads Dashboard Mockup */}
          <div className="relative">
             <div className="aspect-[4/5] md:aspect-square rounded-[3rem] bg-slate-900 overflow-hidden border-8 border-slate-800 shadow-2xl relative">
                {/* Floating "New Lead" Alerts */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center gap-4 z-20">
                    {[
                      { name: "Anita S.", service: "Dental Implant", time: "2m ago" },
                      { name: "Rahul V.", service: "Laser Treatment", time: "15m ago" },
                      { name: "Priya K.", service: "PRP Session", time: "1h ago" }
                    ].map((lead, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        key={i}
                        className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center justify-between border border-emerald-100"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                            {lead.name[0]}
                          </div>
                          <div>
                            <p className="text-xs font-black text-slate-900">{lead.name}</p>
                            <p className="text-[10px] text-slate-500 font-medium">{lead.service}</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase tracking-tighter">
                          Booked Now
                        </span>
                      </motion.div>
                    ))}
                </div>

                {/* Background Image: Clinical Staff/Environment */}
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" 
                  alt="Doctor checking dashboard"
                  className="w-full h-full object-cover opacity-40 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
             </div>
             
             {/* Stats Bubble */}
             <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-3xl shadow-2xl z-30">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Average ROI</p>
                <h5 className="text-3xl font-black italic">4.2x</h5>
             </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ FAQ SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Support</h2>
            <h3 className="text-4xl font-bold text-slate-900">Paid Ads FAQ</h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800">{faq.q}</span>
                  <div className={`p-1 rounded-full transition-transform duration-300 ${openIndex === idx ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    {openIndex === idx ? <Minus size={18}/> : <Plus size={18}/>}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-500 text-sm leading-relaxed border-t border-slate-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}