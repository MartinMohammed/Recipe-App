import Home from "./Home";
import React from "react";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// RESPONSIBLE FOR ROUTING FOR ALL PAGES
const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* No matter what is after "cuisine" it will render out the cuisine component */}
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:searchTerm" element={<Searched />} />
    </Routes>
  );
};

export default Pages;
