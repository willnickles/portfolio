import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 80 },
  { name: "JUnit", level: 80 },
  { name: "Postman", level: 80 },
  { name: "Angular", level: 70 },
  { name: "SpringBoot", level: 70 },
  { name: "Python", level: 70 },
  { name: "SQL", level: 55 },
  { name: "HTML", level: 55 },
  { name: "TypeScript", level: 55 },
  { name: "CSS", level: 50 },
  { name: "JavaScript", level: 40 },
  { name: "React", level: 30 },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="bg-blue-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false, amount: 0.3 }} // Ensures it animates every time it's in view
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }} // Ensures individual skill animation triggers on view
            >
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <motion.div
                  className="bg-green-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5 }}
                ></motion.div>
              </div>
              <p className="text-gray-300 text-sm"></p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
