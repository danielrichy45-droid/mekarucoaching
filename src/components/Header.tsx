import React, { useState } from 'react';
import { Menu, X, Calendar, MessageSquare, ChevronRight } from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenAssistant: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenAssistant }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "What Is Coaching?", href: "#what-is-coaching" },
    { name: "6 Pillars", href: "#six-pillars" },
    { name: "Work With Me", href: "#work-with-me" },
    { name: "Packages", href: "#packages" },
    { name: "About Steve", href: "#about-steve" },
    { name: "Action Tracker", href: "#action-tracker" },
    { name: "FAQ", href: "#faq" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#15380e]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single Brand Logo Element */}
          <a
            href="#"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15380e] rounded-lg p-1"
            aria-label="Mekaru Coaching Home"
          >
            <img
              src="/assets/mekaru-logo.png"
              alt="Mekaru Coaching"
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Zone 2: 4-6 Nav Links, single line with subtle hover underlines */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#1c1c1c]/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#15380e] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#e5a629] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Assistant Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAssistant}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#15380e] bg-[#15380e]/5 hover:bg-[#15380e]/10 border border-[#15380e]/15 rounded-lg transition-colors cursor-pointer"
              title="Chat with Coach Steve's Assistant"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#e5a629]" />
              <span>Ask Assistant</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#15380e] hover:bg-[#1c4413] shadow-sm hover:shadow rounded-lg transition-all cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#e5a629]" />
              <span>Schedule Call</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAssistant}
              className="p-2 text-[#15380e] bg-[#15380e]/5 rounded-lg"
              aria-label="Ask Assistant"
            >
              <MessageSquare className="w-4 h-4 text-[#e5a629]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#15380e] hover:bg-[#15380e]/5 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#15380e]/10 bg-[#FAF9F5] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between py-2 text-base font-medium text-[#1c1c1c] hover:text-[#15380e] border-b border-[#15380e]/5"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#e5a629]" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#15380e] hover:bg-[#1c4413] rounded-lg shadow"
              >
                <Calendar className="w-4 h-4 text-[#e5a629]" />
                <span>Schedule Consultation (Free)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssistant();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-[#15380e] bg-[#15380e]/5 border border-[#15380e]/15 rounded-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#e5a629]" />
                <span>Chat with Website Assistant</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
