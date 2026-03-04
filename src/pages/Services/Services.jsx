import { motion } from "framer-motion";
import FinalCTASection from "../../components/FinalCTASection";
import "swiper/css";
import "swiper/css/effect-coverflow";



export default function Services() {
  /* Section Reveal Animation */
  const revealProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" },
  };


 const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}; 


  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900/60 via-black/80 to-indigo-900/60 backdrop-blur-2xl text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-20 px-6 md:px-20 text-center inset-0 bg-gradient-to-br from-blue-900/60 via-black/80 to-indigo-900/60 backdrop-blur-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >Complete Digital Growth Solutions for Dental & Dermatology ClinicsProfessional Web Development Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
        >
          From website setup to Google ranking and paid ads - we help clinics attract, convert, and retain more patients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="/contact"
            className="inline-block bg-[#F9FBFF] text-[#0B0F1A] font-semibold px-8 py-4 rounded-full hover:scale-105 transition shadow-lg"
          >
            Book Free Clinic Growth Call
          </a>
          <a
            href="/contact"
            className="inline-block border-2 border-white text-white font-semibold px-8 mx-4 py-4 rounded-full hover:bg-white hover:text-black transition transform hover:scale-105 shadow-lg"
          >
            View Our Results
          </a>
        </motion.div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#25D366]/10 blur-[120px] rounded-full -z-10"></div>
      </section>





<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={containerVariants}
  className="relative py-40 px-6 md:px-20 bg-[#1E293B] text-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <motion.div variants={cardVariants} className="text-center mb-28">
      <p className="text-green-400 font-medium tracking-wide mb-4">
        PATIENT ACQUISITION SYSTEM
      </p>

      <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
        A Complete Growth Engine
        <br className="hidden md:block" />
        For Modern Clinics
      </h2>

      <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        We don’t provide isolated marketing services.
        We design and manage a structured system that consistently
        attracts, converts, and retains patients.
      </p>
    </motion.div>

    {/* Cards Grid */}
    <motion.div
      variants={containerVariants}
      className="grid md:grid-cols-2 gap-16"
    >
      {[
        {
          number: "01",
          title: "Website & Online Booking",
          points: [
            "Professional medical-grade website",
            "Integrated appointment scheduling",
            "Treatment-specific landing pages",
            "Automated follow-up sequences"
          ],
          outcome: "Convert website visitors into booked patients."
        },
        {
          number: "02",
          title: "Google & Maps Visibility",
          points: [
            "Google Business Profile optimization",
            "Local SEO infrastructure",
            "Review growth framework",
            "Ongoing ranking improvements"
          ],
          outcome: "Appear when patients search near you."
        },
        {
          number: "03",
          title: "Paid Patient Acquisition",
          points: [
            "High-intent Google Ads",
            "Facebook & Instagram campaigns",
            "Precise geographic targeting",
            "Transparent tracking & reporting"
          ],
          outcome: "Generate predictable appointment inquiries."
        },
        {
          number: "04",
          title: "Doctor Authority & Trust",
          points: [
            "Personal brand positioning",
            "Educational medical content",
            "Advanced search optimization",
            "Reputation management"
          ],
          outcome: "Position you as the trusted expert in your city."
        }
      ].map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ y: -6 }}
          className="group relative bg-slate-800 border border-slate-700 rounded-3xl p-14 transition-all duration-300 hover:shadow-2xl hover:border-green-400"
        >
          {/* Number */}
          <div className="text-6xl font-semibold text-slate-700 absolute top-10 right-12 select-none">
            {card.number}
          </div>

          <h3 className="text-2xl font-semibold mb-8 relative z-10 text-white">
            {card.title}
          </h3>

          <ul className="space-y-4 text-slate-300 mb-10 leading-relaxed relative z-10">
            {card.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                {point}
              </li>
            ))}
          </ul>

          <div className="border-t border-slate-700 pt-6 relative z-10">
            <p className="text-sm text-slate-400 mb-1">Strategic Outcome</p>
            <p className="text-green-400 font-medium">
              {card.outcome}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>

  </div>
</motion.section>






<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={containerVariants}
  className="relative py-36 px-6 md:px-20 bg-[#f8fbff] text-black"
