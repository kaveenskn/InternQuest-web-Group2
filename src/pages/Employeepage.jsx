import React, { useState } from "react";
import EmHero from "../component/EmHero";
import Navbar from "../component/navbar";
import Jobpostform from "../component/Jobpostform";
import EmployeePageCards from "../component/Cardsectionemp";
import Jobboard from "../component/Jobboard";
import "../pagestyles/employee.css";
import InternshipApp from "../component/InternshipApp";
import RecentApplications from "../component/ShortlistedApplications";
import ApplicationPage from "../component/CompanyApplication/Applicationpage";


const EmpLinks = [
  { key: "home", label: "Home" },
  { key: "post-job", label: "Post-Job" },
  { key: "applications", label: "Applications" },
  { key: "shortlist", label: "Short Listed" },
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
              <ApplicationPage />
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
      case "shortlist":
        return (
          <div className="employee-shortlist">
            <Navbar
              links={EmpLinks}
              onLinkClick={(key) => setActivePage(key)}
              activeKey={activePage}
              transparent={false}
            />
            <div >
              <RecentApplications/>
            </div>
          </div>

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
