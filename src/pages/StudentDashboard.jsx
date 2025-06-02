import React from 'react'
import HeroSection from '../component/hero'
import Navbar from '../component/navbar'
import CardsSection from '../component/Cardsectionstd'

const StdLinks = [
  { path: "/", label: "Dashboard" },
  { path: "/profile", label: "Profile" },
  { path: "/find-jobs", label: "Find Jobs" },
  { path: "/my-cv", label: "My CV" },
];


const StudentDashboard = () => {
  return (
    <div style={{ overflowY: 'auto', minHeight: '100vh' }}>
      <Navbar links={StdLinks}/>
      <HeroSection/>
      <CardsSection/>
    </div>
  )
}

export default StudentDashboard
