import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Form1 from "./pages/Form1";
import CardsSection from "./component/Cardsectionstd";
import Jobpostform from "./component/JobPostForm";
import signin from "./component/signin";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./pages/cvPage";
import Login from "./pages/Login";

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/signup" element={<Form1 />} />
         <Route path="/job" element={<StudentDashboard/>} />
         <Route path="/cv" element={<StudentProfile/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/post" element={<Jobpostform/>} />
      </Routes>
    </Router>


  );
};

export default App;  
