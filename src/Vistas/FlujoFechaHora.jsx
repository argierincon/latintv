import React from 'react';
import ContenedorFormulario from '../Componentes/ContenedorFormulario/ContenedorFormulario';
import { FlujoProceso } from '../componentes/FlujoProceso';
import { InfoHead } from '../componentes/InfoHead';
import { SeleccionFecha } from '../componentes/SeleccionFecha';
import { SeleccionHora } from '../componentes/SeleccionHora';
import { Boton } from '../componentes/Boton';

import '../assets/estilos/vistas/flujoFechaHora.scss';

const FlujoFechaHora = () => {
  return (
    <>
      <ContenedorFormulario>
        <div>
          <FlujoProceso />
          <InfoHead titulo="Elige fecha y hora" />
          <div className="contenedorSubInfo">
            <p className="subtitulo2"> Fecha </p>
            <p className="body1">
              {' '}
              Puedes seleccionar una o más opciones para la transmisión de tu
              publicidad.{' '}
            </p>
          </div>
          <SeleccionFecha />
          <div className="contenedorSubInfo">
            <p className="subtitulo2"> Hora </p>
            <p className="body1">
              {' '}
              Selecciona una opción para la transmición de tu publicidad.{' '}
            </p>
          </div>
          <SeleccionHora />
          <div className="contenedorBotones">
            <button className="btn atras">Atras</button>
            <button className="btn sgte">Siguiente</button>
          </div>
        </div>
      </ContenedorFormulario>
      <SeleccionFecha />
      <div className="contenedorSubInfo">
        <p className="subtitulo2"> Hora </p>
        <p className="body1">
          {' '}
          Selecciona una opción para la transmición de tu publicidad.{' '}
        </p>
      </div>
      <SeleccionHora />
      <div className="contenedorBotones">
        <Boton namebutton="Atrás" estilo="back" link="/reservadetalle" />
        <Boton namebutton="Siguiente" estilo="next" link="/reservadetalle" />
      </div>
    </>
  );
};

export default FlujoFechaHora;
