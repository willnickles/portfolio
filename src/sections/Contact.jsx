import React from "react";
import { motion } from "framer-motion";
import sportsImage from "../assets/sports.png";
import gymImage from "../assets/gym.png";
import musicImage from "../assets/music.png";

const Contact = () => {
  const interests = [
    {
      title: "Sports",
      description:
        "Passionate about all Chicago Sports. Enjoy playing basketball, soccer, and golf in my free time. I have a very active lifestyle and enjoy all things sports.",
      image: sportsImage,
    },
    {
      title: "Gym",
      description: "Focused on fitness and maintaining a healthy lifestyle through the gym.",
      image: gymImage,
    },
    {
      title: "Music",
      description:
        "I love music from all different genres. In my free time I enjoy listening to music and going to concerts. I am also currently learning the guitar as well.",
      image: musicImage,
    },
  ];

  return (
    <motion.section
      id="contact"
      className="bg-blue-500 py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Contact & Interests
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={interest.image}
              alt={interest.title}
              className="w-24 h-24 mb-4 rounded-full"
            />
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">{interest.title}</h3>
            <p className="text-gray-600 text-center">{interest.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Information */}
      <div className="mt-12 bg-white shadow-lg p-6 rounded-lg mx-auto max-w-4xl">
        <h3 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6">
          {/* Email Section */}
          <div className="p-4">
            <h4 className="text-xl font-semibold text-gray-800">Email</h4>
            <p className="text-gray-600">wnickles.50@gmail.com</p>
          </div>
          {/* Phone Section */}
          <div className="p-4 border-l border-r border-gray-300">
            <h4 className="text-xl font-semibold text-gray-800">Phone</h4>
            <p className="text-gray-600">847-693-8736</p>
          </div>
          {/* LinkedIn Section */}
          <div className="p-4">
            <h4 className="text-xl font-semibold text-gray-800">LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/will-nickles-328b901b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
