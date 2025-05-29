
import React from 'react';
import { motion } from 'framer-motion';

const profiles = [
  {
    platform: 'GitHub',
    username: '@developer',
    stats: '100+ repos',
    description: 'Open source projects and contributions',
    color: 'from-gray-600 to-gray-800',
    icon: '⚡'
  },
  {
    platform: 'LeetCode',
    username: '@coder',
    stats: '500+ problems',
    description: 'Algorithm and data structure solutions',
    color: 'from-orange-500 to-orange-700',
    icon: '🧩'
  },
  {
    platform: 'SkillRack',
    username: '@skillmaster',
    stats: 'Top 5%',
    description: 'Competitive programming achievements',
    color: 'from-blue-500 to-blue-700',
    icon: '🏆'
  },
  {
    platform: 'CodePen',
    username: '@creative',
    stats: '50+ pens',
    description: 'Creative web experiments and demos',
    color: 'from-green-500 to-green-700',
    icon: '🎨'
  }
];

const CodingProfilesSection: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-pink-100 via-white to-pink-200 flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-8 max-w-6xl w-full">
        <motion.h1 
          className="text-5xl md:text-6xl font-playfair font-bold mb-8 text-pink-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Coding Profiles
        </motion.h1>

        <motion.p 
          className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Explore my coding journey across different platforms and challenges
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.2)"
              }}
              className="glass-effect rounded-2xl p-6 hover-lift cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">
                {profile.icon}
              </div>
              
              <h3 className="text-xl font-playfair font-semibold mb-2 text-pink-700">
                {profile.platform}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3">{profile.username}</p>
              
              <div className={`bg-gradient-to-r ${profile.color} text-white px-4 py-2 rounded-full text-sm font-medium mb-3`}>
                {profile.stats}
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingProfilesSection;
