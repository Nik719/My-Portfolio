import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'HighOnDesign Studio LLP',
    position: 'Full Stack Developer Intern',
    period: 'May 2024 - Aug 2024',
    description: 'Gained hands-on experience in full-stack web development through an intensive internship program.',
    achievements: [
      'Collaborated with senior developers on client projects',
      'Developed and maintained responsive web applications',
      'Worked with modern web technologies and best practices',
      'Participated in daily stand-ups and agile development processes'
    ]
  }
];

const Experience = () => {
  return (
    <div className="py-16">
      <h3 className="text-3xl font-bold text-white mb-12 text-center">Professional Experience</h3>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-blue-400"
          >
            <div className="absolute -left-3 top-0">
              <div className="bg-blue-400 p-2 rounded-full">
                <Briefcase size={16} className="text-gray-900" />
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-1">{exp.position}</h4>
              <p className="text-blue-400 mb-2">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 text-sm">{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;