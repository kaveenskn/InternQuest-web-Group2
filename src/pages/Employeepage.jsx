<<<<<<< HEAD
import React, { useState } from 'react'
import EmHero from '../component/EmHero';
import Navbar from '../component/navbar';
import Jobpostform from '../component/Jobpostform';
import Jobboard from '../component/Jobboard';

=======
import React, { useState } from "react";
import EmHero from "../component/EmHero";
import Navbar from "../component/navbar";
import Jobpostform from "../component/Jobpostform";
import EmployeeFooter from "../component/EmployeeFooter";
>>>>>>> f04c9cfe1737cc173e4c4b061d683d4f2bab883f

const EmpLinks = [
  { key: "home", label: "home" },
  { key: "profile", label: "Profile" },
  { key: "Post job", label: "Post job" },
  { key: "about", label: "About us" },
];

const EmployeePage = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <>
            <EmHero />
            <EmployeeFooter />
          </>
<<<<<<< HEAD
        )
      case 'profile':
        return <><h1>hello</h1></>
      case 'Post job':
        return <>
         <Jobboard/>
         <Jobpostform/>
        </>
      case 'my-cv':
        return <div><h2>My CV Page</h2></div>
=======
        );
      case "profile":
        return (
          <>
            <h1>hello</h1>
          </>
        );
      case "Post job":
        return <Jobpostform />;
      case "my-cv":
        return (
          <div>
            <h2>My CV Page</h2>
          </div>
        );
>>>>>>> f04c9cfe1737cc173e4c4b061d683d4f2bab883f
      default:
        return (
          <div>
            <h2>Page Not Found</h2>
          </div>
        );
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar
        links={EmpLinks}
        onLinkClick={(key) => setActivePage(key)}
        activeKey={activePage}
      />
      <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
        {renderPage()}
      </div>
    </div>
  );
};

export default EmployeePage;
