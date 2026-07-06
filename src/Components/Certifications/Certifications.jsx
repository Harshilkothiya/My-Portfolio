import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "../../data/certifications";
import "./Certifications.css";

// Helper function to get an initial or logo based on issuer
const getIssuerInitial = (issuer) => {
  return issuer.substring(0, 1).toUpperCase();
};

function Certifications() {
  return (
    <section className="certifications-section" id="certifications" aria-label="Certifications">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="global-section-title">
          <Award /> My <span>Certifications</span>
        </h2>
      </motion.div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            className="cert-card-modern"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Top Image Section */}
            <div className="cert-card-image-section">
              {cert.image ? (
                <img src={cert.image} alt={cert.name} className="cert-hero-image" />
              ) : (
                <div className="cert-hero-fallback">
                  <Award size={48} className="fallback-icon" />
                </div>
              )}
            </div>

            {/* Bottom Content Section */}
            <div className="cert-card-body">
              <div className="cert-card-header">
                <h3 className="cert-card-title">{cert.name}</h3>
                {cert.credentialLink !== "#" && (
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-card-link-icon"
                    aria-label={`Verify ${cert.name}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <div className="cert-issuer-info">
                <div className="cert-issuer-logo">
                  {getIssuerInitial(cert.issuer)}
                </div>
                <div className="cert-issuer-text">
                  <div className="cert-issuer-name">{cert.issuer}</div>
                  <div className="cert-issuer-date">{cert.date}</div>
                </div>
              </div>

              {cert.description && (
                <p className="cert-card-description">{cert.description}</p>
              )}

              {cert.tags && cert.tags.length > 0 && (
                <div className="cert-card-tags">
                  {cert.tags.map((tag, i) => (
                    <span key={i} className="cert-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
