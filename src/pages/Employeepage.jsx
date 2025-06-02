import React, { useState } from 'react'
import EmployeeDashboard from './EmployeeDashboard';
import Navbar from '../component/navbar';


const EmpLinks = [
  { key: "home", label: "home" },
  { key: "profile", label: "Profile" },
  { key: "find-jobs", label: "Post job" },
  { key: "about", label: "About us" },
];


const EmployeePage = () => {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <EmployeeDashboard/>
          </>
        )
      case 'profile':
        return <><h1>hello</h1></>
      case 'find-jobs':
        return <div><h2>Find Jobs Page</h2></div>
      case 'my-cv':
        return <div><h2>My CV Page</h2></div>
      default:
        return <div><h2>Page Not Found</h2></div>
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar
        links={EmpLinks}
        onLinkClick={(key) => setActivePage(key)}
        activeKey={activePage}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
        {renderPage()}
      </div>
    </div>
  )
}

export default EmployeePage
