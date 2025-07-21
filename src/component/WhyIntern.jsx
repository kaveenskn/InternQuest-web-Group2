import React from "react";
import "../styles/WhyIntern.css";

const WhyUsSection = ({ tag, title, features, image }) => {
  return (
    <section className="why-section">
      <div className="why-left">
        <button className="tag">{tag}</button>
        <h2 className="why-title">{title}</h2>

        {features.map((feature, index) => (
          <div key={index} className="why-feature">
            <feature.icon className="icon" />
            <div>
              <h3>{feature.heading}</h3>
              <p>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="why-right">
        <img src={image} alt="Why Us Illustration" />
      </div>
    </section>
  );
};

export default WhyUsSection;
