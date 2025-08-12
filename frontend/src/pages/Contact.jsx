import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Contact Me</h1>
      <div className="contact-icons">
        <a href="mailto:shiwani.sonii08@gmail.com" aria-label="Email" target="_blank" rel="noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/shiwani08" aria-label="GitHub" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </motion.div>
  );
}
