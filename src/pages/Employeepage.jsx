import React, { useState } from "react";
import EmHero from "../component/CompanyHome/EmHero";
import Navbar from "../component/navbar";
import Jobboard from "../component/CompanyJob-post/Jobboard";
import EmployeePageCards from "../component/Cardsectionemp";
import Jobpostform from "../component/CompanyJob-post/Jobpostform";
import "../pagestyles/employee.css";
import EmpFeatures from '../component/CompanyHome/EmpFeatures';

import ApplicationPage from "../component/CompanyApplication/Applicationpage";


const EmpLinks = [
  { key: "home", label: "Home" },
  { key: "post-job", label: "Post-Job" },
  { key: "applications", label: "Applications" },
  { key: "Company-Profile", label: "Company Profile" },
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
              transparent={true} 
            />
            <EmHero onGetStarted={() => setActivePage("applications")} />
               </div>
            
            <EmpFeatures/>
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
      case "Company-Profile":
        return (
          <div className="employee-shortlist">
            <Navbar
              links={EmpLinks}
              onLinkClick={(key) => setActivePage(key)}
              activeKey={activePage}
              transparent={false}
            />
            <div >
             
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
