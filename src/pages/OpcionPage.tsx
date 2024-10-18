import React, { useState } from 'react';
import Options from '../Components/Options';

const OpcionesPage: React.FC = () => {

  const [characters] = useState<string[]>(['Un caballero', 'Un dragón']);
  const [scenarios] = useState<string[]>(['un castillo', 'un bosque encantado']);
  const [events] = useState<string[]>(['rescata a alguien', 'encuentra un tesoro']);
  const {type} = useState<string[]>(['Comedia`, `]);


  const [character, setCharacter] = useState<string>('');
  const [scenario, setScenario] = useState<string>('');
  const [event, setEvent] = useState<string>('');

  return (
    <div>
      <h2>Selecciona los elementos de tu historia</h2>
      <Options
        characters={characters} 
        scenarios={scenarios}   
        events={events}         
        seleccionarCharacter={setCharacter} 
        seleccionarScenario={setScenario}  
        seleccionarEvent={setEvent}        
      />
    </div>
  );
};

export default OpcionesPage;
