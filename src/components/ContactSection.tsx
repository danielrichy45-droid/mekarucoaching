import React, { useState } from 'react';
import { Mail, Calendar, Instagram, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { MEKARU_DATA } from '../data/mekaruData';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    topic: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-y border-[#15380e]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5a629]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#15380e] font-sans-ui">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#15380e] mb-4 text-balance">
            Let&apos;s Get In Touch!
          </h2>
          <p className="text-base sm:text-lg text-[#1c1c1c]/75 leading-relaxed">
            Have questions about health coaching, our session format, or want to say hello? Reach out directly to Coach Steve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 bg-[#FAF9F5] rounded-2xl border border-[#15380e]/15">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[#15380e]/5 text-[#15380e]">
                  <Mail className="w-5 h-5 text-[#e5a629]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#15380e]">
                  Direct Email
                </span>
              </div>
              <a
                href={`mailto:${MEKARU_DATA.business.email}`}
                className="text-base sm:text-lg font-bold text-[#15380e] hover:underline break-all"
              >
                {MEKARU_DATA.business.email}
              </a>
              <p className="text-xs text-[#1c1c1c]/60 mt-1">
                Responses typically within 24–48 business hours.
              </p>
            </div>

            {/* Direct Calendar Card */}
            <div className="p-6 bg-[#FAF9F5] rounded-2xl border border-[#15380e]/15">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[#15380e]/5 text-[#15380e]">
                  <Calendar className="w-5 h-5 text-[#e5a629]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#15380e]">
                  Schedule A Call
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#1c1c1c]/80 mb-4 leading-relaxed">
                The fastest way to connect is to reserve a complimentary 30-minute discovery call directly on Coach Steve’s calendar.
              </p>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#15380e] hover:bg-[#1c4413] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#e5a629]" />
                <span>Book 30-Min Discovery Call</span>
              </button>
            </div>

            {/* Instagram Card */}
            <a
              href={MEKARU_DATA.business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#FAF9F5] rounded-2xl border border-[#15380e]/15 flex items-center justify-between group hover:border-[#15380e]/40 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#15380e]/5 text-[#15380e]">
                  <Instagram className="w-5 h-5 text-[#e5a629]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#15380e]">
                    Instagram
                  </div>
                  <div className="text-sm font-semibold text-[#1c1c1c]/90">
                    @mekarucoaching
                  </div>
                </div>
              </div>
              <span className="text-xs text-[#15380e] font-semibold group-hover:underline">
                Follow →
              </span>
            </a>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF9F5] rounded-3xl p-6 sm:p-10 border border-[#15380e]/15">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#15380e] text-[#e5a629] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-brand text-2xl font-bold text-[#15380e]">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-sm text-[#1c1c1c]/80 max-w-md mx-auto leading-relaxed">
                  Your message has been received. Coach Steve will review your inquiry and get back to you soon at <strong>{formState.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: '', email: '', topic: 'General Inquiry', message: '' });
                  }}
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-[#15380e] hover:underline cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif-brand text-2xl font-bold text-[#15380e] mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#1c1c1c]/70 mb-4">
                  Feel free to share a brief note on what lifestyle areas you are interested in exploring.
                </p>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#15380e] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-4 py-3 bg-white border border-[#15380e]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15380e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#15380e] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white border border-[#15380e]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15380e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#15380e] mb-1">
                    Topic of Interest
                  </label>
                  <select
                    value={formState.topic}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#15380e]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15380e]"
                  >
                    <option value="General Inquiry">General Question</option>
                    <option value="Jumpstart Package">Healthy Lifestyle Jumpstart (3 sessions)</option>
                    <option value="Builder Package">Healthy Lifestyle Builder (6 sessions)</option>
                    <option value="Consultation Question">Question about Consultation Call</option>
                    <option value="Doctor Scope">Physician vs Coaching Scope</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#15380e] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell Coach Steve what's on your mind or what you hope to work on..."
                    className="w-full px-4 py-3 bg-white border border-[#15380e]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15380e]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-[#15380e] hover:bg-[#1c4413] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#e5a629]" />
                    <span>Send Message to Coach Steve</span>
                  </button>
                </div>

                <p className="text-[11px] text-[#1c1c1c]/60 text-center pt-2">
                  Your information is kept private and never shared with third parties.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
