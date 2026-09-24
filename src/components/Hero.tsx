import React from 'react';
import { Calendar, ArrowDown, Award, CheckCircle2, ShieldCheck, HeartPulse } from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

interface HeroProps {
  onOpenConsultation: () => void;
  onLearnMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onLearnMore }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-[#FAF9F5]">
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#e5a629]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#15380e]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Eyebrow with unboxed metadata discipline */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#e5a629]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#15380e] font-sans-ui">
                {MEKARU_DATA.hero.eyebrow}
              </span>
              <span className="text-xs text-[#1c1c1c]/40 font-mono">·</span>
              <span className="text-xs font-medium text-[#1c1c1c]/70">Virtual One-on-One</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#15380e] leading-[1.12] mb-6 text-balance">
              Take Control of the Healthier Life You Want to Build.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#1c1c1c]/80 font-normal leading-relaxed mb-8 max-w-2xl text-pretty">
              Whether you’ve decided it’s time to live a healthier life or your doctor recommended lifestyle improvements, Coach Steve works alongside you as a personal <strong className="font-semibold text-[#15380e]">accountability partner</strong> and <strong className="font-semibold text-[#15380e]">co-strategist</strong> to help you pursue self-directed, lasting change on your own terms.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold tracking-wide uppercase text-white bg-[#15380e] hover:bg-[#1c4413] shadow-md hover:shadow-lg rounded-xl transition-all cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-[#e5a629] group-hover:scale-110 transition-transform" />
                <span>Schedule a Complimentary Consultation</span>
              </button>

              <button
                onClick={onLearnMore}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-[#15380e] bg-white hover:bg-[#15380e]/5 border border-[#15380e]/20 rounded-xl transition-colors cursor-pointer"
              >
                <span>See How Coaching Works</span>
                <ArrowDown className="w-4 h-4 text-[#e5a629]" />
              </button>
            </div>

            {/* Credential & Trust Adjacency Proof */}
            <div className="pt-6 border-t border-[#15380e]/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#15380e]/5 text-[#15380e] shrink-0 mt-0.5">
                  <Award className="w-5 h-5 text-[#e5a629]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#15380e]">
                    Steven Mekaru, M.D., NBC-HWC
                  </div>
                  <div className="text-xs text-[#1c1c1c]/70">
                    National Board Certified · Credential ID: {MEKARU_DATA.business.credentialId}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#15380e]/5 text-[#15380e] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-[#15380e]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#15380e]">
                    Client-Centered & Safe
                  </div>
                  <div className="text-xs text-[#1c1c1c]/70">
                    You set the pace & agenda · 100% judgment-free support
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Photography of Coach Steve (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative warm frame accent */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#15380e]/15 to-[#e5a629]/20 rounded-3xl transform -rotate-1 blur-xs" />
              
              {/* Photo Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-[#15380e]/10">
                <img
                  src="/assets/steve-portrait.jpg"
                  alt="Steven Mekaru, M.D., NBC-HWC - Coach Steve"
                  className="w-full h-auto object-cover aspect-[4/4] sm:aspect-[4/4] transform hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Authenticity Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-md border border-[#15380e]/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#15380e] flex items-center justify-center text-white shrink-0">
                      <HeartPulse className="w-5 h-5 text-[#e5a629]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#15380e]">
                        Coach Steve
                      </div>
                      <div className="text-[11px] text-[#1c1c1c]/70">
                        Physician turned Board-Certified Health Coach
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#15380e] bg-[#e5a629]/20 px-2 py-1 rounded">
                    NBHWC Verified
                  </span>
                </div>
              </div>

              {/* Quote callout box */}
              <div className="mt-4 p-3 bg-[#e5a629]/10 rounded-xl border border-[#e5a629]/30 text-xs text-[#1c1c1c]/80 italic text-center">
                “I believe that flourishing and wellbeing are achievable by everyone. Let’s take control of your health together.”
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
