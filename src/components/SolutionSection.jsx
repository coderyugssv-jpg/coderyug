import React from 'react';
import { CheckCircle2, Globe, Calendar, FileText, Bell, Zap, ShieldCheck } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: "Modern, Trust-Building Design",
      description: "Clean, professional layouts optimized for mobile. Includes treatment galleries and doctor profiles to build instant credibility.",
      goal: "Build trust instantly."
    },
    {
      icon: <Calendar className="w-6 h-6 text-emerald-600" />,
      title: "Online Appointment System",
      description: "A seamless booking flow with WhatsApp integration, automated confirmations, and direct calendar syncing.",
      goal: "Make booking effortless."
    },
    {
      icon: <FileText className="w-6 h-6 text-emerald-600" />,
      title: "High-Converting Pages",
      description: "Dedicated SEO-optimized pages for every major treatment. We answer FAQs and handle objections before they call.",
      goal: "Turn visitors into inquiries."
    },
    {
      icon: <Bell className="w-6 h-6 text-emerald-600" />,
      title: "Automated Patient Follow-Up",
      description: "Instant SMS and email reminders to reduce no-shows and a lead management dashboard for your staff.",
      goal: "Reduce missed appointments."
    }
  ];

  const deliverables = [
    "Custom Clinic Website", "Appointment Booking", "Treatment Landing Pages", 
    "Google-Ready Structure", "Speed Optimization", "Basic SEO Setup", 
    "Mobile Optimization", "Admin Panel Access"
  ];

  return (
    <section className="py-24 px-6 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h3 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3">02. Our Solution</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">We don't just design websites.</h2>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            We build a <span className="text-slate-900 font-semibold underline decoration-emerald-400">complete online appointment system</span> designed specifically for modern clinics.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {solutions.map((item, index) => (
            <div key={index} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold uppercase tracking-wide">
                <Zap className="w-3 h-3" /> Goal: {item.goal}
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables / "What You Get" */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="text-emerald-400 w-8 h-8" />
              <h3 className="text-3xl font-bold">What You Get</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <CheckCircle2 className="text-emerald-400 w-5 h-5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-slate-300 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-slate-400 text-lg">Clear deliverables. No hidden fees. Full ownership.</p>
              <button className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full transition-all shadow-lg shadow-emerald-900/20">
                Get a Custom Quote
              </button>
            </div>
          </div>
          
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;