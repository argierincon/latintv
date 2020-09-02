import React from 'react';

import '../assets/estilos/componentes/seleccionHora.scss';

export const SeleccionHora = () => {
  return (
    <div className="contenedorCheckbox">
      <div>
        <input
          className="radio"
          type="radio"
          id="1310"
          name="horario"
          value="1310"
        />
        <label for="male">13:10</label>
        <br />
      </div>
      <div>
        <input
          className="radio"
          type="radio"
          id="1320"
          name="horario"
          value="1320"
        />
        <label for="male">13:20</label>
        <br />
      </div>
      <div>
        <input
          className="radio"
          type="radio"
          id="1330"
          name="horario"
          value="1330"
        />
        <label for="male">13:30</label>
        <br />
      </div>
      <div>
        <input
          className="radio"
          type="radio"
          id="1340"
          name="horario"
          value="1340"
        />
        <label for="male">13:40</label>
        <br />
      </div>
    </div>
  );
};
