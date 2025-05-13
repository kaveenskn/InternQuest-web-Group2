import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Form1 from "./pages/Form1";

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
  );
};

export default App;
