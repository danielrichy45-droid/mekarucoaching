import React from 'react';
import { Calendar, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

interface PackagesProps {
  onOpenConsultation: () => void;
}

export const Packages: React.FC<PackagesProps> = ({ onOpenConsultation }) => {
  return (
    <section id="packages" className="py-16 md:py-24 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5a629]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#15380e] font-sans-ui">
              COACHING SERVICES & PACKAGES
            </span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#15380e] mb-4 text-balance">
            Designed for Meaningful, Lasting Momentum
          </h2>
          <p className="text-base sm:text-lg text-[#1c1c1c]/75 leading-relaxed">
            All new clients begin with either the 3-session Jumpstart or the 6-session Builder package. We start here to build real rapport, establish your customized baseline, and ensure mutual fit.
          </p>
        </div>

        {/* 2 Packages Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
          
          {MEKARU_DATA.packages.map((pkg, idx) => {
            const isFeatured = idx === 1; // Builder is the sustained deeper package
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl bg-white flex flex-col justify-between overflow-hidden transition-all ${
                  isFeatured
                    ? 'border-2 border-[#15380e] shadow-xl'
                    : 'border border-[#15380e]/15 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular / Comprehensive Ribbon */}
                {isFeatured && (
                  <div className="bg-[#15380e] text-white text-[11px] font-bold uppercase tracking-wider py-1.5 px-4 text-center flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#e5a629]" />
                    <span>Most Comprehensive Lifestyle Transformation</span>
                  </div>
                )}

                <div>
                  {/* Package Graphic Header */}
                  <div className="relative h-48 sm:h-52 bg-stone-100 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-4 left-6 right-6 text-white flex items-end justify-between">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#e5a629] block mb-1">
                          {pkg.format}
                        </span>
                        <h3 className="font-serif-brand text-2xl font-bold text-white">
                          {pkg.name}
                        </h3>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white shrink-0">
                        {pkg.sessions}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <p className="text-sm font-semibold text-[#15380e] mb-3 leading-snug">
                      {pkg.headline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#1c1c1c]/75 leading-relaxed mb-6">
                      {pkg.summary}
                    </p>

                    {/* Ideal For Badge */}
                    <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#15380e]/10 text-xs text-[#1c1c1c]/80 mb-6 font-medium">
                      <strong>Best For:</strong> {pkg.idealFor}
                    </div>

                    {/* Highlights List */}
                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#15380e]">
                        What&apos;s Included:
                      </div>
                      {pkg.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1c1c1c]/85">
                          <CheckCircle2 className="w-4 h-4 text-[#15380e] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-8 pt-0 mt-auto border-t border-[#15380e]/10">
                  <button
                    onClick={onOpenConsultation}
                    className={`w-full py-4 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-[#15380e] hover:bg-[#1c4413] text-white shadow-md'
                        : 'bg-[#FAF9F5] hover:bg-[#15380e] text-[#15380e] hover:text-white border border-[#15380e]/20'
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-[#e5a629]" />
                    <span>Schedule Free Consultation to Discuss</span>
                  </button>

                  <div className="mt-3 text-center text-[11px] text-[#1c1c1c]/60 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#15380e]" />
                    <span>No upfront payment required to book consultation call</span>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Pricing Transparency & Refund Reassurance */}
        <div className="mt-12 max-w-3xl mx-auto p-5 sm:p-6 bg-white rounded-2xl border border-[#15380e]/15 shadow-xs text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
          <div className="p-3 bg-[#e5a629]/15 rounded-xl shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#15380e]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#15380e] mb-1">
              Transparent & Risk-Free Coaching Agreement
            </h4>
            <p className="text-xs text-[#1c1c1c]/75 leading-relaxed">
              If for any reason you choose to terminate coaching at any time, uncompleted coaching sessions are refunded at a guaranteed rate of <strong>$50 per session</strong>. No hidden lock-in or cancellation penalties.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
