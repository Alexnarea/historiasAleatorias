import React, { useState } from 'react';
import History from '../Components/History';
import Options from '../Components/Options';

const HistoryPage: React.FC = () => {
  const [character, setCharacter] = useState<string>('');
  const [scenario, setPlace] = useState<string>('');
  const [event, setOccasion] = useState<string>('');
  const [type, setType] = useState<string>('');
  const handleGenerateStory = (newCharacter: string, newScenario: string, newEvent: string, newType: string) => {
    setCharacter(newCharacter);
    setPlace(newScenario);
    setOccasion(newEvent);
    setType(newType);
  };

  return (
    <div>
      <h1>Generador de Historias Aleatorias</h1>
      <Options onGenerate={handleGenerateStory} />
      <History character={character} scenario={scenario} event={event} type={type}/>
    </div>
  );
};
export default HistoryPage;
