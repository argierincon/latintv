import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Programacion from '../vistas/Programacion';

import FlujoFechaHora from '../vistas/FlujoFechaHora';
import FlujoProducto from '../vistas/FlujoProducto';
import FlujoDetalleReserva from '../vistas/FlujoDetalleReserva';
import FlujoProgramacion from '../vistas/FlujoProgramacion';


const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Programacion} />
    <Route exact path='/procesoproducto' component={FlujoProducto} />
    <Route exact path='/procesofechahora' component={FlujoFechaHora} />
    <Route exact path='/procesodetalle' component={FlujoDetalleReserva} />
    <Route exact path='/programas' component={FlujoProgramacion} />
  </BrowserRouter>
);

export default App;
