import React from 'react';

import '../assets/estilos/componentes/imgPrograma.scss';

const ImgReservado = ({ img }) => {
  return (
    <>
      <img className='confirmacion' src={img} alt={img} />
    </>
  );
};

export default ImgReservado;
