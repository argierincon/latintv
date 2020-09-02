import React from 'react';
import { FlujoProceso } from '../componentes/FlujoProceso';
import { InfoHead } from '../componentes/InfoHead';

const FlujoFechaHora = () => {
  return (
    <div>
      <FlujoProceso />
      <InfoHead titulo="Elige fecha y hora" />
    </div>
  );
};

export default FlujoFechaHora;
