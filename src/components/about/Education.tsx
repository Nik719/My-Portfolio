import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationDetails = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Sikkim Manipal University",
      period: "2023 - 2025",
      description: "Currently pursuing MCA with focus on advanced software development and modern technologies.",
      achievements: [
        "Specializing in Full Stack Development",
        "Working on cutting-edge web technologies",
        "Participating in coding competitions"
      ]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "IEC University",
      period: "2019 - 2022",
      description: "Completed BCA with strong foundation in computer science fundamentals and programming.",
      achievements: [
        "Achieved academic excellence",
        "Developed multiple academic projects",
        "Active participant in technical workshops"
      ]
    }
  ];

  return (
    <div className="py-16">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">Education</h3>
      <div className="space-y-8">
        {educationDetails.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-700 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <GraduationCap size={24} className="text-blue-400 mr-3" />
              <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
            </div>
            <p className="text-blue-400 mb-2">{edu.institution}</p>
            <p className="text-gray-400 text-sm mb-4">{edu.period}</p>
            <p className="text-gray-300 mb-4">
              {edu.description}
            </p>
            <div className="mt-4">
              <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;