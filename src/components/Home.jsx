import React from 'react';
import homeImage from "../assets/home.png";
import homeMobile from "../assets/home2.png";
import "./Components.css";

import About from "./About.jsx";
import Services from "./Services.jsx";
import Pricing from "./Pricing.jsx";
import Contact from "./Contact.jsx";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="hero">
        {/* RESPONSIVE IMAGE */}
        <picture>
          <source media="(max-width: 768px)" srcSet={homeMobile} />
          <img src={homeImage} alt="Land Survey" className="hero-img" />
        </picture>

        {/* OVERLAY */}
        <div className="hero-overlay"></div>

        {/* CONTENT */}
        <div className="hero-content">
          <h1>જમીન માપણી અને ડિજિટલ નકશાકાર</h1>
          <h4>"સચોટ માપણી – વિશ્વાસપાત્ર સેવા"</h4>
          <a href="#contact" className="btn">
            સંપર્ક કરો
          </a>
        </div>
      </section>


      <section id="services">
        <div className="container">
          <Services />
        </div>
      </section>

      <section id="pricing">
        <div className="container">
          <Pricing />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <About />
        </div>
      </section>


      <section id="contact">
        <div className="container">
          <Contact />
        </div>
      </section>
    </>
  );
}

export default Home;