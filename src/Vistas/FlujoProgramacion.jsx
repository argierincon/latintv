import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

import Categorias from '../Componentes/Categorias/Categorias.jsx';
import Programa from '../Componentes/Programa/Programa.jsx';
import ContenedorFormulario from '../Componentes/ContenedorFormulario/ContenedorFormulario.jsx';
import { FlujoProceso } from '../Componentes/FlujoProceso';
import { InfoHead } from '../Componentes/InfoHead';

const FlujoProgramacion = () => {
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
    <ContenedorFormulario>
      <FlujoProceso />
      <InfoHead
        titulo={'Elige un programa'}
        info={
          'Selecciona un programa en el que deseas la transmición de tu espacio publicitario.'
        }
      />
      <Categorias categorias="Noticias y deportes">
        {noticias.map((ele) => (
          <Programa
            nombrePrograma={ele.nombre}
            name="programacionLatin"
            id={ele.nombre}
            key={ele.nombre}
          />
        ))}
      </Categorias>
      <Categorias categorias="Entretenimiento">
        {entretenimiento.map((ele) => (
          <Programa
            nombrePrograma={ele.nombre}
            name="programacionLatin"
            id={ele.nombre}
            key={ele.nombre}
          />
        ))}
      </Categorias>
      <Categorias categorias="Novelas y series">
        {novelas.map((ele) => (
          <Programa
            nombrePrograma={ele.nombre}
            name="programacionLatin"
            id={ele.nombre}
            key={ele.nombre}
          />
        ))}
      </Categorias>
    </ContenedorFormulario>
  );
};

export default FlujoProgramacion;
