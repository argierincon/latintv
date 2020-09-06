import React from 'react';
import { withRouter } from 'react-router-dom';
import './Inicio.scss'
import RegistroForm from '../Componentes/Registro/RegistroForm';
import BarraCabecera from '../Componentes/BarraCabecera/BarraCabecera';

function Inicio() {
    return (
      
        <div className='ContenedorInicio'>
        <BarraCabecera/>
           <RegistroForm></RegistroForm>
        
        </div>
        
    );
}

export default Inicio;