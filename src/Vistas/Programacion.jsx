import React from 'react';

import { Cabecera } from '../componentes/Cabecera';
import { Calendario } from '../componentes/Calendario';

import '../assets/estilos/vistas/programacion.scss';

const Programacion = () => (
  <>
    <Cabecera />
    <div className="contenedorProgramacion">
      <h3>¡Bienvenido, Agencia Fantasía!</h3>
      <div className='contenedorSub' >
        <p className="subtitulo2"> Fecha </p>
        <p className="body1">
          {' '}
          Del lunes 17 al domingo 23 puedes seleccionar una o más opciones para
          la transmición de tu publicidad.{' '}
        </p>
      </div>
      <div className="contenedorPrograma">
        <div className="opcionesRecargo">
          <div className="opcion">
            <div className=" caja reservado"></div>
            <p>Reservado</p>
          </div>
          <div className="opcion">
            <div className="caja sinRecargo"></div>
            <p>Sin recargo</p>
          </div>
          <div className="opcion">
            <div className="caja cincoRecargo"></div>
            <p>5% de recargo</p>
          </div>
          <div className="opcion">
            <div className="caja quinceRecargo"></div>
            <p>15% de recargo</p>
          </div>
        </div>
        <Calendario />
      </div>
    </div>
  </>
);

export default Programacion;
