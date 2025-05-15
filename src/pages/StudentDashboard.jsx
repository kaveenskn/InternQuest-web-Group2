import React from 'react'
import HeroSection from '../component/hero'
import Navbar from '../component/navbar'
import CardsSection from '../component/Cardsectionstd'

const StudentDashboard = () => {
  return (
    <div style={{ overflowY: 'auto', minHeight: '100vh' }}>
      <Navbar/>
      <HeroSection/>
      <CardsSection/>
    </div>
  )
}

export default StudentDashboard
