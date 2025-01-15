import React from "react";
import { useParams } from "react-router-dom";

const StyledWord = () => {
  const { word, textColor, bgColor } = useParams();

  const styles = {
    color: textColor,
    backgroundColor: bgColor,
    padding: "10px",
    borderRadius: "5px",
    display: "inline-block",
  };

  return (
    <div>
      <h1 style={styles}>The word is: {word}</h1>
    </div>
  );
};

export default StyledWord;
