import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

interface FaqSectionProps {
  onOpenConsultation: () => void;
  onOpenAssistant: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultation, onOpenAssistant }) => {
  const [openIds, setOpenIds] = useState<string[]>(['what-is-coaching', 'am-i-your-doctor']);

  const toggleItem = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(i => i !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF9F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5a629]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#15380e] font-sans-ui">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#15380e] mb-4 text-balance">
            Everything You Need to Know
          </h2>
          <p className="text-base sm:text-lg text-[#1c1c1c]/75 max-w-2xl mx-auto leading-relaxed">
            Straightforward answers to the most common questions about health coaching, doctor-client boundaries, and our working process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {MEKARU_DATA.faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#15380e]/15 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left cursor-pointer hover:bg-[#FAF9F5]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-brand text-lg sm:text-xl font-bold text-[#15380e] pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#15380e]/5 text-[#15380e] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#15380e] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#1c1c1c]/80 leading-relaxed border-t border-[#15380e]/10 whitespace-pre-line font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#15380e]/15 shadow-xs text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-[#e5a629]/15 rounded-xl shrink-0 text-[#15380e]">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#15380e]">
                Have a question not listed here?
              </h4>
              <p className="text-xs sm:text-sm text-[#1c1c1c]/70">
                Ask our interactive website assistant or discuss directly with Coach Steve during a free call.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAssistant}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#15380e] bg-[#15380e]/5 hover:bg-[#15380e]/10 rounded-xl transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#e5a629]" />
              <span>Ask Assistant</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#15380e] hover:bg-[#1c4413] rounded-xl transition-all shadow cursor-pointer"
            >
              <span>Schedule Call</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
