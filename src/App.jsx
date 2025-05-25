import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Form1 from "./pages/Form1";
import CardsSection from "./component/Cardsectionstd";
import Jobpostform from "./component/JobPostForm";
import signin from "./component/signin";
import StudentDashboard from "./pages/StudentDashboard";
import Login from "./pages/Login";
import InternshipLandingPage from "./pages/InternshipLandingpage";
import EmployeeDashboard from "./pages/EmployeeDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InternshipLandingPage />} />
        <Route path="/signup" element={<Form1 />} />
        <Route path="/job" element={<StudentDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Jobpostform />} />
        <Route path="/emp" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
