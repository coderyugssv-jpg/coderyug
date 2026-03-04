import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function ClinicTestimonials() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      quote: "Coderyug transformed our dental clinic online. More patients are booking directly through our site than ever before!",
      author: "Dr. Rahul Sharma",
      clinic: "Smile Dental Clinic",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      quote: "Our dermatology practice saw a 40% increase in high-value aesthetic procedures within just 3 months of launching our new brand.",
      author: "Dr. Ananya Iyer",
      clinic: "Glow Skin & Laser Center",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      quote: "The Google Maps strategy they implemented put us in the Top 3. We've stopped spending on offline flyers entirely.",
      author: "Dr. Vikram Mehta",
      clinic: "Apex Orthodontics",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200",
      rating: 5
    }
  ];

  const nextStep = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevStep = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h2>
          <h3 className="text-4xl font-black text-slate-900 tracking-tight">What Clinic Owners Say</h3>
        </div>

        <div className="relative bg-slate-50 rounded-[4rem] p-8 md:p-20 border border-slate-100 shadow-sm">
          {/* Decorative Quote Icon */}
          <div className="absolute top-10 left-10 text-blue-100">
            <Quote size={120} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* The Quote */}
                <blockquote className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug mb-10 max-w-3xl">
                  "{testimonials[index].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden mb-4">
                    <img 
                      src={testimonials[index].image} 
                      alt={testimonials[index].author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-black text-slate-900">{testimonials[index].author}</h4>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">{testimonials[index].clinic}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
            <button 
              onClick={prevStep}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-lg hover:bg-slate-900 hover:text-white transition-all pointer-events-auto"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextStep}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-lg hover:bg-slate-900 hover:text-white transition-all pointer-events-auto"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button 
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === i ? 'w-10 bg-blue-600' : 'w-2 bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}