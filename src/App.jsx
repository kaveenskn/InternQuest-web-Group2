import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Form1 from "./pages/Form1";
import JobPostForm from "./component/JobPostForm";
import SignIn from "./component/Signin";
import EmployeeDashboard from "./pages/EmployeeDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeDashboard />} />
        <Route path="/form1" element={<Form1 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobpostform" element={<JobPostForm />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};


  

export default App; 
