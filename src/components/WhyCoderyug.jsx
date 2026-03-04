import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  MessageCircle, 
  Zap, 
  Store, 
  UserSearch, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const reasons = [
  {
    title: "Real Clinic Flow",
    desc: "Big software forces you into rigid slots. We adapt to the natural 'controlled chaos' of a real clinic.",
    icon: <HeartPulse className="w-6 h-6 text-rose-500" />,
    bgColor: "bg-rose-50",
    className: "md:col-span-2", // Wider card on PC
  },
  {
    title: "WhatsApp-Native",
    desc: "Zero apps for patients to download. It works where they already are.",
    icon: <MessageCircle className="w-6 h-6 text-green-600" />,
    bgColor: "bg-green-50",
    className: "md:col-span-1",
  },
  {
    title: "Zero Training",
    desc: "If you can use WhatsApp, you're ready. Go live in 20 minutes.",
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    bgColor: "bg-amber-50",
    className: "md:col-span-1",
  },
  {
    title: "Human Support",
    desc: "No 'Support Tickets'. You get a direct line to a real person who knows your name.",
    icon: <UserSearch className="w-6 h-6 text-purple-600" />,
    bgColor: "bg-purple-50",
    className: "md:col-span-2", // Wider card on PC
  },
  {
    title: "For Small Clinics",
    desc: "Built specifically for independent practitioners, not massive hospital chains.",
    icon: <Store className="w-6 h-6 text-blue-600" />,
    bgColor: "bg-blue-50",
    className: "md:col-span-3", // Full width card for emphasis
  }
];

const WhyCoderyug = () => {
  return (
    <section className="py-20 px-4 md:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Center aligned for better mobile readability */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            The Differentiation
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Why Doctors Choose <span className="text-blue-600">Coderyug</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto italic">
            "Finally, software that doesn't feel like a second job."
          </p>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${item.className} group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 overflow-hidden`}
            >
              {/* Decorative background glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 ${item.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 h-full flex flex-col">
                <div className={`${item.bgColor} w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  {item.title}
                  <CheckCircle2 className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
                  {item.desc}
                </p>

                {/* Subtle "Learn More" link that appears on hover */}
                <div className="mt-auto pt-4 flex items-center gap-2 text-blue-600 font-bold text-xs opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  SEE HOW IT WORKS <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile-only CTA */}
        <div className="mt-12 text-center md:hidden">
          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-transform">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyCoderyug;