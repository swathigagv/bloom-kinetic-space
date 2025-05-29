
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ResumeSection: React.FC = () => {
  const handleDownload = () => {
    // In a real app, this would download the actual resume
    console.log('Downloading resume...');
  };

  return (
    <div className="relative h-full w-full bg-gradient-to-tr from-white via-pink-50 to-pink-100 flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle, #ec4899 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
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
            My Resume
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Download my detailed resume to learn more about my experience, skills, and achievements
          </motion.p>

          {/* Resume Preview Card */}
          <motion.div
            className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto mb-12 hover-lift"
            initial={{ opacity: 0, rotateY: -15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-left space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-2xl font-playfair font-bold text-pink-700">Creative Developer</h3>
                  <p className="text-gray-600">Full-Stack Engineer & UI/UX Designer</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-pink-600 mb-2">Experience</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Senior Developer at TechCorp</li>
                      <li>• Frontend Lead at StartupXYZ</li>
                      <li>• Freelance Developer</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-pink-600 mb-2">Education</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Computer Science Degree</li>
                      <li>• Web Development Certification</li>
                      <li>• UI/UX Design Diploma</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-pink-600 mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Three.js', 'Node.js', 'TypeScript', 'Python'].map((skill) => (
                      <span key={skill} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Button 
              onClick={handleDownload}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-12 py-6 text-xl rounded-full glow-pink hover:shadow-2xl transition-all duration-300 group"
            >
              <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>
          
          <motion.p 
            className="text-sm text-gray-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            PDF format • Last updated: November 2024
          </motion.p>
        </motion.div>
      </div>

      {/* Floating Documents Animation */}
      <motion.div
        className="absolute top-20 left-10 w-8 h-10 bg-pink-200 rounded opacity-30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-6 h-8 bg-pink-300 rounded opacity-40"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
};

export default ResumeSection;
