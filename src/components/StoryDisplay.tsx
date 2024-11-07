import React from "react";

interface Props {
  character: string;
  location: string;
  event: string;
}

const StoryDisplay: React.FC<Props> = ({ character, location, event }) => {
  return (
    <div>
      <h3>Historia Generada</h3>
      <p>
        {`Había una vez un ${character} que estaba en ${location} y de repente ${event}.`}
      </p>
    </div>
  );
};

export default StoryDisplay;

