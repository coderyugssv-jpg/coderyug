import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services/Services";
import WebAndBookingSystem from "./pages/Services/WebAndBookingSystem";
import GoogleAndMapsRanking from "./pages/Services/GoogleAndMapsRanking";
import DoctorBranding from "./pages/Services/DoctorBranding";
import PaidAds from "./pages/Services/PaidAds";
import CaseStudies from "./pages/CaseStudies";
import Clients from "./pages/Clients";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/website-and-booking-system" element={<WebAndBookingSystem />} />
        <Route path="/services/google-and-map-ranking" element={<GoogleAndMapsRanking />} />
        <Route path="/services/paid-ads" element={<PaidAds />} />
        <Route path="/services/doctor-branding-authority" element={<DoctorBranding />} />
        <Route path="/our-work/case-studies" element={<CaseStudies />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/why-coderyug" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add your other pages here as you build them */}
      </Routes>
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;