import React from 'react';
import { Calendar, Mail, Instagram, ExternalLink, ShieldCheck } from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenDisclaimer: () => void;
  onOpenPrivacy: () => void;
  onOpenAssistant: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
  onOpenDisclaimer,
  onOpenPrivacy,
  onOpenAssistant
}) => {
  return (
    <footer className="bg-[#15380e] text-white pt-16 pb-12 border-t border-[#15380e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block bg-white/95 backdrop-blur-xs rounded-xl p-2.5 shadow-sm border border-white/20">
              <img
                src="/assets/mekaru-logo.png"
                alt="Mekaru Coaching Services LLC"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
              Evidence-informed health and wellness coaching designed to empower clients to build sustainable lifestyle behavior changes on their own terms.
            </p>

            <div className="pt-2 text-xs text-white/70 space-y-1">
              <div><strong>Coach:</strong> Steven Mekaru, M.D., NBC-HWC</div>
              <div><strong>NBHWC Credential ID:</strong> {MEKARU_DATA.business.credentialId}</div>
              <div><strong>Email:</strong> {MEKARU_DATA.business.email}</div>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#e5a629] font-sans-ui">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>
                <a href="#what-is-coaching" className="hover:text-white transition-colors">
                  What is Health Coaching?
                </a>
              </li>
              <li>
                <a href="#six-pillars" className="hover:text-white transition-colors">
                  6 Pillars of Lifestyle Medicine
                </a>
              </li>
              <li>
                <a href="#work-with-me" className="hover:text-white transition-colors">
                  Work With Me (4 Core Tenets)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Coaching Packages (Jumpstart & Builder)
                </a>
              </li>
              <li>
                <a href="#about-steve" className="hover:text-white transition-colors">
                  Meet Coach Steve (Story & Credentials)
                </a>
              </li>
              <li>
                <a href="#action-tracker" className="hover:text-white transition-colors">
                  Free Healthy Action Tracker
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Client Resources & Booking (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#e5a629] font-sans-ui">
              Complimentary Consultation
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              30 minutes · 100% Free · Virtual via Google Meet · Direct one-on-one with Coach Steve.
            </p>

            <div className="flex flex-col gap-2.5 pt-1">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#e5a629] hover:bg-[#d99518] text-[#15380e] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Free 30-Min Call</span>
              </button>

              <button
                onClick={onOpenAssistant}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer border border-white/15"
              >
                <span>Ask Website Assistant</span>
              </button>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-white/70">
              <a
                href={MEKARU_DATA.business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#e5a629]" />
                <span>@mekarucoaching</span>
              </a>
              <a
                href={`mailto:${MEKARU_DATA.business.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#e5a629]" />
                <span>Email Steve</span>
              </a>
            </div>
          </div>

        </div>

        {/* Scope of Practice Legal Notice Banner */}
        <div className="py-6 border-b border-white/10 text-xs text-white/70 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#e5a629] shrink-0 mt-0.5" />
            <p>
              <strong>Important Scope Notice:</strong> Steven Mekaru earned his Medical Doctorate (M.D.) from Wayne State University School of Medicine, but operates Mekaru Coaching Services LLC solely as a National Board Certified Health & Wellness Coach (NBC-HWC). Health coaching is for educational and self-directed habit change only and does not constitute medical diagnosis, treatment, clinical prescriptions, or psychotherapy.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Modals */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Mekaru Coaching Services LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenDisclaimer}
              className="hover:text-white underline cursor-pointer"
            >
              Legal Disclaimer
            </button>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <a
              href={MEKARU_DATA.business.presentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline flex items-center gap-1"
            >
              <span>Slideshow</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
