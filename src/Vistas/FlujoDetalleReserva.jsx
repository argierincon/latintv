import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import { FlujoProceso } from '../componentes/FlujoProceso';
import { InfoHead } from '../componentes/InfoHead';
import { Boton } from '../componentes/Boton';
import BarraLateral from '../Componentes/BarraLateral/BarraLateral';

import '../assets/estilos/vistas/flujoFechaHora.scss';

const FlujoDetalleReserva = (props) => {
  const {
    marcaProducto,
    tipoDePublicidad,
    linkPublicidad,
    programa,
    fecha,
    hora,
    costoPrograma,
    recargoPrograma,
  } = props;

  const db = firebase.firestore();
  const handleClick = () => {
    db.collection('reservas')
      .add({
        marcaProducto,
        tipoDePublicidad,
        linkPublicidad,
        programa,
        fecha,
        hora,
        costoPrograma,
        recargoPrograma,
      })
      .then(() => console.log('listo'));
  };

  const costoTipoPrograma = {
    'A+': 5000,
    B: 3000,
  };

  const calculoReserva = (
    recargoEmpresa,
    tipoPublicidad,
    costoPrograma,
    recargoHora
  ) => {};

  const fechaTransformada = Object.entries(fecha).filter((ele) => ele[1]);

  return (
    <>
    <BarraLateral></BarraLateral>
      <div className="contenedorFlujoFH">
      <FlujoProceso
        producto="check"
        programa="check"
        fecha="check"
        reserva="check"
      />
      <InfoHead
        titulo="Detalles de reserva"
        info="Verifica los detalles de reserva de tu espacio publicitario."
      />
      <ul>
        <li>marca: {marcaProducto}</li>
        <li>tipo: {tipoDePublicidad}</li>
        <li>link: {linkPublicidad}</li>
        <li>Programa: {programa}</li>
        <li>
          Día:{' '}
          <ul>
            {fechaTransformada.map((ele) => (
              <li>{ele[0]}</li>
            ))}
          </ul>
        </li>
        <li>Hora: {hora}</li>
        <li>Costo Programa: {costoPrograma}</li>
        <li>Recargo Hora: {recargoPrograma}</li>
        <li>Recargo Empresa:</li>
        <li>Costo Publicidad</li>
      </ul>

      <div className="contenedorBotones">
        <Boton namebutton="Atrás" estilo="back" link="/reservaprograma" />
        <Boton
          onClick={handleClick}
          namebutton="Confirmar"
          estilo="next"
          link="/reservadetalle"
        />
      </div>
    </div>
 </>
    
  );
};

const mapStateToProps = (state) => {
  return {
    marcaProducto: state.marcaProducto,
    tipoDePublicidad: state.tipoDePublicidad,
    linkPublicidad: state.linkPublicidad,
    programa: state.programa,
    fecha: state.fecha,
    hora: state.hora,
    costoPrograma: state.costoPrograma,
    recargoPrograma: state.recargoPrograma,
  };
};

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FlujoDetalleReserva)
);
