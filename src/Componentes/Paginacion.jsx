import React from 'react';

export const Paginacion = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item ">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        <li className="page-item ">
          <a className="page-link bkcolor" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Siguiente
          </a>
        </li>
      </ul>
    </nav>
  );
};
