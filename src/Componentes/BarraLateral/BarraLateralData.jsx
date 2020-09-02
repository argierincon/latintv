import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const BarraLateralData = [
    {
        titulo: 'Inicio',
        ruta: '/',
        icono: <AiIcons.AiFillHome />,
        clase: 'nav-text'
    },
    {
        titulo: 'Reserva',
        ruta: '/reserva',
        icono: <FaIcons.FaCartPlus />,
        clase: 'nav-text'
    },
    {
        titulo: 'Programación',
        ruta: '/programacion',
        icono: <FaIcons.FaCartPlus />,
        clase: 'nav-text'
    },
    {
        titulo: 'FlujoFechaHora',
        ruta: '/procesofechahora',
        icono: <IoIcons.IoMdPeople />,
        clase: 'nav-text'
    },
    {
        titulo: 'Mensajes',
        ruta: '/messages',
        icono: <FaIcons.FaEnvelopeOpenText />,
        clase: 'nav-text'
    },
    {
        titulo: 'Support',
        ruta: '/support',
        icono: <IoIcons.IoMdHelpCircle />,
        clase: 'nav-text'
    }
];
