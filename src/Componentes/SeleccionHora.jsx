import React from 'react';

import '../assets/estilos/componentes/seleccionFecha.scss';

export const SeleccionHora = ({ horas, onChange }) => {
  return (
    <div className="contenedorCheckbox radiosHora">
      {horas.map((hora) => (
        <label htmlFor={`hora${hora}`} key={`hora${hora}`}>
          <input
            onChange={onChange}
            className="radio"
            type="radio"
            id={`hora${hora}`}
            name="hora"
            value={hora}
          />
          <p>{hora}</p>
        </label>
      ))}
    </div>
  );
};
