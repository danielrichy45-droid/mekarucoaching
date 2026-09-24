import React from 'react';
import { X, Calendar, Video, Clock, CheckCircle2, ExternalLink, ShieldCheck, Mail } from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#15380e]/20 shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#1c1c1c]/60 hover:text-[#1c1c1c] hover:bg-[#FAF9F5] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#15380e] text-white rounded-t-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5a629]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#e5a629] font-sans-ui">
              COMPLIMENTARY CONSULTATION
            </span>
          </div>
          <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold mb-2">
            Schedule with Coach Steve
          </h3>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            30 minutes · 100% Free · One-on-One · Virtual via Google Meet
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#15380e]">
              What to Expect:
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#1c1c1c]/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#15380e] shrink-0 mt-0.5" />
                <span>Relaxed, friendly conversation about your lifestyle and health goals.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#15380e] shrink-0 mt-0.5" />
                <span>Get a genuine feel for Coach Steve’s collaborative coaching style.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#15380e] shrink-0 mt-0.5" />
                <span>Zero pressure to purchase or commit to anything.</span>
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="p-5 bg-[#FAF9F5] rounded-2xl border border-[#15380e]/15 text-center">
            <p className="text-xs font-medium text-[#1c1c1c]/70 mb-4">
              Select your preferred appointment date and time directly on Coach Steve&apos;s Google Calendar:
            </p>

            <a
              href={MEKARU_DATA.business.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 bg-[#15380e] hover:bg-[#1c4413] text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#e5a629]" />
              <span>Open Coach Steve&apos;s Google Calendar</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="mt-3 text-[11px] text-[#1c1c1c]/60 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#15380e]" />
              <span>You will receive immediate calendar confirmation and a private Google Meet video link</span>
            </div>
          </div>

          {/* Alternative Email Option */}
          <div className="pt-2 text-center text-xs text-[#1c1c1c]/70">
            Can&apos;t find a suitable time? Email Coach Steve directly at:{' '}
            <a
              href={`mailto:${MEKARU_DATA.business.email}?subject=Consultation%20Inquiry`}
              className="font-semibold text-[#15380e] underline hover:text-[#1c4413]"
            >
              {MEKARU_DATA.business.email}
            </a>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#FAF9F5] border-t border-[#15380e]/10 rounded-b-3xl flex items-center justify-between">
          <span className="text-[11px] text-[#1c1c1c]/60">
            Mekaru Coaching Services LLC
          </span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#15380e] hover:underline cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
