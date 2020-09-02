import React from 'react';
import { FlujoProceso } from '../componentes/FlujoProceso';
import { InfoHead } from '../componentes/InfoHead';
import { SeleccionFecha } from '../componentes/SeleccionFecha';
import { SeleccionHora } from '../componentes/SeleccionHora';

import '../assets/estilos/vistas/flujoFechaHora.scss';

const FlujoProducto = () => {
  return (
    <div className="contenedorFlujoFH flujoProd">
      <FlujoProceso />
      <InfoHead
        titulo="Elige tu producto"
        info="Para generar tu reserva selecciona el producto que deseas pubicitar. "
      />

      <div className="contenedorSelector">
        <select className="seleccionProducto" id="producto">
          <option value="CocaCola">Coca Cola</option>
          <option value="Cristal">Cristal</option>
          <option value="BCP">BCP</option>
        </select>
      </div>
    </div>
  );
};

export default FlujoProducto;

/*
<label for="cars">Elige un prod</label>
<option value="prod" selected>Prod</option>
*/
