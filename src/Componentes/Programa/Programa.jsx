import React from 'react';
import './Programa.scss';

const Programa = ({ nombrePrograma, name, id }) => {
  return (
    <label for={`programa${id}`}>
      <div className="tarjetaPrograma">
        <div>
          <input type="radio" name={name} id={`programa${id}`} />
        </div>
        <div className="nombrePrograma">
          <p>{nombrePrograma}</p>
        </div>
      </div>
    </label>
  );
};

export default Programa;
