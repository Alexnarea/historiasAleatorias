import React from "react";

interface Props {
  event: string;
}

const EventSelector: React.FC<Props> = ({ event }) => {
  return <p><strong>Evento:</strong> {event}</p>;
};

export default EventSelector;
