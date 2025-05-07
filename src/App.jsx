// src/app.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Form1 from "./pages/Form1";
import Jobpostform from "./component/JobPostForm";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Dashboard />} />
    //   </Routes>
    // </Router>
    <>
    {/* <Form1/> */}
    {/* <Dashboard/> */}
    <Jobpostform/>
    </>
  );
};

export default App;