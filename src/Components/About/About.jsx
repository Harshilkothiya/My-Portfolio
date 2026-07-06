import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./About.css";
import about from '../../assets/about.webp';
import { skills } from "../../data/skills";

function About() {
  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  // Flatten all skills for the marquee
  const allSkills = Object.values(skills).flat();

  return (
    <section className="about-section" id="about" aria-label="Hero">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge">AI / ML Engineer</div>
          <h1 className="hero-title">
            Hello, I'm <span>Harshil Kothiya</span>
          </h1>
          <p className="hero-subtitle">
            I engineer intelligent systems, build memory-powered RAG pipelines, and deploy scalable machine learning solutions to solve real-world problems.
          </p>
          <div className="hero-actions">
            <button className="btn primary-btn" onClick={handleResumeClick} aria-label="View Resume">
              <User size={18} /> View Resume
            </button>
            <a href="#project" className="btn secondary-btn" aria-label="View Work">
              View Work <ArrowRight size={18} />
            </a>
            <div className="social-links-hero">
              <a href="https://github.com/Harshilkothiya" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/harshil-kothiya/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-image-container"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="image-wrapper">
            <img src={about} alt="Harshil Kothiya" className="about-image" />
            <div className="glow-effect"></div>
          </div>
        </motion.div>
      </div>

      {/* Infinite Tech Stack Marquee */}
      <div className="tech-marquee-container">
        <div className="tech-marquee">
          <div className="tech-marquee-content">
            {allSkills.map((skill, i) => (
              <span key={`skill-1-${i}`} className="marquee-tag">{skill}</span>
            ))}
            {/* Duplicate for infinite effect */}
            {allSkills.map((skill, i) => (
              <span key={`skill-2-${i}`} className="marquee-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
