import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BarraLateralData } from './BarraLateralData';
import '../styles/Barra.scss';
import { IconContext } from 'react-icons';

function BarraLateral() {
    const [LadoBarra, setSidebar] = useState(true);

    const MostrarLadoBarra = () => setSidebar(!LadoBarra);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={MostrarLadoBarra} />
                    </Link>
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
