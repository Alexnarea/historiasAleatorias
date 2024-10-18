import React, { useState } from 'react';
import Button from './ButtonGenerateHistory';

interface OptionsProps {
  onGenerate: (character: string, scenario: string, event: string, type: string) => void;
}

const Options: React.FC<OptionsProps> = ({ onGenerate }) => {
  const [character, setCharacter] = useState('');
  const [scenario, setScenario] = useState('');
  const [event, setEvent] = useState('');
  const [type, setType] = useState('');

  const handleGenerate = () => {
    
    onGenerate(character, scenario, event, type);
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
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
          placeholder="Ingrese un escenario"
        />
      </label>
      <br />
      <label>
        Evento:
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="Ingrese un evento"
        />
      </label>
      <br />
      <label>
        Tipo de historia:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Seleccione un tipo para su historia</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
        </select>
      </label>
      <br />
      <Button onClick={handleGenerate} label="Generate" />
    </div>
  );
};

export default Options;
