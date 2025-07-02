import React, { useState } from "react";
import EmHero from "../component/EmHero";
import Navbar from "../component/navbar";
import Jobpostform from "../component/Jobpostform";
import EmployeePageCards from "../component/Cardsectionemp";
import Jobboard from "../component/Jobboard";
import "../pagestyles/employee.css";
import InternshipApp from "../component/InternshipApp";

const EmpLinks = [
  { key: "home", label: "Home" },
  { key: "post-job", label: "Post-Job" },
  { key: "applications", label: "Applications" },
  { key: "about", label: "About us" },
];

const EmployeePage = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPageContent = () => {
    switch (activePage) {
      case "home":
        return (
          // Wrap Navbar + Hero inside background wrapper for home page
          <div className="home-background-wrapper">
            <div className="employee-home">  
              <Navbar
              links={EmpLinks}
              onLinkClick={(key) => setActivePage(key)}
              activeKey={activePage}
              transparent={true} // transparent true here because background is on wrapper
            />
            <EmHero />
               </div>
            
            <EmployeePageCards />
          </div>
        );
      case "applications":
        return (
          <div className="employee-applications">
            <Navbar
              links={EmpLinks}
              onLinkClick={(key) => setActivePage(key)}
              activeKey={activePage}
              transparent={false}
            />
            <div className="applications-page" >
              <InternshipApp />
            </div>
         </div>
         
        );
       
        
      case "post-job":
        return (
          <div className="employee-postjob">
            <Navbar
              links={EmpLinks}
              onLinkClick={(key) => setActivePage(key)}
              activeKey={activePage}
              transparent={false}
            />
            <div className="post-job" >
              <Jobboard />
              <Jobpostform />
            </div>
          </div>
        );
      case "about":
        return (
          <>
            <Navbar
              links={EmpLinks}
              onLinkClick={(key) => setActivePage(key)}
              activeKey={activePage}
              transparent={false}
            />
            <div >
              <h2>My CV Page</h2>
            </div>
          </>

        );
    }
  };

  return (
    <div>
      <div style={{ flex: 1, overflowY: "auto" }}>
        {renderPageContent()}
      </div>
    </div>
  );
};

export default EmployeePage;
