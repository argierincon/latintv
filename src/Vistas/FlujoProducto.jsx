import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setProducto } from '../actions';
import Input from '../Componentes/Input';
import TipoPublicidad from './TipoPublicidad';
import ContenedorFormulario from '../Componentes/ContenedorFormulario/ContenedorFormulario';
import { FlujoProceso } from '../componentes/FlujoProceso';
import { InfoHead } from '../componentes/InfoHead';
import { Boton } from '../componentes/Boton';

import '../assets/estilos/vistas/flujoFechaHora.scss';
import BarraLateral from '../Componentes/BarraLateral/BarraLateral'

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

  const handleRadio = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      tipoDePublicidad: e.target.value,
    });
    console.log(datosFormulario);
  };

  const handleClick = () => {
    props.setProducto(datosFormulario);
  };

  return (
    <>
    <BarraLateral/>
    <ContenedorFormulario>
      <div className="contenedorFlujoFH flujoProd">
        <FlujoProceso producto="check" />
        <div>
          <InfoHead titulo="Ingresa tu producto" />
          <Input name="marcaProducto" onChange={handleChange} />
          <InfoHead titulo="Elige el tipo de publicidad" />
          <TipoPublicidad onChange={handleRadio} />
          <InfoHead titulo="Pega la url de tu spot publicitario." />
          <Input name="linkPublicidad" onChange={handleChange} />
        </div>
      </div>
      <div className="contenedorBotones">
        <Boton namebutton="Atrás" estilo="back" link="/" />
        <Boton
          namebutton="Continuar"
          estilo="next"
          link="/reservaprograma"
          onClick={handleClick}
        />{' '}
      </div>
    </ContenedorFormulario>
    </>
  );
};

const mapDispatchToProps = {
  setProducto,
};

export default withRouter(connect(null, mapDispatchToProps)(FlujoProducto));
