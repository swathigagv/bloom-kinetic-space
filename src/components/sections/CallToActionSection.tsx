
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CallToActionSection: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-pink-100 via-white to-pink-200 flex items-center justify-center overflow-hidden">
      {/* Animated Background Blurs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full opacity-20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-400 rounded-full opacity-30 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-playfair font-bold mb-8 text-pink-700"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Ready to Create Something Amazing?
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Let's bring your vision to life with cutting-edge technology and creative design
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-12 py-6 text-xl rounded-full glow-pink hover:shadow-2xl transition-all duration-300"
              >
                <motion.span
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(236, 72, 153, 0.3)",
                      "0 0 40px rgba(236, 72, 153, 0.6)",
                      "0 0 20px rgba(236, 72, 153, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Hire Me
                </motion.span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-pink-400 text-pink-600 hover:bg-pink-50 px-12 py-6 text-xl rounded-full transition-all duration-300"
              >
                View My Work
              </Button>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            className="mt-16 glass-effect rounded-2xl p-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <h3 className="text-xl font-playfair font-semibold mb-4 text-pink-700">Get In Touch</h3>
            <div className="space-y-2 text-gray-600">
              <p>📧 hello@developer.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 Available worldwide</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-4 h-4 bg-pink-500 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute top-20 right-10 w-6 h-6 bg-pink-400 rounded-full"
        animate={{ 
          scale: [1.5, 1, 1.5],
          opacity: [0.8, 0.3, 0.8]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-10 left-20 w-3 h-3 bg-pink-600 rounded-full"
        animate={{ 
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  );
};

export default CallToActionSection;
