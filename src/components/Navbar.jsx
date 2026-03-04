import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

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

    // {
    //   name: "CLINICS WE HELP",
    //   path: "/clinics-we-help",
    //   subOptions: [
    //     { name: "Dental Clinics", path: "/clinics-we-help/dental" },
    //     { name: "Dermatology Clinics", path: "/clinics-we-help/dermatology" },
    //     { name: "Multispeciality Clinics", path: "/clinics-we-help/multispeciality" },
    //   ]
    // },

    {
      name: "Results",
      path: "/our-work",
      subOptions: [
        { name: "Case Studies", path: "/our-work/case-studies" }
      ],
    },

    {
      name: "Clients",
      path: "/clients",
    },

    {
      name: "About Us",
      path: "/why-coderyug",
    },
  ];


  return (
    <>
      <style>{`
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
        
        /* Glassmorphism Classes */
        .glass-container {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        .dropdown-glass {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        }

        .mobile-glass-overlay {
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
        }

        @media (min-width: 1024px) {
          .active-link::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 100%;
            height: 3px;
            background: #0047ab;
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(0, 71, 171, 0.4);
          }
        }
      `}</style>

      <nav className="glass-container sticky top-0 z-[100] w-full font-jakarta">
        <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 lg:py-5">
          <Link
            to="/"
            className="z-[120] flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
          >
            {/* Your Logo Image */}
            <img
              src="./src/assets/logo.png"
              alt="Coderyug Logo"
              className="h-12 w-auto md:h-14 object-contain drop-shadow-[0_0_8px_rgba(0,71,171,0.3)]"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative py-2"
                onMouseEnter={() =>
                  link.subOptions && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-md font-bold transition-all duration-300 hover:text-[#0047ab] flex items-center gap-1 ${
                      isActive
                        ? "active-link text-[#0047ab]"
                        : "text-[#1E293B]/70"
                    }`
                  }
                >
                  {link.name}
                  {link.subOptions && (
                    <svg
                      className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </NavLink>

                {/* Desktop Dropdown with Glass effect */}
                <AnimatePresence>
                  {activeDropdown === link.name && link.subOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="dropdown-glass absolute top-full left-0 mt-2 w-72 rounded-3xl p-3 overflow-hidden"
                    >
                      {link.subOptions.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="group block px-4 py-3 text-sm font-semibold text-[#1E293B] hover:bg-[#0047ab] hover:text-white rounded-2xl transition-all duration-200"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden rounded-full bg-[#0047ab] px-7 py-3 text-md font-extrabold text-white transition-all hover:bg-[#003580] hover:shadow-[0_8px_20px_rgba(0,71,171,0.35)] md:block"
            >
              BOOK FREE CLINIC GROWTH CALL
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="z-[120] flex h-11 w-11 items-center justify-center rounded-full bg-white/50 text-[#1E293B] lg:hidden border border-white/40 shadow-sm"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2.5" />
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7" strokeWidth="2.2" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Glass Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(25px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="mobile-glass-overlay fixed inset-0 z-[110] flex h-screen w-screen flex-col p-8 lg:hidden"
            >
              {/* Scrollable Links Container */}
              <div className="mt-24 flex flex-col space-y-6 overflow-y-auto pb-32">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={link.path}
                        onClick={() => !link.subOptions && setIsOpen(false)}
                        className={({ isActive }) =>
                          `text-4xl font-black uppercase tracking-tighter ${isActive ? "text-[#0047ab]" : "text-[#1E293B]"}`
                        }
                      >
                        {link.name}
                      </NavLink>

                      {link.subOptions && (
                        <button
                          onClick={() =>
                            setMobileSubOpen(
                              mobileSubOpen === link.name ? null : link.name,
                            )
                          }
                          className="p-3 bg-white/40 border border-white/60 rounded-full text-[#0047ab] shadow-sm"
                        >
                          <svg
                            className={`w-6 h-6 transition-transform ${mobileSubOpen === link.name ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    {link.subOptions && mobileSubOpen === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="mt-4 ml-4 flex flex-col space-y-4 border-l-4 border-[#0047ab]/40 pl-6"
                      >
                        {link.subOptions.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-bold text-[#1E293B]/80 hover:text-[#0047ab]"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Fixed Mobile CTA at Bottom */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-10 left-0 w-full px-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center rounded-2xl bg-[#0047ab] py-5 text-xl font-black uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(0,71,171,0.4)] active:scale-95 transition-transform"
                >
                  BOOK FREE CLINIC GROWTH CALL
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
