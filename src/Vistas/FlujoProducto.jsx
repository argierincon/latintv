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

import SelectSingleExample from '../componentes/SelectSingleExample';

import '../assets/estilos/vistas/flujoFechaHora.scss';

const FlujoProducto = (props) => {
  const [datosFormulario, setDatosFormulario] = useState({
    marcaProducto: null,
    tipoDePublicidad: null,
    linkPublicidad: null,
    recargoEmpresa: null,
    costoPublicidad: null,
    selector: null,
  });

  const handleChange = (e) => {
    console.log(e);
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
    <ContenedorFormulario>
      <FlujoProceso producto="check" />
      <div>
        <h3 className="marginTitulo">¡Empieza con la reserva!</h3>
        <p className="subtitulo2 marginText">Elige tu producto</p>
        <Input name="marcaProducto" onChange={handleChange} />
        <SelectSingleExample name="selector" onChange={handleChange} />
        <p className="subtitulo2 marginText">Elige el tipo de publicidad</p>
        <TipoPublicidad onChange={handleRadio} />
        <p className="subtitulo2 marginText">
          Pega la url de tu spot publicitario.
        </p>
        <Input name="linkPublicidad" onChange={handleChange} />
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
  );
};

const mapDispatchToProps = {
  setProducto,
};

export default withRouter(connect(null, mapDispatchToProps)(FlujoProducto));
