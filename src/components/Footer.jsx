import React from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Instagram, MessageSquare, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      subOptions: [
        { name: "Website & Booking Setup", path: "/services/website-and-booking-system" },
        { name: "Google & Maps Ranking", path: "/services/google-and-map-ranking" },
        { name: "Ads That Bring Patients", path: "/services/paid-ads" },
        { name: "Doctor Branding & Authority", path: "/services/doctor-branding-authority" },
      ],
    },
    { name: "Results", path: "/our-work/case-studies" },
    { name: "About Us", path: "/why-coderyug" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#1E293B] font-jakarta text-white pt-24">

      {/* Glow Effects */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0047ab]/40 to-transparent" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#0047ab]/10 blur-[140px]" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#25D366]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* MAIN GRID */}
        <div className="grid gap-16 lg:grid-cols-12 mb-20">

          {/* BRAND */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-8 hover:scale-105 transition-transform">
              <img src="./src/assets/logo.png" alt="Coderyug Logo" className="h-14 w-auto" />
            </Link>

            <p className="mb-8 max-w-sm text-lg font-medium text-slate-400 leading-relaxed">
              Powering the next generation of clinics with{" "}
              <span className="text-white">clinical-grade automation</span>. Built for modern Indian practitioners.
            </p>

            <div className="flex gap-4">
              {[Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-[#0047ab] hover:border-[#0047ab] transition"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* MENUS */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-8">
            {navLinks.filter(link => link.subOptions).map(menu => (
              <div key={menu.name}>
                <h4 className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-[#25D366]">
                  {menu.name}
                </h4>

                <ul className="flex flex-col gap-4">
                  {menu.subOptions.map(sub => (
                    <li key={sub.name}>
                      <Link
                        to={sub.path}
                        className="group flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition"
                      >
                        <span className="h-[2px] w-0 bg-[#0047ab] transition-all group-hover:w-4" />
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CONTACT CARD */}
          <div className="lg:col-span-4">
            <div className="bg-white/[0.04] backdrop-blur-lg rounded-[2.5rem] p-8 border border-white/10 shadow-2xl relative overflow-hidden">

              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Globe size={90} />
              </div>

              <h4 className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-[#25D366]">
                Start Scaling
              </h4>

              <div className="space-y-6">

                {/* EMAIL */}
                <a href="mailto:hello@coderyug.com" className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-full bg-[#0047ab]/20 flex items-center justify-center text-[#0047ab] group-hover:bg-[#0047ab] group-hover:text-white transition">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm font-bold text-slate-300 group-hover:text-white">
                    hello@coderyug.com
                  </span>
                </a>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 font-black text-[#1E293B] hover:shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition"
                >
                  <MessageSquare size={18} fill="currentColor" />
                  <span className="text-xs uppercase tracking-widest">WhatsApp Us</span>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 pb-12 border-t border-white/5">

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            {navLinks.filter(l => !l.subOptions).map(l => (
              <Link key={l.name} to={l.path} className="hover:text-white transition">
                {l.name}
              </Link>
            ))}
            <span className="text-[#0047ab]">DPDP ACT READY</span>
          </div>

          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 text-center md:text-right">
            © {currentYear} CODERYUG SYSTEMS • POWERING THE FUTURE OF CLINICS
          </p>
        </div>

        {/* WATERMARK */}
        <div
          className="pointer-events-none mt-4 select-none opacity-[0.03] hover:opacity-[0.06] transition"
          style={{
            maskImage: "linear-gradient(to bottom, white 30%, transparent 90%)",
            WebkitMaskImage: "linear-gradient(to bottom, white 30%, transparent 90%)",
          }}
        >
          <h2 className="text-center text-[10vw] font-black leading-none tracking-tighter text-white">
            CODERYUG
          </h2>
        </div>

      </div>
    </footer>
  );
}
