import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings2, CalendarCheck, MessageSquareText, ShieldCheck, PieChart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Clinic Setup",
    desc: "We get you live in 1–2 days. Zero tech stress for your staff.",
    icon: <Settings2 className="w-6 h-6" />,
    color: "bg-blue-600"
  },
  {
    title: "Patient Booking",
    desc: "Patients book via your custom WhatsApp link in seconds.",
    icon: <CalendarCheck className="w-6 h-6" />,
    color: "bg-indigo-600"
  },
  {
    title: "WhatsApp Nudges",
    desc: "Automatic reminders sent. No more manual calling.",
    icon: <MessageSquareText className="w-6 h-6" />,
    color: "bg-emerald-600"
  },
  {
    title: "Doctor Control",
    desc: "Manage emergencies and block slots from your mobile app.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "bg-purple-600"
  },
  {
    title: "Clinic Insights",
    desc: "Clear monthly reports to see your practice growing.",
    icon: <PieChart className="w-6 h-6" />,
    color: "bg-orange-600"
  }
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1,
          }
        }
      );

      stepRefs.current.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden px-4 bg-slate-50">
      
      {/* Soft Moving Background */}
      <div className="absolute inset-0 -z-10 animated-bg opacity-20"></div>

      <div className="max-w-5xl mx-auto relative">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Simple 5-Step Process
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto">
            We’ve removed the complexity so you can focus on your patients.
          </p>
        </div>

        <div className="relative">

          {/* Static Line */}
          <div className="absolute left-7 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-slate-200 rounded-full" />

          {/* Animated Line */}
          <div
            ref={lineRef}
            className="absolute left-7 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-blue-600 origin-top rounded-full z-10 shadow-[0_0_20px_rgba(37,99,235,0.6)]"
          />

          <div className="space-y-16 md:space-y-28">
            {steps.map((step, idx) => (
              <div
                key={idx}
                ref={(el) => (stepRefs.current[idx] = el)}
                className={`relative flex items-start md:items-center gap-8 md:gap-0 ${
                  idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Icon */}
                <div className="flex justify-center z-20 md:w-1/2 relative">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-xl border-4 border-white`}>
                    {step.icon}
                  </div>
                  <span className="hidden md:flex absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] font-bold w-6 h-6 rounded-full items-center justify-center border-2 border-white">
                    {idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div className={`pt-2 md:pt-0 ${idx % 2 !== 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <span className="md:hidden block text-blue-600 font-bold text-xs uppercase tracking-widest mb-1">
                      Step {idx + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-sm ml-0 mr-auto md:mx-0">
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Background CSS */}
      <style>
        {`
          .animated-bg {
            background: linear-gradient(-45deg, #3B82F6, #6366F1, #2563EB, #1E3A8A);
            background-size: 400% 400%;
            animation: gradientMove 20s ease infinite;
          }

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default HowItWorks;
