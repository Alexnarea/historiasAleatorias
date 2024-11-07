import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CharacterSelector from "../Components/CharacterSelector";
import LocationSelector from "../Components/LocationSelector";
import EventSelector from "../Components/EventSelector";
import "./Home.css"; 

const Home: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>("Personaje desconocido");
  const [selectedLocation, setSelectedLocation] = useState<string>("Lugar desconocido");
  const [selectedEvent, setSelectedEvent] = useState<string>("Evento inesperado");

  const navigate = useNavigate();

  const handleGenerateClick = () => {
    const story = `${selectedCharacter} se encuentra en ${selectedLocation} y ${selectedEvent}. 
    De repente, una serie de eventos inesperados ocurre, obligándolo a tomar una decisión crucial. 
    Con valentía, ${selectedCharacter} decide enfrentarse a lo que venga, sabiendo que este momento cambiará su vida para siempre. 
    El día termina con una lección inolvidable sobre el poder de la perseverancia y la importancia de seguir adelante, sin importar las adversidades.`;
    
    navigate("/story", {
      state: { story },
    });
  };

  return (
    <div className="home-container">
      <h1>Generador de Historias</h1>
      
      <div className="selector-container">
        <CharacterSelector selected={selectedCharacter} onSelect={setSelectedCharacter} />
        <LocationSelector selected={selectedLocation} onSelect={setSelectedLocation} />
        <EventSelector selected={selectedEvent} onSelect={setSelectedEvent} />
      </div>
      
      <button onClick={handleGenerateClick}>Generar Historia</button>
    </div>
  );
};

export default Home;
