import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./About.css";
import { heroContent } from "../../data/profile";
import { skills } from "../../data/skills";

function About() {
  const handleResumeClick = () => {
    window.open(heroContent.resumeUrl, "_blank", "noopener,noreferrer");
  };

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
          <div className="badge">{heroContent.title}</div>
          <h1 className="hero-title">
            Hello, I'm <span>{heroContent.name}</span>
          </h1>
          <p className="hero-subtitle">{heroContent.tagline}</p>
          <div className="hero-actions">
            <button className="btn primary-btn" onClick={handleResumeClick} aria-label={heroContent.ctaLabel}>
              <User size={18} /> {heroContent.ctaLabel}
            </button>
            <a href="#project" className="btn secondary-btn" aria-label={heroContent.secondaryCtaLabel}>
              {heroContent.secondaryCtaLabel} <ArrowRight size={18} />
            </a>
            <div className="social-links-hero">
              {heroContent.socialLinks.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={link.label}>
                  {link.label === "GitHub" ? <FaGithub size={22} /> : <FaLinkedin size={22} />}
                </a>
              ))}
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
            <img src={heroContent.image} alt={heroContent.imageAlt} className="about-image" />
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
