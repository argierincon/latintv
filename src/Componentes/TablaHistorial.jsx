import React, { useState, useEffect } from 'react';

export const TablaHistorial = ({ producto, total }) => {
  return (
    <table className="table table-bordered table-dark bkTablaHistorial">
      <thead>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Estado</th>
          <th scope="col">Fecha</th>
          <th scope="col">Pautas por día</th>
          <th scope="col">Total por Reserva</th>
        </tr>
      </thead>
      <tbody>
        {producto.map((ele, idx) => (
          <tr key={ele.marcaProducto + idx}>
            <th scope="row">{ele.marcaProducto}</th>
            <td>Aceptado</td>
            <td>
              {ele.fecha['Lunes 17/08/2020'] && <span>17/08/2020</span>}
              {ele.fecha['Martes 18/08/2020'] && <span>18/08/2020</span>}
              {ele.fecha['Miércoles 19/08/2020'] && <span>19/08/2020</span>}
              {ele.fecha['Jueves 20/08/2020'] && <span>20/08/2020</span>}
              {ele.fecha['Viernes 21/08/2020'] && <span>21/08/2020</span>}
              {ele.fecha['Sábado 22/08/2020'] && <span>22/08/2020</span>}
              {ele.fecha['Domingo 23/08/2020'] && <span>23/08/2020</span>}
            </td>
            <td>1</td>
            <td>$ {ele.costoTotal}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="4">TOTAL</td>
          <td>$ {total}</td>
        </tr>
      </tbody>
    </table>
  );
};
