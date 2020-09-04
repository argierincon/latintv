import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const BarraLateralData = [
    {
        titulo: 'Programación Semanal',
        ruta: '/programacionsemanal',
        icono: <AiIcons.AiFillHome />,
        clase: 'nav-text'
    },
    // {
    //     titulo: 'Programación Semanal',
    //     ruta: '/reservaprograma',
    //     icono: <FaIcons.FaCartPlus />,
    //     clase: 'nav-text'
    // },
    {
        titulo: 'Generar reserva',
        ruta: '/reservaproducto',
        icono: <FaIcons.FaCartPlus />,
        clase: 'nav-text'
    }
    ,
    {
        titulo: 'Historial de reservas',
        ruta: '/historial',
        icono: <IoIcons.IoMdPeople />,
        clase: 'nav-text'
    }
    
];
