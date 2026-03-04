"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const features = [
  {
    icon: "📅",
    title: "Online Booking System",
    desc: "Allow patients to book appointments instantly from anywhere.",
    highlight: "24/7 appointment access",
  },
  {
    icon: "💬",
    title: "WhatsApp Reminder Automation",
    desc: "Automatic reminders reduce no-shows and improve engagement.",
    highlight: "Up to 40% fewer no-shows",
  },
  {
    icon: "🔄",
    title: "Cancel & Reschedule Link",
    desc: "Patients can modify appointments without calling your clinic.",
    highlight: "Save staff time",
  },
  {
    icon: "🕒",
    title: "Doctor Controlled Slots",
    desc: "Doctors control availability with smart scheduling tools.",
    highlight: "Full schedule control",
  },
  {
    icon: "📊",
    title: "Monthly Analytics Reports",
    desc: "Track growth, appointments, and patient trends easily.",
    highlight: "Data-driven decisions",
  },
  {
    icon: "🚨",
    title: "Emergency Block Mode",
    desc: "Instantly block slots during emergencies or urgent cases.",
    highlight: "Flexible control",
  },
  {
    icon: "👨‍⚕️",
    title: "Multi-Doctor Support",
    desc: "Manage multiple doctors from a single dashboard.",
    highlight: "Scalable for growth",
  },
];

export default function FeaturesSlider() {
  return (
    <section className="w-full py-20 bg-[#f9fbff] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Powerful Features Built for Modern Clinics
        </h2>

        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          loop
          slidesPerView={2.8}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1.8,
            slideShadows: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.8 },
          }}
          className="!overflow-visible py-12"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="!overflow-visible">
              <div className="feature-card rounded-3xl p-8 bg-white">
                <div className="text-4xl mb-4">{feature.icon}</div>

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {feature.desc}
                </p>

                <div className="text-sm font-medium text-blue-600">
                  {feature.highlight}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Scoped styles */}
      <style jsx>{`
        .feature-card {
          transform: scale(0.9);
          opacity: 0.6;
          filter: blur(2px);
          transition: all 0.4s ease;
        }

        .swiper-slide-active .feature-card {
          transform: scale(1);
          opacity: 1;
          filter: blur(0);
          z-index: 20;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
}
