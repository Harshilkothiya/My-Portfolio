import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, Code2 } from "lucide-react";
import { professionalExperience, competitions } from "../../data/experience";
import "./Exp.css";

function Exp() {
  return (
    <section className="experience-section" id="experience" aria-label="Experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="global-section-title">
          <Briefcase /> Work <span>Experience</span>
        </h2>
      </motion.div>

      <div className="experience-container">
        <div className="experience-group">
          <h3 className="experience-group-title">Professional Experience</h3>
          <div className="experience-list">
            {professionalExperience.map((exp, index) => (
              <motion.div
                className="experience-card card-hover"
                key={`prof-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="experience-header">
                  <div className="experience-title-group">
                    <h4 className="experience-role">{exp.role}</h4>
                    <div className="experience-company">
                      <Building2 size={16} /> {exp.company}
                    </div>
                  </div>
                  <div className="experience-date">
                    <Calendar size={16} /> {exp.date}
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      <Code2 size={14} /> {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="experience-group">
          <h3 className="experience-group-title mt-top">Competitions & Hackathons</h3>
          <div className="experience-list">
            {competitions.map((comp, index) => (
              <motion.div
                className="experience-card card-hover competition-card"
                key={`comp-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="experience-header">
                  <div className="experience-title-group">
                    <h4 className="experience-role">{comp.role}</h4>
                    <div className="experience-company">
                      <Building2 size={16} /> {comp.company}
                    </div>
                  </div>
                  <div className="experience-date">
                    <Calendar size={16} /> {comp.date}
                  </div>
                </div>
                <p className="experience-description">{comp.description}</p>
                <div className="experience-skills">
                  {comp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      <Code2 size={14} /> {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exp;
