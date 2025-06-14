import React, { useState } from 'react'
import HeroSection from '../component/hero'
import Navbar from '../component/navbar'
import CardsSection from '../component/Cardsectionstd'
import ProfilePage from './profilePage'
import "../pagestyles/studentpage.css"
import InternshipFinderPage from '../component/internshipFinderPage'

const StdLinks = [
  { key: "dashboard", label: "Dashboard" },
  { key: "profile", label: "Profile" },
  { key: "find-jobs", label: "Find Jobs" },
  { key: "my-cv", label: "My CV" },
]

const StudentsPage = () => {
  const [activePage, setActivePage] = useState('dashboard')

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
      return (
    <div className="student-page Home">
      <HeroSection onGetStarted={() => setActivePage("find-jobs")} />
      <CardsSection className="cards-st" />
    </div>
       );
      case 'profile':
        return <><ProfilePage/></>
      case 'find-jobs':
        return <div><InternshipFinderPage/></div>
      case 'my-cv':
        return <div><h2>My CV Page</h2></div>
      default:
        return <div><h2>Page Not Found</h2></div>
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar
        links={StdLinks}
        onLinkClick={(key) => setActivePage(key)}
        activeKey={activePage}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
        {renderPage()}
      </div>
    </div>
  )
}

export default StudentsPage
