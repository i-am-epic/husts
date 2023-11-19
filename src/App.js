import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import PyPortfolio from "./components/PySite/PyPortfolio"
// Create a component for the /other route


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<LandingPage />} />
        <Route path="/pyfolio" element={<PyPortfolio />} />
        {/* Define routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
