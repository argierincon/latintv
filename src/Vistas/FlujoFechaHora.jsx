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
import BarraLateral from '../Componentes/BarraLateral/BarraLateral';

import '../assets/estilos/vistas/flujoFechaHora.scss';

const FlujoFechaHora = (props) => {
  const { programa } = props;

  const [datosFormulario, setDatosFormulario] = useState({
    fecha: {
      Lunes: false,
      Martes: false,
      Miércoles: false,
      Jueves: false,
      Viernes: false,
      Sabado: false,
      Domingo: false,
    },
    hora: null,
  });

  const handleRadio = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      hora: e.target.value,
    });
    console.log(datosFormulario);
  };

  const handleCheckbox = (e) => {
    datosFormulario.fecha = {
      ...datosFormulario.fecha,
      [e.target.value]: e.target.checked,
    };
    setDatosFormulario({ ...datosFormulario });
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
    <>
      <BarraLateral />
      <ContenedorFormulario>
        <FlujoProceso producto="check" programa="check" fecha="check" />
        <div>
          <h3 className="marginTitulo">Elige fecha y hora</h3>
          <p className="subtitulo2 marginText"> Fecha </p>
          <p className="body1">
            Del lunes 17 al domingo 23 puedes seleccionar una o más opciones
            para la transmición de tu publicidad.{' '}
          </p>
          {programacion.length > 0 &&
            programacion.map((ele) => (
              <SeleccionFecha
                dias={ele.dia}
                onChange={handleCheckbox}
                key={`dias${ele.nombre}`}
              />
            ))}
          <div className="contenedorSubInfo">
            <p className="subtitulo2"> Hora </p>
            <p className="body1">
              {' '}
              Selecciona una opción para la transmición de tu publicidad.{' '}
            </p>
          </div>
          {programacion.length > 0 &&
            programacion.map((ele) => (
              <SeleccionHora
                horas={ele.hora}
                key={`horas${ele.nombre}`}
                onChange={handleRadio}
              />
            ))}
        </div>
        <div className="contenedorBotones">
          <Boton namebutton="Atrás" estilo="back" link="/reservaprograma" />
          <Boton
            onClick={handleClick}
            namebutton="Continuar"
            estilo="next"
            link="/reservadetalle"
          />
        </div>
      </ContenedorFormulario>
    </>
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
