import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Headset, Mail, MapPin } from "lucide-react";
import { contactDetails } from "../../data/profile";
import "./Contact.css";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email delivery is not configured yet. Add your EmailJS credentials in the environment variables.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const formData = new FormData(formRef.current);
      const templateParams = {
        ...Object.fromEntries(formData.entries()),
        time: new Date().toLocaleString(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus({
        type: "success",
        message: "Your message was sent successfully. I will get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong while sending your message. Please reach out directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="global-section-title">
          <Headset /> Get In <span>Touch</span>
        </h2>
      </motion.div>

      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{contactDetails.heading}</h3>
          <p>{contactDetails.description}</p>
          
          <div className="info-item">
            <Mail className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>harshilkothiya5@gmail.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <MapPin className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>{contactDetails.location}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message" rows="5" required></textarea>
            </div>
            {status.message ? (
              <p className={`form-status ${status.type}`} aria-live="polite">
                {status.message}
              </p>
            ) : null}
            <button type="submit" className="btn primary-btn submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
