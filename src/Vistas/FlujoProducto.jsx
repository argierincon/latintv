import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setProducto } from '../actions';
import Input from '../Componentes/Input';
import TipoPublicidad from './TipoPublicidad';
import ContenedorFormulario from '../Componentes/ContenedorFormulario/ContenedorFormulario';
import { FlujoProceso } from '../componentes/FlujoProceso';
import { InfoHead } from '../componentes/InfoHead';
import { SeleccionFecha } from '../componentes/SeleccionFecha';
import { SeleccionHora } from '../componentes/SeleccionHora';

import '../assets/estilos/vistas/flujoFechaHora.scss';

const FlujoProducto = (props) => {
  const [datosFormulario, setDatosFormulario] = useState({
    marcaProducto: null,
    tipoDePublicidad: null,
    linkPublicidad: null,
  });

  const handleChange = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
    console.log(datosFormulario);
  };

  const handleClick = () => {
    props.setProducto(datosFormulario);
  };

  return (
    <ContenedorFormulario>
      <div className="contenedorFlujoFH flujoProd">
        <FlujoProceso />
        <div>
          <InfoHead titulo="Ingresa tu producto" />
          <Input name="marcaProducto" onChange={handleChange} />
          <InfoHead titulo="Elige el tipo de publicidad" />
          <TipoPublicidad />
          <InfoHead titulo="Pega la url de tu spot publicitario." />
          <Input name="linkPublicidad" onChange={handleChange} />
        </div>
      </div>
    </ContenedorFormulario>
  );
};

const mapDispatchToProps = {
  setProducto,
};

export default withRouter(connect(null, mapDispatchToProps)(FlujoProducto));

/*
<label for="cars">Elige un prod</label>
<option value="prod" selected>Prod</option>
*/
