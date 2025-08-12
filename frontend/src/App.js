import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["developer", "vlogger", "graphics designer"];

function AnimatedRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
}

export default function App() {
  return (
    <>
      <Navbar />
      <AnimatedRoles />   {/* Place here — below navbar */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact" className="footer">
        <Contact />
      </section>
    </>
  );
}
