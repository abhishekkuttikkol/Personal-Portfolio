import React from "react";
import "../css/styles.css";
import work1 from "../img/work1.png";
import work2 from "../img/work2.png";
import work3 from "../img/work3.png";
import work5 from "../img/work5.png";
import work6 from "../img/work6.png";
import work7 from "../img/work7.png";
import work8 from "../img/work8.png";
import work9 from "../img/work9.PNG";
import work10 from "../img/work10.png";

function Works() {
  return (
    <div>
      <section class="work section" id="work">
        <h2 class="section-title">Works</h2>

        <div class="work__container bd-grid">
          <a href="https://petskaro.web.app/">
            <div class="work__img">
              <img
                className="work__image"
                src={work7}
                alt="Petskaro -  Online Pet shop"
              />
              <p className="work_subtitle">Petskaro - online pet shop</p>
            </div>
          </a>
          <a href="https://olx-clone-0015.web.app/">
            <div class="work__img">
              <img src={work3} alt="OLX clone" />
              <p className="work_subtitle">Online Classified Marketplace</p>
            </div>
          </a>
          <a href="https://disney-clone-0015.web.app/">
            <div class="work__img">
              <img src={work6} alt="Disney Clone" />
              <p className="work_subtitle">Disney Clone</p>
            </div>
          </a>
          <a href="https://netflix-clone-0015.web.app/">
            <div class="work__img">
              <img src={work1} alt="Netflix Clone" />
              <p className="work_subtitle">Netflix Clone</p>
            </div>
          </a>
          <a href="https://clone-c6896.web.app/">
            <div class="work__img">
              <img src={work2} alt="Google Drive Clone" />
              <p className="work_subtitle">Google Drive Clone</p>
            </div>
          </a>
          <a href="https://tinder-clone-0015.web.app/">
            <div class="work__img">
              <img src={work8} alt="Tinder Clone" />
              <p className="work_subtitle">MERN Stack Tinder Clone</p>
            </div>
          </a>
          <a href="https://tiktok-clone-0015.web.app/">
            <div class="work__img">
              <img src={work9} alt="TikTok Clone" />
              <p className="work_subtitle">MERN Stack TikTok Clone</p>
            </div>
          </a>
          <a href="https://zoom-clone-0015.herokuapp.com/">
            <div class="work__img">
              <img src={work10} alt="Zoom Clone" />
              <p className="work_subtitle">Zoom Clone</p>
            </div>
          </a>
          <a href="https://stupefied-hamilton-931236.netlify.app/">
          <div class="work__img">
            <img src={work5} alt="Youtube Clone" />
            <p className="work_subtitle">Youtube Clone</p>
          </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Works;
