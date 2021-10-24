import { useEffect } from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./css/styles.css";
import ScrollReveal from "scrollreveal";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show");
        });
      }
    };
    showMenu("nav-toggle", "nav-menu");

    /*===== ACTIVE AND REMOVE MENU =====*/
    const navLink = document.querySelectorAll(".nav__link");

    function linkAction() {
      /*Active link*/
      navLink.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");

      /*Remove menu mobile*/
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.remove("show");
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction));

    /*===== SCROLL REVEAL ANIMATION =====*/
    const sr = ScrollReveal({
      distance: "80px",
      duration: 500,
      // reset: true,
      easing: "ease-in",
    });

    /*SCROLL HOME*/
    sr.reveal(".home__title", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });
    sr.reveal(".button", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });
    sr.reveal(".home__img", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });
    sr.reveal(".home__social-icon", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });
    sr.reveal(".home__social", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });

    /*SCROLL ABOUT*/
    sr.reveal(".about__img", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });
    sr.reveal(".about__subtitle", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });
    sr.reveal(".about__text", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });

    /*SCROLL SKILLS*/
    sr.reveal(".skills__subtitle", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });
    sr.reveal(".skills__text", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });
    sr.reveal(".skills__data", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });
    sr.reveal(".skills__img", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });

    /*SCROLL WORK*/
    sr.reveal(".work__img", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });

    /*SCROLL CONTACT*/
    sr.reveal(".contact__input", {
      delay: 250,
      origin: "bottom",
      // duration: 500,
      // reset: true,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
