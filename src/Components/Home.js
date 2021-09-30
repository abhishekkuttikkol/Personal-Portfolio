import React from "react";
import "../css/styles.css";
import "./Home.css";
import profile from "../img/perfil.png";

function Home() {
  return (
    <div>
      <section class="home bd-grid" id="home">
        <div class="home__data">
          <h1 class="home__title">
            Hi,
            <br />
            I'am <span class="home__title-color">Abhishek</span>
            <br /> MERN Stack Developer
          </h1>

          <a href="#contact" class="button">
            Contact
          </a>
        </div>
        <div class="home__social">
          <a
            href="https://github.com/abhishekkuttikkol"
            class="home__social-icon"
          >
            <i class="fab fa-twitter" aria-hidden="true">
              <img
                src="https://img.icons8.com/metro/26/000000/github.png"
                alt=""
              />
            </i>
          </a>
          <a
            href="https://linkedin.com/in/abhishek-p-b6ab1119b"
            class="home__social-icon"
          >
            <i class="fab fa-twitter" aria-hidden="true">
              <img
                src="https://img.icons8.com/android/26/000000/linkedin.png"
                alt=""
              />
            </i>
          </a>
        </div>
        <div class="home__img">
          <img class="home_dp" src={profile} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Home;