>
  <div className="max-w-5xl mx-auto">

    {/* Header */}
    <motion.div variants={cardVariants} className="text-center mb-20">
      <p className="text-green-600 font-medium tracking-wide mb-4">
        OUR APPROACH
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold mb-6">
        How We Work With Clinics
      </h2>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        We follow a <span className="font-semibold text-black">clear and structured process</span>.
        Every clinic goes through the same steps so nothing is random
        and everything is <span className="font-semibold text-black">measurable</span>.
      </p>
    </motion.div>

    {/* Steps */}
    <motion.div variants={containerVariants} className="space-y-12">
      {[
        {
          step: "01",
          title: "Audit Your Clinic",
          description: (
            <>
              We review your website, Google presence, patient journey,
              and local competition to identify opportunities to{" "}
              <span className="font-semibold text-black">
                increase appointments
              </span>.
            </>
          )
        },
        {
          step: "02",
          title: "Create a Growth Plan",
          description: (
            <>
              Based on the audit, we build a{" "}
              <span className="font-semibold text-black">
                clear action plan
              </span>{" "}
              focused on improving visibility and generating
              more booked consultations.
            </>
          )
        },
        {
          step: "03",
          title: "Build & Launch",
          description: (
            <>
              We implement your website improvements, Google optimization,
              advertising campaigns, and automation systems in a{" "}
              <span className="font-semibold text-black">
                coordinated way
              </span>.
            </>
          )
        },
        {
          step: "04",
          title: "Track, Improve & Scale",
          description: (
            <>
              We{" "}
              <span className="font-semibold text-black">
                monitor results closely
              </span>, improve performance,
              and scale what works to create{" "}
              <span className="font-semibold text-black">
                steady long-term growth
              </span>.
            </>
          )
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-md transition duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold">
              {item.step}
            </div>

            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.section>


<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={containerVariants}
  className="relative py-36 px-6 md:px-20 bg-white text-black"
>
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <motion.div variants={cardVariants} className="text-center mb-20">
      <p className="text-green-600 font-medium tracking-wide mb-4">
        WHY CLINICS CHOOSE US
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold mb-6">
        A Specialized Partner for Clinic Growth
      </h2>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        We focus exclusively on dental and dermatology clinics.
        This specialization allows us to understand your patients,
        your market, and your growth challenges in depth.
      </p>
    </motion.div>

    {/* Grid */}
    <motion.div
      variants={containerVariants}
      className="grid md:grid-cols-2 gap-14"
    >
      {[
        {
          number: "01",
          title: "Focused Specialization",
          description:
            "We work only with dental and dermatology clinics. Our strategies are designed specifically for these medical fields."
        },
        {
          number: "02",
          title: "Understanding Patient Behavior",
          description:
            "We understand how patients search, compare options, read reviews, and decide which clinic to trust."
        },
        {
          number: "03",
          title: "Appointment-Focused Strategy",
          description:
            "Every campaign and system we build is designed to increase qualified appointment inquiries."
        },
        {
          number: "04",
          title: "Clear and Transparent Reporting",
          description:
            "You receive straightforward reports that show performance, patient inquiries, and measurable progress."
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="border border-gray-200 rounded-2xl p-10 hover:shadow-sm transition duration-300"
        >
          <div className="text-sm text-green-600 font-medium mb-3">
            {item.number}
          </div>

          <h3 className="text-xl font-semibold mb-4">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>

    {/* Calm Closing Line */}
    <motion.div
      variants={cardVariants}
      className="text-center mt-20"
    >
      <p className="text-gray-700 text-lg">
        A focused partner. A structured system. Consistent patient growth.
      </p>
    </motion.div>

  </div>
</motion.section>


<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={containerVariants}
  className="relative py-28 px-6 md:px-20 bg-[#f8fbff] text-black"
>
  <div className="max-w-4xl mx-auto text-center">

    <motion.div variants={cardVariants}>

      <p className="text-green-600 font-medium tracking-wide mb-4">
        RESULTS PREVIEW
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
        Helping Clinics Increase
        <br />
        Patient Inquiries by 30–70%
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Clinics that implement our full system typically see measurable
        growth within <span className="font-semibold text-black">3–6 months</span>.
      </p>

      <p className="text-gray-600 text-lg leading-relaxed">
        Results depend on location, competition, and starting point -
        but with consistent execution, steady growth is achievable.
      </p>

    </motion.div>

  </div>
</motion.section>





<FinalCTASection />

    </main>
  );
}
