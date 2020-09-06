import React from 'react';
import './Categorias.scss';

const Categorias = ({ children, categorias }) => {
  return (
    <section className="contenedorCategorias">
      <div>
        <p>{categorias}</p>
      </div>
      <div className="cat">{children}</div>
    </section>
  );
};

export default Categorias;
