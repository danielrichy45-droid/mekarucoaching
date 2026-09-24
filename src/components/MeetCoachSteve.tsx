import React from 'react';
import { Award, GraduationCap, ShieldAlert, Heart, Instagram, ExternalLink, Calendar } from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

interface MeetCoachSteveProps {
  onOpenConsultation: () => void;
}

export const MeetCoachSteve: React.FC<MeetCoachSteveProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about-steve" className="py-16 md:py-24 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5a629]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#15380e] font-sans-ui">
              MEET YOUR HEALTH COACH
            </span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#15380e] mb-4 text-balance">
            Hello! I&apos;m Steve.
          </h2>
          <p className="text-base sm:text-lg text-[#1c1c1c]/75 leading-relaxed">
            {MEKARU_DATA.coachSteveStory.subtitle}
          </p>
        </div>

        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Photos (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white border border-[#15380e]/15">
              <img
                src="/assets/steve-portrait.jpg"
                alt="Steven Mekaru, M.D., NBC-HWC"
                className="w-full h-auto object-cover aspect-[4/4]"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-[#15380e]/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#15380e]">
                    Steven Mekaru, M.D., NBC-HWC
                  </div>
                  <div className="text-xs text-[#1c1c1c]/70">
                    Founder, Mekaru Coaching Services LLC
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#15380e] bg-[#e5a629]/20 px-2.5 py-1 rounded">
                  ID: {MEKARU_DATA.business.credentialId}
                </span>
              </div>
            </div>

            {/* Instagram Community Proof */}
            <a
              href={MEKARU_DATA.business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-white rounded-2xl border border-[#15380e]/15 shadow-xs hover:border-[#15380e]/40 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#e5a629] to-[#15380e] text-white">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#15380e] group-hover:text-[#1c4413]">
                    Follow @mekarucoaching
                  </div>
                  <div className="text-[11px] text-[#1c1c1c]/60">
                    Daily reflections, health tips & lifestyle inspiration
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#1c1c1c]/40 group-hover:text-[#15380e] transition-colors" />
            </a>
          </div>

          {/* Right Column: Narrative & Credentials (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Story Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#1c1c1c]/80 leading-relaxed font-normal">
              {MEKARU_DATA.coachSteveStory.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Verified Credentials Box */}
            <div className="bg-white rounded-2xl p-6 border border-[#15380e]/15 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#15380e] mb-4">
                <GraduationCap className="w-4 h-4 text-[#e5a629]" />
                <span>Verified Academic Degrees & Board Credentials</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MEKARU_DATA.business.credentials.map((cred, idx) => (
                  <div key={idx} className="p-3 bg-[#FAF9F5] rounded-xl border border-[#15380e]/10">
                    <div className="text-xs font-bold text-[#15380e]">
                      {cred.degree}
                    </div>
                    <div className="text-[11px] text-[#1c1c1c]/70">
                      {cred.institution}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#15380e]/10 flex flex-wrap items-center justify-between text-xs text-[#1c1c1c]/70 gap-2">
                <span>National Board for Health and Wellness Coaching (NBHWC)</span>
                <span className="font-semibold text-[#15380e]">Credential ID: A-3631435</span>
              </div>
            </div>

            {/* Crucial Scope Distinction Callout */}
            <div className="p-5 bg-[#e5a629]/10 rounded-2xl border border-[#e5a629]/40 flex items-start gap-3.5">
              <ShieldAlert className="w-5 h-5 text-[#15380e] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#15380e] mb-1">
                  Important Scope Distinction: Am I Your Doctor?
                </h4>
                <p className="text-xs text-[#1c1c1c]/80 leading-relaxed">
                  {MEKARU_DATA.coachSteveStory.scopeClarification}
                </p>
              </div>
            </div>

            {/* Primary Action */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#15380e] hover:bg-[#1c4413] rounded-xl shadow transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#e5a629]" />
                <span>Meet Coach Steve in a Free 30-Min Call</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
