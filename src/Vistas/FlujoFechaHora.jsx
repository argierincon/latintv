import React from 'react';
import { FlujoProceso } from '../componentes/FlujoProceso';
import { InfoHead } from '../componentes/InfoHead';
import { SeleccionFecha } from '../componentes/SeleccionFecha';
import { SeleccionHora } from '../componentes/SeleccionHora';

import '../assets/estilos/vistas/flujoFechaHora.scss';

const FlujoFechaHora = () => {
  return (
    <div className="contenedorFlujoFH">
      <FlujoProceso />
      <InfoHead titulo="Elige fecha y hora" />
      <div className='contenedorSubInfo' >
        <p className="subtitulo2"> Fecha </p>
        <p className="body1">
          {' '}
          Del lunes 17 al domingo 23 puedes seleccionar una o más opciones para
          la transmición de tu publicidad.{' '}
        </p>
      </div>
      <SeleccionFecha />
      <div className='contenedorSubInfo' >
        <p className="subtitulo2"> Hora </p>
        <p className="body1">
          {' '}
          Selecciona una opción para la transmición de tu publicidad.{' '}
        </p>
      </div>
      <SeleccionHora />
      <div className='contenedorBotones' >
        <button className='btn atras' >Atras</button>
        <button className='btn sgte'>Siguiente</button>
      </div>
    </div>
  );
};

export default FlujoFechaHora;
