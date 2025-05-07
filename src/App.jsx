// src/app.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Form1 from "./pages/Form1";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Dashboard />} />
    //   </Routes>
    // </Router>
    <>
    {/* <Form1/> */}
    <Dashboard/>
    </>
  );
};

export default App;