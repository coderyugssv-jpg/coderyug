
import React, { useState } from 'react';
import { 
  CheckCircle2, MapPin, Megaphone, Award, 
  Smartphone, ChevronDown, Activity, 
  UserCheck, MousePointer2, Stethoscope, 
  ArrowRight, ShieldCheck 
} from 'lucide-react';

const DetailedServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const detailedServices = [
    {
      id: 0,
      title: "The Digital Clinic",
      subtitle: "Website & Patient Conversion",
      icon: <Smartphone className="text-emerald-600" />,
      description: "In the medical world, your website is your digital front desk. If it's cluttered, patients leave. We build high-speed, 'Digital Clinics' that prioritize booking.",
      features: [
        { head: "Mobile-First Booking", desc: "80% of patients book via phone. We optimize for 1-tap calling and WhatsApp." },
        { head: "Patient Education Hub", desc: "Integrated blogs to answer common patient FAQs before they even arrive." },
        { head: "HIPAA-Ready Security", desc: "SSL encryption and secure forms to protect patient confidentiality." }
      ],
      doctorBenefit: "Reduces front-desk load by 30% through automated inquiries."
    },
    {
      id: 1,
      title: "Local Dominance",
      subtitle: "Google Maps & Local SEO",
      icon: <MapPin className="text-blue-600" />,
      description: "When someone searches 'Best [Specialty] near me', Google uses a specific algorithm. We ensure your clinic is the #1 recommendation.",
      features: [
        { head: "GMB Optimization", desc: "We manage your Google Business Profile, photos, and live updates." },
        { head: "Review Automation", desc: "A system to ethically collect 5-star reviews from satisfied patients." },
        { head: "Local Citation", desc: "Ensuring your clinic address is consistent across all medical directories." }
      ],
      doctorBenefit: "Becomes the 'Default Choice' in a 5-10km radius of your clinic."
    },
    {
      id: 2,
      title: "Patient Acquisition",
      subtitle: "High-Intent Google & Meta Ads",
      icon: <Megaphone className="text-purple-600" />,
      description: "Stop waiting for 'word of mouth'. Use precision targeting to fill specific treatments like Implants, Lasik, or IVF.",
      features: [
        { head: "Treatment-Specific Ads", desc: "Ads that show up exactly when a patient searches for a specific procedure." },
        { head: "Retargeting Funnels", desc: "Reminding patients who visited your site but didn't book yet." },
        { head: "ROI Dashboard", desc: "See exactly how many calls came from which ad rupee spent." }
      ],
      doctorBenefit: "Fill empty appointment slots within 48 hours of campaign launch."
    },
    {
      id: 3,
      title: "Authority Branding",
      subtitle: "Personal Brand & Trust Building",
      icon: <Award className="text-amber-600" />,
      description: "Patients don't buy healthcare; they buy trust. We position you as the 'Expert Authority' in your city.",
      features: [
        { head: "Video Content Strategy", desc: "We script and edit educational Reels/Shorts that showcase your expertise." },
        { head: "PR & Media Presence", desc: "Positioning your articles in local digital news and health portals." },
        { head: "Case Study Showcases", desc: "Ethical 'Before & After' galleries that demonstrate clinical success." }
      ],
      doctorBenefit: "Command higher consultation fees and increase case acceptance rates."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* --- Header Section --- */}
      <header className="bg-white border-b border-slate-200 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our <span className="text-blue-600">Clinical Growth</span> Services
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between your clinical expertise and the patients who need it most. 
            Standardized, transparent, and results-driven.
          </p>
        </div>
      </header>

      {/* --- Detailed Service Selector --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-4 space-y-4">
            {detailedServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center gap-4 border-2 ${
                  activeTab === service.id 
                  ? "bg-white border-blue-600 shadow-xl shadow-blue-100 translate-x-2" 
                  : "bg-transparent border-transparent hover:bg-slate-100 text-slate-500"
                }`}
              >
                <div className={`p-3 rounded-lg ${activeTab === service.id ? "bg-blue-50" : "bg-slate-200"}`}>
                  {React.cloneElement(service.icon, { size: 24 })}
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">{service.title}</h3>
                  <p className="text-sm opacity-80">{service.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Content Display */}
          <div className="lg:col-span-8 bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
               <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest">
                 Core Pillar 0{detailedServices[activeTab].id + 1}
               </span>
            </div>
            <h2 className="text-4xl font-bold mb-4">{detailedServices[activeTab].title}</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed italic">
              "{detailedServices[activeTab].description}"
            </p>

            <div className="grid md:grid-cols-1 gap-6 mb-10">
              {detailedServices[activeTab].features.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="mt-1"><CheckCircle2 className="text-emerald-500" size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.head}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-blue-600 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-4">
               <div>
                  <p className="text-blue-100 text-sm font-bold uppercase tracking-tighter">Clinical Outcome</p>
                  <p className="text-xl font-semibold">{detailedServices[activeTab].doctorBenefit}</p>
               </div>
               <Activity size={40} className="opacity-20 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* --- The Patient Journey Section --- */}
      <section className="py-20 px-6 bg-slate-900 text-white rounded-[4rem] mx-4 mb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">How it works</h2>
          <h3 className="text-4xl font-bold mb-16">The Journey from Search to Surgery</h3>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { step: "Awareness", icon: <MousePointer2 />, desc: "Patient searches for their symptom on Google." },
              { step: "Trust", icon: <UserCheck />, desc: "Patient sees your 5-star reviews and expert videos." },
              { step: "Action", icon: <Smartphone />, desc: "Patient clicks your WhatsApp button to book." },
              { step: "Consultation", icon: <Stethoscope />, desc: "Patient arrives at your OPD, already trusting you." }
            ].map((j, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 text-emerald-400">
                  {j.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{j.step}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{j.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-8 left-[70%] w-full border-t border-dashed border-slate-700"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-20 text-center px-6">
        <div className="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100">
          <ShieldCheck size={48} className="mx-auto text-blue-600 mb-6" />
          <h2 className="text-3xl font-bold mb-4">Protect Your Practice's Future</h2>
          <p className="text-slate-600 mb-8">
            Don't let third-party aggregators control your patient flow. Own your brand. Own your data. Own your growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
              Book A Clinical Audit <ArrowRight size={20} />
            </button>
            <button className="bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedServices;