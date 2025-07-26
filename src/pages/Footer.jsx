import React from "react";
import "../pagestyles/Footer.css"

const FooterPage = () => {
  return (
    <footer className="getstart-footer">
      <div className="getstart-footer-container">
        <div className="getstart-footer-left">
          <h3>InternQuest</h3>
          <p>Your gateway to career-building internships. Empowering students and companies.</p>
        </div>
        <div className="getstart-footer-right">
          <h4>Contact Us</h4>
          <p>
            <a
              href="mailto:support@internquest.com"
              className="footer-email-link"
            >
              Email: support@internquest.com
            </a>
          </p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Career Ave, Silicon Valley, CA</p>
        </div>
      </div>
      <div className="getstart-footer-bottom">
        <marquee behavior="scroll" direction="left">
          <p>© 2025 InternQuest. All rights reserved.</p>
        </marquee>
      </div>
    </footer>
  );
};

export default FooterPage;
