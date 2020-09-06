import React, { useState, useEffect } from 'react';

import Select from '@atlaskit/select';

import firebase from 'firebase';
import 'firebase/firestore';

//data correcta
export const SelectSingleExample = ({ onChange }) => {
  const db = firebase.firestore();
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    db.collection('empresas-marcas')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const programas = doc.data();
          empresas.push(programas);
        });
        setEmpresas([...empresas]);
      });
  }, []);

  const listProd = empresas.map((elem) => {
    let prod = {};
    prod.label = elem.nombre;
    prod.value = elem.nombre;
    prod.recargo = elem.recargo || 0;
    return prod;
  });

  return (
    <>
      <Select
        className="single-select"
        classNamePrefix="react-select"
        options={listProd}
        placeholder="Busca el nombre del producto"
        onSelected={() => undefined}
        onChange={onChange}
      />
    </>
  );
};

export default SelectSingleExample;
