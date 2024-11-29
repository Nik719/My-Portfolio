import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Globe, Server } from 'lucide-react';

const skills = [
  {
    icon: <Code2 size={24} />,
    title: 'Frontend Development',
    description: 'React, JavaScript, HTML5, CSS3'
  },
  {
    icon: <Server size={24} />,
    title: 'Backend Development',
    description: 'Node.js, Express, RESTful APIs'
  },
  {
    icon: <Database size={24} />,
    title: 'Databases',
    description: 'MongoDB, MySQL'
  },
  {
    icon: <Layout size={24} />,
    title: 'UI Development',
    description: 'Responsive Design, Bootstrap, Tailwind'
  },
  {
    icon: <Terminal size={24} />,
    title: 'Tools & Version Control',
    description: 'Git, VS Code, Postman'
  },
  {
    icon: <Globe size={24} />,
    title: 'Web Technologies',
    description: 'RESTful Services, JSON, AJAX'
  }
];

const Skills = () => {
  return (
    <div className="py-16">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-700 p-6 rounded-lg"
          >
            <div className="text-blue-400 mb-4 flex justify-center">
              {skill.icon}
            </div>
            <h4 className="text-xl font-semibold text-white mb-2 text-center">{skill.title}</h4>
            <p className="text-gray-300 text-center">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;