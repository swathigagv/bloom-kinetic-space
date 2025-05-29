
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 95, icon: '⚛️' },
  { name: 'Three.js', level: 90, icon: '🎮' },
  { name: 'TypeScript', level: 88, icon: '📝' },
  { name: 'Node.js', level: 85, icon: '🟢' },
  { name: 'Python', level: 82, icon: '🐍' },
  { name: 'UI/UX Design', level: 87, icon: '🎨' },
];

const SkillsSection: React.FC = () => {
  return (
    <div className="relative h-full w-full animated-gradient flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-8 max-w-6xl w-full">
        <motion.h1 
          className="text-5xl md:text-6xl font-playfair font-bold mb-12 text-pink-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-effect rounded-2xl p-6 hover-lift"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-pink-700 mb-4">{skill.name}</h3>
              
              <div className="w-full bg-pink-200 rounded-full h-3 mb-2">
                <motion.div
                  className="bg-gradient-to-r from-pink-500 to-pink-600 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                />
              </div>
              
              <motion.span
                className="text-pink-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 1 }}
              >
                {skill.level}%
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
