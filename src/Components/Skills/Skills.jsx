import React from "react";
import { motion } from "framer-motion";
import { 
  SiCplusplus, SiJavascript, SiMysql, SiMongodb, SiPandas, 
  SiScikitlearn, SiPytorch, SiTensorflow, SiHuggingface, 
  SiExpress, SiLangchain
} from "react-icons/si";
import { 
  FaPython, FaNetworkWired, FaBrain, FaChartBar, 
  FaGithub, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDocker, FaDatabase 
} from "react-icons/fa";
import "./Skills.css";

function Skills() {
  const skillCards = [
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "DSA", icon: FaNetworkWired, color: "#2ecc71" },
    { name: "Machine Learning", icon: FaBrain, color: "#FF6F00" },
    { name: "Deep Learning", icon: SiPytorch, color: "#EE4C2C" },
    { name: "Data Science", icon: SiPandas, color: "#150458" },
    { name: "Data Analysis", icon: FaChartBar, color: "#00C4B5" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
    { name: "LangChain", icon: SiLangchain, color: "#121212" },
    { name: "Qdrant", icon: FaDatabase, color: "#ff4b4b" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Express", icon: SiExpress, color: "#000000" }
  ];

  return (
    <section className="skills-section" id="skills" aria-label="Technical Skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="global-section-title">
          <FaBrain /> Technical <span>Skills</span>
        </h2>
      </motion.div>

      <div className="skills-grid-container">
        {skillCards.map((skill, index) => (
          <motion.div
            className="skill-card-single"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
          >
            <div className="skill-icon-wrapper" style={{ color: skill.color }}>
              <skill.icon size={48} />
            </div>
            <span className="skill-card-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;