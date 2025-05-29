import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form1 from "./pages/Form1";
import Jobpostform from "./pages/Jobpostform";
import StudentDashboard from "./pages/StudentDashboard";
import Login from "./pages/Login";
import InternshipLandingPage from "./pages/InternshipLandingpage";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ProfilePage from "./pages/profilePage";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InternshipLandingPage />} />
        <Route path="/signup" element={<Form1 />} />
        <Route path="/std" element={<StudentDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Jobpostform />} />
        <Route path="/emp" element={<EmployeeDashboard />} />
        <Route path="/profile" element={< ProfilePage/>} />
      
      </Routes>
    </Router>
  );
};

export default App;
