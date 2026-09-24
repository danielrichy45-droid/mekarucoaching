import React from 'react';
import { Calendar, Video, Clock, Check, ExternalLink, Mail, ShieldAlert } from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

interface DiscoveryCallProps {
  onOpenConsultation: () => void;
}

export const DiscoveryCall: React.FC<DiscoveryCallProps> = ({ onOpenConsultation }) => {
  return (
    <section id="discovery-call" className="py-16 md:py-24 bg-white border-y border-[#15380e]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5a629]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#15380e] font-sans-ui">
              ZERO-PRESSURE DISCOVERY CALL
            </span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#15380e] mb-4 text-balance">
            Complimentary 30-Minute Consultation Call
          </h2>
          <p className="text-base sm:text-lg text-[#1c1c1c]/75 leading-relaxed">
            Experience what health coaching feels like before making any commitment. Meet Coach Steve one-on-one, explore your lifestyle goals, and get answers to all your questions.
          </p>
        </div>

        {/* 4-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {MEKARU_DATA.consultation.steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#FAF9F5] rounded-2xl p-6 border border-[#15380e]/15 relative group hover:shadow-md transition-shadow"
            >
              <div className="text-3xl font-mono font-bold text-[#e5a629] mb-4">
                {step.number}
              </div>
              <h3 className="font-serif-brand text-xl font-bold text-[#15380e] mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#1c1c1c]/75 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Feature List + Interactive Booking Action Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#15380e] to-[#1c4413] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: What to Expect checklist (7 cols) */}
            <div className="md:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e5a629] block mb-2 font-sans-ui">
                100% Free · No Obligation
              </span>
              <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold mb-6">
                What to Expect During Your Call
              </h3>

              <div className="space-y-3 mb-6">
                {MEKARU_DATA.consultation.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                    <div className="p-0.5 rounded-full bg-[#e5a629]/20 text-[#e5a629] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-white/70 italic flex items-center gap-2">
                <Video className="w-4 h-4 text-[#e5a629]" />
                <span>Conducted via private Google Meet video link provided immediately upon booking.</span>
              </div>
            </div>

            {/* Right Column: CTA Box (5 cols) */}
            <div className="md:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center flex flex-col items-center justify-center">
              <Clock className="w-8 h-8 text-[#e5a629] mb-3" />
              <div className="text-sm font-bold uppercase tracking-wider text-white mb-1">
                Select Your Time
              </div>
              <div className="text-xs text-white/80 mb-6">
                Direct integration with Coach Steve’s calendar
              </div>

              <a
                href={MEKARU_DATA.business.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#e5a629] hover:bg-[#d99518] text-[#15380e] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer mb-3"
              >
                <Calendar className="w-4 h-4" />
                <span>Open Google Calendar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenConsultation}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer border border-white/20"
              >
                <span>View Scheduling Details</span>
              </button>

              <div className="mt-4 text-[11px] text-white/60">
                Prefer email?{' '}
                <a
                  href={`mailto:${MEKARU_DATA.business.email}`}
                  className="underline hover:text-white"
                >
                  {MEKARU_DATA.business.email}
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
