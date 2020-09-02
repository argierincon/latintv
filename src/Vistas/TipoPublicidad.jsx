import React from 'react';
import '../assets/estilos/vistas/flujoFechaHora.scss';

const TipoPublicidad = () => {
  return (
    <div className="tipoPublicidad">
      <label htmlFor="tarjeta">
        <input type="radio" name="publicidad" id="tarjeta" />
        <p>Tarjeta</p>
      </label>
      <label htmlFor="activacion">
        <input type="radio" name="publicidad" id="activacion" />
        <p>Activación en vivo</p>
      </label>
      <label htmlFor="spot">
        <input type="radio" name="publicidad" id="spot" />
        <p>Spot</p>
      </label>
    </div>
  );
};

export default TipoPublicidad;
