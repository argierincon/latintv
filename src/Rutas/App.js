import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Programacion from '../vistas/Programacion';
import Reserva from '../vistas/ReservaEspacio';
import FlujoFechaHora from '../vistas/FlujoFechaHora';
import Navbar from '../Componentes/BarraLateral/BarraLateral';
import Inicio from '../Vistas/Inicio'

const App = () => (
 
  <BrowserRouter>
  <Navbar />
    <Route exact path='/' component={Inicio} />
    <Route exact path='/programacion' component={Programacion} />
    <Route exact path='/reserva' component={Reserva} />
    <Route exact path='/procesofechahora' component={FlujoFechaHora} />
  </BrowserRouter>
);

export default App;