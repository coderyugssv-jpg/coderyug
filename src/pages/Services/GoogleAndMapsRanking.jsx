import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  XCircle, CheckCircle2, MapPin, Search, 
  Star, RefreshCw, BarChart3, ArrowRight,
  TrendingUp, Users, Smartphone, MousePointerClick,
  PhoneCall, MessageSquare, ShieldCheck
} from 'lucide-react';

// Assuming this component exists in your project
// If it doesn't, you can comment it out
import FinalCTASection from "../../components/FinalCTASection";
import DetailedFeatures from '../../components/DetailedFeatures';
import ProcessAndPricing from '../../components/ProcessAndPricing';
import BenefitsAndFAQ from '../../components/BenefitsAndFAQ';

export default function GoogleAndMapsRanking() {
  
  // Animation variants for consistency
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-white text-[#0F172A] overflow-x-hidden font-sans">
      
      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 md:px-20 text-center bg-[#0F172A] text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Get Your Clinic Found on Google & Google Maps <span className="text-green-400">Attract More Patients Locally</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            We help dental and dermatology clinics rank higher on Google Search & Maps, so local patients can find and book your services instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-black font-bold px-10 py-4 rounded-full transition-all shadow-xl shadow-green-500/20">
              Book Free Consultation
            </Link>
            <button className="border border-slate-500 px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all font-semibold">
              Get Free Clinic Audit
            </button>
          </div>
        </motion.div>
        
        {/* Background Decorative Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full -z-0"></div>
      </section>

      {/* 2️⃣ THE DIAGNOSIS: PAIN POINTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">The Diagnosis</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why Most Clinics <br />
              <span className="text-red-600">Lose Patients</span> Online
            </h3>
            
            <div className="space-y-6">
              {[
                { title: "Invisible in Local Search", desc: "Patients find 3-4 other clinics before they ever see yours." },
                { title: "The 'Trust' Gap", desc: "Low or old reviews drive patients to competitors with better 'Social Proof'." },
                { title: "Algorithm Neglect", desc: "No regular updates tell Google your clinic is 'inactive', dropping your rank." },
                { title: "Manual Review Burnout", desc: "Staff forgets to ask for reviews, leaving your reputation to chance." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ x: 10 }}
                  className="flex gap-4 p-5 bg-white rounded-2xl border-l-4 border-red-500 shadow-sm border border-slate-100 transition-all"
                >
                  <XCircle className="text-red-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual: The Comparison Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <span className="font-bold text-slate-400 text-sm">Poor Listing</span>
                <span className="font-bold text-emerald-600 text-sm">Our Optimized Listing</span>
              </div>
              
              <div className="space-y-6">
                <div className="opacity-30 grayscale blur-[1px]">
                  <div className="h-4 w-32 bg-slate-200 rounded mb-2"></div>
                  <div className="flex gap-1 mb-2"><Star size={12} className="text-slate-300"/><Star size={12} className="text-slate-300"/></div>
                  <div className="h-3 w-48 bg-slate-100 rounded"></div>
                </div>

                <div className="flex items-center justify-center py-4">
                  <div className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Growth Transformation</div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 shadow-inner">
                  <div className="flex justify-between items-start mb-3">
                    <div className="h-6 w-48 bg-emerald-600 rounded-md"></div>
                    <div className="bg-white px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1 shadow-sm">
                      <Star size={14} className="fill-amber-400 text-amber-400"/>
                      <span className="text-xs font-bold text-slate-700">4.9 (250+)</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-3 w-16 bg-emerald-200 rounded"></div>
                    <div className="h-3 w-16 bg-emerald-200 rounded"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-white rounded-xl border border-emerald-100"></div>
                    <div className="h-20 bg-white rounded-xl border border-emerald-100"></div>
                    <div className="h-20 bg-white rounded-xl border border-emerald-100"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ THE PROTOCOL: OUR SOLUTION */}
      <section className="py-24 px-6 bg-[#0F172A] text-white rounded-[4rem] mx-4 mb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-green-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Protocol</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Google Maps Dominance System</h3>
            <p className="text-slate-400 max-w-2xl mx-auto italic text-lg">
              "We take the complexity of Google’s algorithm and turn it into a steady stream of patients walking through your door."
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {[
              { icon: <Search size={32}/>, title: "Local SEO Mastery", desc: "Ranking you for 'Best Doctor near me' and specific treatments." },
              { icon: <RefreshCw size={32}/>, title: "Daily Profile Activity", desc: "Regular updates & posts that keep Google’s algorithm favoring you." },
              { icon: <MessageSquare size={32}/>, title: "Automated Reviews", desc: "A system to capture 5-star feedback from patients before they leave." },
              { icon: <MapPin size={32}/>, title: "Map Visibility", desc: "Ensuring your clinic is the most prominent landmark on Google Maps." },
              { icon: <BarChart3 size={32}/>, title: "Monthly Audits", desc: "Clear reports on calls, directions, and website clicks generated." },
              { icon: <TrendingUp size={32}/>, title: "Competitor Displacement", desc: "Strategic positioning to take the market share from nearby clinics." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all group"
              >
                <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* VISUAL FLOW: THE PATIENT JOURNEY */}
          <motion.div 
            {...fadeInUp}
            className="bg-white/5 rounded-[3rem] p-10 md:p-16 border border-white/10 mt-16 shadow-2xl"
          >
            <h4 className="text-center text-2xl font-bold mb-16 text-white uppercase tracking-widest">The Patient Acquisition Loop</h4>
            
            <div className="grid md:grid-cols-4 gap-12 items-start text-center relative">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/30 shadow-lg shadow-blue-500/10">
                  <Search className="text-blue-400" size={32} />
                </div>
                <h5 className="font-bold text-white text-lg mb-2">1. Discovery</h5>
                <p className="text-slate-400 text-sm px-4">Patient searches for a specialist in pain or need.</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/30 shadow-lg shadow-green-500/10">
                  <MapPin className="text-green-400" size={32} />
                </div>
                <h5 className="font-bold text-white text-lg mb-2">2. Visibility</h5>
                <p className="text-slate-400 text-sm px-4">Your clinic appears at the top with stellar reviews.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/30 shadow-lg shadow-purple-500/10">
                  <PhoneCall className="text-purple-400" size={32} />
                </div>
                <h5 className="font-bold text-white text-lg mb-2">3. Conversion</h5>
                <p className="text-slate-400 text-sm px-4">Patient clicks 'Call' or 'WhatsApp' to book instantly.</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6 border border-amber-500/30 shadow-lg shadow-amber-500/10">
                  <TrendingUp className="text-amber-400" size={32} />
                </div>
                <h5 className="font-bold text-white text-lg mb-2">4. Growth</h5>
                <p className="text-slate-400 text-sm px-4">New high-value patient added to your OPD.</p>
              </div>

              {/* Desktop Connectors (Dashed Lines) */}
              <div className="hidden lg:block absolute left-[20%] top-10 w-[15%] border-t-2 border-dashed border-slate-700"></div>
              <div className="hidden lg:block absolute left-[45%] top-10 w-[15%] border-t-2 border-dashed border-slate-700"></div>
              <div className="hidden lg:block absolute left-[70%] top-10 w-[15%] border-t-2 border-dashed border-slate-700"></div>
            </div>
            
            <div className="mt-20 text-center">
              <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-black font-black py-5 px-12 rounded-2xl inline-flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-green-500/30 uppercase tracking-tighter">
                Claim Your Google Maps Dominance <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Ambient Background Glow */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full"></div>
      </section>


      <DetailedFeatures />
      <ProcessAndPricing />
      <BenefitsAndFAQ />

      {/* FINAL CTA SECTION */}
      {/* Ensure this component exists in your folder structure */}
      <FinalCTASection />
    </div>
  );
}