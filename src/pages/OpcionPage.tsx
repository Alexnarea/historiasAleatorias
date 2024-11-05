// pages/OpcionesPage.tsx
import React, { useState } from 'react';
import Options from '../Components/Options';

const OpcionesPage: React.FC = () => {
  const [characters] = useState<string[]>(['Un caballero', 'Un dragón']);
  const [scenarios] = useState<string[]>(['un castillo', 'un bosque encantado']);
  const [events] = useState<string[]>(['rescata a alguien', 'encuentra un tesoro']);
  const [storyTypes] = useState<string[]>(['aventura', 'misterio']);

  const [character, setCharacter] = useState<string>('');
  const [scenario, setScenario] = useState<string>('');
  const [event, setEvent] = useState<string>('');
  const [storyType, setStoryType] = useState<string>('');

  return (
    <div>
      <h2>Selecciona los elementos de tu historia</h2>
      <Options
        character={characters}
        scenarios={scenarios}
        events={events}
        types={storyTypes}
        seleccionarCharacter={setCharacter}
        seleccionarEscenario={setScenario}
        seleccionarEvento={setEvent}
        seleccionarType={setStoryType}
      />
      <p>
        Historia generada: {`En un ${scenario}, un ${character} decide ${event} en una historia de ${storyType}.`}
      </p>
    </div>
  );
};

export default OpcionesPage;
