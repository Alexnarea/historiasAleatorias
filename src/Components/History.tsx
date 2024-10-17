import React from 'react';

interface HistoryProps {
  character: string;
  scenario: string;
  event: string;
  type: string;
}

const History: React.FC<HistoryProps> = ({ character, scenario, event, type}) => {
  if (!character || !scenario || !event || !type) {
    return <p>Selecciona todos los elementos para generar una hostoria.</p>;
  }
return (
  <div>
    <p>{`Esta es una historia de tipo: ${type}Habia una vez ${character} que vivia en  ${scenario} y un dia${event}.`}</p>
    <p>{`Habia una vez ${character} que vivia en  ${scenario} y un dia${event}.`}</p>
  </div>
);
};

export default History;
