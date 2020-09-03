import React, { useState, useEffect } from 'react';

import Select from '@atlaskit/select';

import firebase from 'firebase';
import 'firebase/firestore';

//intentado mostrar los nombres de programas de entretenimiento para luego cambiar por las marcas
export const SelectSingleExample = () => {
  const db = firebase.firestore();
  const [entretenimiento, setEntretenimiento] = useState([]);

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
      });
  }, []);

  const listProd = entretenimiento.map((elem) => {
    let prod = {};
    prod.label = elem.nombre;
    prod.value = elem.nombre;
    return prod;
  });

  return (
    <>
      <Select
        className="single-select"
        classNamePrefix="react-select"
        options={listProd}
        placeholder="Elije un producto"
      />
    </>
  );
};

export default SelectSingleExample;
