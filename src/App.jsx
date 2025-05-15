import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Form1 from "./pages/Form1";
import Jobpostform from "./component/JobPostForm";
import signin from "./component/signin";
import StudentDashboard from "./pages/StudentDashboard";


const App = () => {
  return (
   
      <Router>
      <Routes>
        <Route path="/" element={<Form1 />} />
         <Route path="/job" element={<StudentDashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
