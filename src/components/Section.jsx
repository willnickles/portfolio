import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = ({ id, title, bgColor, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Re-trigger animation every time it enters the viewport
    threshold: 0.2, // Trigger animation when 20% of the section is visible
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`h-screen flex items-center justify-center ${bgColor}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center px-6">
        {/* Animate Title */}
        <motion.h1
          className="text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {/* Animate Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-gray-200">{children}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section;
