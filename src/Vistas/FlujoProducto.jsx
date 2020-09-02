import React from 'react';
import Input from '../Componentes/Input';
import TipoPublicidad from './TipoPublicidad';
import ContenedorFormulario from '../Componentes/ContenedorFormulario/ContenedorFormulario';
import { FlujoProceso } from '../componentes/FlujoProceso';
import { InfoHead } from '../componentes/InfoHead';
import { SeleccionFecha } from '../componentes/SeleccionFecha';
import { SeleccionHora } from '../componentes/SeleccionHora';

import '../assets/estilos/vistas/flujoFechaHora.scss';

const FlujoProducto = () => {
  return (
    <ContenedorFormulario>
      <div className="contenedorFlujoFH flujoProd">
        <FlujoProceso />
        <div>
          <InfoHead titulo="Ingresa tu producto" />
          <Input />
          <InfoHead titulo="Elige el tipo de publicidad" />
          <TipoPublicidad />
          <InfoHead titulo="Pega la url de tu spot publicitario." />
          <Input />
        </div>
      </div>
    </ContenedorFormulario>
  );
};

export default FlujoProducto;

/*
<label for="cars">Elige un prod</label>
<option value="prod" selected>Prod</option>
*/
