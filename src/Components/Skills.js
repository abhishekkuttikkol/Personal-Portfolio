import React from "react";
import "../css/styles.css";
import image from "../img/work3.jpg";
import mongo from "../img/mongo.png"
import express from "../img/express.png"

function Skills() {
  return (
    <div>
      <section class="skills section" id="skills">
        <h2 class="section-title">Skills</h2>

        <div class="skills__container bd-grid">
          <div>
            <h2 class="skills__subtitle">Profesional Skills</h2>
            <p class="skills__text"></p>
            <div class="skills__data">
              <div class="skills__names">
                <img
                  style={{ width: "35px" }}
                  class="skills__icon"
                  src="https://img.icons8.com/ultraviolet/40/000000/react.png"
                  alt=""
                />

                <span class="skills__name">REACT JS</span>
              </div>
              <div class="skills__bar skills__react"></div>
              <div>
                <span class="skills__percentage">90%</span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__names">
                <img
                  style={{ width: "35px" }}
                  class="skills__icon"
                  // src="https://img.icons8.com/windows/32/4a90e2/node-js.png"
                  src="https://img.icons8.com/windows/32/4a90e2/node-js.png"
                  alt=""
                />
                <span class="skills__name">NODE JS</span>
              </div>
              <div class="skills__bar skills__node"></div>
              <div>
                <span class="skills__percentage">60%</span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__names">
                <img
                  style={{ width: "35px" }}
                  class="skills__icon"
                  src={mongo}
                  alt=""
                />
                <span class="skills__name">MongoDB</span>
              </div>
              <div class="skills__bar skills__mongo"></div>
              <div>
                <span class="skills__percentage">60%</span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__names">
                <img
                  style={{ width: "35px" }}
                  class="skills__icon"
                  src={express}
                  alt=""
                />
                <span class="skills__name">Express JS</span>
              </div>
              <div class="skills__bar skills__express"></div>
              <div>
                <span class="skills__percentage">70%</span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__names">
                <img
                  style={{ width: "35px" }}
                  class="skills__icon"
                  src="https://img.icons8.com/ios/50/4a90e2/git.png"
                  alt=""
                />
                <span class="skills__name">Git</span>
              </div>
              <div class="skills__bar skills__git"></div>
              <div>
                <span class="skills__percentage">70%</span>
              </div>
            </div>
          </div>
          

          <div>
            <img src={image} alt="" class="skills__img" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
