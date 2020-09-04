import React from 'react';
//import { Link } from 'react-router-dom';
import ContenedorFormulario from '../Componentes/ContenedorFormulario/ContenedorFormulario.jsx';
import ImgReservado from '../componentes/ImgReservado.jsx';
import { Boton } from '../componentes/Boton';
import computadora from '../assets/statics/computadora.png';
import BarraLateral from '../Componentes/BarraLateral/BarraLateral';

const ConfirmacionReserva = () => {
  return (
    <>
      <BarraLateral></BarraLateral>
      <ContenedorFormulario>
        <div className="contenedorReservado">
          <ImgReservado img={computadora} />
          <h3 className="headline">
            ¡Gracias! Ya está reservado tu espacio publicitario.
          </h3>
          <p className="bodyST">
            {' '}
            Puedes dirigirte a la pasarela de pagos para continuar la compra de
            tu espacio publicitario.
          </p>
          <Boton
            namebutton="Continuar con la compra"
            estilo="next"
            link="/reservaproducto"
          />
          <p className="bodyST">
            {' '}
            Puedes ingresar a Historial de reservas para hacer el seguimiento de
            tus espacios publicitarios.
          </p>
          <a
            className="estiloLinkHistorial"
            style={{ textDecoration: 'none' }}
            href="/historial"
          >
            IR A HISTORIAL DE RESERVAS
          </a>
        </div>
      </ContenedorFormulario>
    </>
  );
};

export default ConfirmacionReserva;
