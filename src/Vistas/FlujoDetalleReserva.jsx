import React from 'react';
import { FlujoProceso } from '../componentes/FlujoProceso';
import { InfoHead } from '../componentes/InfoHead';
import { SeleccionFecha } from '../componentes/SeleccionFecha';
import { SeleccionHora } from '../componentes/SeleccionHora';

import '../assets/estilos/vistas/flujoFechaHora.scss';

const FlujoDetalleReserva = () => {
  return (
    <div className="contenedorFlujoFH">
      <FlujoProceso />
      <InfoHead
        titulo="Detalles de reserva"
        info="Verifica los detalles de reserva de tu espacio publicitario."
      />
    </div>
  );
};

export default FlujoDetalleReserva;
