import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["developer", "vlogger", "graphics designer", "content creator"];

export default function AnimatedRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // Change word every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-roles-container">
      <span className="static-text">I am a </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="animated-text"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="static-text">.</span>
    </div>
  );
}
