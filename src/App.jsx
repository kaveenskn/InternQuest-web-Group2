import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./component/Dashboard";
import Form1 from "./pages/Form1";
import CardsSection from "./component/Cardsectionstd";
import Jobpostform from "./pages/Jobpostform";
// Remove this line: import signin from "./component/signin";
import StudentDashboard from "./pages/StudentDashboard";
import Login from "./pages/Login";
import InternshipLandingPage from "./pages/InternshipLandingpage";
import EmployeeDashboard from "./pages/EmployeeDashboard";
<<<<<<< HEAD
import ProfilePage from "./pages/profilePage";
import StudentsDashboard from "./pages/StudentDashboard";
import StudentsPage from "./pages/StudentsPage";
import EmployeePage from "./pages/Employeepage";


=======
>>>>>>> ee70d8ddc71d94529d2edb9753b831925d31efae

import InternshipFinderPage from "./pages/internshipFinderPage";
import LoginForm from "./component/LoginForm";
import cvCreation from "./component/cvCreation";
import AboutPage from "./pages/aboutpage";

const App = () => {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
     {/* Interface and login, Register */}
        <Route path="/" element={<InternshipLandingPage />} />
        <Route path="/signup" element={<Form1 />} />
=======
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Form1 />} />
        <Route path="/job" element={<StudentDashboard />} />
>>>>>>> ee70d8ddc71d94529d2edb9753b831925d31efae
        <Route path="/login" element={<Login />} />

      {/*students page */}
        <Route path="/students" element={<StudentsPage/>} />
        <Route path="/post" element={<Jobpostform />} />
<<<<<<< HEAD
        
        
        {/* employee page */}
        <Route path="/employers" element={<EmployeePage />} />
      
=======
        <Route path="/cv-form" element={<cvCreation />} />
        <Route path="/internships" element={<InternshipFinderPage />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/emp" element={<EmployeeDashboard />} />
        <Route path="/about" element={<AboutPage />} />
>>>>>>> ee70d8ddc71d94529d2edb9753b831925d31efae
      </Routes>
    </Router>
  );
};

export default App;
