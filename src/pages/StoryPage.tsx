import React from "react";
import { useLocation } from "react-router-dom";

const StoryPage: React.FC = () => {
  const location = useLocation();
  const { story } = location.state || { story: "No se generó ninguna historia." };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Tu Historia</h1>
      <p>{story}</p>
    </div>
  );
};

export default StoryPage;
