import React from 'react';

import '../assets/estilos/componentes/seleccionFecha.scss';

export const SeleccionFecha = ({ dias, onChange }) => {
  return (
    <div className="contenedorCheckbox">
      {dias.map((dia) => (
        <label htmlFor={`dia${dia}`} key={dia}>
          <input
            onChange={onChange}
            className="check"
            type="checkbox"
            id={`dia${dia}`}
            name={dia}
            value={dia}
          />
          <p>{dia}</p>
        </label>
      ))}
    </div>
  );
};
