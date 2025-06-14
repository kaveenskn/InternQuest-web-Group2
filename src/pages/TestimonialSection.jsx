import React from "react";
import "../styles/TestimonialSection.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Computer Science Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "InternQuest helped me find the perfect software development internship at a tech startup. The application process was seamless and I got multiple interview calls!",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "HR Manager",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "As a recruiter, this platform makes it easy to connect with talented students. We've hired 5 excellent interns through InternQuest this semester.",
    stars: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Intern",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "I was struggling to find internships until I discovered InternQuest. Within two weeks, I had three offers and chose my dream marketing internship!",
    stars: 4,
  },
];

const TestimonialSection = () => (
  <div className="testimonial-wrapper">
    <h2 className="testimonial-title">What Our Community Says</h2>
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
      <span className="cta-text">Ready to Find Your Dream Internship?</span>
      <button className="cta-button">Contact Us</button>
    </div>
  </div>
);

export default TestimonialSection;
