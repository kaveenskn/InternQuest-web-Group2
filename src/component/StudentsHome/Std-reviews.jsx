import React from "react";
import "../../styles/Std-review.css"
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Graduates from "../../assets/graduation.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineering Student",
    university: "Stanford University",
    rating: 5,
    comment:
      "InternQuest helped me land my dream internship at Google! The platform made it so easy to find opportunities that matched my skills.",
  },
];

const StudentsReviews = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-grid">
          {/* Image Side */}
          <div className="testimonial-image-block">
            <img
              src={Graduates} // Update this path to your image
              alt="Graduating students"
              className="testimonial-image"
            />
            <div className="testimonial-stat-card">
              <div className="stat-percentage">98%</div>
              <div className="stat-text">Student Satisfaction</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="testimonial-content-block">
            <h2 className="testimonial-heading">What Students Say</h2>
            <p className="testimonial-subheading">
              Hear from thousands of students who have successfully launched their careers through InternQuest.
            </p>

            {/* Testimonials */}
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <div className="star-rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-comment">
                  <em>"{t.comment}"</em>
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-details">{t.role} • {t.university}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsReviews;
