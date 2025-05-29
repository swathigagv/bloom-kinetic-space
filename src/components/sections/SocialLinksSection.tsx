
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

const socialLinks = [
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/developer',
    color: 'from-blue-500 to-blue-700',
    description: 'Professional network and career updates'
  },
  {
    platform: 'GitHub',
    icon: Github,
    url: 'https://github.com/developer',
    color: 'from-gray-600 to-gray-800',
    description: 'Code repositories and open source contributions'
  }
];

const SocialLinksSection: React.FC = () => {
  return (
    <div className="relative h-full w-full animated-gradient flex items-center justify-center overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-300 rounded-full opacity-20 blur-2xl"
        animate={{ 
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-pink-400 rounded-full opacity-30 blur-2xl"
        animate={{ 
          scale: [1.5, 1, 1.5],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 text-center px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-playfair font-bold mb-8 text-pink-700"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            Connect With Me
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Let's connect and collaborate on amazing projects together
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-effect rounded-2xl p-8 hover-lift cursor-pointer group min-w-80"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center group-hover:animate-pulse`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-semibold mb-3 text-pink-700 group-hover:text-pink-600 transition-colors">
                    {social.platform}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {social.description}
                  </p>
                  
                  <motion.div
                    className="mt-4 text-pink-500 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Visit Profile →
                  </motion.div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            className="mt-16 glass-effect rounded-2xl p-6 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <h3 className="text-lg font-playfair font-semibold mb-3 text-pink-700">
              Thank You for Visiting! 🚀
            </h3>
            <p className="text-gray-600 text-sm">
              Ready to bring your ideas to life? Let's create something extraordinary together!
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Social Icons */}
      <motion.div
        className="absolute top-10 left-10 text-2xl opacity-30"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        💼
      </motion.div>
      
      <motion.div
        className="absolute top-20 right-10 text-2xl opacity-30"
        animate={{ 
          rotate: [360, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🌐
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 left-20 text-2xl opacity-30"
        animate={{ 
          y: [0, -10, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ✨
      </motion.div>
    </div>
  );
};

export default SocialLinksSection;
