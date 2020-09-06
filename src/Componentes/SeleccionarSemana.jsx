import React from 'react';

export const SeleccionarSemana = () => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary mesColor" type="button">
          Agosto
        </button>
      </div>
      <select
        className="custom-select"
        id="inputGroupSelect03"
        aria-label="Example select with button addon"
      >
        <option value="1">Semana del 17 al 23</option>
        <option value="2">Semana del 24 al 30</option>
        <option value="3">Semana del 31 al 6</option>
      </select>
    </div>
  );
};
