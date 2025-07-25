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
    <section className="std-testimonial-section">
      <div className="std-testimonial-container">
        <div className="std-testimonial-grid">
          {/* Image Side */}
          <div className="std-testimonial-image-block">
            <img
              src={Graduates} // Update this path to your image
              alt="Graduating students"
              className="std-testimonial-image"
            />
            <div className="std-testimonial-stat-card">
              <div className="std-stat-percentage">98%</div>
              <div className="std-stat-text">Student Satisfaction</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="std-testimonial-content-block">
            <h2 className="std-testimonial-heading">What Students Say</h2>
            <p className="std-testimonial-subheading">
              Hear from thousands of students who have successfully launched their careers through InternQuest.
            </p>

            {/* Testimonials */}
            {testimonials.map((t, i) => (
              <div key={i} className="std-testimonial-card">
                <FaQuoteLeft className="std-quote-icon" />
                <div className="std-star-rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="std-testimonial-comment">
                  <em>"{t.comment}"</em>
                </p>
                <div className="std-testimonial-author">
                  <div className="std-author-avatar">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="std-author-name">{t.name}</div>
                    <div className="std-author-details">{t.role} • {t.university}</div>
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
