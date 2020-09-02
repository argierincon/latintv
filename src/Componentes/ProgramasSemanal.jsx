import React from 'react';

export const ProgramasSemanal = ({
  hora,
  lunes,
  reservaLunes,
  Martes,
  reservaMartes,
  miercoles,
  reservaMiercoles,
  jueves,
  reservaJueves,
  viernes,
  reservaViernes,
  sabado,
  reservaSabado,
  domingo,
  reservaDomingo,
}) => {
  return (
    <tr>
      <th scope="row" className="horaTabla">{hora}</th>
      <td rowspan="1" className={reservaLunes}>{lunes}</td>
      <td className={reservaMartes}> {Martes}</td>
      <td className={reservaMiercoles}> {miercoles}</td>
      <td className={reservaJueves}> {jueves}</td>
      <td className={reservaViernes}> {viernes}</td>
      <td className={reservaSabado}> {sabado}</td>
      <td className={reservaDomingo}> {domingo} </td>
    </tr>
  );
};
