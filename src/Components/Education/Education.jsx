import React from "react";
import "./Education.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import cspit from "../../assets/cspit.jpg";
import ssgv from "../../assets/ssgv.jpeg"; // Assuming you need this image

function Education() {
  useEffect(() => {
          AOS.init({ duration: 1000, once: false });
      }, []);
  return (
    <>
      <section className="education" id="education">
        <h1 className="heading">
          <i className="fas fa-graduation-cap"></i> My <span>Education</span>
        </h1>

        {/* <p className="qoute">
          Education is not the learning of facts, but the training of the mind to think.
        </p> */}

        <div className="box-container">
          <div data-aos="fade-down" className="box">
            <div className="image">
              <img draggable="false" src={cspit} alt="cspit"/>
            </div>
            <div className="content">
              <h3>Bachelor of Engineering in Computer Engineering</h3>
              <p>Chandubhai S Patel Institute of Technology | Charusat University</p>
              <h4>2022-2026 | Pursuing</h4>
            </div>
          </div>

          <div data-aos="fade-down" className="box">
            <div className="image">
              <img draggable="false" src={ssgv} alt="ssgv" />
            </div>
            <div className="content">
              <h3>HSC Science | Informatics Practices</h3>
              <p>Shree Swaminarayan Gurukul, Surat | GSEB</p>
              <h4>2020-2022 | Completed</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
