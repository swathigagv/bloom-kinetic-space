
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import ArticlesSection from '@/components/sections/ArticlesSection';
import CodingProfilesSection from '@/components/sections/CodingProfilesSection';
import SocialLinksSection from '@/components/sections/SocialLinksSection';
import Navigation from '@/components/Navigation';

const sections = [
  { component: HeroSection, name: 'Hero' },
  { component: CallToActionSection, name: 'CTA' },
  { component: ResumeSection, name: 'Resume' },
  { component: ProjectsSection, name: 'Projects' },
  { component: SkillsSection, name: 'Skills' },
  { component: ContactSection, name: 'Contact' },
  { component: ArticlesSection, name: 'Articles' },
  { component: CodingProfilesSection, name: 'Coding' },
  { component: SocialLinksSection, name: 'Social' },
];

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      e.preventDefault();
      setIsScrolling(true);
      
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
      
      setTimeout(() => setIsScrolling(false), 1000);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentSection < sections.length - 1) {
        setIsScrolling(true);
        setCurrentSection(prev => prev + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentSection > 0) {
        setIsScrolling(true);
        setCurrentSection(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling]);

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="h-screen w-full overflow-hidden relative">
      <Navigation 
        currentSection={currentSection} 
        totalSections={sections.length}
        onSectionChange={setCurrentSection}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.4, 0, 0.2, 1] 
          }}
          className="h-full w-full"
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
