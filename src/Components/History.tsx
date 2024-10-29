import React from 'react';
import './History.css'


interface HistoryProps {
  character: string;
  scenario: string;
  event: string;
  type: string;
}

const History: React.FC<HistoryProps> = ({ character, scenario, event, type}) => {
  if (!character || !scenario || !event || !type) {
    return <p className='texto'>Selecciona todos los elementos para generar una historia.</p>;
  }
return (
  <div className='container'>
    <p>{`Esta es una historia de tipo: ${type}`}</p>
    <p>{`Habia una vez ${character} que vivia en  ${scenario} y un dia ${event}.`}</p>
  </div>
);
};

export default History;
