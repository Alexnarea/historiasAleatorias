interface Props {
  selected: string;
  onSelect: (value: string) => void;
}

const LocationSelector: React.FC<Props> = ({ selected, onSelect }) => {
  const locations = ["Castillo encantado", "Bosque oscuro", "Espacio exterior", "Espacio", "Bosque Encantado"];

  return (
    <div>
      <h3>Selecciona un lugar</h3>
      <select value={selected} onChange={(e) => onSelect(e.target.value)}>
        <option disabled>Selecciona un lugar</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;
