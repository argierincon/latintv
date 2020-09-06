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
        unit,
        costoTotal,
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
      <div className="contenedorFlujoDetalleReserva">
        <FlujoProceso
          producto="check"
          programa="check"
          fecha="check"
          reserva="check"
        />
        <div>
          <h3>Detalles de reserva</h3>
          <p className="body1 marginText">
            Verifica los detalles de reserva de tu espacio publicitario.
          </p>

          <table className="table tablaDetalleReserva">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">{marcaProducto}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Programa</th>
                <td>{programa}</td>
              </tr>
              <tr>
                <th scope="row">Fechas</th>
                <td>
                  <ul className="listEstilos">
                    {fechaTransformada.map((ele) => (
                      <li className="listEstilos" key={ele[0]}>
                        {ele[0]}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope="row">Hora</th>
                <td>{hora}</td>
              </tr>
              <tr>
                <th scope="row">N° de pautas</th>
                <td>1 aviso de 30 segundos por fecha</td>
              </tr>
              <tr>
                <th scope="row">Recargo de horario</th>
                <td>{recargoHorario}%</td>
              </tr>
              <tr>
                <th scope="row">Precio unitario</th>
                <td>${unit}</td>
              </tr>
              <tr>
                <th scope="row">MONTO TOTAL</th>
                <th>${costoTotal}</th>
              </tr>
            </tbody>
          </table>
        </div>

        {/*<li>tipo: {tipoDePublicidad}</li>
          <li>link: {linkPublicidad}</li>
          <li>Costo Programa: {costoPrograma}</li>
          <li>Recargo Empresa: {recargoEmpresa}</li>
          <li>Costo Publicidad: {costoPublicidad}</li>
          <li>Tipo Programa: {tipoPrograma}</li> */}

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
