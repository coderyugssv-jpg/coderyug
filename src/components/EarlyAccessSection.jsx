"use client";

export default function EarlyAccessSection() {
  return (
    <section className="w-full py-28 bg-[#1E293B] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
          Limited Beta Access
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Launching with Selected Clinics
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          We are onboarding a limited number of clinics to shape the future
          of smart appointment management. Join the founding clinics building
          the next generation of patient experience.
        </p>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition duration-300 hover:scale-[1.04] hover:border-blue-500/40">
            <h3 className="font-semibold text-xl mb-4 text-white">
              Priority Support
            </h3>
            <p className="text-gray-400">
              Direct communication and faster issue resolution during beta phase.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition duration-300 hover:scale-[1.04] hover:border-blue-500/40">
            <h3 className="font-semibold text-xl mb-4 text-white">
              Lifetime Early Pricing
            </h3>
            <p className="text-gray-400">
              Lock in special pricing available only to founding clinics.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition duration-300 hover:scale-[1.04] hover:border-blue-500/40">
            <h3 className="font-semibold text-xl mb-4 text-white">
              Shape the Product
            </h3>
            <p className="text-gray-400">
              Your feedback directly influences upcoming features and improvements.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-[0_15px_50px_rgba(37,99,235,0.5)] hover:bg-blue-700 transition duration-300">
            Apply for Early Access
          </button>

          <p className="text-sm text-gray-500">
            Only 15 clinics will be selected in this phase.
          </p>
        </div>

      </div>
    </section>
  );
}
