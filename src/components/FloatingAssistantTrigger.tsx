import React, { useState, useEffect } from 'react';
import { MessageSquare, Sparkles, X } from 'lucide-react';

interface FloatingAssistantTriggerProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const FloatingAssistantTrigger: React.FC<FloatingAssistantTriggerProps> = ({ onOpen, isOpen }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (isOpen) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      {/* Main Floating Button */}
      <button
        onClick={onOpen}
        className="group relative flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3.5 bg-[#15380e] hover:bg-[#1c4413] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-[#e5a629]/40"
        aria-label="Chat with Coach Steve's Assistant"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5a629] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e5a629]"></span>
        </span>
        <MessageSquare className="w-5 h-5 text-white" />
        <span className="hidden sm:inline font-sans-ui text-xs font-bold uppercase tracking-wider pr-1">
          Ask Assistant
        </span>
      </button>

      {/* Speech bubble badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl shadow-lg border border-[#15380e]/15 text-xs text-[#1c1c1c] animate-in slide-in-from-left duration-300">
          <Sparkles className="w-3.5 h-3.5 text-[#e5a629]" />
          <span>Have questions? I can help you!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-600 ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
};
