import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form1 from "./pages/Form1";
import Login from "./pages/Login";
import InternshipLandingPage from "./pages/InternshipLandingpage";

import StudentsPage from "./pages/StudentsPage";
import EmployeePage from "./pages/Employeepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";






const App = () => {

  return (
    <>
    <Router>
      <Routes>
     {/* Interface and login, Register */}
        <Route path="/" element={<InternshipLandingPage />} />
        <Route path="/signup" element={<Form1 />} />
        <Route path="/login" element={<Login />} />
        

      {/*students page */}
        <Route path="/students" element={<StudentsPage/>} />
        
          

        {/* employee page */}
        <Route path="/employers" element={<EmployeePage />} />
               
      
      </Routes>
    </Router>
      <ToastContainer 
        position="top-center" 
        autoClose={2000} 
        limit={3}
        newestOnTop
        theme="colored"
      />
    </>
  );
};

export default App;