
import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentSection: number;
  totalSections: number;
  onSectionChange: (section: number) => void;
}

const sectionNames = [
  'Hero', 'CTA', 'Resume', 'Projects', 'Skills', 'Contact', 'Articles', 'Coding', 'Social'
];

const Navigation: React.FC<NavigationProps> = ({ currentSection, totalSections, onSectionChange }) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
      {Array.from({ length: totalSections }, (_, index) => (
        <motion.button
          key={index}
          onClick={() => onSectionChange(index)}
          className={`block w-3 h-3 rounded-full transition-all duration-300 ${
            currentSection === index 
              ? 'bg-pink-500 scale-150' 
              : 'bg-pink-200 hover:bg-pink-300'
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          title={sectionNames[index]}
        />
      ))}
    </div>
  );
};

export default Navigation;
