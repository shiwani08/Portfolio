import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Home.css";
import profileImg from "../assets/profile_pic.jpg";

const roles = ["developer", "vlogger", "graphics designer", "content creator"];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* LEFT SIDE */}
      <motion.div
        className="home-left"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h1 className="name">Hi, I'm Shiwani</h1>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="home-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="animated-roles-container">
          <span className="static-text">I’m a</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              className="animated-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="home-intro">
          Welcome to my portfolio! I’m a passionate software developer who loves
          building creative, efficient, and user-friendly applications. My focus
          is on crafting experiences that are not only functional but also
          enjoyable to use. Scroll down to learn more about my skills, projects,
          and journey in tech.
        </p>
      </motion.div>
    </div>
  );
}
