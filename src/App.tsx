import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoryPage from "./pages/StoryPage";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
