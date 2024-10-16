import React, { useState } from 'react';
import History from '../Components/History';
import Options from '../Components/Options';

const HistoryPage: React.FC = () => {
  const [character, setCharacter] = useState<string>('');
  const [scenario, setPlace] = useState<string>('');
  const [event, setOccasion] = useState<string>('');
  const handleGenerateStory = (newCharacter: string, newScenario: string, newEvent: string) => {
    setCharacter(newCharacter);
    setPlace(newScenario);
    setOccasion(newEvent);
  };

  return (
    <div>
      <h1>Generador de Historias Aleatorias</h1>
      <Options onGenerate={handleGenerateStory} />
      <History character={character} scenario={scenario} event={event}/>
    </div>
  );
};

export default HistoryPage;
