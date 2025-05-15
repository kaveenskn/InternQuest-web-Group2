import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Form1 from "./pages/Form1";
import Jobpostform from "./component/JobPostForm";
import signin from "./component/signin";

const App = () => {
  return (
   
      <Router>
      <Routes>
        <Route path="/" element={<Form1 />} />
         <Route path="/job" element={<Jobpostform />} />
      </Routes>
    </Router>
  );
};

export default App;
