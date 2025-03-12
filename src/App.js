import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Certification from "./pages/Certifications";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Interest from "./pages/Interest";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <BrowserRouter basename="/rakib-portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<Certification />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/interests" element={<Interest />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

