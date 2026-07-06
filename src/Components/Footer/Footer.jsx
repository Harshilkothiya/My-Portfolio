import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Harshil Kothiya. Built with React & Vite.</p>
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com/Harshilkothiya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshil-kothiya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://x.com/KothiyaHarshil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;