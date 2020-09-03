import React from 'react';

import { ProgramasSemanal } from './ProgramasSemanal';

import '../assets/estilos/componentes/calendario.scss';


export const Calendario = () => {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" className='cabeceraTabla'> Horario</th>
          <th scope="col" className='cabeceraTabla'> Lunes </th>
          <th scope="col" className='cabeceraTabla'> Martes </th>
          <th scope="col" className='cabeceraTabla'> Miercoles </th>
          <th scope="col" className='cabeceraTabla'> Jueves </th>
          <th scope="col" className='cabeceraTabla'> Viernes </th>
          <th scope="col" className='cabeceraTabla'>Sábado</th>
          <th scope="col" className='cabeceraTabla'>Domingo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className='horaTabla'> 05:00</th>
          <td rowspan="4" className='reservado' > Latin noticias: primera edición </td>
          <td className='cincoRecargo' > Latin espectáculos1 </td>
          <td className='cincoRecargo' > Latin espectáculos 2</td>
          <td className='cincoRecargo' > Latin espectáculos 3</td>
          <td className='cincoRecargo' > Latin espectáculos 4</td>
          <td className='cincoRecargo' > Latin espectáculos 5</td>
          <td className='reservado' > Automundo </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla' > 06:00</th>
          <td className='cincoRecargo'> Latin noticias edición sábados </td>
          <td className='reservado'> Estás en Todas (repetición)1</td>
          <td className='reservado'> Estás en Todas (repetición)2</td>
          <td className='reservado'> Estás en Todas (repetición)3</td>
          <td className='reservado'> Estás en Todas (repetición)4</td>
          <td className='reservado'> Estás en Todas (repetición)5</td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 07:00</th>
          <td rowspan="2" className='quinceRecargo'> Latin noticias edición sábados </td>
          <td className='quinceRecargo'> Latin noticias edición 1 </td>
          <td className='quinceRecargo'> Latin noticias edición 2 </td>
          <td className='quinceRecargo'> Latin noticias edición 3 </td>
          <td className='quinceRecargo'> Latin noticias edición sábados </td>
          <td className='quinceRecargo'> Latin noticias edición 4 </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 08:00</th>
          <td className='sinRecargo'> Otro programa </td>
          <td className='quinceRecargo'> Latin noticias edición 1 </td>
          <td className='quinceRecargo'> Latin noticias edición 2 </td>
          <td className='quinceRecargo'> Latin noticias edición 3 </td>
          <td className='quinceRecargo'> Latin noticias edición 4 </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla' > 09:00</th>
          <td className='reservado'>El privilegio de amar</td>
          <td className='quinceRecargo'> Latin noticias edición 1 </td>
          <td className='quinceRecargo'> Latin noticias edición 2 </td>
          <td className='quinceRecargo'> Latin noticias edición 3 </td>
          <td className='quinceRecargo'> Latin noticias edición 4 </td>
          <td className='cincoRecargo'> Latin noticias edición sábados </td>
          <td className='reservado'> Estás en Todas (repetición)</td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 10:00</th>
          <td rowspan="2" className='cincoRecargo'>Otro programa</td>
          <td className='quinceRecargo'> Latin noticias edición 1 </td>
          <td className='quinceRecargo'> Latin noticias edición 2 </td>
          <td className='quinceRecargo'> Latin noticias edición 3 </td>
          <td className='quinceRecargo'> Latin noticias edición 4 </td>
          <td className='quinceRecargo'> Latin noticias edición sábados </td>
          <td className='quinceRecargo'> Latin noticias edición sábados </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 11:00</th>
          <td className='quinceRecargo'> Latin noticias edición sábados </td>
          <td rowspan="2" className='sinRecargo'> Otro programa 1  </td>
          <td className='sinRecargo'> Otro programa 2 </td>
          <td className='sinRecargo'> Otro programa 3</td>
          <td className='sinRecargo'> Otro programa 4</td>
          <td className='sinRecargo'> Otro programa 5 </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 12:00</th>
          <td className='reservado' > Latin noticias: primera edición </td>
          <td className='cincoRecargo' > Latin espectáculos1 </td>
          <td className='cincoRecargo' > Latin espectáculos2 </td>
          <td className='cincoRecargo' > Latin espectáculos3 </td>
          <td className='cincoRecargo' > Latin espectáculos4 </td>
          <td className='cincoRecargo' > Latin espectáculos5 </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 13:00</th>
          <td rowspan="4" className='reservado' > Latin noticias: primera edición </td>
          <td className='cincoRecargo' > Latin espectáculos1 </td>
          <td className='cincoRecargo' > Latin espectáculos 2</td>
          <td className='cincoRecargo' > Latin espectáculos 3</td>
          <td className='cincoRecargo' > Latin espectáculos 4</td>
          <td className='cincoRecargo' > Latin espectáculos 5</td>
          <td className='reservado' > Automundo </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla' > 14:00</th>
          <td className='cincoRecargo'> Latin noticias edición sábados </td>
          <td className='reservado'> Estás en Todas (repetición)1</td>
          <td className='reservado'> Estás en Todas (repetición)2</td>
          <td className='reservado'> Estás en Todas (repetición)3</td>
          <td className='reservado'> Estás en Todas (repetición)4</td>
          <td className='reservado'> Estás en Todas (repetición)5</td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 15:00</th>
          <td rowspan="2" className='quinceRecargo'> Latin noticias edición sábados </td>
          <td className='quinceRecargo'> Latin noticias edición 1 </td>
          <td className='quinceRecargo'> Latin noticias edición 2 </td>
          <td className='quinceRecargo'> Latin noticias edición 3 </td>
          <td className='quinceRecargo'> Latin noticias edición sábados </td>
          <td className='quinceRecargo'> Latin noticias edición 4 </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 16:00</th>
          <td className='sinRecargo'> Otro programa </td>
          <td className='quinceRecargo'> Latin noticias edición 1 </td>
          <td className='quinceRecargo'> Latin noticias edición 2 </td>
          <td className='quinceRecargo'> Latin noticias edición 3 </td>
          <td className='quinceRecargo'> Latin noticias edición 4 </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 17:00</th>
          <td className='quinceRecargo'> Latin noticias edición sábados </td>
          <td rowspan="2" className='sinRecargo'> Otro programa 1  </td>
          <td className='sinRecargo'> Otro programa 2 </td>
          <td className='sinRecargo'> Otro programa 3</td>
          <td className='sinRecargo'> Otro programa 4</td>
          <td className='sinRecargo'> Otro programa 5 </td>
          <td className='sinRecargo'> Otro programa 6 </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 18:00</th>
          <td className='reservado' > Latin noticias: primera edición </td>
          <td className='cincoRecargo' > Latin espectáculos1 </td>
          <td className='cincoRecargo' > Latin espectáculos2 </td>
          <td className='cincoRecargo' > Latin espectáculos3 </td>
          <td className='cincoRecargo' > Latin espectáculos4 </td>
          <td className='cincoRecargo' > Latin espectáculos5 </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 19:00</th>
          <td rowspan="4" className='reservado' > Latin noticias: primera edición </td>
          <td className='cincoRecargo' > Latin espectáculos1 </td>
          <td className='cincoRecargo' > Latin espectáculos 2</td>
          <td className='cincoRecargo' > Latin espectáculos 3</td>
          <td className='cincoRecargo' > Latin espectáculos 4</td>
          <td className='cincoRecargo' > Latin espectáculos 5</td>
          <td className='reservado' > Automundo </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla' > 20:00</th>
          <td className='cincoRecargo'> Latin noticias edición sábados </td>
          <td className='reservado'> Estás en Todas (repetición)1</td>
          <td className='reservado'> Estás en Todas (repetición)2</td>
          <td className='reservado'> Estás en Todas (repetición)3</td>
          <td className='reservado'> Estás en Todas (repetición)4</td>
          <td className='reservado'> Estás en Todas (repetición)5</td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 21:00</th>
          <td rowspan="2" className='reservado' > Latin noticias: primera edición </td>
          <td className='cincoRecargo' > Latin espectáculos1 </td>
          <td className='cincoRecargo' > Latin espectáculos 2</td>
          <td className='cincoRecargo' > Latin espectáculos 3</td>
          <td className='cincoRecargo' > Latin espectáculos 4</td>
          <td className='reservado' > Automundo </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla' > 22:00</th>
          <td className='cincoRecargo'> Latin noticias edición sábados </td>
          <td className='reservado'> Estás en Todas (repetición)1</td>
          <td className='reservado'> Estás en Todas (repetición)2</td>
          <td className='reservado'> Estás en Todas (repetición)3</td>
          <td className='reservado'> Estás en Todas (repetición)4</td>
        </tr>
        <ProgramasSemanal
          hora='23:00'
          lunes='ProgramaA'
          reservaLunes='reservado'
          Martes='Programa2'
          reservaMartes='cincoRecargo'
          miercoles='Programa3'
          reservaMiercoles='quinceRecargo'
          jueves='Programa4'
          reservaJueves='cincoRecargo'
          viernes='Programa5'
          reservaViernes="sinRecargo"
          sabado='Programa6'
          reservaSabado='reservado'
          domingo='Programa7'
          reservaDomingo='cincoRecargo'
          />
          <ProgramasSemanal
          hora='24:00'
          lunes='Programa1'
          reservaLunes='reservado'
          Martes='Programa2'
          reservaMartes='cincoRecargo'
          miercoles='Programa3'
          reservaMiercoles='quinceRecargo'
          jueves='Programa4'
          reservaJueves='cincoRecargo'
          viernes='Programa5'
          reservaViernes="sinRecargo"
          sabado='Programa6'
          reservaSabado='reservado'
          domingo='Programa7'
          reservaDomingo='cincoRecargo'
          />
      </tbody>
    </table>
  );
};
