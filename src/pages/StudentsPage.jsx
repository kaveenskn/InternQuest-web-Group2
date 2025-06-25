import React, { useState } from 'react';
import HeroSection from '../component/hero';
import Navbar from '../component/navbar';
import CardsSection from '../component/Cardsectionstd';
import ProfilePage from './profilePage';
import InternshipFinderPage from '../component/internshipFinderPage';
import "../pagestyles/studentpage.css";

const StdLinks = [
  { key: "dashboard", label: "Dashboard" },
  { key: "profile", label: "Profile" },
  { key: "find-jobs", label: "Find Jobs" },
  { key: "my-cv", label: "My CV" },
];

const StudentsPage = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPageContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <div className="std-dashboard">
            <HeroSection onGetStarted={() => setActivePage("find-jobs")} />
            <CardsSection />
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
          </div>
        );
      case 'my-cv':
        return (
          <div className="std-cv">
            <h2>My CV Page</h2>
            <p>Upload, edit or generate your CV here with InternQuest.</p>
          </div>
        );
      default:
        return (
          <div className="std-default">
            <h2>Page Not Found</h2>
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
