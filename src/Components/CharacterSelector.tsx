import React from "react";

interface Props {
  character: string;
}

const CharacterSelector: React.FC<Props> = ({ character }) => {
  return <p><strong>Personaje:</strong> {character}</p>;
};

export default CharacterSelector;
