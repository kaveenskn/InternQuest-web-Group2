import React from "react"; // Or pass icons via props
import "../styles/FeatureSection.css"


const FeaturesSection = ({
  id = "features",
  title = "Why Choose InternQuest?",
  description = "Revolutionary features designed to streamline your hiring process and connect you with exceptional talent faster than ever before.",
  features = [],
}) => {
  return (
    <section className="Home-features-section" id={id}>
      <div className="Home-features-container">
        <div className="Home-section-header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="Home-features-grid">
          {features.map((feature, index) => (
            <div className="Home-feature-card" key={index}>
              <div className="Home-feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
