import React, { useState } from "react";
import CharacterSelector from "../Components/CharacterSelector";
import LocationSelector from "../Components/LocationSelector";
import EventSelector from "../Components/EventSelector";
import Historia from "../Components/Historia";
import GenerateButton from "../Components/GenerateButton";

const StoryPage: React.FC = () => {
  const [character, setCharacter] = useState<string>("Selecciona un personaje");
  const [location, setLocation] = useState<string>("Selecciona un lugar");
  const [event, setEvent] = useState<string>("Selecciona un evento");
  const [story, setStory] = useState<string>("");

  const generateStory = () => {
    setStory(`${character} se encuentra en ${location} y ${event.toLowerCase()}.`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Generador de Historias</h1>
      <CharacterSelector selected={character} onSelect={setCharacter} />
      <LocationSelector selected={location} onSelect={setLocation} />
      <EventSelector selected={event} onSelect={setEvent} />
      <Historia story={story} />
      <GenerateButton onClick={generateStory} />
    </div>
  );
};

export default StoryPage;
