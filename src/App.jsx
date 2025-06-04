import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form1 from "./pages/Form1";
import Login from "./pages/Login";
import InternshipLandingPage from "./pages/InternshipLandingpage";
import ProfilePage from "./pages/profilePage";
import StudentsPage from "./pages/StudentsPage";
import EmployeePage from "./pages/Employeepage";
import Jobpostform from "./component/Jobpostform";

import InternshipFinderPage from "./component/internshipFinderPage";

import Jobboard from "./component/Jobboard";



const App = () => {

  return (
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
                 <Route path="/post" element={<Jobpostform/>} />


                 <Route path="/find" element={<InternshipFinderPage/>} />
                 <Route path="/board" element={<Jobboard/>} />
      
      </Routes>
    </Router>
  );
};

export default App;