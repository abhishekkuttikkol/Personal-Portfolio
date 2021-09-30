import React from "react";
import "../css/styles.css";
import image from "../img/about.jpg";

function About() {
  return (
    <div>
      <section class="about section " id="about">
        <h2 class="section-title">About</h2>

        <div class="about__container bd-grid">
          <div class="about__img">
            <img src={image} alt="" />
          </div>

          <div>
            <h2 class="about__subtitle">I'am Abhishek</h2>
            <p class="about__text">
            I'am a MERN stack developer from Kannur , Kerala, India. i am a Self taught developer I use several online facility to develop my coding skills.
            I enjoy taking complex problem and turning them into simple and beutiful interface designs. I also have the logic and structure of coding
            and always strive to write elegent and efficient code
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1CF5hlS5kkGdAjcTVkydVUsB1kaqk8uS-"
              class="button"
              style={{ marginTop: "30px" }}
              download="Abhishek-Resume"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
