import React from "react";
import AOS from "aos";
import "./About.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import about from "../../assets/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function About() {
  const handleResumeClick = () => {
    const resumeUrl = "/resume.pdf"; // Resume file in 'public/' folder
    window.open(resumeUrl, "_blank"); // Open resume in a new tab

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Harshil_Kothiya_Resume.pdf"; // Custom filename
      document.body.appendChild(link); // Append to DOM to ensure it works on all browsers
      link.click();
      document.body.removeChild(link); // Clean up
    }, 1000); // Delay download by 1 second (optional)
  };

  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <section class="about" id="about">
        <h2 class="heading">
          <i class="fas fa-user-alt"></i> ABOUT <span>ME</span>
        </h2>

        <div class="row">
          <div class="image">
            <img draggable="false" class="tilt" src={about} alt="" />
          </div>
          <div class="content">
            <h3>I'm Harshil Kothiya</h3>
            <span data-aos="zoom-in" class="tag">
              Data Scientist
            </span>
            <p data-aos="fade-down">
              I am a Data Scientist and Machine Learning Engineer based in
              Surat, India. I am pursuing my Information Technology degree from{" "}
              <a href="https://www.charusat.ac.in/" target="_blank">
                {" "}
                Charusat University.
              </a>{" "}
              I am passionate about working with data, building predictive
              models, and exploring machine learning and deep learning
              techniques. I enjoy learning new things and improving my skills in
              data science.
            </p>

            <div  className="box-container">
                <div className="box">
                    <p>
                        <span>Age:</span>
                        <i className="fas fa-cake-candles"></i>
                        20
                    </p>
                    <p>
                        <span>Phone:</span>
                        <i className="fas fa-phone"></i>
                        +91 8469409852
                    </p>
                </div>
                <div className="box">
                    <p>
                        <span>Email:</span>
                        <i className="fas fa-envelope"></i>
                        harshilkothiya5@gmail.com
                    </p>
                    <p>
                        <span>Place:</span>
                        <i className="fas fa-location-dot"></i>
                        Surat, India - 394107
                    </p>
                </div>
            </div>

            <div className="resumebtn">
                <button className="btn" onClick={handleResumeClick}>
                    <span>Resume</span>
                    <FontAwesomeIcon id="rightarrow1" icon={faArrowRight} />
                </button>
                <button className="btn" style={{ marginLeft: '2rem' }} onClick={handleHireMeClick}>
                    <span>Hire Me</span>
                    <FontAwesomeIcon id="rightarrow1" icon={faArrowRight} />
                </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
