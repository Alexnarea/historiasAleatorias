import React from 'react';

interface ButtonGenerateHistoryProps {
  onClick: () => void;
}

const ButtonGenerateHistory: React.FC<ButtonGenerateHistoryProps> = ({ onClick }) => {
  return <button onClick={onClick}>Generate</button>;
};

export default ButtonGenerateHistory;
