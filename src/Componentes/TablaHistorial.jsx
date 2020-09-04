import React from 'react';

export const TablaHistorial = ({ producto, totalPorDia, total }) => {
  return (
    <table class="table table-bordered table-dark bkTablaHistorial">
      <thead>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Estado</th>
          <th scope="col">Fecha</th>
          <th scope="col">Pautas por día</th>
          <th scope="col">Total por día</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{producto}</th>
          <td>Aceptado</td>
          <td>17/08/2020</td>
          <td>1</td>
          <td>{totalPorDia}</td>
        </tr>
        <tr>
          <th scope="row">{producto}</th>
          <td>Aceptado</td>
          <td>17/08/2020</td>
          <td>1</td>
          <td>{totalPorDia}</td>
        </tr>
        <tr>
          <th scope="row">{producto}</th>
          <td>Aceptado</td>
          <td>17/08/2020</td>
          <td>1</td>
          <td>{totalPorDia}</td>
        </tr>
        <tr>
          <td colspan="4">TOTAL</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  );
};
