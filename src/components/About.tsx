import React from 'react';
import { motion } from 'framer-motion';
import Skills from './about/Skills';
import Experience from './about/Experience';
import Education from './about/Education';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 mb-6">
              As a fresh MCA graduate with a passion for web development, I bring enthusiasm and 
              modern technical skills to create innovative digital solutions. My recent internship 
              experience has equipped me with practical knowledge in real-world development scenarios.
            </p>
            <p className="text-xl text-gray-300">
              I'm eager to contribute to meaningful projects and continue growing as a developer. 
              My focus is on creating efficient, user-friendly applications while staying current 
              with the latest web technologies.
            </p>
          </div>
        </motion.div>

        <Experience />
        <Skills />
        <Education />
      </div>
    </section>
  );
};

export default About;