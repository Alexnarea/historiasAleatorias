import React from "react";

interface EventSelectorProps {
  selected: string; 
  onSelect: React.Dispatch<React.SetStateAction<string>>; 
}

const EventSelector: React.FC<EventSelectorProps> = ({ selected, onSelect }) => {
  const events = [
    "Encuentra un tesoro",
    "Lucha contra un dragón",
    "Descubre un misterio",
    "Viaja en el tiempo",
    "Se une a una misión secreta",
  ];

  return (
    <div>
      <h3>Selecciona un Evento:</h3>
      <select value={selected} onChange={(e) => onSelect(e.target.value)}>
        {events.map((event) => (
          <option key={event} value={event}>
            {event}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EventSelector;
