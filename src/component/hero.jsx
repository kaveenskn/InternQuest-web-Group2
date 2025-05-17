import React from "react";
import "../styles/hero.css";
import ImageSlider from "./ImageSlider";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>We Create <br /> <strong>Solutions for Your Business</strong></h1>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>
      <div className="hero-slider">
        <ImageSlider />
      </div>
    </section>
  );
};

export default HeroSection;
