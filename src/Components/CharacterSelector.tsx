import React from "react";

interface CharacterSelectorProps {
  selected: string; // Propiedad para el personaje seleccionado
  onSelect: React.Dispatch<React.SetStateAction<string>>; // Función para manejar selección
}

const CharacterSelector: React.FC<CharacterSelectorProps> = ({ selected, onSelect }) => {
  const characters = ["Héroe", "Villano", "Detective"];

  return (
    <div>
      <h3>Selecciona un Personaje:</h3>
      <select value={selected} onChange={(e) => onSelect(e.target.value)}>
        {characters.map((character) => (
          <option key={character} value={character}>
            {character}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CharacterSelector;
