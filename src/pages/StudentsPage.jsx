import React, { useState } from 'react';
import HeroSection from '../component/StudentsHome/hero';
import Navbar from '../component/navbar';
import CardsSection from '../component/Cardsectionstd';
import ProfilePage from './profilePage';
import InternshipFinderPage from '../component/Studentjobfinder/internshipFinderPage';
import "../pagestyles/studentpage.css";
import StudentsReviews from '../component/StudentsHome/Std-reviews';
import MentorshipFinder from '../component/Studentmentorship/Mentorship';
import CalendarPage from '../component/Calenderpage/Calendar';
import StudentDashboard from '../component/student-Dashboard/StudentDashboard';

const StdLinks = [
  { key: "home", label: "Home" },
  { key: "Student-dashboard", label: "Dashboard" },
  { key: "profile", label: "Profile" },
  { key: "find-jobs", label: "Find Jobs" },
  { key: "calendar", label: "Calendar" }
];

const StudentsPage = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPageContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <div className="std-dashboard">
            <HeroSection onGetStarted={() => setActivePage("find-jobs")} />
            <StudentsReviews/>
          
          </div>
        );
      case 'profile':
        return (
          <div className="std-profile">
            <ProfilePage />
          </div>
        );
      case 'find-jobs':
        return (
          <div className="std-findjobs">
            <InternshipFinderPage />
             <MentorshipFinder/>
          </div>
        );
      case 'Student-dashboard':
        return (
          <div className="std-dashboard">
             <StudentDashboard/>
          </div>
        );
        case 'calendar':
                return (
        <div className="Calendarpage">
              <CalendarPage/>
        </div>

                );

      default:
        return (
           <div className="std">
            <HeroSection onGetStarted={() => setActivePage("find-jobs")} />
            <StudentsReviews/>
          
          </div>
        );
    }
  };

  return (
    <div className="students-page-container">
      <Navbar
        links={StdLinks}
        onLinkClick={(key) => setActivePage(key)}
        activeKey={activePage}
        transparent={activePage === "dashboard"}
      />
      <div className="students-page-content">
        {renderPageContent()}
      </div>
    </div>
  );
};

export default StudentsPage;
