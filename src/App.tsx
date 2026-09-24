/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsHealthCoaching } from './components/WhatIsHealthCoaching';
import { SixPillars } from './components/SixPillars';
import { WorkWithMe } from './components/WorkWithMe';
import { Packages } from './components/Packages';
import { DiscoveryCall } from './components/DiscoveryCall';
import { MeetCoachSteve } from './components/MeetCoachSteve';
import { ActionTrackerSection } from './components/ActionTrackerSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { DisclaimerModal } from './components/DisclaimerModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { AiAssistantModal } from './components/AiAssistantModal';
import { FloatingAssistantTrigger } from './components/FloatingAssistantTrigger';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const handleLearnMore = () => {
    const el = document.querySelector('#what-is-coaching');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1c1c1c] flex flex-col font-sans-ui selection:bg-[#e5a629]/25 selection:text-[#15380e]">
      {/* Top Header Navigation */}
      <Header
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onLearnMore={handleLearnMore}
        />

        {/* What is Health Coaching? */}
        <WhatIsHealthCoaching
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 6 Pillars of Lifestyle Medicine */}
        <SixPillars
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Work With Me (4 Core Tenets) */}
        <WorkWithMe
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Coaching Packages */}
        <Packages
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Discovery Call (Complimentary 30-min call) */}
        <DiscoveryCall
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Meet Coach Steve (Bio, Credentials, Scope) */}
        <MeetCoachSteve
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Free Healthy Action Tracker Section */}
        <ActionTrackerSection />

        {/* Frequently Asked Questions */}
        <FaqSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenAssistant={() => setIsAssistantOpen(true)}
        />

        {/* Contact & Inquiry Section */}
        <ContactSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <AiAssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        onOpenConsultation={() => {
          setIsAssistantOpen(false);
          setIsConsultationOpen(true);
        }}
      />

      {/* Floating Chat Trigger in bottom-right */}
      <FloatingAssistantTrigger
        isOpen={isAssistantOpen}
        onOpen={() => setIsAssistantOpen(true)}
      />
    </div>
  );
}
