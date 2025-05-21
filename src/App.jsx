import React from 'react'
import './App.css'
import Navbar from './component/navbar'
import Dashboard from './component/Dashboard'
// import other components as needed

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Dashboard />
      {/* Add routes or other components here */}
    </div>
  )
}

export default App
