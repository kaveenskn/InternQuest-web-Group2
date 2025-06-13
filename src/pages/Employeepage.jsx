
import React, { useState } from "react";
import EmHero from "../component/EmHero";
import Navbar from "../component/navbar";
import Jobpostform from "../component/Jobpostform";
import EmployeeFooter from "../component/EmployeeFooter";
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

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <>
            <EmHero />
             <EmployeePageCards/>
          </>

        );
      case "applications":
        return (
          <>
            <InternshipApp/>
          </>
        );
      case "post-job":
        return (
        <div className="post-job">
        <Jobboard/>
        <Jobpostform />;
        </div>
        );
        
      case "my-cv":
        return (
          <div>
            <h2>My CV Page</h2>
          </div>
        );

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
