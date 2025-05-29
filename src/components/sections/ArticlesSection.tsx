
import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    title: "Building Interactive 3D Experiences with Three.js",
    excerpt: "Learn how to create stunning 3D web experiences that engage users and showcase your creativity.",
    date: "Nov 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Future of Web Animation with Framer Motion",
    excerpt: "Explore advanced animation techniques that bring your React applications to life.",
    date: "Nov 10, 2024",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Optimizing React Performance for Large Applications",
    excerpt: "Best practices and techniques for maintaining smooth performance in complex React apps.",
    date: "Nov 5, 2024",
    readTime: "8 min read"
  }
];

const ArticlesSection: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-gradient-to-tl from-pink-50 via-white to-pink-100 overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-pink-700">
            Featured Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights and tutorials on web development, design, and technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="glass-effect rounded-2xl p-8 hover-lift cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-playfair font-semibold mb-3 text-pink-700 group-hover:text-pink-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <motion.div
                  className="ml-6 text-pink-400 group-hover:text-pink-600"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

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
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ArticlesSection;
