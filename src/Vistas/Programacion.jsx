import React from 'react';

import { Calendario } from '../componentes/Calendario';
import BarraLateral from '../Componentes/BarraLateral/BarraLateral';
import { SeleccionarSemana } from '../componentes/SeleccionarSemana';
import { BotonIcon } from '../componentes/BotonIcon';

import '../assets/estilos/vistas/programacion.scss';

const Programacion = () => (
  <>
    <BarraLateral />
    <div className="contenedorProgramacion">
      <h3>¡Bienvenido, Agencia Fantasía!</h3>
      <div className="selectorSemana">
        <SeleccionarSemana />
      </div>
      <div className="contenedorSub">
        <p className="body1">
          {' '}
          Aquí puedes informarte sobre la programación semanal de Latin TV y
          reservar un espacio publicitario.{' '}
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
            <p>Precio regular</p>
          </div>
          <div className="opcion">
            <div className="caja cincoRecargo"></div>
            <p>5% de recargo</p>
          </div>
          <div className="opcion">
            <div className="caja quinceRecargo"></div>
            <p>15% de recargo</p>
          </div>
          <BotonIcon
            namebutton="Reservar"
            estilo="next"
            link="/reservaproducto"
          />
        </div>
        <Calendario />
      </div>
    </div>
  </>
);

export default Programacion;
