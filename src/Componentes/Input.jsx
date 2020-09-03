import React from 'react';
import '../assets/estilos/vistas/flujoFechaHora.scss';

const Input = ({ onChange, name }) => {
  return (
    <div className="contenedorSelector">
      <input
        className="seleccionProducto"
        onChange={onChange}
        type="text"
        name={name}
      />
    </div>
  );
};

export default Input;
