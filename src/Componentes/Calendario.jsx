import React from 'react';
import '../assets/estilos/contenedores/calendario.scss';

export const Calendario = () => {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" className='cabeceraTabla'> Horario</th>
          <th scope="col" className='cabeceraTabla'> Lunes a Viernes </th>
          <th scope="col" className='cabeceraTabla'>Sábado</th>
          <th scope="col" className='cabeceraTabla'>Domingo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className='horaTabla'> 05:00</th>
          <td rowspan="4" className='reservado' > Latin noticias: primera edición </td>
          <td className='cincoRecargo' > Latin espectáculos </td>
          <td className='reservado' > Automundo </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla' > 06:00</th>
          <td className='cincoRecargo'> Latin noticias edición sábados </td>
          <td className='reservado'> Estás en Todas (repetición)</td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 07:00</th>
          <td rowspan="2" className='quinceRecargo'> Latin noticias edición sábados </td>
          <td className='quinceRecargo'> Latin noticias edición sábados </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 08:00</th>
          <td className='sinRecargo'> Otro programa </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla' > 09:00</th>
          <td className='reservado'>El privilegio de amar</td>
          <td className='cincoRecargo'> Latin noticias edición sábados </td>
          <td className='reservado'> Estás en Todas (repetición)</td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 10:00</th>
          <td rowspan="2" className='cincoRecargo'>Otro programa</td>
          <td className='quinceRecargo'> Latin noticias edición sábados </td>
          <td className='quinceRecargo'> Latin noticias edición sábados </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 11:00</th>
          <td className='quinceRecargo'> Latin noticias edición sábados </td>
          <td rowspan="2" className='sinRecargo'> Otro programa </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 12:00</th>
          <td className='reservado' > Latin noticias: primera edición </td>
          <td className='cincoRecargo' > Latin espectáculos </td>
        </tr>
      </tbody>
    </table>
  );
};
