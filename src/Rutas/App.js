import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Programacion from '../vistas/Programacion';
import Reserva from '../vistas/ReservaEspacio';
import FlujoFechaHora from '../vistas/FlujoFechaHora';
import FlujoProgramacion from '../Vistas/FlujoProgramacion';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Programacion} />
    <Route exact path="/reserva" component={Reserva} />
    <Route exact path="/reservaprogramacion" component={FlujoProgramacion} />
    <Route exact path="/procesofechahora" component={FlujoFechaHora} />
  </BrowserRouter>
);

export default App;
