import React from 'react';
import './Footer.scss';
import { FaInstagram } from 'react-icons/fa';
import fb from '../../../public/Facebook.png';
import Instagram from '../../../public/instagram.png';
import Twitter from '../../../public/twitter.png';

const Footer = () => (
  <div className="footer">
    <table className="footer-font">
    <br></br>
      <tbody>
      <br></br>
        <tr>
        <td className ="td1"></td>
          <td className ="td1">CATEGORÍAS</td>
          <td className ="td1"> INFORMACIÓN AL USUARIO</td>
          <td className ="td1"></td>
          <td className ="td1"></td>
         </tr>

         <tr>
         <td className ="td1"></td>
          <td className ="td1">Noticias</td>
          <td className ="td1">Políticas de seguridad y salud en el trabajo</td>
          <td className ="td1"></td>
          <td className ="td1"> <img style={{width: '43px', height:'43px'}}  src ={fb} alt="Logo Facebook"/></td>
          <td className ="td1"></td>
         </tr>

         <tr>
         <td className ="td1"></td>
          <td className ="td1">Deportes</td>
          <td className ="td1">Políticas de privacidad</td>
          <td className ="td1"></td>
          <td className ="td1"> <img  style={{width: '54px', height:'54px'}}  src ={Instagram} alt="Logo Instagram"/></td>
          <td className ="td1"></td>
         </tr>

        <tr>
        <td className ="td1"></td>
          <td className ="td1">Entretenimiento</td>
         <td className ="td1">Términos y condiciones</td>
          <td className ="td1"></td>
          <td className ="td1"> <img  style={{width: '48px', height:'48px'}}  src ={Twitter} alt="Logo Twitter"/></td>
          <td className ="td1"></td>
         </tr>
 
         <tr>
         <td className ="td1"></td>
          <td className ="td1">Publicidad</td>
          <td className ="td1">Contáctanos</td>    
         </tr>
         <br></br>

        <br></br>
      </tbody>
    </table>
  </div>
);

export default Footer;
