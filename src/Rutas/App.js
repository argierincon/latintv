import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Programacion from '../vistas/Programacion';
import FlujoProducto from '../vistas/FlujoProducto';
import FlujoProgramacion from '../Vistas/FlujoProgramacion';
import FlujoFechaHora from '../vistas/FlujoFechaHora';
import Inicio from '../vistas/Inicio';
import Navbar from '../Componentes/BarraLateral/BarraLateral';
import FlujoDetalleReserva from '../vistas/FlujoDetalleReserva';
import IngresoForm from '../Componentes/Ingreso/IngresoForm';
import RegistroForm from '../Componentes/Registro/RegistroForm';
import CorreoEnviado from '../Componentes/Registro/CorreoEnviado';
import Footer from '../Componentes/PiePagina/Footer';

import TipoPrograma from '../vistas/TipoPrograma';
import PruebaSelector from '../vistas/PruebaSelector';

const App = () => (
  
  <BrowserRouter>
      <Navbar />
      <Switch>    
        <Route exact path="/Inicio" component={Inicio} />{' '}
        <Route exact path="/" component={Inicio} />{' '}
        <Route exact path="/Ingreso" component={IngresoForm} />{' '}

        <Route exact path="/programacionsemanal" component={Programacion} />{' '}

        <Route exact path="/reservaprograma" component={FlujoProgramacion} />{' '}
        <Route exact path="/reservaproducto" component={FlujoProducto} />{' '}
        <Route exact path="/reservafechahora" component={FlujoFechaHora} />{' '}
        <Route exact path="/reservadetalle" component={FlujoDetalleReserva} />{' '}

        <Route exact path="/CorreoEnviado" component={CorreoEnviado} />{' '}

        <Route exact path="/reservaproducto" component={TipoPrograma} />{' '}
        <Route exact path="/prueba" component={PruebaSelector} />{' '}
      </Switch>
      <Footer/>
    </BrowserRouter>

// import TipoPrograma from '../vistas/TipoPrograma';
// import PruebaSelector from '../vistas/PruebaSelector';

// const App = () => (
//   <BrowserRouter>
//     <Route exact path="/" component={Programacion} />{' '}
//     <Route exact path="/reservaproducto" component={FlujoProducto} />{' '}
//     <Route exact path="/reservaprograma" component={FlujoProgramacion} />{' '}
//     <Route exact path="/reservafechahora" component={FlujoFechaHora} />{' '}
//     <Route exact path="/reservadetalle" component={FlujoDetalleReserva} />{' '}
//     <Route exact path="/tipoprogramas" component={TipoPrograma} />{' '}
//     <Route exact path="/prueba" component={PruebaSelector} />{' '}
//   </BrowserRouter>
);

export default App;
