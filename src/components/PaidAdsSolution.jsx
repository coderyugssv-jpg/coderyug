// PaidAdsSolution.jsx
import React from 'react';
import { motion } from "framer-motion";
import { 
  XCircle, CheckCircle2, Target, 
  MousePointerClick, ArrowRight,
  Smartphone, CreditCard, Stethoscope
} from 'lucide-react';

export default function PaidAdsSolution() {

  const painPoints = [
    { t: "Invisible to High-Intent Search", d: "Patients are searching for treatments right now, but they only see your competitors' ads." },
    { t: "The DIY Money Pit", d: "Boosted posts and unoptimized Google Ads lead to high clicks but zero actual bookings." },
    { t: "Weak Geographic Targeting", d: "Your ads are showing to people too far away to actually visit your clinic." },
    { t: "The Tracking Black Hole", d: "Spending money without knowing exactly which ad led to which patient appointment." }
  ];

  const funnelSteps = [
    { icon: <Target />, step: "AD", label: "Highly Targeted Ads", color: "blue" },
    { icon: <Smartphone />, step: "LP", label: "High-Convert Landing Page", color: "emerald" },
    { icon: <MousePointerClick />, step: "LEAD", label: "Instant Booking/Call", color: "purple" },
    { icon: <Stethoscope />, step: "VISIT", label: "Clinic Consultation", color: "amber" },
    { icon: <CreditCard />, step: "ROI", label: "Revenue & Retention", color: "green" },
  ];

  const featureCards = [
    { title: "Google Search Ads", desc: "Appear #1 when patients search 'Dermatologist near me' or 'Root Canal treatment'." },
    { title: "Retargeting Ads", desc: "Stay top-of-mind. Show ads to patients who visited your site but didn't book yet." },
    { title: "ROI Dashboard", desc: "Daily tracking of leads, calls, and cost-per-appointment in one simple interface." }
  ];

  return (
    <div className="bg-white">

      {/* 2️⃣ THE PROBLEM: WHY DIY ADS FAIL */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">The Reality Check</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-900">
              Most Clinics Waste <span className="text-red-600 underline decoration-2 underline-offset-8">80% of Their Ad Budget</span>
            </h3>

            <div className="space-y-6">
              {painPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-red-50/50 rounded-2xl border border-red-100 transition-all hover:bg-red-50">
                  <XCircle className="text-red-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{point.t}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{point.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest">DIY Campaigns</span>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Our Pro Protocol</span>
            </div>

            {/* DIY vs Pro Bars */}
            <div className="space-y-8">
              {/* DIY Bar */}
              <div className="opacity-40 line-through decoration-red-500/50">
                <div className="flex justify-between text-[10px] text-slate-400 mb-2 font-mono">
                  <span>CPC: ₹145</span>
                  <span>Conversions: 0.2%</span>
                </div>
                <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[15%]"></div>
                </div>
              </div>

              {/* Pro Bar */}
              <div className="relative">
                <div className="flex justify-between text-[10px] text-emerald-400 mb-2 font-mono font-bold">
                  <span>CPC: ₹32</span>
                  <span>Conversions: 8.4%</span>
                </div>
                <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                  ></motion.div>
                </div>
                <div className="mt-6 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <p className="text-xs text-emerald-100 italic leading-relaxed">
                    "Strategic targeting + high-converting landing pages = 4x lower cost per patient acquisition."
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ THE SOLUTION: PATIENT ACQUISITION FUNNEL */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Solution</h2>
          <h3 className="text-4xl font-bold text-slate-900">A Patient-First Advertising Funnel</h3>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">We don't just 'run ads'. We build an automated machine that turns local attention into confirmed clinic visits.</p>
        </div>

        {/* Funnel Steps */}
        <div className="flex justify-between items-center mb-24 relative">
          {funnelSteps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center relative w-1/5"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 shadow-sm border
                ${step.color === "blue" ? "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white" : ""}
                ${step.color === "emerald" ? "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white" : ""}
                ${step.color === "purple" ? "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-600 group-hover:text-white" : ""}
                ${step.color === "amber" ? "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-600 group-hover:text-white" : ""}
                ${step.color === "green" ? "bg-green-50 text-green-600 border-green-100 group-hover:bg-green-600 group-hover:text-white" : ""}
              `}>
                {step.icon}
              </div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 mb-1">{step.step}</span>
              <h5 className="text-xs font-bold text-slate-800 text-center px-2">{step.label}</h5>

              {/* Arrow */}
              {i < funnelSteps.length - 1 && (
                <ArrowRight className="absolute right-[-10%] top-1/2 transform -translate-y-1/2 text-slate-300" size={20} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featureCards.map((feature, idx) => (
            <div key={idx} className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <CheckCircle2 size={20} />
              </div>
              <h4 className="font-bold text-xl mb-3 text-slate-900">{feature.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white font-bold py-5 px-12 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 uppercase tracking-widest text-sm flex items-center gap-3 mx-auto">
            Start Your Patient Engine <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}