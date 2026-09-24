import React, { useState } from 'react';
import { 
  Apple, 
  Activity, 
  Moon, 
  Brain, 
  Users, 
  ShieldX, 
  Check, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Heart,
  Zap,
  Smile
} from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

interface SixPillarsProps {
  onOpenConsultation: () => void;
}

export const SixPillars: React.FC<SixPillarsProps> = ({ onOpenConsultation }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('nutrition');

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'nutrition':
        return <Apple className="w-5 h-5 text-[#e5a629]" />;
      case 'physical-activity':
        return <Activity className="w-5 h-5 text-[#e5a629]" />;
      case 'sleep':
        return <Moon className="w-5 h-5 text-[#e5a629]" />;
      case 'stress-management':
        return <Brain className="w-5 h-5 text-[#e5a629]" />;
      case 'social-connection':
        return <Users className="w-5 h-5 text-[#e5a629]" />;
      case 'substance-avoidance':
        return <ShieldX className="w-5 h-5 text-[#e5a629]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#e5a629]" />;
    }
  };

  const selectedPillar = MEKARU_DATA.pillars.find(p => p.id === selectedPillarId) || MEKARU_DATA.pillars[0];

  return (
    <section id="six-pillars" className="py-16 md:py-24 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5a629]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#15380e] font-sans-ui">
              LIFESTYLE MEDICINE CORE FRAMEWORK
            </span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#15380e] mb-4 text-balance">
            The 6 Pillars of Lifestyle Medicine
          </h2>
          <p className="text-base sm:text-lg text-[#1c1c1c]/75 leading-relaxed">
            In his practice, Coach Steve focuses on the American College of Lifestyle Medicine’s (ACLM) evidence-based pillars to help clients reduce disease risk, increase vitality, and build sustainable healthy habits.
          </p>
        </div>

        {/* Live Original Proven Outcomes Grid */}
        <div className="mb-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#15380e]/10 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-[#15380e] text-center mb-6">
            A Board-Certified Health & Wellness Coach Can Help You:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#15380e]/5">
              <TrendingUp className="w-5 h-5 text-[#15380e] mx-auto mb-2" />
              <div className="text-xs font-bold text-[#1c1c1c]">Achieve a Healthy Weight</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#15380e]/5">
              <Heart className="w-5 h-5 text-[#15380e] mx-auto mb-2" />
              <div className="text-xs font-bold text-[#1c1c1c]">Lower Blood Pressure</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#15380e]/5">
              <ShieldX className="w-5 h-5 text-[#15380e] mx-auto mb-2" />
              <div className="text-xs font-bold text-[#1c1c1c]">Decrease Chronic Risk</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#15380e]/5">
              <Zap className="w-5 h-5 text-[#e5a629] mx-auto mb-2" />
              <div className="text-xs font-bold text-[#1c1c1c]">Boost Energy Levels</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#15380e]/5">
              <Users className="w-5 h-5 text-[#15380e] mx-auto mb-2" />
              <div className="text-xs font-bold text-[#1c1c1c]">Strengthen Relationships</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#15380e]/5">
              <Smile className="w-5 h-5 text-[#15380e] mx-auto mb-2" />
              <div className="text-xs font-bold text-[#1c1c1c]">Improve Lab Markers & Fitness</div>
            </div>
          </div>
        </div>

        {/* Interactive Pillar Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pillar Selector Buttons (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {MEKARU_DATA.pillars.map((pillar) => {
              const isSelected = pillar.id === selectedPillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#15380e] text-white border-[#15380e] shadow-md'
                      : 'bg-white text-[#1c1c1c] border-[#15380e]/15 hover:border-[#15380e]/40 hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/10' : 'bg-[#15380e]/5'}`}>
                      {getPillarIcon(pillar.id)}
                    </div>
                    <div>
                      <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-[#15380e]'}`}>
                        {pillar.name}
                      </div>
                      <div className={`text-xs line-clamp-1 ${isSelected ? 'text-white/80' : 'text-[#1c1c1c]/60'}`}>
                        {pillar.shortDesc}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[#e5a629] translate-x-1' : 'text-[#1c1c1c]/30'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Pillar Card (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#15380e]/15 shadow-sm">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#15380e]/10">
              <div className="p-2.5 rounded-xl bg-[#15380e]/5">
                {getPillarIcon(selectedPillar.id)}
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#e5a629]">
                  Interactive Pillar Deep-Dive
                </span>
                <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#15380e]">
                  {selectedPillar.name}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-[#1c1c1c]/80 leading-relaxed mb-6 font-normal">
              {selectedPillar.shortDesc}
            </p>

            {/* How Coaching Helps */}
            <div className="mb-6 p-5 rounded-xl bg-[#FAF9F5] border border-[#15380e]/10">
              <div className="text-xs font-bold uppercase tracking-wider text-[#15380e] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#e5a629]" />
                <span>How Health Coaching Helps You in this Area</span>
              </div>
              <p className="text-sm text-[#1c1c1c]/80 leading-relaxed">
                {selectedPillar.coachingRole}
              </p>
            </div>

            {/* Real Action Ideas */}
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1c1c1c]/70 mb-3">
                Examples of Simple Actions You Might Explore:
              </div>
              <div className="space-y-2">
                {selectedPillar.actionIdeas.map((idea, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1c1c1c]/80">
                    <Check className="w-4 h-4 text-[#15380e] shrink-0 mt-0.5" />
                    <span>{idea}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safe Scope Note */}
            <div className="pt-4 border-t border-[#15380e]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[11px] text-[#1c1c1c]/60 italic max-w-md">
                Note: Health coaching is educational and supportive. It does not replace medical treatment or clinical prescription.
              </p>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#15380e] hover:bg-[#1c4413] rounded-lg transition-colors cursor-pointer shrink-0"
              >
                <span>Discuss Your Goals</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
