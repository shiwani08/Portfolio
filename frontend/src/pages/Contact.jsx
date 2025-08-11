import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Contact Me</h1>
      <p>Name: Your Name</p>
      <p>Email: your.email@example.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">linkedin.com/in/yourusername</a></p>
      <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">github.com/yourusername</a></p>
    </motion.div>
  );
}
