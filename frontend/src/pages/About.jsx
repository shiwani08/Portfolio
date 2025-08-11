import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>About Me</h1>
      <h2>Skills</h2>
      <ul>
        <li>JavaScript, React.js, Node.js</li>
        <li>MongoDB, Express</li>
        <li>HTML, CSS, Git</li>
      </ul>

      <h2>Experience</h2>
      <p>
        Worked as a Software Developer at XYZ Company, focusing on full-stack web development and scalable solutions.
      </p>

      <h2>Education</h2>
      <p>Bachelor's in Computer Science - ABC University</p>
    </motion.div>
  );
}
