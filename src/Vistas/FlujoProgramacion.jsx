import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import { setPrograma } from '../actions';
import Categorias from '../Componentes/Categorias/Categorias.jsx';
import Programa from '../Componentes/Programa/Programa.jsx';
import ContenedorFormulario from '../Componentes/ContenedorFormulario/ContenedorFormulario.jsx';
import { FlujoProceso } from '../Componentes/FlujoProceso';
import { InfoHead } from '../Componentes/InfoHead';
import { Boton } from '../componentes/Boton';
import BarraLateral from '../Componentes/BarraLateral/BarraLateral';
import NoticiasImagen from '../assets/statics/noticias.png';
import Entretenimiento from '../assets/statics/entretenimiento.png';
import Novelas from '../assets/statics/novelas.png';
import Acordion from '../Componentes/Acordion/Acordion';

const FlujoProgramacion = (props) => {
  const [datosFormulario, setDatosFormulario] = useState({
    programa: null,
    costoPrograma: null,
    recargoHorario: null,
    tipoPrograma: null,
  });

  const handleChange = (e) => {
    setDatosFormulario({
      programa: e.target.value,
      costoPrograma: e.target.dataset.costo,
      recargoHorario: e.target.dataset.recargo,
      tipoPrograma: e.target.dataset.tipo,
    });
    console.log(datosFormulario);
  };

  const handleClick = () => {
    props.setPrograma(datosFormulario);
  };

  const db = firebase.firestore();
  const [noticias, setNoticias] = useState([]);
  const [entretenimiento, setEntretenimiento] = useState([]);
  const [novelas, setNovelas] = useState([]);

  useEffect(() => {
    db.collection('programacion')
      .where('categoria', '==', 'noticias y deportes')
      .orderBy('num', 'asc')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const programas = doc.data();
          noticias.push(programas);
        });
        setNoticias([...noticias]);
        console.log(noticias);
      });
  }, []);

  useEffect(() => {
    db.collection('programacion')
      .where('categoria', '==', 'entretenimiento')
      .orderBy('num', 'asc')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const programas = doc.data();
          entretenimiento.push(programas);
        });
        setEntretenimiento([...entretenimiento]);
        console.log(entretenimiento);
      });
  }, []);

  useEffect(() => {
    db.collection('programacion')
      .where('categoria', '==', 'novelas y series')
      .orderBy('num', 'asc')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const programas = doc.data();
          novelas.push(programas);
        });
        setNovelas([...novelas]);
        console.log(novelas);
      });
  }, []);

  return (
    <>
      <BarraLateral />
      <ContenedorFormulario>
        <FlujoProceso producto="check" programa="check" />
        <div className="contenedorTexto">
          <h3 className="marginTitulo">Elige un programa</h3>
          <p className="body1">
            Selecciona un programa en el que deseas la transmisión de tu espacio
            publicitario.
          </p>
        </div>

        <Categorias>
          {/*<img style={{width: '58vw', paddingRight:35}}  src={NoticiasImagen} />     */}

          <Acordion title="Noticias y deportes" img={NoticiasImagen}>
            {noticias.map((ele) => (
              <Programa
                onChange={handleChange}
                nombrePrograma={ele.nombre}
                name="programa"
                id={ele.nombre}
                key={ele.nombre}
                costo={ele.costo}
                recargo={ele.recargo}
              />
            ))}
          </Acordion>
        </Categorias>
        <Categorias>
          {/*<img style={{width: '58vw', paddingRight:35}}  src={Entretenimiento} /> */}

          <Acordion title="Entretenimiento" img={Entretenimiento}>
            {entretenimiento.map((ele) => (
              <Programa
                onChange={handleChange}
                nombrePrograma={ele.nombre}
                name="programa"
                id={ele.nombre}
                key={ele.nombre}
                costo={ele.costo}
                recargo={ele.recargo}
                tipo={ele.tipo}
              />
            ))}
          </Acordion>
        </Categorias>

        <Categorias>
          {/*<img style={{width: '58vw', paddingRight:35}}  src={Novelas} />*/}
          <Acordion title="Novelas y series" img={Novelas}>
            {novelas.map((ele) => (
              <Programa
                onChange={7}
                nombrePrograma={ele.nombre}
                name="programa"
                id={ele.nombre}
                key={ele.nombre}
                costo={ele.costo}
                recargo={ele.recargo}
                tipo={ele.tipo}
              />
            ))}
          </Acordion>
        </Categorias>
        <div className="contenedorBotones">
          <Boton namebutton="Atrás" estilo="back" link="/reservaproducto" />
          <Boton
            namebutton="Continuar"
            estilo="next"
            link="/reservafechahora"
            onClick={handleClick}
          />
        </div>
      </ContenedorFormulario>
    </>
  );
};

const mapDispatchToProps = {
  setPrograma,
};

export default withRouter(connect(null, mapDispatchToProps)(FlujoProgramacion));
