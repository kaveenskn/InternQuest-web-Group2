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
import InternshipApp from "./component/InternshipApp";
import InternshipProfileCard from "./component/InternshipProfileCard";
import StudentProfilePage from "./pages/StudentsProfile";

import FeedbackSection from "./component/LandingFeedback";




const App = () => {

  return (
    <Router>
      <Routes>
     {/* Interface and login, Register */}
        <Route path="/" element={<InternshipLandingPage />} />
        <Route path="/signup" element={<Form1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-profile/:email" element={<StudentProfilePage/>}/>

      {/*students page */}
        <Route path="/students" element={<StudentsPage/>} />
        
          

        {/* employee page */}
        <Route path="/employers" element={<EmployeePage />} />
                 <Route path="/post" element={<Jobpostform/>} />


                 <Route path="/find" element={<InternshipFinderPage/>} />
                 <Route path="/board" element={<Jobboard/>} />
                 <Route path="/application" element={<InternshipApp/>} />

                 <Route path="/feed" element={<FeedbackSection />} />

                 
      
      </Routes>
    </Router>
  );
};

export default App;