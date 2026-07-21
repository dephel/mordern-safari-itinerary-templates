'use client';
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/safari/Header';
import NavigationMenu from './components/safari/NavigationMenu';
import AgentContactModal from './components/safari/AgentContactModal';
import TranslateWidget from './components/safari/TranslateWidget';
import SectionCover from './components/safari/sections/SectionCover';
import SectionAboutSafari from './components/safari/sections/SectionAboutSafari';
import SectionIntroNote from './components/safari/sections/SectionIntroNote';
import SectionDocuments from './components/safari/sections/SectionDocuments';
import SectionPreTravel from './components/safari/sections/SectionPreTravel';
import SectionTravelBrief from './components/safari/sections/SectionTravelBrief';
import SectionMap from './components/safari/sections/SectionMap';
import SectionDay from './components/safari/sections/SectionDay';
import SectionCosts from './components/safari/sections/SectionCosts';
import SectionTerms from './components/safari/sections/SectionTerms';
import { itineraryData } from './data/itineraryData';

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false);
  const [agentModalOpen, setAgentModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const staticSections = [
    { id: 'cover', label: 'Cover' },
    { id: 'about', label: 'About  Modern Safari' },
    { id: 'intro', label: 'An Introductory Note' },
    { id: 'documents', label: 'Your Travel Documents' },
    { id: 'pretravel', label: 'Prepare For Your Trip' },
    { id: 'brief', label: 'Travel Brief' },
    { id: 'map', label: 'Map' },
  ];

  const daySections = itineraryData.days.map((day, i) => ({
    id: `day${i + 1}`,
    label: `Day ${i + 1}`,
    date: day.dateShort,
  }));

  const endSections = [
    { id: 'costs', label: 'Costs' },
    { id: 'terms', label: 'Terms & Conditions' },
  ];

  const allSections = [...staticSections, ...daySections, ...endSections];

  const scrollToSection = (index: number) => {
    const el = sectionRefs.current[index];
    const container = scrollRef.current;
    if (el && container) {
      container.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    }
    setNavOpen(false);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollTop = container.scrollTop + 60;
      let current = 0;
      sectionRefs.current.forEach((ref, i) => {
        if (ref && ref.offsetTop <= scrollTop) {
          current = i;
        }
      });
      setActiveSection(current);
    };
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionComponents = [
    <SectionCover key='cover' />,
    <SectionAboutSafari key='about' />,
    <SectionIntroNote key='intro' />,
    <SectionDocuments key='documents' />,
    <SectionPreTravel key='pretravel' />,
    <SectionTravelBrief key='brief' />,
    <SectionMap key='map' />,
    ...itineraryData.days.map((day, i) => (
      <SectionDay key={`day${i + 1}`} day={day} dayNumber={i + 1} />
    )),
    <SectionCosts key='costs' />,
    <SectionTerms key='terms' />,
  ];

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: '#f8f8f8',
        fontFamily: "'EB Garamond', Georgia, 'Times New Roman', times, serif",
      }}
    >
      {/* Fixed Header */}
      <Header
        onBurgerClick={() => setNavOpen(true)}
        onAgentClick={() => setAgentModalOpen(true)}
      />

      {/* Navigation Menu */}
      <NavigationMenu
        open={navOpen}
        onClose={() => setNavOpen(false)}
        sections={allSections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Main scrollable content */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          background: 'white',
          paddingBottom: '52px',
        }}
      >
        {sectionComponents.map((component, i) => (
          <div
            key={allSections[i]?.id || i}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
          >
            {component}
          </div>
        ))}
      </div>

      {/* Agent Contact Modal */}
      {agentModalOpen && (
        <AgentContactModal onClose={() => setAgentModalOpen(false)} />
      )}

      {/* Translate Widget */}
      <TranslateWidget />
    </div>
  );
}
