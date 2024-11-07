interface Props {
  onClick: () => void;
}

const GenerateButton: React.FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>Generar Historia</button>;
};

export default GenerateButton;
