import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

export default function Projects() {
  const handleCardClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Projects</h1>

      <div
        className="project-card"
        onClick={() => handleCardClick("https://github.com/shiwani08/Booked")}
      >
        <h2 className="project-title">Booked</h2>
        <p>Tools & Tech Stack: React.js, CSS, Framer Motion</p>
      </div>

      <div
        className="project-card"
        onClick={() =>
          handleCardClick("https://github.com/shiwani08/ProjectVirtualMouse")
        }
      >
        <h2 className="project-title">Virtual Mouse</h2>
        <p>Tools & Tech Stack: Python</p>
      </div>
    </motion.div>
  );
}
