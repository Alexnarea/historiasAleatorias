import React from "react";

interface Props {
  location: string;
}

const LocationSelector: React.FC<Props> = ({ location }) => {
  return <p><strong>Lugar:</strong> {location}</p>;
};

export default LocationSelector;
