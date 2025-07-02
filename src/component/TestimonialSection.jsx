import React, { useState } from "react";
// import "../styles/TestimonialSection.css";

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
  {
    name: "David Kim",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    text: "The internship I found through InternQuest led to a full-time offer. The platform's matching system is incredibly accurate and efficient.",
    stars: 5,
  },
  {
    name: "Jessica Wang",
    role: "Data Science Student",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    text: "InternQuest made my internship search so much easier. The interface is user-friendly and I found relevant opportunities quickly.",
    stars: 4,
  },
  {
    name: "Alex Thompson",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
    text: "We've found amazing interns through this platform. The quality of candidates and the matching process exceeded our expectations.",
    stars: 5,
  },
];

const TestimonialSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => 
      prevPage >= totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => 
      prevPage <= 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const getCurrentPageCards = () => {
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return testimonials.slice(startIndex, endIndex);
  };

  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-title">What Our Community Says</h2>
      
      <div className="testimonial-section">
        <div className="testimonial-carousel-container">
          {/* Left Arrow */}
          {testimonials.length > cardsPerPage && (
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={prevPage}
              aria-label="Previous testimonials"
            >
              <span className="arrow-icon">&lt;</span>
            </button>
          )}
          
          {/* Testimonial Cards */}
          <div className="testimonial-list">
            {getCurrentPageCards().map((t, i) => (
              <div className="testimonial-card" key={currentPage * cardsPerPage + i}>
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
          
          {/* Right Arrow */}
          {testimonials.length > cardsPerPage && (
            <button 
              className="carousel-arrow carousel-arrow-right" 
              onClick={nextPage}
              aria-label="Next testimonials"
            >
              <span className="arrow-icon">&gt;</span>
            </button>
          )}
        </div>
        
        {/* Dot Navigation */}
        {testimonials.length > cardsPerPage && (
          <div className="carousel-dots">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentPage ? 'active' : ''}`}
                onClick={() => goToPage(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="cta-section">
        <span className="cta-text">Ready to Find Your Dream Internship?</span>
        <button className="cta-button">Contact Us</button>
      </div>
      <div className="cta-bottom-section">
      </div>
    </div>
  );
};

export default TestimonialSection;
