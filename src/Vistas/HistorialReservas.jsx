import React from 'react';
import ContenedorFormulario from '../Componentes/ContenedorFormulario/ContenedorFormulario';
import SelectSingleExample from '../componentes/SelectSingleExample';
import { TablaHistorial } from '../componentes/TablaHistorial';
import { Paginacion } from '../componentes/Paginacion';


const HistorialReservas = () => {
  return (
    <>
      <ContenedorFormulario>
        <div className='contenedorGralHistorial'>
          <div className="contenedorHeadHistorial">
            <div className="contenedorTitle">
              <h3>Historial de reservas</h3>
              <p className="body1">Visualiza las reservas de cada producto.</p>
            </div>
            <div className="contenedorSelector">
              <SelectSingleExample />
            </div>
          </div>
          <TablaHistorial />
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
