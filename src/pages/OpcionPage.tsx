import React, { useState } from 'react';
import Options from '../Components/Options';

const OpcionesPage: React.FC = () => {

  const [characters] = useState<string[]>(['Un caballero', 'Un dragón']);
  const [scenarios] = useState<string[]>(['un castillo', 'un bosque encantado']);
  const [events] = useState<string[]>(['rescata a alguien', 'encuentra un tesoro']);
  conts [type] = useState<string[]>(['kdkskkd'])

  const [character, setCharacter] = useState<string>('');
  const [scenario, setScenario] = useState<string>('');
  const [event, setEvent] = useState<string>('');
  const [type, setType] = useState<string>('');

     return (
    <div>
      <h2>Selecciona los elementos de tu historia</h2>
      <Options
        character={characters} 
        scenarios={scenarios}   
        events={events}         
        seleccionarCharacter={setCharacter} 
        seleccionarEscenario={setScenario}  
        seleccionarEvento={setEvent}        
      />
    </div>
  );
};

export default OpcionesPage;
