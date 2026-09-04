'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from '../components/nav/Navbar';
import { SectionIndicator } from '../components/nav/SectionIndicator';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { FounderSection } from '../components/sections/FounderSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/Footer';
import { SECTIONS } from '../components/content/copy';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Smooth programmatic scroll handler
  const handleNavigate = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  }, []);

  // IntersectionObserver to accurately track the active section during natural scrolling
  useEffect(() => {
    const sectionElements = SECTIONS.map((sec) =>
      document.getElementById(sec.id)
    ).filter(Boolean) as HTMLElement[];

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section is prominent in viewport
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative bg-[#090a0c] text-[#f5f6f8] min-h-screen">
      {/* Fixed Top Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Fixed Right Section Numeric Indicator */}
      <SectionIndicator
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* 01 — HOME */}
      <HeroSection onNavigate={handleNavigate} />

      {/* 02 — ABOUT */}
      <AboutSection />

      {/* 03 — CAPABILITIES */}
      <CapabilitiesSection />

      {/* 04 — FOUNDER */}
      <FounderSection />

      {/* 05 — CONTACT */}
      <ContactSection />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </main>
  );
}
