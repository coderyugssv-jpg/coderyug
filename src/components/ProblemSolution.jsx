import React from "react";
import { motion } from "framer-motion";
import { 
  BellOff, 
  CalendarX, 
  PhoneCall, 
  Clock, 
  FileWarning, 
  Globe, 
  MessageSquare, 
  RefreshCw, 
  UserCheck, 
  BarChart3 
} from "lucide-react";

const clinicTransformations = [
  {
    id: "booking",
    problemIcon: <BellOff className="w-5 h-5 text-red-500" />,
    problem: "Patients simply forget their appointments or the date.",
    solutionTitle: "Online Appointment Booking",
    solutionDesc: "Give your patients a 24/7 digital doorway to your clinic.",
    benefit: "Reduces empty slots and manual entry errors.",
    solutionIcon: <Globe className="w-6 h-6 text-blue-600" />
  },
  {
    id: "cancellations",
    problemIcon: <CalendarX className="w-5 h-5 text-red-500" />,
    problem: "Last-minute cancellations leave your chair empty and revenue lost.",
    solutionTitle: "WhatsApp Reminders",
    solutionDesc: "Automated, friendly nudges sent directly to their favorite app.",
    benefit: "Cut no-shows by up to 40% without lifting a finger.",
    solutionIcon: <MessageSquare className="w-6 h-6 text-green-500" />
  },
  {
    id: "reception",
    problemIcon: <PhoneCall className="w-5 h-5 text-red-500" />,
    problem: "Receptionists are too busy with basic calls to help patients on-site.",
    solutionTitle: "Easy Cancel & Reschedule",
    solutionDesc: "Self-service links for patients to manage their own time.",
    benefit: "Freest receptionist for high-value patient care.",
    solutionIcon: <RefreshCw className="w-6 h-6 text-purple-600" />
  },
  {
    id: "emergencies",
    problemIcon: <Clock className="w-5 h-5 text-red-500" />,
    problem: "Emergencies disturb your schedule, leading to long waiting room delays.",
    solutionTitle: "Doctor-Controlled Scheduling",
    solutionDesc: "Instantly block slots or shift timing from your phone.",
    benefit: "Maintain a calm, orderly clinic even during chaos.",
    solutionIcon: <UserCheck className="w-6 h-6 text-teal-600" />
  },
  {
    id: "records",
    problemIcon: <FileWarning className="w-5 h-5 text-red-500" />,
    problem: "No clear records of who visited, who canceled, and clinic growth.",
    solutionTitle: "Monthly Clinic Reports",
    solutionDesc: "Clear, visual data on your appointments and patient trends.",
    benefit: "Make data-backed decisions to grow your practice.",
    solutionIcon: <BarChart3 className="w-6 h-6 text-indigo-600" />
  }
];

const ProblemSolution = () => {
  return (
    <section 
      className="bg-[#F8FAFC] py-20 px-4 md:py-32 md:px-6 font-['Plus_Jakarta_Sans',sans-serif]" 
      aria-labelledby="clinic-solution-title"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-20 text-center md:text-left">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#0047AB] font-bold tracking-[0.25em] text-[11px] uppercase block mb-4"
            >
              The Modern Clinic Standard
            </motion.span>
            <h2 
              id="clinic-solution-title"
              className="text-[#1E293B] text-3xl md:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Stop Managing Chaos. <br />
              <span className="text-[#0047AB]/60 font-medium text-2xl md:text-4xl">Start Healing Patients.</span>
            </h2>
            <p className="mt-6 text-[#1E293B]/70 text-lg leading-relaxed max-w-2xl">
              Running a clinic shouldn't feel like a 24/7 administrative battle. 
              We solve the daily headaches that keep doctors stressed and patients waiting.
            </p>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid gap-8">
          {clinicTransformations.map((item) => (
            <article 
              key={item.id}
              className="group grid md:grid-cols-12 bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl"
            >
              {/* Problem Side (Emotional Pain) */}
              <div className="md:col-span-5 p-8 lg:p-10 bg-slate-50/80 border-b md:border-b-0 md:border-r border-slate-100 flex items-center gap-6">
                <div className="flex-shrink-0 p-3 bg-red-50 rounded-xl">
                  {item.problemIcon}
                </div>
                <div>
                  <p className="text-red-500 font-bold text-[10px] uppercase tracking-widest mb-1">Daily Headache</p>
                  <h3 className="text-lg font-semibold text-slate-700 italic leading-snug">
                    "{item.problem}"
                  </h3>
                </div>
              </div>

              {/* Solution Side (Coderyug Clarity) */}
              <div className="md:col-span-7 p-8 lg:p-10 flex flex-col justify-center relative bg-white">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-4 bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    {item.solutionIcon}
                  </div>
                  <div>
                    <span className="text-[#0047AB] font-bold text-[10px] uppercase tracking-widest mb-2 block">
                      The Coderyug Way
                    </span>
                    <h3 className="text-xl md:text-2xl text-slate-900 font-bold mb-2 tracking-tight">
                      {item.solutionTitle}
                    </h3>
                    <p className="text-slate-600 text-base mb-3 italic">
                      {item.solutionDesc}
                    </p>
                    <div className="flex items-center gap-2 text-[#25D366] font-semibold text-sm bg-green-50 w-fit px-3 py-1 rounded-full border border-green-100">
                      <UserCheck className="w-4 h-4" />
                      {item.benefit}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;