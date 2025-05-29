
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import ParticlesBackground from '@/components/ParticlesBackground';
import * as THREE from 'three';

const FloatingIcon: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={new THREE.Color("#ec4899")} />
      </mesh>
    </Float>
  );
};

const Scene3D: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingIcon position={[-2, 1, 0]} />
      <FloatingIcon position={[2, -1, 0]} />
      <FloatingIcon position={[0, 2, -1]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-full w-full animated-gradient flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-playfair font-bold mb-6 bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Creative Developer
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-700 font-inter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Crafting digital experiences with passion and precision
          </motion.p>
          
          <motion.div
            className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h2 className="text-2xl font-playfair font-semibold mb-4 text-pink-700">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I specialize in creating immersive digital experiences using React, Three.js, 
              and cutting-edge animation libraries. With over 5 years of experience, 
              I've helped startups and enterprises bring their visions to life.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-pink-600">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-pink-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-pink-600">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-pink-300 rounded-full opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-40"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
};

export default HeroSection;
