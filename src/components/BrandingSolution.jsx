import React from 'react';
import { motion } from "framer-motion";
import { 
  AlertCircle, CheckCircle2, Trophy, 
  TrendingUp, Eye, UserCheck, 
  Camera, Newspaper, Share2, Video,
  Layout, Shield
} from 'lucide-react';

export default function BrandingSolution() {
  
  const painPoints = [
    { t: "The Trust Deficit", d: "High-value patients won't book premium treatments (Implants, Lasers) with a doctor they don't 'know' online." },
    { t: "The Ghost Clinic", d: "Your clinic has zero digital heartbeat. No recent posts, no personality, no authority." },
    { t: "The Pricing War", d: "Without a brand, you're forced to compete on price. Authorities set their own prices." },
    { t: "Competitor Dominance", d: "Average doctors are winning 'Top Rated' awards simply because they market themselves better." }
  ];

  return (
    <div className="bg-white">
      
      {/* 2️⃣ PAIN POINTS: THE COST OF INVISIBILITY */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Gap</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-900">
              Most Clinics Are <span className="text-slate-400 italic">Invisible Online</span>—Even With Expert Doctors.
            </h3>
            
            <div className="space-y-6">
              {painPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl transition-all hover:bg-slate-50 border border-transparent hover:border-slate-200">
                  <AlertCircle className="text-slate-300 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{point.t}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{point.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual: Unknown vs Premium Comparison */}
          <div className="grid grid-cols-2 gap-4 relative">
             <div className="space-y-4">
                <div className="bg-slate-100 rounded-3xl p-6 aspect-square flex flex-col justify-end grayscale opacity-50 border-2 border-dashed border-slate-300">
                   <p className="text-[10px] font-bold text-slate-400 mb-1 italic">Unknown Clinic</p>
                   <p className="text-xs font-bold text-slate-500">"Why should I choose them?"</p>
                </div>
                <div className="bg-slate-100 h-24 rounded-2xl w-full grayscale opacity-30"></div>
             </div>
             
             <div className="space-y-4 pt-12">
                <motion.div 
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  className="bg-blue-600 rounded-3xl p-6 aspect-square flex flex-col justify-end text-white shadow-2xl shadow-blue-200 relative overflow-hidden"
                >
                   <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full"><Trophy size={16}/></div>
                   <p className="text-[10px] font-bold text-blue-200 mb-1 uppercase tracking-tighter">Premium Authority</p>
                   <p className="text-xs font-bold leading-tight">The trusted choice for 500+ successful transformations.</p>
                </motion.div>
                <div className="bg-slate-900 h-40 rounded-3xl w-full p-4 overflow-hidden relative">
                    <div className="flex gap-1 mb-2">
                        {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-amber-400 rounded-full"></div>)}
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded mb-1"></div>
                    <div className="w-2/3 h-2 bg-white/10 rounded"></div>
                    <div className="absolute -right-4 bottom-2 opacity-20"><UserCheck size={80}/></div>
                </div>
             </div>
             
             {/* Center Label */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100 text-[10px] font-black uppercase tracking-widest text-blue-600">
                The Shift
             </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ OUR SOLUTION: THE AUTHORITY PROTOCOL */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Solution</h2>
            <h3 className="text-4xl font-bold text-slate-900">Dominating the Local Market</h3>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">We don't just post on social media; we architect a professional legacy that makes you the only logical choice.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
             {[
               { icon: <UserCheck className="text-blue-600"/>, title: "Doctor Branding", desc: "Positioning the lead physician as a thought leader through curated PR and speaking spots." },
               { icon: <Layout className="text-purple-600"/>, title: "Visual Identity", desc: "Premium logo, clinic interior styling, and high-end stationery that screams 'Elite'." },
               { icon: <Share2 className="text-pink-600"/>, title: "Content Engine", desc: "A constant flow of high-value education on Instagram, Facebook, and YouTube." },
               { icon: <Newspaper className="text-emerald-600"/>, title: "Media Positioning", desc: "Online articles, features, and professional bio writing for authority." },
               { icon: <Shield className="text-amber-600"/>, title: "Reputation Mgmt", desc: "Curating a 5-star digital footprint that speaks for itself before you enter the room." },
               { icon: <Video className="text-red-600"/>, title: "Video Storytelling", desc: "Cinematic treatment videos and patient journey documentaries." }
             ].map((sol, i) => (
               <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all"
               >
                 <div className="mb-6">{sol.icon}</div>
                 <h4 className="text-lg font-bold text-slate-900 mb-3">{sol.title}</h4>
                 <p className="text-slate-500 text-sm leading-relaxed">{sol.desc}</p>
               </motion.div>
             ))}
          </div>

          {/* Visual Collage Placeholder Description */}
          <div className="bg-slate-900 p-12 rounded-[4rem] text-center overflow-hidden relative">
            <div className="relative z-10">
                <h4 className="text-white text-2xl font-bold mb-6 italic">"A Digital Presence That Reflects Your Medical Excellence."</h4>
                <div className="flex flex-wrap justify-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="w-32 h-32 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500">Video Case Study</div>
                    <div className="w-32 h-32 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500">IG Post Template</div>
                    <div className="w-32 h-32 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500">PR Feature</div>
                    <div className="w-32 h-32 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500">Doctor Bio</div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}