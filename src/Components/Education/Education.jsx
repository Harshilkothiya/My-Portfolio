import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import "./Education.css";
import { education } from "../../data/education";

function Education() {
  const educations = education;

  return (
    <section className="education-section" id="education" aria-label="Education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="global-section-title">
          <GraduationCap /> My <span>Education</span>
        </h2>
      </motion.div>

      <div className="education-container">
        {educations.map((edu, index) => (
          <motion.div
            className="education-card card-hover"
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="education-image">
              <img src={edu.image} alt={edu.institution} />
            </div>
            <div className="education-content">
              <div className="edu-header">
                <h3 className="degree">{edu.degree}</h3>
                <span className="edu-status">{edu.status}</span>
              </div>
              <p className="institution"><BookOpen size={16} className="edu-icon"/> {edu.institution}</p>
              <div className="education-meta">
                <span><Calendar size={14} className="edu-icon" /> {edu.date}</span>
                <span><MapPin size={14} className="edu-icon" /> {edu.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
