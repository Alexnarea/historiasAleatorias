import React, { useEffect, useRef } from "react";

interface Props {
  story: string;
}

const Historia: React.FC<Props> = ({ story }) => {
  const storyRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (storyRef.current) {
      storyRef.current.style.transition = "opacity 0.5s ease-in-out";
      storyRef.current.style.opacity = "0"; 
      setTimeout(() => {
        if (storyRef.current) {
          storyRef.current.style.opacity = "1";
        }
      }, 500);
      console.log("Historia actualizada:", story);
    }
  }, [story]);

  return <p ref={storyRef}>{story || "Tu historia aparecerá aquí"}</p>;
};

export default Historia;
