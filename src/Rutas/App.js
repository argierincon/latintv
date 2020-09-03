import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Programacion from '../vistas/Programacion';
import FlujoProducto from '../vistas/FlujoProducto';
import FlujoProgramacion from '../Vistas/FlujoProgramacion';
import FlujoFechaHora from '../vistas/FlujoFechaHora';
import Navbar from '../Componentes/BarraLateral/BarraLateral';
import FlujoDetalleReserva from '../vistas/FlujoDetalleReserva';
import TipoPrograma from '../vistas/TipoPrograma';
import PruebaSelector from '../vistas/PruebaSelector';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Programacion} />{' '}
    <Route exact path="/reservaproducto" component={FlujoProducto} />{' '}
    <Route exact path="/reservaprograma" component={FlujoProgramacion} />{' '}
    <Route exact path="/reservafechahora" component={FlujoFechaHora} />{' '}
    <Route exact path="/reservadetalle" component={FlujoDetalleReserva} />{' '}
    <Route exact path="/tipoprogramas" component={TipoPrograma} />{' '}
    <Route exact path="/prueba" component={PruebaSelector} />{' '}
  </BrowserRouter>
);

export default App;
