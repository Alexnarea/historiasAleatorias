import React from "react";
import { useLocation } from "react-router-dom";
import "./StoryPage.css"; // Importar el CSS

const StoryPage: React.FC = () => {
  const location = useLocation();
  const { story } = location.state || { story: "No se generó ninguna historia." };

  return (
    <div className="story-container">
      <h1>Tu Historia</h1>
      <p>{story}</p>
    </div>
  );
};

export default StoryPage;
