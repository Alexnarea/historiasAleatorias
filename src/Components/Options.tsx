import React, { useState } from 'react';

interface OptionsProps {
  onGenerate: (character: string, place: string, occasion: string, type: string) => void;
}

const Options: React.FC<OptionsProps> = ({ onGenerate }) => {
  const [character, setCharacter] = useState('');
  const [place, setPlace] = useState('');
  const [occasion, setOccasion] = useState('');
  const [type, setType] = useState('');

  const handleGenerate = () => {
    
    onGenerate(character, place, occasion, type);
  };

  return (
    <div>
      <h3>Ingresa los detalles de tu historia</h3>
      <label>
        Personaje:
        <input
          type="text"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
          placeholder="Ingrese un personaje"
        />
      </label>
      <br />
      <label>
        Escenario:
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Ingrese un escenario"
        />
      </label>
      <br />
      <label>
        Evento:
        <input
          type="text"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          placeholder="Ingrese un evento"
        />
      </label>
      <br />
      <label>
        Type of Story:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select a type history</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
        </select>
      </label>
      <br />
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
};

export default Options;
