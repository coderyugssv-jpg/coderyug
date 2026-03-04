import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, Users, Clock, 
  BarChart4, Plus, Minus, Search, 
  HeartPulse, ShieldCheck 
} from 'lucide-react';

export default function BenefitsAndFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const benefits = [
    {
      title: "Hyper-Local Dominance",
      desc: "Appear exactly when patients search for your treatments in your city.",
      icon: <Search className="text-blue-500" />
    },
    {
      title: "Zero-Ad Patient Flow",
      desc: "Gain a steady stream of local patients without burning budget on expensive ads.",
      icon: <Users className="text-emerald-500" />
    },
    {
      title: "Instant Trust Building",
      desc: "A 4.9-star rating does the selling for you before the patient even calls.",
      icon: <ShieldCheck className="text-amber-500" />
    },
    {
      title: "Staff Time Recovery",
      desc: "Let your front desk focus on patients while we handle your digital reputation.",
      icon: <Clock className="text-purple-500" />
    }
  ];

  const faqs = [
    {
      q: "How fast will my clinic appear on Google Maps?",
      a: "While basic listing updates happen in days, significant local ranking improvements usually take 2–6 weeks as Google's algorithm recognizes your increased activity and authority."
    },
    {
      q: "Do you manage patient reviews?",
      a: "Yes. We provide a system to capture positive feedback and provide professional, HIPAA-compliant templates to respond to all reviews, ensuring your reputation stays pristine."
    },
    {
      q: "Will this replace my Google Ads?",
      a: "It doesn't have to, but it reduces your dependency on them. Organic Map rankings have a higher 'trust factor' than paid ads and often result in a lower cost-per-patient over time."
    },
    {
      q: "Is it only for Dental or Dermatology clinics?",
      a: "Our frameworks are specifically 'hard-coded' for Dental and Derma workflows. However, the core local SEO principles can be adapted for any high-intent medical specialty."
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
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Impact</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Focus on Surgery. <br />
              <span className="text-slate-500">We'll Handle the Search.</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
                  <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">{benefit.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Placeholder: Happy Owner / Mobile Notification Mockup */}
          <div className="relative">
             <div className="aspect-square rounded-[3rem] bg-slate-100 overflow-hidden border-8 border-white shadow-2xl relative">
                {/* Simulated Notification Interface */}
                <div className="absolute top-10 left-10 right-10 z-20 space-y-3">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-4"
                    >
                        <div className="bg-emerald-500 p-2 rounded-full text-white"><CheckCircle2 size={20}/></div>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400">Google Business Profile</p>
                            <p className="text-xs font-bold text-slate-800">New 5-Star Review Received!</p>
                        </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-blue-100 flex items-center gap-4"
                    >
                        <div className="bg-blue-500 p-2 rounded-full text-white"><Users size={20}/></div>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400">Map Insights</p>
                            <p className="text-xs font-bold text-slate-800">+42 Directions Requested Today</p>
                        </div>
                    </motion.div>
                </div>
                {/* Replace the URL below with an actual image of a smiling doctor or clinic lobby */}
                <img 
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Happy Clinic Owner"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
             </div>
             {/* Decorative Background Element */}
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* 8️⃣ FAQ SECTION */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[4rem] mx-4 mb-10 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Support</h2>
            <h3 className="text-4xl font-bold">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  {openIndex === idx ? <Minus className="text-blue-400"/> : <Plus className="text-blue-400"/>}
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
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