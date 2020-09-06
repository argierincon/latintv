import React from 'react';
import ContenedorFormulario from '../Componentes/ContenedorFormulario/ContenedorFormulario.jsx';
import { FlujoProceso } from '../Componentes/FlujoProceso';
import { InfoHead } from '../Componentes/InfoHead';
import { Boton } from '../componentes/Boton';
import ImgPrograma from '../componentes/ImgPrograma.jsx';

import entretenimiento from '../assets/statics/entretenimiento.png';
import noticias from '../assets/statics/noticias.png';
import novelas from '../assets/statics/novelas.png';

import '../assets/estilos/vistas/tipoPrograma.scss';

const TipoPrograma = () => {
  return (
    <ContenedorFormulario>
      <FlujoProceso producto="check" />
      <InfoHead
        titulo={'Elige un programa'}
        info={
          'Selecciona un programa en el que deseas la transmisión de tu espacio publicitario.'
        }
      />
      <ImgPrograma img={noticias} />
      <ImgPrograma img={entretenimiento} />
      <ImgPrograma img={novelas} />
      <div className="contenedorBotones">
        <Boton namebutton="Atrás" estilo="back" link="/reservaproducto" />
        <Boton namebutton="Siguiente" estilo="next" link="/reservaprograma" />
      </div>
    </ContenedorFormulario>
  );
};

export default TipoPrograma;
