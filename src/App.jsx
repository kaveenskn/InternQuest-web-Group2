import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Form1 from "./pages/Form1";
<<<<<<< HEAD

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Form1 />} />
          </Routes>
        </div>
      </div>
    </Router>
=======
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

>>>>>>> 7b4c9e886cae26871efeba470add9717f6ca31cf
  );
};

export default App;
