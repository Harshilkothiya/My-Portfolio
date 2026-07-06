import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { publications } from "../../data/publications";
import "./Publications.css";

// Helper function to get an initial or logo based on publisher
const getPublisherInitial = (publisher) => {
  return publisher.substring(0, 1).toUpperCase();
};

function Publications() {
  return (
    <section className="publications-section" id="publications" aria-label="Publications">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="global-section-title">
          <BookOpen /> Publications <span>& Writings</span>
        </h2>
      </motion.div>

      <div className="publications-grid">
        {publications.map((pub, index) => (
          <motion.div
            className="pub-card-modern"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Top Image Section */}
            <div className="pub-card-image-section">
              {pub.image ? (
                <img src={pub.image} alt={pub.title} className="pub-hero-image" />
              ) : (
                <div className="pub-hero-fallback">
                  <BookOpen size={48} className="fallback-icon" />
                </div>
              )}
            </div>

            {/* Bottom Content Section */}
            <div className="pub-card-body">
              <div className="pub-card-header">
                <h3 className="pub-card-title">{pub.title}</h3>
                {pub.link !== "#" && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-card-link-icon"
                    aria-label={`Read ${pub.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <div className="pub-publisher-info">
                <div className="pub-publisher-logo">
                  {getPublisherInitial(pub.publisher)}
                </div>
                <div className="pub-publisher-text">
                  <div className="pub-publisher-name">{pub.publisher}</div>
                  <div className="pub-publisher-date">{pub.date} • {pub.type}</div>
                </div>
              </div>

              {pub.description && (
                <p className="pub-card-description">{pub.description}</p>
              )}

              {pub.tags && pub.tags.length > 0 && (
                <div className="pub-card-tags">
                  {pub.tags.map((tag, i) => (
                    <span key={i} className="pub-tag">{tag}</span>
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

export default Publications;
