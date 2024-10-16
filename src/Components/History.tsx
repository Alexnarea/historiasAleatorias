import React from 'react';

interface HistoryProps {
  character: string;
  scenario: string;
  event: string;
}

const History: React.FC<HistoryProps> = ({ character, scenario, event}) => {
  if (!character || !scenario || !event){
    return <p>Selecciona todos los elementos para generar una hostoria.</p>;
  }
return (
  <div>
    <p>{`Habia una vez ${character} que vivia en  ${scenario} y un dia${event}.`}</p>
  </div>
    
);
};

export default History;
