import React from 'react';
import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, Clock, 
  Send, MessageSquare, CheckCircle2, 
  Linkedin, Instagram, Facebook 
} from 'lucide-react';

import { Link } from 'react-router-dom';
export default function ResponsiveContact() {
  
  const contactInfo = [
    { 
      icon: <Phone size={20} />, 
      label: "Call or WhatsApp", 
      value: "+91 77758 84621",
      action: "tel:+917775884621"
    },
    { 
      icon: <Mail size={20} />, 
      label: "Email Us", 
      value: "coderyug.ssv@gmail.com",
      action: "mailto:coderyug.ssv@gmail.com"
    },
    { 
      icon: <MapPin size={20} />, 
      label: "Office Location", 
      value: "402, B-Wing, Shiv Krupa Soc., Badlapur East, Maharashtra, India",
      action: "https://www.google.com/maps/place/shivkrupa+apartment/@19.1612752,73.2376088,16.93z/data=!4m6!3m5!1s0x3be7ed2db2397103:0x14de3f4268f41966!8m2!3d19.1642467!4d73.2394546!16s%2Fg%2F11f0kssj5z?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
    },
    { 
      icon: <Clock size={20} />, 
      label: "Business Hours", 
      value: "Mon-Sat: 10AM – 7PM",
      action: null
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1️⃣ HERO SECTION (Responsive) */}
      <section className="relative pt-32 pb-24 px-6 text-center bg-[#0F172A] text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Get in Touch With<span className="text-green-400"> Coderyug</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            We’re here to help dental and dermatology clinics grow online with websites, appointments, Google ranking, paid ads, and branding.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full transition-all">
              Book Free Consultation
            </Link>
          </div>
        </motion.div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full -z-10"></div>
      </section>

      {/* 2️⃣ & 3️⃣ INFO + FORM (Responsive Grid) */}
      <section id="form" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Contact Details (Left) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Contact Information</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((item, i) => (
                <a 
                  key={i} 
                  href={item.action}
                  className={`flex items-start gap-4 p-6 rounded-3xl border border-slate-100 transition-all ${item.action ? 'hover:bg-blue-50 hover:border-blue-100 group' : ''}`}
                >
                  <div className="p-3 bg-slate-50 rounded-xl text-blue-600 group-hover:bg-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                    <p className="font-bold text-slate-900">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 p-8 bg-slate-900 rounded-[2.5rem] text-white">
              <h4 className="text-xl font-bold mb-4">Follow Our Growth</h4>
              <div className="flex gap-4">
                {[<Linkedin />, <Instagram />, <Facebook />].map((icon, idx) => (
                  <button key={idx} className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all">
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white p-6 sm:p-10 rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-100">
              <h3 className="text-3xl font-black text-slate-900 mb-2">Send Us a Message</h3>
              <p className="text-slate-500 mb-8 font-medium italic">We typically respond within 12 business hours.</p>
              
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input type="text" placeholder="Dr. Sharma" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Clinic Name</label>
                    <input type="text" placeholder="Apex Dental" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Specialty</label>
                    <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none">
                      <option>Dental Clinic</option>
                      <option>Dermatology Clinic</option>
                      <option>Multi-Specialty</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <input type="tel" placeholder="+91 XXXX" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Requirements</label>
                  <textarea rows="4" placeholder="How can we help?" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3 py-2">
                  <input type="checkbox" className="mt-1 rounded border-slate-300 text-blue-600" />
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-relaxed">
                    I agree to receive clinic growth updates and service communication from Coderyug.
                  </p>
                </div>

                <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl">
                  Send Message <Send size={18}/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ MAP SECTION (Responsive Width) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="w-full h-[300px] sm:h-[450px] bg-slate-200 rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden border-8 border-white shadow-xl relative">
          <iframe 
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.5523167541032!2d73.23760878010893!3d19.16127515362268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ed2db2397103%3A0x14de3f4268f41966!2sshivkrupa%20apartment!5e0!3m2!1sen!2sin!4v1771802350272!5m2!1sen!2sin" 
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
          <div className="absolute bottom-6 left-6 hidden sm:block">
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100">
               <p className="text-[10px] font-black text-blue-600 uppercase mb-1">Visit Us</p>
               <p className="text-xs font-bold text-slate-900">Coderyug Agency, Badlapur, Mumbai</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}