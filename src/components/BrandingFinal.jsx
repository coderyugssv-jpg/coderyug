import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Search, Settings2, Rocket, 
  CheckCircle2, ArrowRight, Sparkles, 
  ShieldCheck, Trophy, Medal, Plus, 
  Minus, Heart, BarChart3, Star
} from 'lucide-react';

export default function BrandingFinal() {
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    {
      name: "Starter Branding",
      price: "25,000",
      type: "One-time",
      icon: <Medal />,
      features: ["Professional Logo Design", "Website Doctor Profile", "2 High-Value Social Posts/mo", "Basic Review Setup"],
      highlight: false
    },
    {
      name: "Growth Branding",
      price: "35,000",
      type: "Monthly",
      icon: <Trophy />,
      features: ["Brand Photos & Videos", "4 Social Posts/month", "Monthly Strategy Session", "Active Review Management"],
      highlight: true
    },
    {
      name: "Authority Branding",
      price: "60,000",
      type: "Monthly",
      icon: <ShieldCheck />,
      features: ["Doctor + Clinic Branding", "Premium Video Reels", "Professional PR Articles", "8–12 Posts/month", "Reputation Monitoring", "VIP Strategy Meetings"],
      highlight: false
    }
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">
      
      {/* 5️⃣ HOW IT WORKS: THE 3-STEP ASCENSION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Process</h2>
          <h3 className="text-4xl font-bold text-slate-900 tracking-tight">3 Steps to Build Authority</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-slate-100 -z-0"></div>
          
          {[
            { 
              title: "Consultation & Audit", 
              desc: "We deep-dive into your current brand, digital footprint, and local competitor landscape.",
              icon: <Search className="text-blue-600"/> 
            },
            { 
              title: "Strategy Selection", 
              desc: "Select the Starter, Growth, or Authority tier tailored to your clinic's expansion goals.",
              icon: <Settings2 className="text-purple-600"/> 
            },
            { 
              title: "Implementation", 
              desc: "Photography, cinematic content, PR, and social strategy go live with ongoing monthly tracking.",
              icon: <Rocket className="text-emerald-600"/> 
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group relative z-10">
              <div className="w-20 h-20 bg-white border border-slate-100 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-slate-200/50 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed px-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6️⃣ PACKAGES & PRICING */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Select Your Authority Level</h3>
            <p className="text-slate-500 max-w-xl mx-auto">Investment tiers designed to take you from a local option to the #1 clinic in your city.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border-2 transition-all duration-500 flex flex-col ${plan.highlight ? 'bg-white border-blue-600 shadow-2xl scale-105 z-10' : 'bg-transparent border-slate-200'}`}>
                <div className="flex justify-between items-center mb-8">
                  <div className={`p-4 rounded-2xl ${plan.highlight ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'}`}>
                    {plan.icon}
                  </div>
                  {plan.highlight && <span className="text-[10px] font-black bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-tighter">Recommended</span>}
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-1">{plan.name}</h4>
                <div className="mb-8">
                  <span className="text-5xl font-black text-slate-900">₹{plan.price}</span>
                  <span className="text-sm text-slate-400 font-bold ml-1">/ {plan.type}</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feat, fi) => (
                    <li key={fi} className="flex gap-3 text-sm font-bold text-slate-600">
                      <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${plan.highlight ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-slate-900 text-white'}`}>
                  Become the #1 Clinic <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ BENEFITS FOR CLINIC OWNERS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-3xl bg-blue-100 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" alt="Doctor Consultation" />
                </div>
                <div className="h-40 rounded-3xl bg-slate-900 p-6 flex flex-col justify-between">
                   <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-amber-400 text-amber-400"/>)}
                   </div>
                   <p className="text-white text-xs font-bold leading-relaxed">"The digital trust we built has doubled our implant inquiries."</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-40 rounded-3xl bg-emerald-500 p-6 text-white flex flex-col justify-end">
                   <BarChart3 size={32} className="mb-2"/>
                   <p className="text-2xl font-black italic">92%</p>
                   <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Trust Rate Increase</p>
                </div>
                <div className="h-64 rounded-3xl bg-slate-200 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" alt="Social Media Dashboard" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Payoff</h2>
            <h3 className="text-4xl font-bold mb-8 leading-tight">Elite Positioning. <br/>Predictable Prestige.</h3>
            <div className="space-y-6">
              {[
                "Position doctor & clinic as the only trusted local expert",
                "Attract high-value cases (Implants, Aesthetics, Lasers)",
                "Eliminate price-shoppers by building inherent trust",
                "Dominate local visibility on Instagram & Google",
                "Create a digital asset that works while you're in surgery"
              ].map((benefit, bi) => (
                <div key={bi} className="flex gap-4 group">
                  <div className="p-1 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors h-fit">
                    <CheckCircle2 size={18}/>
                  </div>
                  <p className="font-bold text-slate-800 text-lg tracking-tight">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ FAQ SECTION */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[4rem] mx-4 mb-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold">Authority FAQ</h3>
            <p className="text-slate-400 mt-2">Everything you need to know about the medical brand protocol.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Will this guarantee more patients?", a: "Branding builds high-intent trust. While SEO/Ads bring traffic, branding ensures that traffic converts into premium inquiries because they already trust you before they visit." },
              { q: "Is this only for dental & dermatology clinics?", a: "While we specialize in these high-value niches, our 'Authority Protocol' is effective for any medical professional looking to dominate their local market." },
              { q: "How long before I see results?", a: "Trust takes time. While social engagement starts early (1 month), true Authority—where patients ask for you by name—typically solidifies within 2–6 months." },
              { q: "Do you create all the content?", a: "Yes. Our team handles the scripts, photography, video editing, and PR writing. We only need a few hours of your time for strategy and recording." }
            ].map((faq, k) => (
              <div key={k} className="border-b border-white/10 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === k ? null : k)} 
                  className="w-full py-6 text-left flex justify-between items-center group"
                >
                  <span className="font-bold text-lg group-hover:text-blue-400 transition-colors">{faq.q}</span>
                  {openFaq === k ? <Minus size={20} className="text-blue-400"/> : <Plus size={20}/>}
                </button>
                <AnimatePresence>
                  {openFaq === k && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="pb-6 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
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