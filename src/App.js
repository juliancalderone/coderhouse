import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobre-nosotros" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
