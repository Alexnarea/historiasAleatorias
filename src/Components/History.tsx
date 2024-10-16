import React from 'react';

interface HistoryProps {
  character: string;
  place: string;
  occasion: string;
  type: string;
}

const History: React.FC<HistoryProps> = ({ character, place, occasion, type }) => {
  return (
    <div>
      <h2>Generador tu historia aleatoria</h2>
      <p>{`${character} went to ${place} for ${occasion}. It turned out to be a ${type} story!`}</p>
    </div>
  );
};

export default History;
