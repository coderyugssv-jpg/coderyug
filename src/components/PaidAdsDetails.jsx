import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, Search, Smartphone, MessageSquare, 
  BarChart4, MousePointer2, Layers, Repeat, 
  Settings2, Zap, BarChart3, ArrowRight,
  Trophy, ShieldCheck, Medal
} from 'lucide-react';

export default function PaidAdsDetails() {
  
  const features = [
    {
      title: "Google Ads (High Intent)",
      icon: <Search className="text-blue-500" />,
      points: [
        "Local search ads for treatments (e.g., 'Invisalign near me')",
        "Keyword research & negative keyword exclusion",
        "Call-only & direct appointment ads",
        "Advanced conversion tracking setup"
      ]
    },
    {
      title: "Facebook & Instagram Ads",
      icon: <Smartphone className="text-pink-500" />,
      points: [
        "Local audience targeting (City, Radius, Demographics)",
        "Treatment campaigns (Laser, PRP, Braces, Implants)",
        "Lead forms & direct-to-WhatsApp clicks",
        "Retargeting ads for visitors who didn’t book"
      ]
    },
    {
      title: "Ad Management & ROI",
      icon: <BarChart4 className="text-emerald-500" />,
      points: [
        "Professional creative & copywriting",
        "Monthly performance audits & reporting",
        "Granular CTR, CPC, and Lead tracking",
        "Real-time budget optimization for ROI"
      ]
    }
  ];

  const plans = [
    {
      name: "Starter Ads",
      price: "15,000",
      bestFor: "Small Clinics",
      features: ["Google or Meta Ads setup", "1 Treatment campaign", "1 Custom Landing Page", "Monthly basic report"],
      icon: <Medal className="text-slate-400" />
    },
    {
      name: "Growth Ads",
      price: "25,000",
      bestFor: "Scaling Practices",
      features: ["Google + Meta Ads", "3 Treatment campaigns", "Lead tracking dashboard", "Monthly optimization", "Retargeting setup"],
      highlight: true,
      icon: <Trophy className="text-amber-500" />
    },
    {
      name: "Authority Ads",
      price: "40,000",
      bestFor: "Dominant Centers",
      features: ["Multi-platform dominance", "Advanced targeting & Video Ads", "6–8 Active campaigns", "Competitor monitoring", "Advanced ROI report"],
      icon: <ShieldCheck className="text-blue-600" />
    }
  ];

  return (
    <div className="bg-white font-sans">
      
      {/* 4️⃣ DETAILED FEATURES */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200"
              >
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-6 text-slate-900">{feature.title}</h4>
                <ul className="space-y-4">
                  {feature.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ HOW IT WORKS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Process</h2>
          <h3 className="text-4xl font-bold">3 Steps to More Patients</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Strategy Session", desc: "We audit your presence & define your high-value target audience.", icon: <Settings2 /> },
            { step: "02", title: "Launch Campaigns", desc: "Ads go live on Search & Social with conversion-optimized landing pages.", icon: <Zap /> },
            { step: "03", title: "Monthly Optimization", desc: "We tweak and scale campaigns daily to maximize your lead volume.", icon: <BarChart3 /> }
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl font-black text-slate-100 absolute -top-10 -left-4 group-hover:text-blue-50 transition-colors -z-0">
                {item.step}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6️⃣ PACKAGES & PRICING */}
      <section className="py-24 px-6 bg-slate-900 rounded-[4rem] mx-4 mb-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Choose Your Growth Plan</h3>
            <p className="text-slate-400 font-medium">Monthly management fee. Ad spend is paid directly to platforms.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {plans.map((plan, idx) => (
              <div 
                key={idx}
                className={`p-10 rounded-[3rem] border transition-all duration-300 ${
                  plan.highlight 
                  ? "bg-white text-slate-900 border-blue-500 scale-105 shadow-2xl z-10" 
                  : "bg-white/5 border-white/10 text-white hover:border-white/30"
                }`}
              >
                <div className="flex justify-between items-center mb-8">
                  <div className={`p-3 rounded-2xl ${plan.highlight ? 'bg-blue-50' : 'bg-white/10'}`}>
                    {plan.icon}
                  </div>
                  {plan.highlight && <span className="text-[10px] font-black bg-blue-600 text-white px-3 py-1 rounded-full uppercase tracking-tighter">Most Popular</span>}
                </div>
                
                <h4 className="text-2xl font-bold mb-1">{plan.name}</h4>
                <p className={`${plan.highlight ? 'text-slate-400' : 'text-slate-500'} text-[10px] uppercase font-bold tracking-widest mb-8`}>{plan.bestFor}</p>
                
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-5xl font-black">₹{plan.price}</span>
                  <span className="text-sm opacity-60">/mo</span>
                </div>

                <div className="space-y-4 mb-10 border-t border-slate-100/10 pt-8">
                  {plan.features.map((f, fi) => (
                    <div key={fi} className="flex gap-3 text-sm font-medium leading-tight">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span className={plan.highlight ? 'text-slate-600' : 'text-slate-300'}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.highlight ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-12 text-slate-500 text-xs italic">
            *Setup fee may apply. Ad spend is managed via your own platform accounts for 100% transparency.
          </p>
        </div>
      </section>
    </div>
  );
}