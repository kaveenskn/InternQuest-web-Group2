import React from 'react';
// import '../styles/LandingFeedback.css';
// import personImg from '../assets/person.jpg'; // make sure to place the image

const FeedbackSection = () => {
  return (
    <div>
      {/* Feedback Hero */}
      <section className="feedback-hero">
        <div className="feedback-overlay">
          <div className="feedback-content">
            <div className="feedback-quote-icon">❝</div>
            <p className="feedback-subtitle">Reviews From Our Happy Clients</p>
            <h2 className="feedback-text">
              Excellent services at InternQuest. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p className="feedback-author">CAROL OLIVEIRA</p>
            <div className="feedback-stars">{'★'.repeat(5)}</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="feedback-cta">
        <div className="feedback-cta-image">
          <img src={personImg} alt="Consultant" />
        </div>
        <div className="feedback-cta-text">
          <h2>What can we help you overcome?</h2>
          <p>InternQuest helps students stay ahead in a rapidly changing world of internships and job markets.</p>
          <button className="feedback-cta-button">Talk to a Mentor</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="feedback-footer">
        <div className="feedback-footer-left">
          <h4>CONTACT</h4>
          <p><strong>89 Park Dr Boston, Massachusetts (MA), 02215</strong></p>
          <p>929-242-6868</p>
          <a href="mailto:contact@internquest.com">contact@internquest.com</a>
          <div className="feedback-social-icons">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="feedback-footer-right">
          <h4>STAY UP TO DATE</h4>
          <input type="email" placeholder="Email" />
          <button className="feedback-subscribe">SUBSCRIBE</button>
        </div>
      </footer>
    </div>
  );
};

export default FeedbackSection;
