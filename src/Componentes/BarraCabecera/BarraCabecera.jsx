import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './BarraCabecera.scss';
import logo from '../../assets/estilos/imagenes/logo-latin.png'

function BarraLateral() {
 

    return (
        <>
            <header>
                <div className='contenedorLogo'>
                    <Link to="/" className=''><img className='logo' src ={logo} alt="Logo Latin"/></Link>
                </div>
                <div className='contenedorBtn'>
                    <Link to="/Ingreso" className='btnHeader'><span>Noticias</span></Link>
                    <Link to="/Ingreso" className='btnHeader'><span>Deportes</span></Link>
                    <Link to="/Ingreso" className='btnHeader'><span>Novelas</span></Link>
                    <Link to="/Ingreso" className='btnHeader'><span>Publicidad</span></Link>
                    <Link to="/" className='btnHeader'><span>Regístrate</span></Link>
                    <Link to="/Ingreso" className='btnHeader'><span>Ingresar</span></Link>
                </div>
            </header>
        </>
    );
}

export default BarraLateral;
