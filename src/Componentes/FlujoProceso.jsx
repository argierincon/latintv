import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import '../assets/estilos/componentes/flujoProceso.scss';

export const FlujoProceso = () => {
  return (
    <div className="contenedorIcon">
      <div className="step">
        <div>
          <FontAwesomeIcon className="check" icon={faCheckCircle} />
        </div>
        <p>Producto</p>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="step">
        <div>
          <FontAwesomeIcon className="check" icon={faCheckCircle} />
        </div>
        <p>Programa</p>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="step">
        <div>
          <FontAwesomeIcon className="check" icon={faCheckCircle} />
        </div>
        <p>Fecha y hora</p>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="step">
        <div className="sinCheck"></div>
        <p>Detalles de reserva</p>
      </div>
    </div>
  );
};
