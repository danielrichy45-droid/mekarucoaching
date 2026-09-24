import React from 'react';
import { X, ShieldAlert } from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-[#15380e]/20 shadow-2xl relative"
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
        <div className="p-6 sm:p-8 bg-[#FAF9F5] border-b border-[#15380e]/10 rounded-t-3xl">
          <div className="inline-flex items-center gap-2 mb-2 text-[#15380e]">
            <ShieldAlert className="w-5 h-5 text-[#e5a629]" />
            <span className="text-xs font-bold uppercase tracking-widest font-sans-ui">
              LEGAL NOTICE & SCOPE OF PRACTICE
            </span>
          </div>
          <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#15380e]">
            Mekaru Coaching Disclaimer
          </h3>
          <p className="text-xs text-[#1c1c1c]/70 mt-1">
            Last Updated: Mekaru Coaching Services LLC
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-sm text-[#1c1c1c]/80 leading-relaxed">
          {MEKARU_DATA.disclaimerPoints.map((point) => (
            <div key={point.title} className="space-y-1.5 pb-4 border-b border-[#15380e]/5 last:border-b-0">
              <h4 className="font-bold text-sm text-[#15380e]">
                {point.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#1c1c1c]/75">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#FAF9F5] border-t border-[#15380e]/10 rounded-b-3xl flex items-center justify-between">
          <span className="text-[11px] text-[#1c1c1c]/60">
            Mekaru Coaching Services LLC
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#15380e] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#1c4413] transition-colors cursor-pointer"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
};
