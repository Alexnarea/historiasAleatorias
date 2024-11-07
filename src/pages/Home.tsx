import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToStoryPage = () => {
    navigate("/story");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Bienvenido al Generador de Historias</h1>
      <p>
        Crea historias únicas seleccionando personajes, lugares y eventos. ¡Deja volar tu imaginación!
      </p>
      <button onClick={goToStoryPage} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Comenzar
      </button>
    </div>
  );
};

export default Home;
