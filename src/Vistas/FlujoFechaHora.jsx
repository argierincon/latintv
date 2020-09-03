import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';

import { setFechaHora } from '../actions';
import ContenedorFormulario from '../Componentes/ContenedorFormulario/ContenedorFormulario';
import { FlujoProceso } from '../componentes/FlujoProceso';
import { InfoHead } from '../componentes/InfoHead';
import { SeleccionFecha } from '../componentes/SeleccionFecha';
import { SeleccionHora } from '../componentes/SeleccionHora';
import { Boton } from '../componentes/Boton';

import '../assets/estilos/vistas/flujoFechaHora.scss';

const FlujoFechaHora = (props) => {
  const { programa } = props;

  const [datosFormulario, serDatosFormulario] = useState({
    fecha: null,
    hora: null,
  });

  const handleChange = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
    console.log(datosFormulario);
  };

  const handleClick = () => {
    props.setFechaHora(datosFormulario);
  };

  const db = firebase.firestore();
  const [programacion, setProgramacion] = useState([]);

  useEffect(() => {
    db.collection('programacion')
      .where('nombre', '==', programa)
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const programas = doc.data();
          programacion.push(programas);
        });
        setProgramacion([...programacion]);
        console.log(programacion);
      });
  }, []);

  return (
    <ContenedorFormulario>
      <div className="contenedorFlujoFH">
        <FlujoProceso producto="check" programa="check" fecha="check" />
        <InfoHead titulo="Elige fecha y hora" />
        <div className="contenedorSubInfo">
          <p className="subtitulo2"> Fecha </p>
          <p className="body1">
            {' '}
            Del lunes 17 al domingo 23 puedes seleccionar una o más opciones
            para la transmición de tu publicidad.{' '}
          </p>
        </div>
        {programacion.length > 0 &&
          programacion.map((ele) => (
            <SeleccionFecha
              id={ele.hora[0]}
              value={ele.hora[0]}
              key={ele.hora}
            />
          ))}
        <div className="contenedorSubInfo">
          <p className="subtitulo2"> Hora </p>
          <p className="body1">
            {' '}
            Selecciona una opción para la transmición de tu publicidad.{' '}
          </p>
        </div>
        <SeleccionHora />
        <div className="contenedorBotones">
          <Boton namebutton="Atrás" estilo="back" link="/reservadetalle" />
          <Boton namebutton="Siguiente" estilo="next" link="/reservadetalle" />
        </div>
      </div>
    </ContenedorFormulario>
  );
};

const mapStateToProps = (state) => {
  return {
    programa: state.programa,
  };
};

const mapDispatchToProps = {
  setFechaHora,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FlujoFechaHora)
);
