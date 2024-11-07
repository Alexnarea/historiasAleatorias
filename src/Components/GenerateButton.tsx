import React from "react";

interface Props {
  onClick: () => void;
}

const GenerateButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}>
      Generar Nueva Historia
    </button>
  );
};

export default GenerateButton;
