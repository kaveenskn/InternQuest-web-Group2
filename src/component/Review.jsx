import React from "react";
import "../styles/Review.css";

const ReviewPage = () => {
  return (
    <div className="review-page">
      {/* Review Section */}
      <div className="review-testimonial">
        <p className="review-subtitle">What students say about InternQuest</p>
        <h2 className="review-heading">
          InternQuest helped me find the perfect internship opportunity and build strong industry connections.
        </h2>
        <p className="review-client-name">NIVETHA RAJ</p>
        <p className="review-stars">⭐⭐⭐⭐⭐</p>
      </div>

      {/* Help Section */}
      <div className="review-help-section">
        <div className="review-help-image">
          <img
            src="https://i.pinimg.com/736x/db/3f/8a/db3f8a019e3afd9d8491f3aa2d381361.jpg"
            alt="Student"
          />
        </div>
        <div className="review-help-text">
          <h2>What can we help you overcome?</h2>
          <p>We guide students toward the right internships and jobs based on their skills, goals, and strengths.</p>
          <button>Talk to Our Team</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="review-footer">
        <div className="review-contact">
          <p><strong>CONTACT</strong></p>
          <p>InternQuest, University Avenue, Colombo, Sri Lanka</p>
          <p>+94 77 123 4567</p>
          <p>support@internquest.lk</p>
          <div className="review-social-icons">
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>

        <div className="review-subscribe">
          <p><strong>JOIN OUR COMMUNITY</strong></p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </footer>
    </div>
  );
};

export default ReviewPage;
