import React, { useState } from 'react';
import { Download, Check, Sparkles, AlertCircle, Printer, RefreshCw, ArrowRight } from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

export const ActionTrackerSection: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>('Physical Activity');
  const [actionText, setActionText] = useState<string>('Take a 15-minute walk after dinner');
  const [frequency, setFrequency] = useState<string>('5 days/week');
  const [completedDays, setCompletedDays] = useState<boolean[]>([true, true, true, false, false, false, false]);

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const toggleDay = (index: number) => {
    const updated = [...completedDays];
    updated[index] = !updated[index];
    setCompletedDays(updated);
  };

  const handlePrint = () => {
    window.print();
  };

  const quickAreaActions: Record<string, string> = {
    'Physical Activity': 'Take a 15-minute walk after dinner',
    'Healthy Eating': 'Eat 1 bowl of oatmeal with blueberries for breakfast',
    'Restorative Sleep': 'Turn off phone & computer screens by 9:00pm',
    'Stress Management': 'Practice 3 minutes of slow box breathing at 2:00pm',
    'Social Connection': 'Send a genuine text check-in to one friend',
    'Purpose & Meaning': 'Write down 3 things I am deeply grateful for in a journal',
    'Avoiding Risky Substances': 'Swap evening alcoholic beverage for sparkling lemon water',
    'Fun & Joy': 'Spend 20 minutes sketching or listening to favorite album'
  };

  const selectArea = (area: string) => {
    setSelectedArea(area);
    if (quickAreaActions[area]) {
      setActionText(quickAreaActions[area]);
    }
  };

  return (
    <section id="action-tracker" className="py-16 md:py-24 bg-white border-y border-[#15380e]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5a629]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#15380e] font-sans-ui">
              FREE HEALTH RESOURCE & TOOL
            </span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#15380e] mb-4 text-balance">
            The Healthy Action Tracker
          </h2>
          <p className="text-base sm:text-lg text-[#1c1c1c]/75 leading-relaxed">
            {MEKARU_DATA.actionTrackerGuide.subtitle} Keep your daily momentum visible on your desk, your refrigerator, or your phone.
          </p>
        </div>

        {/* 2-Column Showcase: Download Official PDF & Interactive Planner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Official PDF Download & Preview (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF9F5] rounded-3xl p-6 sm:p-8 border border-[#15380e]/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#15380e] bg-white px-3 py-1 rounded-full border border-[#15380e]/10">
                  Official Printable PDF
                </span>
                <span className="text-xs text-[#1c1c1c]/60">100% Free</span>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#15380e]/15 shadow-sm mb-6 bg-white">
                <img
                  src="/assets/action-tracker-sample.png"
                  alt="Mekaru Coaching Healthy Action Tracker Sheet"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="font-serif-brand text-xl font-bold text-[#15380e] mb-2">
                Download Coach Steve&apos;s Printable Tracker
              </h3>
              <p className="text-xs sm:text-sm text-[#1c1c1c]/75 leading-relaxed mb-6">
                Print out the official clean grid, write your weekly chosen action, and mark your checkoffs as you build daily momentum.
              </p>
            </div>

            <a
              href="/assets/Mekaru-Healthy-Action-Tracker.pdf"
              download="Mekaru-Healthy-Action-Tracker.pdf"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 bg-[#15380e] hover:bg-[#1c4413] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#e5a629]" />
              <span>Download Free PDF Tracker</span>
            </a>
          </div>

          {/* Right Column: Interactive Action Creator Tool (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF9F5] rounded-3xl p-6 sm:p-8 border border-[#15380e]/15">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#15380e]/10">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#e5a629]" />
                <h3 className="font-serif-brand text-2xl font-bold text-[#15380e]">
                  Interactive Action Planner
                </h3>
              </div>
              <span className="text-xs font-semibold text-[#15380e]">3 Simple Steps</span>
            </div>

            {/* Step 1: Area of Life */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#15380e] mb-2">
                Step 1: Choose an Area of Life Calling for Change
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {MEKARU_DATA.actionTrackerGuide.steps[0].categories?.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => selectArea(cat)}
                    className={`py-2 px-2.5 text-[11px] sm:text-xs font-medium rounded-lg border transition-all text-center cursor-pointer ${
                      selectedArea === cat
                        ? 'bg-[#15380e] text-white border-[#15380e] font-bold shadow-xs'
                        : 'bg-white text-[#1c1c1c]/80 border-[#15380e]/15 hover:border-[#15380e]/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Make It Small & Specific */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#15380e] mb-2">
                Step 2: Craft Your Action (Small, Simple & Specific)
              </label>
              <input
                type="text"
                value={actionText}
                onChange={(e) => setActionText(e.target.value)}
                placeholder="e.g., Take a 15-minute walk after dinner"
                className="w-full px-4 py-3 bg-white border border-[#15380e]/20 rounded-xl text-sm font-medium text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#15380e]"
              />

              {/* Coach Steve's Golden Rule Comparison */}
              <div className="mt-3 p-3 bg-white rounded-xl border border-[#15380e]/10 text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-rose-700">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span><strong>Too Big / Vague:</strong> “Run a 5K” or “Eat healthier”</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-800">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span><strong>Simple & Specific:</strong> “20-min walk after dinner” or “Oatmeal with blueberries”</span>
                </div>
              </div>
            </div>

            {/* Step 3: Interactive Tracker Matrix */}
            <div className="bg-white rounded-2xl p-5 border border-[#15380e]/15">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#15380e]">
                  Step 3: Consistency Tracker
                </span>
                <span className="text-xs text-[#1c1c1c]/60">Click days to mark progress</span>
              </div>

              <div className="p-3 bg-[#FAF9F5] rounded-xl mb-4 text-xs font-semibold text-[#15380e] flex items-center justify-between">
                <span>Action: {actionText || 'My Chosen Healthy Habit'}</span>
                <span className="text-[11px] text-[#1c1c1c]/60">{selectedArea}</span>
              </div>

              <div className="grid grid-cols-7 gap-2 text-center mb-4">
                {daysOfWeek.map((day, idx) => {
                  const done = completedDays[idx];
                  return (
                    <button
                      key={day}
                      onClick={() => toggleDay(idx)}
                      className={`p-2 sm:p-3 rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                        done
                          ? 'bg-[#15380e] text-white border-[#15380e] shadow-xs'
                          : 'bg-white text-[#1c1c1c]/70 border-[#15380e]/15 hover:border-[#15380e]/30'
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase">{day}</span>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${done ? 'bg-[#e5a629] text-[#15380e] font-bold' : 'border border-dashed border-[#15380e]/30'}`}>
                        {done ? '✓' : ''}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#15380e]/10 text-xs">
                <span className="text-[#1c1c1c]/70">
                  Completed this week:{' '}
                  <strong className="text-[#15380e]">
                    {completedDays.filter(Boolean).length} of 7 days
                  </strong>
                </span>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#15380e] hover:underline cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Tracker</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
