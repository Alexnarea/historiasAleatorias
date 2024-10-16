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
    <h2>Maria conchita de las 4 lomas y el perro infiel</h2>
    <p>{`${character} went to ${place} for ${occasion}. It turned out to be a ${type} story!`}</p>
    </div>
);
};

export default History;
