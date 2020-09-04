import React from 'react';

import '../assets/estilos/componentes/imgPrograma.scss';

const ImgPrograma = ({ img }) => {
  return (
    <>
      <img className='programas' src={img} alt={img} />
    </>
  );
};

export default ImgPrograma;
