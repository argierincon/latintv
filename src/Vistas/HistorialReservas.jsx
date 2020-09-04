import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import ContenedorFormulario from '../Componentes/ContenedorFormulario/ContenedorFormulario';
import SelectSingleExample from '../componentes/SelectSingleExample';
import { TablaHistorial } from '../componentes/TablaHistorial';
import { Paginacion } from '../componentes/Paginacion';
import BarraLateral from '../Componentes/BarraLateral/BarraLateral';

const HistorialReservas = () => {
  const db = firebase.firestore();
  const [producto, setProducto] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    db.collection('reservas')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const programas = doc.data();
          producto.push(programas);
        });
        setProducto([...producto]);
        console.log(producto);
      });
  }, []);

  useEffect(() => {
    db.collection('reservas')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const programas = doc.data();
          total.push(programas);
        });
        setTotal([...total]);
        console.log(total);
      });
  }, []);

  return (
    <>
    <BarraLateral></BarraLateral>
      <ContenedorFormulario>
        <div className="contenedorGralHistorial">
          <div className="contenedorHeadHistorial">
            <div className="contenedorTitle">
              <h3>Historial de reservas</h3>
              <p className="body1">Visualiza las reservas de cada producto.</p>
            </div>
            <div className="contenedorSelector">
              <SelectSingleExample />
            </div>
          </div>
          <TablaHistorial producto={producto} />
          <div className="contenedorBtnHistorial">
            <p className="body1 paginacion">Mostrando página 1 de 1 </p>
            <Paginacion></Paginacion>
          </div>
        </div>
      </ContenedorFormulario>
    </>
  );
};

export default HistorialReservas;
