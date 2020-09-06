import React from 'react';
import '../assets/estilos/vistas/flujoFechaHora.scss';

const Input = ({ onChange, name, placeholder }) => {
  return (
    <div className="contenedorSelector">
      <input
        className="seleccionProducto"
        onChange={onChange}
        type="text"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
