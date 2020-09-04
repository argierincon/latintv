import React from 'react';
import Astro from '../Componentes/PaginaNoEncontrada/Astro404';
import { Boton } from '../componentes/Boton';

const PaginaNoEncontrada = () => {
  return (
    <div id="root">
      <Astro
        titulo="Página no encontrada."
        msg="La página solicitada no existe, haz click en el siguiente boton para ir a la página de inicio."
      />
      <Boton estilo="next" />
    </div>
  );
};

export default PaginaNoEncontrada;
