import React from 'react';

import { ProgramasSemanal } from './ProgramasSemanal';

import '../assets/estilos/componentes/calendario.scss';


export const Calendario = () => {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" className='cabeceraTabla'> Horario</th>
          <th scope="col" className='cabeceraTabla'> Lunes 17 </th>
          <th scope="col" className='cabeceraTabla'> Martes 18 </th>
          <th scope="col" className='cabeceraTabla'> Miercoles 19 </th>
          <th scope="col" className='cabeceraTabla'> Jueves 20 </th>
          <th scope="col" className='cabeceraTabla'> Viernes 21 </th>
          <th scope="col" className='cabeceraTabla'>Sábado 22 </th>
          <th scope="col" className='cabeceraTabla'>Domingo 23</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className='horaTabla'> 05:00</th>
          <td className='reservado' > Latin noticias: primera edición </td>
          <td className='quinceRecargo' > Latin noticias: primera edición </td>
          <td className='quinceRecargo' > Latin noticias: primera edición</td>
          <td className='quinceRecargo' > Latin noticias: primera edición</td>
          <td className='quinceRecargo' > Latin noticias: primera edición</td>
          <td className='quinceRecargo' > Latin espectáculos </td>
          <td className='quinceRecargo' > Automundo </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla' > 06:00</th>
          <td className='reservado'> Latin noticias: primera edición </td>
          <td className='quinceRecargo'> Latin noticias: primera edición </td>
          <td className='quinceRecargo'> Latin noticias: primera edición </td>
          <td className='quinceRecargo'> Latin noticias: primera edición</td>
          <td className='quinceRecargo'> Latin noticias: primera edición</td>
          <td className='quinceRecargo'> Latin noticias edición sábados </td>
          <td className='quinceRecargo'> Estás en Todas (repetición) </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 07:00</th>
          <td className='reservado'>  Latin noticias: primera edición </td>
          <td className='quinceRecargo'>  Latin noticias: primera edición</td>
          <td className='quinceRecargo'>  Latin noticias: primera edición </td>
          <td className='quinceRecargo'> Latin noticias: primera edición </td>
          <td className='quinceRecargo'> Latin noticias: primera edición </td>
          <td className='quinceRecargo'> Latin noticias edición sábados </td>
          <td className='quinceRecargo'> Latin noticias edición dominical </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 08:00</th>
          <td className='reservado'> Latin noticias: primera edición </td>
          <td className='sinRecargo'> Latin noticias: primera edición  </td>
          <td className='sinRecargo'> Latin noticias: primera edición  </td>
          <td className='sinRecargo'> Latin noticias: primera edición  </td>
          <td className='sinRecargo'> Latin noticias: primera edición  </td>
          <td className='sinRecargo'> Latin noticias edición sábados </td>
          <td className='sinRecargo'> Latin noticias edición dominical </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla' > 09:00</th>
          <td className='reservado'>El privilegio de amar</td>
          <td className='sinRecargo'> El privilegio de amar </td>
          <td className='sinRecargo'> El privilegio de amar </td>
          <td className='sinRecargo'> El privilegio de amar </td>
          <td className='sinRecargo'>El privilegio de amar </td>
          <td className='sinRecargo'> Estás en Todas </td>
          <td className='sinRecargo'> Domingo al día </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 10:00</th>
          <td className='reservado'> Marimar</td>
          <td className='sinRecargo'> Marimar </td>
          <td className='sinRecargo'> Marimar </td>
          <td className='sinRecargo'> Marimar</td>
          <td className='sinRecargo'> Marimar </td>
          <td className='sinRecargo'> Estás en Todas </td>
          <td className='sinRecargo'> Domingo al día </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 11:00</th>
          <td className='reservado'> Los amores de Polo </td>
          <td className='sinRecargo'> Los amores de Polo </td>
          <td className='sinRecargo'> Los amores de Polo </td>
          <td className='sinRecargo'> Los amores de Polo </td>
          <td className='sinRecargo'> Los amores de Polo </td>
          <td className='sinRecargo'> Cinescape </td>
          <td className='sinRecargo'> TEC </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 12:00</th>
          <td className='reservado' > Latin noticias: edición mediodía </td>
          <td className='cincoRecargo' > Latin noticias: edición mediodía </td>
          <td className='cincoRecargo' > Latin noticias: edición mediodía</td>
          <td className='cincoRecargo' > Latin noticias: edición mediodía</td>
          <td className='cincoRecargo' > Latin noticias: edición mediodía </td>
          <td className='cincoRecargo' > El Chavo del 8 </td>
          <td className='cincoRecargo' > El Chavo del 8 </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 13:00</th>
          <td className='reservado' > En Boca de Todos </td>
          <td className='cincoRecargo' > En Boca de Todos  </td>
          <td className='cincoRecargo' > En Boca de Todos </td>
          <td className='cincoRecargo' > En Boca de Todos </td>
          <td className='cincoRecargo' > En Boca de Todos  </td>
          <td className='cincoRecargo' > Solamente Milagros </td>
          <td className='cincoRecargo' > El Chavo del 8 </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla' > 14:00</th>
          <td className='reservado'> Al Fondo Hay Sitio: temporada 5 </td>
          <td className='cincoRecargo'> Al Fondo Hay Sitio: temporada 5 </td>
          <td className='cincoRecargo'> Al Fondo Hay Sitio: temporada 5 </td>
          <td className='cincoRecargo'> Al Fondo Hay Sitio: temporada 5 </td>
          <td className='cincoRecargo'> Al Fondo Hay Sitio: temporada 5 </td>
          <td className='cincoRecargo'> Butaca América </td>
          <td className='cincoRecargo'> Butaca América - Matinee </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 15:00</th>
          <td className='reservado'> Al Fondo Hay Sitio: temporada 5 </td>
          <td className='cincoRecargo'> Al Fondo Hay Sitio: temporada 5 </td>
          <td className='cincoRecargo'> Champions League octoves de final </td>
          <td className='cincoRecargo'> Al Fondo Hay Sitio: temporada 5 </td>
          <td className='cincoRecargo'> Al Fondo Hay Sitio: temporada 5 </td>
          <td className='cincoRecargo'> Butaca América </td>
          <td className='cincoRecargo'> Butaca América - Matinee </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 16:00</th>
          <td className='reservado'> Caer en tentación </td>
          <td className='quinceRecargo'> Caer en tentación </td>
          <td className='quinceRecargo'> Champions League octoves de final </td>
          <td className='quinceRecargo'> Caer en tentación </td>
          <td className='quinceRecargo'> Caer en tentación </td>
          <td className='quinceRecargo'> Butaca América </td>
          <td className='quinceRecargo'> Butaca América </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 17:00</th>
          <td className='reservado'> La Rosa de Guadalupe </td>
          <td className='quinceRecargo'> La Rosa de Guadalupe  </td>
          <td className='quinceRecargo'> Al Fondo Hay Sitio: temporada 5 </td>
          <td className='quinceRecargo'> La Rosa de Guadalupe </td>
          <td className='quinceRecargo'> La Rosa de Guadalupe </td>
          <td className='quinceRecargo'> El Chavo del 8 </td>
          <td className='quinceRecargo'> Butaca América </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 18:00</th>
          <td className='reservado' > Cumbia Pop </td>
          <td className='quinceRecargo' > Cumbia Pop </td>
          <td className='quinceRecargo' > Cumbia Pop </td>
          <td className='quinceRecargo' > Cumbia Pop </td>
          <td className='quinceRecargo' > Cumbia Pop </td>
          <td className='quinceRecargo' > La Rosa de Guadalupe </td>
          <td className='quinceRecargo'> La Rosa de Guadalupe </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 19:00</th>
          <td className='reservado' > Esto es Guerra </td>
          <td className='quinceRecargo' > Esto es Guerra </td>
          <td className='quinceRecargo' > Esto es Guerra </td>
          <td className='quinceRecargo' > Esto es Guerra </td>
          <td className='quinceRecargo' > Esto es Guerra </td>
          <td className='quinceRecargo' > La Previa</td>
          <td className='quinceRecargo' > Cuarto Poder </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla' > 20:00</th>
          <td className='reservado'> VBQ: empezando a vivir </td>
          <td className='quinceRecargo'>  VBQ: empezando a vivir </td>
          <td className='quinceRecargo'>  VBQ: empezando a vivir </td>
          <td className='quinceRecargo'>  VBQ: empezando a vivir </td>
          <td className='quinceRecargo'>  VBQ: empezando a vivir </td>
          <td className='quinceRecargo'> El Reventonazo de la Chola </td>
          <td className='quinceRecargo'>  Cuarto Poder </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla'> 21:00</th>
          <td className='reservado' > Ojitos Hechiceros </td>
          <td className='quinceRecargo' > Ojitos Hechiceros </td>
          <td className='quinceRecargo' > Ojitos Hechiceros </td>
          <td className='quinceRecargo' > Ojitos Hechiceros </td>
          <td className='quinceRecargo' > Ojitos Hechiceros </td>
          <td className='quinceRecargo'> El Reventonazo de la Chola </td>
          <td className='quinceRecargo'>  Cuarto Poder </td>
        </tr>
        <tr>
          <th scope="row" className='horaTabla' > 22:00</th>
          <td className='reservado'> Latin noticias: edición central </td>
          <td className='quinceRecargo'> Latin noticias: edición central </td>
          <td className='quinceRecargo'> Latin noticias: edición central</td>
          <td className='quinceRecargo'> Latin noticias: edición central </td>
          <td className='quinceRecargo'> Latin noticias: edición central</td>
          <td className='quinceRecargo'> Gisela busca el amor </td>
          <td className='quinceRecargo'> Fútbol en Latina </td>
        </tr>
        <ProgramasSemanal
          hora='23:00'
          lunes='La Banda del Chino'
          reservaLunes='reservado'
          Martes='La Banda del Chino'
          reservaMartes='quinceRecargo'
          miercoles='La Banda del Chino'
          reservaMiercoles='quinceRecargo'
          jueves='La Banda del Chino'
          reservaJueves='quinceRecargo'
          viernes='La Banda del Chino'
          reservaViernes="quinceRecargo"
          sabado='Gisela busca el amor'
          reservaSabado='quinceRecargo'
          domingo='Fútbol en Latina'
          reservaDomingo='quinceRecargo'
          />
          <ProgramasSemanal
          hora='24:00'
          lunes='La Banda del Chino'
          reservaLunes='reservado'
          Martes='La Banda del Chino'
          reservaMartes='quinceRecargo'
          miercoles='La Banda del Chino'
          reservaMiercoles='quinceRecargo'
          jueves='La Banda del Chino'
          reservaJueves='quinceRecargo'
          viernes='La Banda del Chino'
          reservaViernes="quinceRecargo"
          sabado='Mujeres sin filtro'
          reservaSabado='quinceRecargo'
          domingo='Fútbol en Latina'
          reservaDomingo='quinceRecargo'
          />
          <ProgramasSemanal
          hora='00:00'
          lunes='Serie: Mujeres de Negro'
          reservaLunes='reservado'
          Martes='Serie: Mujeres de Negro'
          reservaMartes='quinceRecargo'
          miercoles='Serie: Mujeres de Negro'
          reservaMiercoles='quinceRecargo'
          jueves='Serie: Mujeres de Negro'
          reservaJueves='quinceRecargo'
          viernes='Serie: Mujeres de Negro'
          reservaViernes="quinceRecargo"
          sabado='Butaca: TV 21 Blackjack'
          reservaSabado='quinceRecargo'
          domingo='Ladrona de identidades'
          reservaDomingo='quinceRecargo'
          />
          <ProgramasSemanal
          hora='01:00'
          lunes='TN. Sin tu mirada'
          reservaLunes='reservado'
          Martes='TN. Sin tu mirada'
          reservaMartes='quinceRecargo'
          miercoles='TN. Sin tu mirada'
          reservaMiercoles='quinceRecargo'
          jueves='TN. Sin tu mirada'
          reservaJueves='quinceRecargo'
          viernes='TN. Sin tu mirada'
          reservaViernes="quinceRecargo"
          sabado='Butaca: TV 21 Blackjack'
          reservaSabado='quinceRecargo'
          domingo='Ladrona de identidades'
          reservaDomingo='quinceRecargo'
          />
          <ProgramasSemanal
          hora='02:00'
          lunes='La boca de todos (repetición)'
          reservaLunes='reservado'
          Martes='La boca de todos (repetición)'
          reservaMartes='quinceRecargo'
          miercoles='La boca de todos (repetición)'
          reservaMiercoles='quinceRecargo'
          jueves='La boca de todos (repetición)'
          reservaJueves='quinceRecargo'
          viernes='La boca de todos (repetición)'
          reservaViernes="quinceRecargo"
          sabado='Serie: Chicago Fire 3'
          reservaSabado='quinceRecargo'
          domingo='Serie: Chicago Fire 3'
          reservaDomingo='quinceRecargo'
          />
          <ProgramasSemanal
          hora='03:00'
          lunes='La boca de todos (repetición)'
          reservaLunes='reservado'
          Martes='La boca de todos (repetición)'
          reservaMartes='quinceRecargo'
          miercoles='La boca de todos (repetición)'
          reservaMiercoles='quinceRecargo'
          jueves='La boca de todos (repetición)'
          reservaJueves='quinceRecargo'
          viernes='La boca de todos (repetición)'
          reservaViernes="quinceRecargo"
          sabado='Butaca: La Gran Sangre'
          reservaSabado='quinceRecargo'
          domingo='Serie: Chicago Fire 3'
          reservaDomingo='quinceRecargo'
          />
          <ProgramasSemanal
          hora='04:00'
          lunes='Latin Espectáculos (repetición)'
          reservaLunes='reservado'
          Martes='Latin Espectáculos (repetición)'
          reservaMartes='quinceRecargo'
          miercoles='Latin Espectáculos (repetición)'
          reservaMiercoles='quinceRecargo'
          jueves='Latin Espectáculos (repetición)'
          reservaJueves='quinceRecargo'
          viernes='Latin noticias edicion central (repetición)'
          reservaViernes="quinceRecargo"
          sabado='Bob Esponja'
          reservaSabado='quinceRecargo'
          domingo='Cuarto Poder (repetición)'
          reservaDomingo='quinceRecargo'
          />
      </tbody>
    </table>
  );
};
