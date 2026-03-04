import React from 'react';
import { 
  CheckCircle2, Globe, Calendar, FileText, Bell, Zap, 
  ShieldCheck, Smartphone, MousePointerClick, Clock, 
  UserMinus, Activity, ChevronRight, MessageCircle 
} from 'lucide-react';

const ClinicLandingPage = () => {
  
  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* 1. HERO SECTION */}
      <header className="relative pt-20 pb-28 px-6 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
              <Activity size={16} /> FOR DENTAL & DERMATOLOGY CLINICS
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Professional Clinic Website with <span className="text-blue-600">Online Booking</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl">
              We build modern, mobile-friendly websites designed to turn visitors into booked appointments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left max-w-lg mx-auto lg:mx-0">
              {['High-Converting Design', 'Online Booking Integration', 'Treatment Landing Pages', 'Patient Follow-Up Automation'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-500 w-5 h-5" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                Book Free Clinic Growth Call <ChevronRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                See How It Works
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full aspect-video bg-white rounded-2xl shadow-2xl border border-slate-100 flex items-center justify-center p-4 relative z-10">
               {/* Placeholder for a browser mockup or clinic image */}
               <div className="w-full h-full bg-slate-50 rounded-lg border-dashed border-2 border-slate-200 flex items-center justify-center text-slate-400 italic">
                  [Clinic Website Mockup Image]
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </header>

      {/* 2. THE PROBLEM SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Is Your Current Website <span className="text-red-500 underline decoration-wavy underline-offset-8">Costing</span> You Patients?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            {[
              { icon: <UserMinus />, text: "Outdated design loses trust instantly" },
              { icon: <Clock />, text: "No easy way to book appointments" },
              { icon: <Smartphone />, text: "Painfully slow on mobile devices" },
              { icon: <MousePointerClick />, text: "Confusing treatment descriptions" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-red-50/50 border border-red-100">
                <div className="text-red-500">{item.icon}</div>
                <span className="font-medium text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-xl text-slate-600 italic leading-relaxed">
            "Today, patients judge your clinic online before calling. If your website looks average, they choose another clinic."
          </p>
        </div>
      </section>

      {/* 3 & 4. SOLUTION & WHAT YOU GET */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 my-8 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-emerald-400">Our Website & Booking System</h2>
            <p className="text-xl text-slate-400">We build a complete online ecosystem, not just a homepage.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { title: "Trust Design", desc: "Mobile-first, doctor profiles, & galleries.", goal: "Build Trust" },
              { title: "Booking System", desc: "WhatsApp & Calendar integration.", goal: "Easy Booking" },
              { title: "Treatment Pages", desc: "SEO optimized for every service.", goal: "More Leads" },
              { title: "Auto Follow-Up", desc: "SMS & Email reminder systems.", goal: "Less No-Shows" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap size={20} />
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Goal: {item.goal}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">What You Get (Full Deliverables)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Custom Design', 'Booking System', 'Treatment Pages', 'Google Optimized', 'Speed Setup', 'SEO Ready', 'Mobile Optimized', 'Admin Panel'].map((check) => (
                <div key={check} className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  <span className="text-sm">{check}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 & 6. WHO IT'S FOR & RESULTS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Who This Is For</h3>
            <div className="space-y-4">
              {['New clinics launching', 'Outdated websites', 'No online inquiries', 'Doctors seeking authority'].map((text) => (
                <div key={text} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 font-medium text-blue-800">
                  <CheckCircle2 size={20} /> {text}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-3xl font-bold mb-6 italic text-slate-800">Expected Results</h3>
            <ul className="space-y-6">
              {[
                { label: "Trust", value: "Higher website credibility" },
                { label: "Revenue", value: "More appointment bookings" },
                { label: "UX", value: "Better patient experience" },
              ].map((res) => (
                <li key={res.label} className="flex flex-col">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">{res.label}</span>
                  <span className="text-xl font-semibold text-slate-700">{res.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How long does it take?", a: "Usually 2–4 weeks from start to launch." },
              { q: "Can patients book directly?", a: "Yes, with a real-time confirmation system." },
              { q: "Is it mobile optimized?", a: "100%. Most patients book from their phones." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all cursor-pointer">
                <summary className="font-bold text-lg list-none flex justify-between items-center">
                  {faq.q} <span className="text-blue-500 group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-24 px-6 text-center bg-blue-600 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Upgrade Your Clinic?</h2>
          <p className="text-xl text-blue-100 mb-10">Let’s build a professional online presence that converts visitors into patients.</p>
          <button className="px-10 py-5 bg-white text-blue-600 font-extrabold text-xl rounded-2xl shadow-2xl hover:bg-blue-50 transition-all scale-100 hover:scale-105">
            Book Free Clinic Growth Call
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Subtle grid pattern or circles */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
      </section>
      
    </div>
  );
};

export default ClinicLandingPage;