import React from 'react';
import './Programa.scss';

const Programa = ({ onChange, nombrePrograma, name, id }) => {
  return (
    <label htmlFor={`programa${id}`}>
      <div className="tarjetaPrograma">
        <div>
          <input
            type="radio"
            name={name}
            value={nombrePrograma}
            id={`programa${id}`}
            onChange={onChange}
          />
        </div>
        <div className="nombrePrograma">
          <p>{nombrePrograma}</p>
        </div>
      </div>
    </label>
  );
};

export default Programa;
