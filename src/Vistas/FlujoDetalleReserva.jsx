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
    recargoHorario,
    costoPublicidad,
    recargoEmpresa,
    tipoPrograma,
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
        recargoHorario,
        costoPublicidad,
        recargoEmpresa,
        tipoPrograma,
      })
      .then(() => console.log('listo'));
  };

  const fechaTransformada = Object.entries(fecha).filter((ele) => ele[1]);

  const dias = fechaTransformada.length;

  const calculoCostoUnitReserva = (
    recargoEmpresa,
    costoPublicidad,
    costoPrograma,
    cantDias
  ) => {
    const costoUnitario =
      recargoEmpresa + costoPublicidad + costoPrograma * cantDias;
    return costoUnitario;
  };

  const calculoCostoTotalReserva = (costoUnit, recargoPorHora) => {
    const recargoPercent = (costoUnit * recargoPorHora) / 100;
    const costoTotal = recargoPercent + costoUnit;

    return costoTotal;
  };

  const unit = calculoCostoUnitReserva(
    recargoEmpresa,
    costoPublicidad,
    costoPrograma,
    dias,
    recargoHorario
  );

  const costoTotal = calculoCostoTotalReserva(unit, recargoHorario);

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
          <li>Producto {marcaProducto}</li>
          <li>Programa {programa}</li>
          <li>
            Día{' '}
            <ul>
              {fechaTransformada.map((ele) => (
                <li key={ele[0]}>{ele[0]}</li>
              ))}
            </ul>
          </li>
          <li>Hora {hora}</li>
          <li>N° de pautas</li>
          <p>1 aviso de 30 segundos por fecha</p>
          <li>Recargo Horario {recargoHorario}%</li>
          <li>Precio unitario {unit}$</li>
          <li>MONTO TOTAL {costoTotal}$</li>
          {/*<li>tipo: {tipoDePublicidad}</li>
          <li>link: {linkPublicidad}</li>
          <li>Costo Programa: {costoPrograma}</li>
          <li>Recargo Empresa: {recargoEmpresa}</li>
          <li>Costo Publicidad: {costoPublicidad}</li>
          <li>Tipo Programa: {tipoPrograma}</li> */}
        </ul>

        <div className="contenedorBotones">
          <Boton namebutton="Atrás" estilo="back" link="/reservaprograma" />
          <Boton
            onClick={handleClick}
            namebutton="Confirmar"
            estilo="next"
            link="/confirmacion"
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
    costoPrograma: parseInt(state.costoPrograma),
    recargoHorario: parseInt(state.recargoHorario),
    recargoEmpresa: parseInt(state.recargoEmpresa),
    costoPublicidad: parseInt(state.costoPublicidad),
    tipoPrograma: state.tipoPrograma,
  };
};

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FlujoDetalleReserva)
);
