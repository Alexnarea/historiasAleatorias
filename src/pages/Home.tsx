import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Generador de Historias</h1>
      <p>Selecciona elementos y crea tu propia historia.</p>
      <button onClick={() => navigate("/story")} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Crear Historia
      </button>
    </div>
  );
};

export default Home;
