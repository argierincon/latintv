import React from 'react';

import '../assets/estilos/componentes/seleccionFecha.scss';

export const SeleccionFecha = (id, value) => {
  return (
    <div className="contenedorCheckbox">
      <label htmlFor="">
        <input
          className="check"
          type="checkbox"
          id={`day${id}`}
          name="dia"
          value={value}
        />
        <p>lunes</p>
      </label>
    </div>
  );
};
