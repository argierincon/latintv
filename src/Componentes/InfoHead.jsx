import React from 'react';
import '../assets/estilos/componentes/infoHead.scss';

export const InfoHead = ({ titulo, info }) => {
  return (
    <div className='contenedoInfoHead'>
      <h3> {titulo} </h3>
      <p className="body1"> {info} </p>
    </div>
  );
};
