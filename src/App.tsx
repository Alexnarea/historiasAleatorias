import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoryPage from "./pages/StoryPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
