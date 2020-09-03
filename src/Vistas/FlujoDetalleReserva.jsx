import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import { FlujoProceso } from '../componentes/FlujoProceso';
import { InfoHead } from '../componentes/InfoHead';
import { SeleccionFecha } from '../componentes/SeleccionFecha';
import { SeleccionHora } from '../componentes/SeleccionHora';

import '../assets/estilos/vistas/flujoFechaHora.scss';

const FlujoDetalleReserva = (props) => {
  const {
    marcaProducto,
    tipoDePublicidad,
    linkPublicidad,
    programa,
    fecha,
    hora,
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
      })
      .then(() => console.log('listo'));
  };

  return (
    <div className="contenedorFlujoFH">
      <FlujoProceso />
      <InfoHead
        titulo="Detalles de reserva"
        info="Verifica los detalles de reserva de tu espacio publicitario."
      />
      <ul>
        <li>marca: {marcaProducto}</li>
        <li>tipo: {tipoDePublicidad}</li>
        <li>link: {linkPublicidad}</li>
        <li>Programa: {programa}</li>
        <li>Dia: {fecha.Domingo ? 'domingo' : 'algun dia'}</li>
        <li>Hora: {hora}</li>
      </ul>
      <button onClick={handleClick} type="button">
        insertar
      </button>
    </div>
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
  };
};

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FlujoDetalleReserva)
);
