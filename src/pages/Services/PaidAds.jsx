import { motion } from "framer-motion";
import { Link } from "react-router-dom";


// Assuming this component exists in your project
// If it doesn't, you can comment it out
import FinalCTASection from "../../components/FinalCTASection";
import PaidAdsSolution from "../../components/PaidAdsSolution";
import PaidAdsDetails from "../../components/PaidAdsDetails";
import PaidAdsFinal from "../../components/PaidAdsFinal";


export default function PaidAds() {


  return (
    <div className="bg-white text-[#0F172A] overflow-x-hidden font-sans">
      
      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 md:px-20 text-center bg-[#0F172A] text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Get More Patients with <span className="text-green-400">Targeted Paid Ads</span> for Your Clinic
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            We manage Google, Facebook, and Instagram ads to bring dental and dermatology patients directly to your clinic. No more guesswork, just results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-black font-bold px-10 py-4 rounded-full transition-all shadow-xl shadow-green-500/20">
              Book Free Strategy Call
            </Link>
            <button className="border border-slate-500 px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all font-semibold">
              See How Ads Work
            </button>
          </div>
        </motion.div>
        
        {/* Background Decorative Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full -z-0"></div>
      </section>

      <PaidAdsSolution />
      <PaidAdsDetails />
      <PaidAdsFinal />


      {/* FINAL CTA SECTION */}
      {/* Ensure this component exists in your folder structure */}
      <FinalCTASection />
    </div>
  );
}