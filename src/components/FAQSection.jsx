"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this complicated to set up?",
    answer:
      "Not at all. Coderyug is designed specifically for clinics, not tech experts. Setup takes just a few minutes, and our team guides you through onboarding.",
  },
  {
    question: "Do I need any special hardware?",
    answer:
      "No special hardware is required. Coderyug works on your existing computer, tablet, or smartphone using a standard internet connection.",
  },
  {
    question: "What if patients don’t use WhatsApp?",
    answer:
      "WhatsApp reminders are optional. You can still manage appointments, send SMS notifications, and use the dashboard without relying on WhatsApp.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no long-term lock-ins. You can upgrade, downgrade, or cancel your plan anytime without hidden fees.",
  },
  {
    question: "Is my clinic data secure?",
    answer:
      "Absolutely. We use encrypted connections and secure cloud infrastructure to ensure your clinic and patient data stays protected at all times.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 bg-[#f9fbff]">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden transition duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={22}
                />
              </button>

              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
