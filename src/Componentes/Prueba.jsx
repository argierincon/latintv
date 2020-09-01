import React from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

const Prueba = () => {
  const db = firebase.firestore();
  const handleClick = () => {
    db.collection('prueba').add({
      str: 'Hola mundo',
    });
  };

  return (
    <div>
      Probando conexión a la BBDD.
      <button type="button" onClick={handleClick}>
        Cargar
      </button>
    </div>
  );
};

export default Prueba;
