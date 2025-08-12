import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFlutter,
  SiPython,
  SiGithub,
} from "react-icons/si";
import "../styles/About.css";

const skills = [
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
];

export default function About() {
  useEffect(() => {
    const track = document.querySelector(".marquee-track");
    if (!track) return;

    let speed = 20; // base speed (lower is faster)

    const updateAnimation = () => {
      track.style.animation = `marquee ${speed}s linear infinite`;
    };

    updateAnimation();

    // Handler specifically adjusts speed of the marquee track on mousemove only
    const handleMouseMove = (e) => {
      const percentage = e.clientX / window.innerWidth;
      speed = 5 + percentage * 30;
      updateAnimation();
    };

    track.parentElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (track.parentElement)
        track.parentElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Me</h1>

        <h2>Skills</h2>
        <div className="tech-marquee">
          <div className="marquee-track">
            {skills.concat(skills).map(
              (
                skill,
                index // duplicated for seamless loop
              ) => (
                <div className="tech-item" key={index}>
                  {skill.icon} {skill.name}
                </div>
              )
            )}
          </div>
        </div>

        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Software Developer at CodeClouds</h3>
              <p>
                Focused on full-stack web development and scalable solutions.
              </p>
              <p className="timeline-date">Mar' 25 - Present</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Software Developer Intern at CodeClouds</h3>
              <p>Worked on Flutter to make hybrid mobile apps.</p>
              <p className="timeline-date">Aug' 24 - Feb' 25</p>
            </div>
          </div>
        </div>

        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>MCKV Institute of Engineering</h3>
              <p>Bachelor's in Technology - Information Technology</p>
              <p className="timeline-date">Sept' 21 - Jun' 25</p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="resume-container">
        <a href="/resume.pdf" download className="resume-button">
          📄 Download Resume
        </a>
      </div>
    </>
  );
}
