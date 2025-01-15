import React from "react";
import { useParams } from "react-router-dom";

const NumberOrWord = () => {
  const { input } = useParams();

  if (isNaN(input)) {
    return <h1>The word is: {input}</h1>;
  }

  return <h1>The number is: {input}</h1>;
};

export default NumberOrWord;
