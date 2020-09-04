import React from 'react';
import Astro from '../Componentes/PaginaNoEncontrada/Astro404';
import { Boton } from '../componentes/Boton';

const PaginaNoEncontrada = () => {
  return (
    <div id="root">
      <Astro titulo="404 Página no encontrada." />
    </div>
  );
};

export default PaginaNoEncontrada;
