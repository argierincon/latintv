import React from 'react';

import { Link } from 'react-router-dom';
import '../assets/estilos/componentes/boton.scss';

export const Boton = ({ namebutton, link, estilo }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <button className={estilo}>{namebutton}</button>
    </Link>
  );
};
