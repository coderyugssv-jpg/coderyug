import React from 'react';
import { motion } from "framer-motion";
import { 
  Globe, MapPin, TrendingUp, UserCheck, 
  Target, Rocket, Heart, ShieldCheck 
} from 'lucide-react';

export default function AboutStory() {
  
  const missionCards = [
    { 
      icon: <Target className="text-blue-600" />, 
      title: "Empower Clinics", 
      desc: "Providing the tools needed to scale patient volume without increasing administrative stress." 
    },
    { 
      icon: <Rocket className="text-purple-600" />, 
      title: "Automate Growth", 
      desc: "Replacing manual, outdated booking systems with seamless, 24/7 digital appointment flows." 
    },
    { 
      icon: <ShieldCheck className="text-emerald-600" />, 
      title: "Build Authority", 
      desc: "Helping doctors transition from local practitioners to recognized medical leaders in their city." 
    }
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">
      
      {/* 2️⃣ OUR STORY / MISSION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Coderyug Journey</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Our Story</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Coderyug was founded with a single goal: to help clinics reach more patients and build a professional online presence. 
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed">
              We understand the specific challenges clinic owners face—outdated websites that don't convert, manual booking errors, poor local visibility, and a lack of patient trust. We don't just provide "marketing"; we provide end-to-end digital transformations specifically engineered for the Dental and Dermatology industries.
            </p>

            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative">
              <div className="absolute top-0 left-10 w-1 h-full bg-blue-100 -z-0"></div>
              <div className="space-y-8 relative z-10">
                {[
                  { year: "The Start", text: "Identifying the massive digital gap in local clinics." },
                  { year: "The Specialization", text: "Narrowing focus to Dental & Derma for deeper expertise." },
                  { year: "The Mission", text: "Empowering 100+ clinics to dominate their local markets." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md mt-1 shrink-0"></div>
                    <div>
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-tighter">{item.year}</span>
                      <p className="text-sm font-bold text-slate-800">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <h4 className="text-2xl font-bold text-slate-900 mb-2 italic">“To empower clinics to grow their patient base, automate appointments, and build authority in their city.”</h4>
            <div className="grid sm:grid-cols-1 gap-4">
              {missionCards.map((card, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm flex items-center gap-6"
                >
                  <div className="p-4 bg-slate-50 rounded-2xl shrink-0">{card.icon}</div>
                  <div>
                    <h5 className="font-bold text-slate-900">{card.title}</h5>
                    <p className="text-xs text-slate-500">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ OUR SERVICES OVERVIEW */}
      <section className="py-24 px-6 bg-slate-900 rounded-[4rem] mx-4 mb-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Ecosystem</h2>
            <h3 className="text-4xl font-bold">What We Do</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Globe className="text-blue-400" />, 
                title: "Website & Systems", 
                text: "Mobile-friendly patient portals with smart, real-time booking integrations." 
              },
              { 
                icon: <MapPin className="text-red-400" />, 
                title: "Google & Maps", 
                text: "Local SEO & GMB optimization to ensure you own the Top 3 spots in your city." 
              },
              { 
                icon: <TrendingUp className="text-emerald-400" />, 
                title: "Paid Ads Management", 
                text: "Aggressive Google & Meta campaigns designed for direct patient inquiries." 
              },
              { 
                icon: <UserCheck className="text-purple-400" />, 
                title: "Authority Branding", 
                text: "Strategic positioning to make the lead doctor the go-to expert in the region." 
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}