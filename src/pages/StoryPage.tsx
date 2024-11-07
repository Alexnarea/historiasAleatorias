import React, { useState } from "react";
import CharacterSelector from "../components/CharacterSelector";
import LocationSelector from "../components/LocationSelector";
import EventSelector from "../components/EventSelector";
import StoryDisplay from "../components/StoryDisplay";
import GenerateButton from "../components/GenerateButton";

const StoryPage: React.FC = () => {
const [character, setCharacter] = useState<string>("Personaje desconocido");
const [location, setLocation] = useState<string>("Lugar desconocido");
const [event, setEvent] = useState<string>("Evento inesperado");

const generateStory = () => {
    const characters = ["Héroe", "Villano", "Detective"];
    const locations = ["Castillo encantado", "Bosque oscuro", "Espacio exterior"];
    const events = ["Encuentra un tesoro", "Lucha contra un dragón", "Descubre un misterio"];

    setCharacter(characters[Math.floor(Math.random() * characters.length)]);
    setLocation(locations[Math.floor(Math.random() * locations.length)]);
    setEvent(events[Math.floor(Math.random() * events.length)]);
};

return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
    <h1>Tu Historia</h1>
    <CharacterSelector character={character} />
    <LocationSelector location={location} />
    <EventSelector event={event} />
    <StoryDisplay character={character} location={location} event={event} /> 
    <GenerateButton onClick={generateStory} />
    </div>
);
};

export default StoryPage;
