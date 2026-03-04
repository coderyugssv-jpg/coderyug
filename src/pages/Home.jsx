import { motion } from "framer-motion";

// Core Components (Immediate Load)
import HeroClinic from "../components/HeroClinic";
import ProblemSolution from "../components/ProblemSolution";
import Footer from "../components/Footer";
import InfiniteTrustMarquee from "../components/InfiniteTrustMarquee";
import HowItWorks from "../components/HowItWorks";
import WhyCoderyug from "../components/WhyCoderyug";
import FeaturesGrid from "../components/FeaturesSlider";
import EarlyAccessSection from "../components/EarlyAccessSection";
import FAQSection from "../components/FAQSection";
import FinalCTASection from "../components/FinalCTASection";

// Lazy Loaded Components (Optimizes Initial Page Load Speed)

export default function Home() {
  // Reveal animation settings for section transitions
  const revealProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <main className="min-h-screen bg-[#0B0F1A] font-jakarta selection:bg-[#25D366] selection:text-[#1E293B]">
      
      {/* 1. HERO: No reveal effect here so the user sees content immediately */}
      <motion.section {...revealProps}>
        <HeroClinic />
      </motion.section>
      <motion.section {...revealProps}>
        <InfiniteTrustMarquee />
      </motion.section>
      
      
      {/* 2. THE PROBLEM: First transition into the narrative */}
      <motion.section {...revealProps}>
        <ProblemSolution />
      </motion.section>
      <motion.section {...revealProps}>
        <HowItWorks />
      </motion.section>
      <motion.section {...revealProps}>
        <FeaturesGrid />
      </motion.section>
      <motion.section {...revealProps}>
        <WhyCoderyug />
      </motion.section>
      <motion.section {...revealProps}>
        <EarlyAccessSection />
      </motion.section>
      <motion.section {...revealProps}>
        <FAQSection />
      </motion.section>
      <motion.section {...revealProps}>
        <FinalCTASection />
      </motion.section>




    </main>
  );
}