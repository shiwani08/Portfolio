import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Projects</h1>

      <div className="project-card">
        <h2>Portfolio Website</h2>
        <p>Tools & Tech Stack: React.js, CSS, Framer Motion</p>
        <blockquote>"Really sleek and professional!" – Jane Doe</blockquote>
      </div>

      <div className="project-card">
        <h2>Task Manager App</h2>
        <p>Tools & Tech Stack: MERN Stack (MongoDB, Express, React, Node)</p>
        <blockquote>"Helped me stay productive every day!" – John Smith</blockquote>
      </div>
    </motion.div>
  );
}
