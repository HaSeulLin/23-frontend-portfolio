import "./App.scss";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Home from "./page/Home";
import Header from "./components/Header";
import About from "./page/About";
import Project from "./page/Project";
import Stack from "./page/Stack";
import Contact from "./page/Contact";

function App() {
  // 마우스 위치
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="App" onMouseMove={(e) => handleMouseMove(e)}>
      <div
        className="cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
