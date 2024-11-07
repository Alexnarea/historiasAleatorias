import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CharacterSelector from "../Components/CharacterSelector";
import LocationSelector from "../Components/LocationSelector";
import EventSelector from "../Components/EventSelector";

const Home: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>("Personaje desconocido");
  const [selectedLocation, setSelectedLocation] = useState<string>("Lugar desconocido");
  const [selectedEvent, setSelectedEvent] = useState<string>("Evento inesperado");

  const navigate = useNavigate();

  const handleGenerateClick = () => {
   
    const story = `${selectedCharacter} se encuentra en ${selectedLocation} y ${selectedEvent}.`;
    
    navigate("/story", {
      state: { story },
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Generador de Historias</h1>
      
      <CharacterSelector selected={selectedCharacter} onSelect={setSelectedCharacter} />
      <LocationSelector selected={selectedLocation} onSelect={setSelectedLocation} />
      <EventSelector selected={selectedEvent} onSelect={setSelectedEvent} />
      
      <button onClick={handleGenerateClick}>Generar Historia</button>
    </div>
  );
};

export default Home;
