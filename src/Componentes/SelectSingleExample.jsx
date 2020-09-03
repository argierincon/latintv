import React from 'react';
import Select from '@atlaskit/select';

const SelectSingleExample = () => (
  <Select
    className="single-select"
    classNamePrefix="react-select"
    options={[
      { label: 'Coca Cola', value: 'CocaCola' },
      { label: 'Inka Kola', value: 'InkaKola' },
      { label: 'Laboratoria', value: 'Laboratoria' },
      { label: 'Usil', value: 'USIL' },
      { label: 'Samsung', value: 'Samsung' },
      { label: 'Bodega Pepito', value: 'BodegaPepito' },
      { label: 'LG', value: 'LG' },
      { label: 'Pantene', value: 'Pantene' },
    ]}
    placeholder="Elije un producto"
  />
);

export default SelectSingleExample;
