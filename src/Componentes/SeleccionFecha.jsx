import React from 'react';

import '../assets/estilos/componentes/seleccionFecha.scss';

export const SeleccionFecha = () => {
  return (
    <div className="contenedorCheckbox">
      <div>
        <input
          className="check"
          type="checkbox"
          id="day1"
          name="day1"
          value="Lunes"
        />
        <label htmlfor="day1"> Lunes</label>
        <br />
      </div>
      <div>
        <input
          className="check"
          type="checkbox"
          id="day2"
          name="day2"
          value="Martes"
        />
        <label htmlfor="day2"> Martes</label>
        <br />
      </div>
      <div>
        <input
          className="check"
          type="checkbox"
          id="day3"
          name="day3"
          value="Miercoles"
        />
        <label htmlfor="day3"> Miércoles</label>
        <br />
      </div>
      <div>
        <input
          className="check"
          type="checkbox"
          id="day4"
          name="day4"
          value="Jueves"
        />
        <label htmlfor="day4"> Jueves</label>
        <br />
      </div>
      <div>
        <input
          className="check"
          type="checkbox"
          id="day5"
          name="day5"
          value="Viernes"
        />
        <label htmlfor="day5"> Viernes</label>
        <br />
      </div>
    </div>
  );
};
