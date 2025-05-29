
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Box } from '@react-three/drei';

const Project3D: React.FC<{ position: [number, number, number]; color: string }> = ({ position, color }) => {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <Box position={position} args={[1, 1, 0.1]}>
        <meshStandardMaterial color={color} />
      </Box>
    </Float>
  );
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with React and Stripe integration",
    tech: ["React", "Node.js", "MongoDB"],
    color: "#ec4899"
  },
  {
    id: 2,
    title: "3D Portfolio Website",
    description: "Interactive portfolio with Three.js animations",
    tech: ["Three.js", "React", "Framer Motion"],
    color: "#f472b6"
  },
  {
    id: 3,
    title: "AI Dashboard",
    description: "Data visualization dashboard with machine learning insights",
    tech: ["Python", "React", "D3.js"],
    color: "#f9a8d4"
  },
  {
    id: 4,
    title: "Mobile App",
    description: "Cross-platform mobile application with React Native",
    tech: ["React Native", "Firebase", "Redux"],
    color: "#fbcfe8"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-gradient-to-bl from-pink-50 via-white to-pink-100 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Project3D position={[-3, 2, 0]} color="#ec4899" />
            <Project3D position={[3, 1, 0]} color="#f472b6" />
            <Project3D position={[0, -2, 0]} color="#f9a8d4" />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-pink-700">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my best work spanning web development, mobile apps, and interactive experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
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
              <div 
                className="w-full h-48 rounded-xl mb-4 relative overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-white text-4xl font-bold opacity-50"
                    whileHover={{ scale: 1.2, opacity: 0.8 }}
                  >
                    {project.id}
                  </motion.div>
                </div>
              </div>
              
              <h3 className="text-xl font-playfair font-semibold mb-2 text-pink-700 group-hover:text-pink-600">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm group-hover:bg-pink-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 glow-pink"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
