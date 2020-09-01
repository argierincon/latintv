import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Programacion from '../vistas/Programacion';
import Reserva from '../vistas/ReservaEspacio';


const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Programacion} />
    <Route exact path='/reserva' component={Reserva} />
  </BrowserRouter>
);

export default App;