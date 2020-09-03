import React from 'react';

import '../assets/estilos/vistas/flujoFechaHora.scss';
import '../assets/estilos/vistas/tipoPublicidad.scss';

const TipoPublicidad = ({ onChange }) => {
  return (
    <div className="contenedorTipoPublicidad">
      <div>
        <label htmlFor="tarjeta" className="tarjetaPublicidad">
          <input
            onChange={onChange}
            type="radio"
            name="publicidad"
            id="tarjeta"
            value="Tarjeta"
          />
          <div className="nombrePublicidad">
            <div className="titlePublicidad">Tarjeta</div>
            <hr />
            <p className="datosPublicidad">
              {' '}
              <strong>S/ 690.00</strong> soles por fecha{' '}
            </p>
            <p className="datosPublicidad">
              {' '}
              *Formato regular: 480 x 500 pixeles{' '}
            </p>
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="activacion" className="tarjetaPublicidad">
          <input
            onChange={onChange}
            type="radio"
            name="publicidad"
            id="activacion"
            value="Activación en vivo"
          />
          <div className="nombrePublicidad">
            <div className="titlePublicidad">Activación en vivo</div>
            <hr />
            <p className="datosPublicidad">
              {' '}
              <strong>S/ 690.00</strong> soles por fecha{' '}
            </p>
            <p className="datosPublicidad"> *Product Placement + Mención </p>
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="spot" className="tarjetaPublicidad">
          <input
            value="Spot"
            onChange={onChange}
            type="radio"
            name="publicidad"
            id="spot"
          />
          <div className="nombrePublicidad">
            <div className="titlePublicidad">Spot</div>
            <hr />
            <p className="datosPublicidad">
              {' '}
              <strong>$ 4000.00 USD</strong> por fecha{' '}
            </p>
            <p className="datosPublicidad"> *Aviso de 30 segundos </p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default TipoPublicidad;
