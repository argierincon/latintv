import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

const Prueba = () => {
  const [datos, setDatos] = useState([]);

  // const db = firebase.firestore();
  // const handleClick = () => {
  //   db.collection('reservas').add({
  //     producto,
  //     CantDePautas,
  //   });
  // };

  // setDatos([...datos]);

  // const db = firebase.firestore();
  // const handleClick = () => {
  //   const temp = [];
  //   db.collection('empresas-marcas')
  //     .get()
  //     .then((querySnapShot) => {
  //       querySnapShot.forEach((doc) => {
  //         const marcas = doc.data();
  //         temp.push(marcas);
  //       });
  //       setDatos(temp);
  //     });
  // };

  return (
    <div>
      Probando conexión a la BBDD.
      <button type="button" onClick={handleClick}>
        Revisar
      </button>
      <ul>
        {datos.map((ele) => (
          <li>{ele.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Prueba;
