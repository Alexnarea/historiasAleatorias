import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoryPage from "./pages/StoryPage";
import Footer from "./components/Footer";
import Home from "./pages/Home";

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
