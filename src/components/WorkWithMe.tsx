import React from 'react';
import { Compass, BookCheck, HeartHandshake, Lightbulb, ArrowRight } from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

interface WorkWithMeProps {
  onOpenConsultation: () => void;
}

export const WorkWithMe: React.FC<WorkWithMeProps> = ({ onOpenConsultation }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-[#e5a629]" />;
      case 1:
        return <BookCheck className="w-5 h-5 text-[#e5a629]" />;
      case 2:
        return <HeartHandshake className="w-5 h-5 text-[#e5a629]" />;
      case 3:
        return <Lightbulb className="w-5 h-5 text-[#e5a629]" />;
      default:
        return null;
    }
  };

  return (
    <section id="work-with-me" className="py-16 md:py-24 bg-white border-y border-[#15380e]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5a629]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#15380e] font-sans-ui">
              COACHING PHILOSOPHY & VALUES
            </span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#15380e] mb-4 text-balance">
            Work With Me
          </h2>
          <p className="text-base sm:text-lg text-[#1c1c1c]/75 leading-relaxed">
            Four guiding principles form the bedrock of every coaching interaction with Coach Steve. No cookie-cutter programs, no scolding, and no gimmicks.
          </p>
        </div>

        {/* 4 Cards Grid with Authentic Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {MEKARU_DATA.workWithMe.map((item, idx) => (
            <div
              key={item.title}
              className="group bg-[#FAF9F5] rounded-2xl overflow-hidden border border-[#15380e]/15 shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              {/* Authentic Photo Container */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-stone-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-white/20 backdrop-blur-md">
                      {getIcon(idx)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FAF9F5]">
                      {item.subtitle}
                    </span>
                  </div>
                  <span className="text-xs font-mono opacity-80">0{idx + 1}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-brand text-2xl font-bold text-[#15380e] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#1c1c1c]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#15380e]/10 flex items-center justify-between text-xs font-semibold text-[#15380e]">
                  <span>Your goals · Your terms</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e5a629]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#15380e] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-center sm:text-left">
            <h3 className="font-serif-brand text-xl sm:text-2xl font-bold mb-1">
              Ready to experience this collaborative partnership?
            </h3>
            <p className="text-xs sm:text-sm text-white/80">
              Schedule a 30-minute discovery call to discuss your health goals directly with Coach Steve.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#15380e] bg-white hover:bg-[#FAF9F5] rounded-xl transition-all shadow cursor-pointer shrink-0"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#e5a629]" />
          </button>
        </div>

      </div>
    </section>
  );
};
