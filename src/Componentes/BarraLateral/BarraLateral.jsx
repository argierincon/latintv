import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BarraLateralData } from './BarraLateralData';
import './Barra.scss';
import { IconContext } from 'react-icons';
import logo from '../../assets/estilos/imagenes/logo-latin.png'

function BarraLateral() {
    const [LadoBarra, setSidebar] = useState(false);

    const MostrarLadoBarra = () => setSidebar(!LadoBarra);

    return (
        <>
            <IconContext.Provider value={{ color: '#FFFFFF' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={MostrarLadoBarra} />
                    </Link> 
                    <div className="header">
                        <div className='contenedorLogo'>
                            <Link to="/" className=''><img className='logo' src ={logo} alt="Logo Latin"/></Link>
                        </div>
                        
                        <div className='contenedorBtn'>
                            <Link to="/Ingreso" className='btnHeader'><span>Noticias</span></Link>
                            <Link to="/Ingreso" className='btnHeader'><span>Deportes</span></Link>
                            <Link to="/Ingreso" className='btnHeader'><span>Novelas</span></Link>
                            <Link to="/Ingreso" className='btnHeader'><span>Publicidad</span></Link>
                            <Link to="/" className='btnHeader'><span>REGISTRATE</span></Link>
                            <Link to="/Ingreso" className='btnHeader'><span>INGRESAR</span></Link>
                        </div>
                    </div>
                  
                    {/* <h2 style={{ color: 'white', paddingLeft: 95, paddingBottom: 5, alignContent: "end", position: "fixed", alignmentBaseline: "middle" }}>Latin TV</h2> */}
                </div>

                <nav className={LadoBarra ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={MostrarLadoBarra}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {BarraLateralData.map((item, index) => {
                            return (
                                <li key={index} className={item.clase}>
                                    <Link to={item.ruta}>
                                        {item.icono}
                                        <span>{item.titulo}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default BarraLateral;
