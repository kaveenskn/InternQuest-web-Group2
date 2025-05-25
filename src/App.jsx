import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Form1 from "./pages/Form1";
<<<<<<< HEAD
import CardsSection from "./component/Cardsectionstd";
import Jobpostform from "./component/JobPostForm";
import signin from "./component/signin";
import StudentDashboard from "./pages/StudentDashboard";
import Login from "./pages/Login";

const App = () => {
  return (
=======
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
>>>>>>> 6d5a0ee89b079a5813556f44fe96951399c5310c

    <Router>
      <Routes>
        <Route path="/signup" element={<Form1 />} />
         <Route path="/job" element={<StudentDashboard/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/post" element={<Jobpostform/>} />
      </Routes>
    </Router>
  );};

export default App; 
