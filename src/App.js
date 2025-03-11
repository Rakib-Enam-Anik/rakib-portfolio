import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Awards from "./pages/Awards";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Interest from "./pages/Interest";
import Skills from "./pages/Skills";

const  App = () => {
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/interests" element={<Interest />} />
      <Route path="/skills" element={<Skills />} />
      
    </Routes>
    </BrowserRouter>
  </div>
    
};

export default App;
