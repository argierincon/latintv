import React from 'react';

import { Cabecera } from '../componentes/Cabecera';
import { Calendario } from '../componentes/Calendario';

import '../assets/estilos/vistas/programacion.scss';

const Programacion = () => (
  <>
    <Cabecera />
    <div className="contenedorProgramacion">
      <h1>Bienvenido!</h1>
      <p className='infoProgramacion'>
        Aquí puedes informarte sobre la programación de Latin TV.{' '}
        <strong>
          Para reservar un espacio publicitario dirígete al menú lateral
        </strong>
      </p>
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
