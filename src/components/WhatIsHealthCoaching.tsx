import React, { useState } from 'react';
import { Sparkles, Compass, CheckCircle2, ShieldAlert, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

interface WhatIsHealthCoachingProps {
  onOpenConsultation: () => void;
}

export const WhatIsHealthCoaching: React.FC<WhatIsHealthCoachingProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'definition' | 'difference' | 'experience'>('definition');

  return (
    <section id="what-is-coaching" className="py-16 md:py-24 bg-white border-y border-[#15380e]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5a629]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#15380e] font-sans-ui">
              UNDERSTANDING HEALTH & WELLNESS COACHING
            </span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#15380e] mb-4 text-balance">
            Evidence-Informed Guidance. Driven by Your Goals.
          </h2>
          <p className="text-base sm:text-lg text-[#1c1c1c]/75 leading-relaxed">
            Health coaching is not about someone lecturing you on how to live. It is a client-centered, scientific discipline that bridges the gap between wanting to be healthier and actually creating daily habits that stick.
          </p>
        </div>

        {/* Interactive Segmented Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#FAF9F5] border border-[#15380e]/15 rounded-xl gap-1">
            <button
              onClick={() => setActiveTab('definition')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'definition'
                  ? 'bg-[#15380e] text-white shadow-sm'
                  : 'text-[#1c1c1c]/70 hover:text-[#15380e]'
              }`}
            >
              The NBHWC Definition
            </button>
            <button
              onClick={() => setActiveTab('difference')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'difference'
                  ? 'bg-[#15380e] text-white shadow-sm'
                  : 'text-[#1c1c1c]/70 hover:text-[#15380e]'
              }`}
            >
              Health vs. Life Coaching
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'experience'
                  ? 'bg-[#15380e] text-white shadow-sm'
                  : 'text-[#1c1c1c]/70 hover:text-[#15380e]'
              }`}
            >
              What Working Together Is Like
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-4xl mx-auto bg-[#FAF9F5] rounded-2xl p-6 sm:p-10 border border-[#15380e]/15 shadow-sm">
          
          {/* TAB 1: DEFINITION */}
          {activeTab === 'definition' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#15380e]">
                <Compass className="w-6 h-6 text-[#e5a629]" />
                <h3 className="font-serif-brand text-2xl font-bold">
                  The National Board Definition
                </h3>
              </div>

              <blockquote className="p-5 bg-white rounded-xl border-l-4 border-[#e5a629] text-[#1c1c1c]/85 italic text-base leading-relaxed">
                “National Board Certified Health & Wellness Coaches (NBC-HWC) support clients in activating internal strengths and external resources to make sustainable and healthy lifestyle behavior changes. NBC-HWCs use a client-centered approach wherein clients decide their goals, engage in self-discovery or active learning processes, and self-monitor behaviors to increase accountability, all within the context of an interpersonal relationship with a health coach.”
                <span className="block mt-2 text-xs font-semibold not-italic text-[#15380e] font-sans-ui">
                  — National Board for Health and Wellness Coaching (NBHWC)
                </span>
              </blockquote>

              <p className="text-sm sm:text-base text-[#1c1c1c]/80 leading-relaxed">
                Whatever goal you choose to set, Coach Steve ensures you are supported until the desired outcome is achieved. With unconditional positive regard and training to the highest national standards, Coach Steve has the skills and clinical perspective to walk alongside you on your journey.
              </p>

              <div className="pt-4 border-t border-[#15380e]/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={MEKARU_DATA.business.presentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#15380e] hover:text-[#1c4413] hover:underline"
                >
                  <BookOpen className="w-4 h-4 text-[#e5a629]" />
                  <span>View Coach Steve&apos;s &quot;What is Health Coaching?&quot; Slideshow</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#15380e] hover:text-[#1c4413]"
                >
                  <span>Experience It In A Free Call</span>
                  <ArrowRight className="w-4 h-4 text-[#e5a629]" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: HEALTH VS LIFE COACHING */}
          {activeTab === 'difference' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#15380e]">
                <Sparkles className="w-6 h-6 text-[#e5a629]" />
                <h3 className="font-serif-brand text-2xl font-bold">
                  How Health Coaching Differs from General Life Coaching
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div className="bg-white p-5 rounded-xl border border-[#15380e]/10">
                  <div className="text-xs font-bold tracking-wider uppercase text-[#15380e] mb-2">
                    Specialized Healthcare Focus
                  </div>
                  <p className="text-sm text-[#1c1c1c]/80 leading-relaxed mb-3">
                    While life coaches provide valuable personal and career mentorship, health coaches specialize in evidence-based practices for behavioral change directly affecting physical health and vitality.
                  </p>
                  <ul className="space-y-2 text-xs text-[#1c1c1c]/70">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#15380e]" />
                      Addresses chronic disease risk reduction
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#15380e]" />
                      Works in harmony with your primary care provider
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#15380e]/10">
                  <div className="text-xs font-bold tracking-wider uppercase text-[#15380e] mb-2">
                    Medical Board Examination Rigor
                  </div>
                  <p className="text-sm text-[#1c1c1c]/80 leading-relaxed mb-3">
                    Board certification through the NBHWC was developed in partnership with the <strong>National Board of Medical Examiners (NBME)</strong>—the exact organization providing licensing exams for physicians.
                  </p>
                  <ul className="space-y-2 text-xs text-[#1c1c1c]/70">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#15380e]" />
                      Coach Steve Credential ID: {MEKARU_DATA.business.credentialId}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#15380e]" />
                      Ethical guidelines and scope of practice compliance
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-[#e5a629]/10 rounded-xl border border-[#e5a629]/30 text-xs sm:text-sm text-[#1c1c1c]/80 leading-relaxed">
                <strong>Clinically Proven Results:</strong> Scientific literature confirms that health coaching interventions produce measurable, lasting improvements in physical activity, dietary habits, HbA1c levels, BMI, and blood pressure—with outcomes lasting far beyond the coaching engagement itself.
              </div>
            </div>
          )}

          {/* TAB 3: THE EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#15380e]">
                <Compass className="w-6 h-6 text-[#e5a629]" />
                <h3 className="font-serif-brand text-2xl font-bold">
                  What Working With Coach Steve Is Really Like
                </h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#1c1c1c]/80 leading-relaxed">
                <p>
                  Working with Coach Steve is a very fun, energizing, and positive experience. It is also challenging! You will be faced with meaningful questions to consider, new perspectives on your daily routines, and realistic challenges to test in the real world.
                </p>
                <p>
                  Our work extends beyond our 1-on-1 virtual sessions into your daily life. That’s where you will be trying out new things, executing your chosen action steps, and building momentum one day at a time.
                </p>
              </div>

              {/* The "Will You Tell Me What To Do?" Callout */}
              <div className="p-5 bg-white rounded-xl border border-[#15380e]/15">
                <div className="flex items-center gap-2 text-[#15380e] font-bold text-base mb-2">
                  <ShieldAlert className="w-5 h-5 text-[#e5a629]" />
                  <span>Will Coach Steve tell me what to do?</span>
                </div>
                <p className="text-sm text-[#1c1c1c]/80 leading-relaxed">
                  <strong className="text-[#15380e]">Never.</strong> If that is what you are looking for, health coaching is not the right place. In health coaching, you, the client, are always in charge. You set the pace, the goals, and the focus. You define what success looks like and you determine how to proceed.
                </p>
                <p className="text-xs text-[#1c1c1c]/60 mt-2 italic">
                  To make lasting changes in our lives, we need to get used to being the one calling the shots—not simply taking orders from someone else.
                </p>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#15380e] hover:bg-[#1c4413] rounded-lg transition-all shadow cursor-pointer"
                >
                  <span>Experience This in a Complimentary 30-Min Call</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
