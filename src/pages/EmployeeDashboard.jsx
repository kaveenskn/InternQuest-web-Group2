import React from "react";
import Navbar from "../component/navbar";
import EmHero from "../component/EmHero";

const EmpLinks = [
  { path: "/", label: "home" },
  { path: "/profile", label: "Profile" },
  { path: "/find-jobs", label: "Post job" },
  { path: "/my-cv", label: "About us" },
];


const EmployeeDashboard = () => {
  return (
    <div>
      < Navbar links={EmpLinks}/>
      <EmHero />
    </div>
  );
};

export default EmployeeDashboard;
