import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import '../assets/estilos/componentes/flujoProceso.scss';

export const FlujoProceso = ({
  producto = 'check',
  programa = 'sinCheck',
  fecha = 'sinCheck',
  reserva = 'sinCheck',
}) => {
  return (
    <div className="contenedorIcon">
      <div className="step">
        <div>
          {producto === 'sinCheck' ? (
            <div className={reserva}></div>
          ) : (
            <FontAwesomeIcon className={producto} icon={faCheckCircle} />
          )}
        </div>
        <p>Producto</p>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="step">
        <div>
          {programa === 'sinCheck' ? (
            <div className={reserva}></div>
          ) : (
            <FontAwesomeIcon className={producto} icon={faCheckCircle} />
          )}
        </div>
        <p>Programa</p>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="step">
        <div>
          {fecha === 'sinCheck' ? (
            <div className={reserva}></div>
          ) : (
            <FontAwesomeIcon className={fecha} icon={faCheckCircle} />
          )}
        </div>
        <p>Fecha y hora</p>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="step">
        <div>
          {reserva === 'sinCheck' ? (
            <div className={reserva}></div>
          ) : (
            <FontAwesomeIcon className={reserva} icon={faCheckCircle} />
          )}
        </div>
        <p>Detalles de reserva</p>
      </div>
    </div>
  );
};
