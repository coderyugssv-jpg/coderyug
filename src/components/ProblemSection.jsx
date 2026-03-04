import React from 'react';
import { AlertCircle, XCircle, MousePointerClick, Smartphone, Clock, UserMinus } from 'lucide-react';

const ProblemSection = () => {
  const pitfalls = [
    { icon: <UserMinus className="w-5 h-5" />, text: "Outdated design that lacks professional trust" },
    { icon: <Clock className="w-5 h-5" />, text: "No 24/7 online booking (patients book at night!)" },
    { icon: <Smartphone className="w-5 h-5" />, text: "Slow, clunky experience on mobile devices" },
    { icon: <MousePointerClick className="w-5 h-5" />, text: "Confusing navigation hides your best treatments" },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-slate-50 text-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full">
            The Reality Check
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Is Your Website <span className="relative inline-block">
              Losing
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-red-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span> You Patients?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: The Symptoms */}
          <div className="space-y-4">
            {pitfalls.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm transition-transform hover:scale-[1.02]"
              >
                <div className="flex-shrink-0 p-2 bg-red-50 text-red-500 rounded-lg">
                  {item.icon}
                </div>
                <p className="text-lg font-medium text-slate-700 leading-tight pt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: The Consequence & CTA */}
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative">
            {/* Subtle decorative background element */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
            
            <AlertCircle className="w-12 h-12 mb-6 text-blue-200" />
            
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
              Today, patients check your website <span className="text-blue-200 underline decoration-2 underline-offset-4">before</span> they ever call.
            </h3>
            
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              If your digital presence doesn't radiate trust within the first 3 seconds, they don't just leave—they choose the clinic across the street.
            </p>

            <button className="w-full md:w-auto px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group">
              Audit My Clinic Website
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

        </div>

        {/* Bottom Stat (Optional) */}
        <p className="mt-12 text-center text-slate-500 italic">
          "80% of patients use the internet to make healthcare decisions." — 2026 Healthcare Trends Report
        </p>

      </div>
    </section>
  );
};

export default ProblemSection;