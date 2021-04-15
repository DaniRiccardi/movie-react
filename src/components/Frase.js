import React from "react";

const Frase = ({ frase }) => {
  const { quote, author } = frase;

  return (
    <div>
      <h4>{quote}</h4>
      <h6>{author}</h6>
    </div>
  );
};

export default Frase;
