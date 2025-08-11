import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Home.css";
import profileImg from "../assets/profile_pic.jpg";

const roles = ["developer", "vlogger", "graphics designer"];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // Change role every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Step 1: Profile image and heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="home-top"
      >
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h1>Hi, I'm Shiwani</h1>
      </motion.div>

      {/* Step 2: Body text appears after a short delay */}
      <motion.p
        className="home-intro"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Welcome to my portfolio! I’m a passionate software developer who loves
        building creative, efficient, and user-friendly applications. My focus
        is on crafting experiences that are not only functional but also
        enjoyable to use. Scroll down to learn more about my skills, projects,
        and journey in tech.
      </motion.p>
    </div>
  );
}
