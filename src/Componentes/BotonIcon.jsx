import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import '../assets/estilos/componentes/boton.scss';

export const BotonIcon = ({ namebutton, link, estilo, onClick }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <button onClick={onClick} className={estilo}>
        <FontAwesomeIcon className='plusIcon' icon={faPlus} />
        {namebutton}
      </button>
    </Link>
  );
};
