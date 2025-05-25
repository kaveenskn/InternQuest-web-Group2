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

import InternshipFinder from "./component/InternshipFinder";
import LoginForm from "./component/LoginForm";
import cvCreation from "./component/cvCreation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Default route */}
        <Route path="/signup" element={<Form1 />} />
        <Route path="/job" element={<StudentDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Jobpostform />} />
        <Route path="/cv-form" element={<cvCreation />} />
        <Route path="/internships" element={<InternshipFinder />} />
        <Route path="/login-form" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
