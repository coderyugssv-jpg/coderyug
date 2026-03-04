import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Added missing import
import { 
  ClipboardCheck, BarChart, 
  Check, ArrowRight, ShieldCheck, 
  Zap, Trophy, Medal 
} from 'lucide-react';

export default function ProcessAndPricing() {
  
  const steps = [
    {
      title: "Clinic Audit",
      icon: <ClipboardCheck size={32} />,
      desc: "We perform a deep-dive analysis of your current Google & Maps presence and compare it with your top 3 local competitors."
    },
    {
      title: "Implementation",
      icon: <Zap size={32} />,
      desc: "Our team executes profile optimization, Local SEO, review automation setup, and your first batch of professional clinical posts."
    },
    {
      title: "Tracking & Growth",
      icon: <BarChart size={32} />,
      desc: "Every month, you receive a 'Patient Flow Report' showing exactly how many calls and bookings were generated from Google."
    }
  ];

  const plans = [
    {
      name: "Starter",
      icon: <Medal className="text-slate-400" />,
      price: "12,000",
      bestFor: "Solo Practitioners",
      features: [
        "GBP Optimization",
        "2 Clinical Posts/Month",
        "Review System Setup",
        "Monthly Basic Report",
        "Google Maps Listing"
      ],
      highlight: false
    },
    {
      name: "Growth",
      icon: <Trophy className="text-amber-500" />,
      price: "20,000",
      bestFor: "Established Clinics",
      features: [
        "Everything in Starter",
        "Full Local SEO Strategy",
        "4 Clinical Posts/Month",
        "Review Management",
        "1 City-Targeted Ad Campaign"
      ],
      highlight: true
    },
    {
      name: "Authority",
      icon: <ShieldCheck className="text-blue-600" />,
      price: "35,000",
      bestFor: "Multi-Specialty Centers",
      features: [
        "Everything in Growth",
        "8 Clinical Posts/Month",
        "Review Boosting System",
        "Maps Domination Strategy",
        "Competitor Monitoring",
        "Priority Support"
      ],
      highlight: false
    }
  ];

  return (
    <div className="bg-white font-sans">
      
      {/* 5️⃣ HOW IT WORKS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 italic">The Workflow</h2>
          <h3 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight">Simple 3-Step Process</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center group z-10"
            >
              <div className="w-20 h-20 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-200 group-hover:shadow-lg">
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-800">{step.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm px-4">{step.desc}</p>
              
              {/* Connector lines for Desktop */}
              {idx < 2 && (
                <div className="hidden lg:block absolute top-10 left-[31%] w-[12%] border-t-2 border-dashed border-slate-200 -z-10 group-hover:border-blue-300 transition-colors duration-500"></div>
              )}
              {idx === 1 && (
                 <div className="hidden lg:block absolute top-10 left-[64%] w-[12%] border-t-2 border-dashed border-slate-200 -z-10 group-hover:border-blue-300 transition-colors duration-500"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6️⃣ PACKAGES & PRICING */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 italic">Investment Plans</h2>
            <h3 className="text-4xl font-bold text-slate-900 leading-tight mb-4 tracking-tight">Transparent Pricing</h3>
            <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">Choose the level of growth your practice needs today. No hidden fees, just results.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`p-10 rounded-[3rem] bg-white border-2 transition-all duration-300 ${
                  plan.highlight 
                  ? "border-blue-600 shadow-[0_20px_50px_rgba(37,99,235,0.15)] scale-105 z-10" 
                  : "border-slate-100 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className={`p-4 rounded-2xl ${plan.highlight ? 'bg-blue-50' : 'bg-slate-50'}`}>
                    {plan.icon}
                  </div>
                  {plan.highlight && (
                    <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-blue-200">Recommended</span>
                  )}
                </div>
                
                <h4 className="text-2xl font-black text-slate-900 mb-1">{plan.name}</h4>
                <p className="text-slate-400 text-[10px] mb-8 uppercase font-bold tracking-widest">{plan.bestFor}</p>
                
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-slate-900">₹{plan.price}</span>
                  <span className="text-slate-400 font-bold text-sm">/mo</span>
                </div>

                <div className="space-y-5 mb-12">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 bg-emerald-100 rounded-full p-0.5">
                        <Check className="text-emerald-600" size={14} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact" 
                  className={`w-full py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                    plan.highlight 
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200" 
                    : "bg-slate-900 text-white hover:bg-black"
                  }`}
                >
                  Choose {plan.name} <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center max-w-2xl mx-auto">
            <p className="text-slate-400 text-xs leading-relaxed italic">
              *One-time setup fee applicable for new clinic registrations. All prices are exclusive of GST. Custom enterprise plans available for hospital chains.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}