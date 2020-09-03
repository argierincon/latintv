import React from 'react';
import { withRouter } from 'react-router-dom';
import './Inicio.scss'
import RegistroForm from '../Componentes/Registro/RegistroForm';

function Inicio() {
    return (
        <div className='ContenedorInicio'>
           <RegistroForm></RegistroForm>
       
        </div>
        
    );
}

export default Inicio;