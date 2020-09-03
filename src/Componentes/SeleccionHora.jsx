import React from 'react';

import '../assets/estilos/componentes/seleccionFecha.scss';

export const SeleccionHora = (id, value) => {
  return (
    <div className="contenedorCheckbox">
      <label htmlFor="">
        <input
          className="radio"
          type="radio"
          id={`hora${id}`}
          name="hora"
          value={value}
        />
        <p>13:20</p>
      </label>
    </div>
  );
};
