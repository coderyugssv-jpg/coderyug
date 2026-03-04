import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  RefreshCw,
  Wrench,
  Search,
  MapPin,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: <Globe size={40} />,
    title: "Web Development",
    description:
      "We build fast, modern, and mobile-friendly websites that help your business grow online.",
    features: [
      "Custom Website Design",
      "Responsive (Mobile-Friendly)",
      "Fast Loading Speed",
      "Secure & Scalable Code",
    ],
  },
  {
    icon: <RefreshCw size={40} />,
    title: "Website Revamp",
    description:
      "Give your old website a fresh and modern look with better performance and user experience.",
    features: [
      "Modern UI/UX Design",
      "Speed Optimization",
      "Mobile Optimization",
      "Better Conversion Layout",
    ],
  },
  {
    icon: <Wrench size={40} />,
    title: "Website Maintenance",
    description:
      "We keep your website secure, updated, and running smoothly so you can focus on your business.",
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Bug Fixes",
      "Performance Improvements",
    ],
  },
  {
    icon: <Search size={40} />,
    title: "SEO Optimization",
    description:
      "Improve your Google ranking and get more organic traffic with smart SEO strategies.",
    features: [
      "On-Page SEO",
      "Technical SEO",
      "Keyword Optimization",
      "Performance Tracking",
    ],
  },
  {
    icon: <MapPin size={40} />,
    title: "Google My Business Setup",
    description:
      "Get found locally on Google Maps and Search with a fully optimized business profile.",
    features: [
      "Profile Setup & Verification",
      "Business Optimization",
      "Local SEO Strategy",
      "Review Optimization",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const ServicesList = () => {
  return (
    <section className="relative bg-[#F9FBFF] text-gray-800 py-20 px-18 md:px-20 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Our Professional Web Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg"
        >
          We help businesses grow online with modern websites, SEO, and digital
          solutions that bring real results.
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
            whileTap={{ scale: 0.97 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden"
          >
            {/* Glow behind icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              className="absolute top-0 right-0 w-24 h-24 bg-blue-100/40 rounded-full -z-10"
            />
            <div className="text-blue-600 mb-6">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={containerVariants}
              className="space-y-2"
            >
              {service.features.map((feature, i) => (
                <motion.li
                  key={i}
                  variants={featureVariants}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center bg-blue-600 text-white rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-shadow"
      >
        <motion.h3
          whileHover={{ scale: 1.02 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Grow Your Business Online?
        </motion.h3>
        <motion.p
          whileHover={{ scale: 1.01 }}
          className="mb-8 text-lg"
        >
          Let’s build a powerful online presence that attracts customers and
          increases your sales.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg"
        >
          Get Free Consultation
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ServicesList;
