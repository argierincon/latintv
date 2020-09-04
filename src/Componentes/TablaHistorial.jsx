import React from 'react';

export const TablaHistorial = ({ producto, total }) => {
  console.log(producto);
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
            <td>{ele.dia}</td>
            <td>1</td>
            <td>${ele.costoTotal}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="4">TOTAL</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  );
};
