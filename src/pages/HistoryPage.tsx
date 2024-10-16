import React, { useState } from 'react';
import History from '../Components/History';
import Options from '../Components/Options';

const HistoryPage: React.FC = () => {
  const [character, setCharacter] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('');
  const [type, setType] = useState<string>('');

  const handleGenerateStory = (newCharacter: string, newPlace: string, newOccasion: string, newType: string) => {
    setCharacter(newCharacter);
    setPlace(newPlace);
    setOccasion(newOccasion);
    setType(newType);
  };

  return (
    <div>
      <h1>Generador de Historias Aleatorias</h1>
      <Options onGenerate={handleGenerateStory} />
      <History character={character} place={place} occasion={occasion} type={type} />
    </div>
  );
};

export default HistoryPage;
