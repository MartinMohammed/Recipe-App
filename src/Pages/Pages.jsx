import Home from "./Home";
import React from "react";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import { Routes, Route, useLocation } from "react-router-dom";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

// RESPONSIBLE FOR ROUTING FOR ALL PAGES
const Pages = () => {
  // returns the current Location object - contains infromation about the current URL
  // Whenever the Url changes, a new location object will be returned
  // motion need that in order to understand when the component does umount or mount for fading in or fading out
  const location = useLocation();
  return (
    // All routes that fade in and fade out need to be wrapped in AnimatePresence
    // fade out this page before the other one comes in
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        {/* No matter what is after "cuisine" it will render out the cuisine component */}
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:searchTerm" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
