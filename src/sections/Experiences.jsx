import React from "react";
import { Timeline } from "antd";
import { motion } from "framer-motion";

const Experiences = () => {
  const timelineData = [
    {
      title: "Associate Software Developer",
      company: "Uline",
      date: "July 2024 – Jan 2025",
      description: [
        "Develop, build, and evaluate Java Spring REST API endpoints to optimize data transfer across multiple microservices and databases.",
        "Utilize Hibernate and SQL to execute queries on MSSQL and IBM DB2 databases containing over 20 million customer records.",
        "Achieved 90%+ code coverage through comprehensive JUnit test cases, ensuring robust and maintainable code.",
        "Leverage various tools to track data flows and API calls across different microservices within the company.",
        "Collaborate with cross-functional teams to troubleshoot and resolve performance bottlenecks in the system, ensuring smooth integration between different services and databases.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Uline",
      date: "May 2023 – Aug 2023",
      description: [
        "Developed a company-wide project forecaster web application to streamline data visualization and decision-making for managers and employees.",
        "Applied Agile methodology, object-oriented programming, and full-stack development to build and test REST APIs with JUnit.",
        "Created interactive front-end components such as tables, status bars, and filters using Angular, TypeScript, and Java to seamlessly interact with backend services.",
        "Reduced bug reports by 30% through collaborating with the QA team to find bottlenecks within services.",
      ],
    },
    {
      title: "Bachelor of Computer Science",
      company: "University of Iowa",
      date: "Graduation - May 2024",
      description: [
        "Major: Computer Science, Minor: Business Administration.",
        "Relevant Coursework: Algorithms, Data Structures, Intro to Software Development, Intro to Networks, Discrete Mathematics, Computer Science Fundamentals, Linear Algebra",
      ],
    },
  ];

  return (
    <motion.section
      id="experiences"
      className="bg-white py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        Experiences
      </h2>
      <div className="flex justify-center">
        <Timeline className="max-w-4xl text-black">
          {timelineData.map((item, index) => (
            <Timeline.Item key={index} color="blue">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h3 className="font-bold text-lg">{item.title}</h3>
                <h4 className="text-gray-700">
                  {item.company} | {item.date}
                </h4>
                <ul className="list-disc ml-5 mt-2 text-gray-600">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </motion.section>
  );
};

export default Experiences;
