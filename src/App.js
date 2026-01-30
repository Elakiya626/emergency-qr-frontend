import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PatientForm from "./components/PatientForm";
import ScanResult from "./components/ScanResult";
import Navbar from "./components/Navbar";
import ScanPatient from "./components/ScanPatient";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient-form" element={<PatientForm />} />
        <Route path="/scan/:qrId" element={<ScanResult />} />
        <Route path="/scan/:qrId" element={<ScanPatient />} />

      </Routes>
    </Router>
  );
}

export default App;
