import React from "react";
//import "../styles/TestimonialSection.css";

const testimonials = [
  {
    name: "Johanna Doe",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Sed nam volutpat vitae erat consequat auctor eu ac nisi. Class aptent taciti sociosqu ad litora torquent per...",
    stars: 5,
  },
  {
    name: "John Doe",
    role: "Administrator",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Sed nam volutpat vitae erat consequat auctor eu ac nisi. Class aptent taciti sociosqu ad litora torquent per...",
    stars: 4,
  },
  {
    name: "Jonathan Doe",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Sed nam volutpat vitae erat consequat auctor eu ac nisi. Class aptent taciti sociosqu ad litora torquent per...",
    stars: 4,
  },
];

const TestimonialSection = () => (
  <div className="testimonial-wrapper">
    <h2 className="testimonial-title">What Clients Say</h2>
    <div className="testimonial-list">
      {testimonials.map((t, i) => (
        <div className="testimonial-card" key={i}>
          <img className="testimonial-avatar" src={t.image} alt={t.name} />
          <div className="testimonial-info">
            <span className="testimonial-name">{t.name}</span>
            <span className="testimonial-role">{t.role}</span>
          </div>
          <p className="testimonial-text">{t.text}</p>
          <div className="testimonial-stars">
            {Array.from({ length: t.stars }).map((_, idx) => (
              <span key={idx}>★</span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="cta-section">
      <span className="cta-text">Ready to Get Started?</span>
      <button className="cta-button">Contact Us</button>
    </div>
  </div>
);

export default TestimonialSection;
