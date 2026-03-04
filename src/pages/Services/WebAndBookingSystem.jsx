import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  MousePointerClick, 
  Smartphone, 
  Calendar, 
  Users, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";

// Assuming these are your existing components
import ProblemSection from "../../components/ProblemSection"; 
import SolutionSection from "../../components/SolutionSection";
import FinalCTASection from "../../components/FinalCTASection";
export default function WebAndBookingSystem() {
  
  const packages = [
    {
      name: "Starter",
      price: "₹22,000",
      type: "one-time",
      features: ["5–6 Pages Website", "Basic Booking Form", "WhatsApp Integration", "Google Maps", "1 Month Support"],
      highlight: false
    },
    {
      name: "Professional",
      price: "₹35,000",
      type: "one-time",
      features: ["Full Custom Website", "Smart Booking Calendar", "Admin Dashboard", "Lead Tracking", "3 Months Support"],
      highlight: true
    },
    {
      name: "Growth System",
      price: "₹15,000",
      type: "per month",
      features: ["System Maintenance", "Monthly Updates", "Security & Hosting", "Performance Tracking", "Technical Support"],
      highlight: false
    }
  ];

  return (
    <div className="bg-white text-[#0F172A] overflow-x-hidden">
      
      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 md:px-20 text-center bg-[#0F172A] text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Turn Your Clinic Website Into a <span className="text-green-400">24/7 Patient Booking Machine</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Professional websites and smart appointment systems for Dental & Dermatology clinics — 
            designed to increase patients and reduce workload.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full transition-all">
              Book Free Consultation
            </Link>
            <button className="border border-slate-500 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all">
              View Demo Website
            </button>
          </div>
        </motion.div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full -z-10"></div>
      </section>

      {/* 2️⃣ & 3️⃣ PROBLEM & SOLUTION (Your existing components) */}
      <ProblemSection />
      <SolutionSection />

      {/* 4️⃣ DETAILED FEATURES SECTION */}
      <section className="py-24 bg-slate-50 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What You Get</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Website Features */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Smartphone className="text-green-500" /> Website Features
              </h3>
              <ul className="space-y-4">
                {["Custom pages for treatments (Implants, Laser, etc.)", "Doctor profiles & clinic gallery", "Testimonials & before/after results", "Fast, secure, SEO-ready"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking Features */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="text-green-500" /> Booking System
              </h3>
              <ul className="space-y-4">
                {["Real-time availability calendar", "Automated WhatsApp/SMS confirmations", "Admin dashboard for staff", "Export patient lists to Excel/CRM"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ HOW IT WORKS */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-16">3 Steps to Get Started</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative">
          {[
            { step: "01", title: "Book a Free Consultation", desc: "Fill a short form and let us audit your current system." },
            { step: "02", title: "Accept a Service Package", desc: "Choose Starter, Growth, or Authority packages." },
            { step: "03", title: "Launch & Get Patients", desc: "Your system goes live. Patients book instantly." }
          ].map((item, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                {item.step}
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6️⃣ PACKAGES & PRICING */}
      <section className="py-24 bg-[#0F172A] text-white px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-slate-400">Scale your clinic with the right digital infrastructure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`p-8 rounded-3xl border ${pkg.highlight ? 'border-green-500 bg-green-500/5' : 'border-slate-700 bg-slate-800/50'} relative`}>
                {pkg.highlight && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-slate-400 ml-2">/{pkg.type}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle className="text-green-500 w-4 h-4" /> {feat}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`block text-center py-3 rounded-xl font-bold transition-all ${pkg.highlight ? 'bg-green-500 text-black' : 'bg-slate-700 hover:bg-slate-600'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* ================= RESULTS / ROI SECTION ================= */}
<section className="py-24 px-6 md:px-20 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-12">
      
      {/* Left: Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Results You Can <span className="text-green-600 underline decoration-2 underline-offset-4">Measure</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          We don't just deliver code; we deliver business growth. When you partner with us, your clinic will see tangible shifts in how it operates and earns.
        </p>

        <div className="space-y-6">
          {[
            { 
              title: "Increased Booking Volume", 
              desc: "By removing friction, clinics typically see a 25% increase in total monthly appointments." 
            },
            { 
              title: "Zero 'After-Hours' Lead Loss", 
              desc: "Your machine works while you sleep, capturing 100% of late-night patient inquiries." 
            },
            { 
              title: "Dramatic Time Savings", 
              desc: "Automated reminders save your front-desk staff 10+ hours of manual calling every week." 
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="mt-1 bg-green-100 p-1 rounded-full h-fit">
                <CheckCircle className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: The "Result" Card */}
      <div className="md:w-1/2 w-full">
        <div className="bg-[#0F172A] p-8 md:p-12 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 blur-3xl rounded-full"></div>
          
          <h3 className="text-2xl font-bold mb-8 italic">"The Clinic Transformation"</h3>
          
          <div className="space-y-8 relative z-10">
            <div>
              <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">Before Our System</p>
              <div className="flex items-center gap-3">
                <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="bg-red-500 h-full w-[30%]"></div>
                </div>
                <span className="text-red-400 font-mono">Chaos</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">Missed calls, manual logs, empty chairs, and patient frustration.</p>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="text-green-500 rotate-90 md:rotate-0" />
            </div>

            <div>
              <p className="text-green-400 text-sm uppercase tracking-wider mb-2">After Our Machine</p>
              <div className="flex items-center gap-3">
                <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[100%]"></div>
                </div>
                <span className="text-green-500 font-mono">Profit</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">Automated bookings, zero no-shows, and a professional brand that scales.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<FinalCTASection />

    </div>
  );
}