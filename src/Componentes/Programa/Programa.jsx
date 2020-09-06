import React from 'react';
import './Programa.scss';

const Programa = ({
  onChange,
  nombrePrograma,
  name,
  id,
  costo,
  recargo,
  tipo,
}) => {
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
            data-costo={costo || 0}
            data-recargo={recargo || 0}
            data-tipo={tipo || 0}
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
