import React, { useState } from 'react';
import './IngresoForm.scss';
import IngresoCont from './IngresoCont';
import FormSuccess from './FormSuccess';
import Footer from '../../Componentes/PiePagina/Footer';
import BarraCabecera from '../../Componentes/BarraCabecera/BarraCabecera'

const IngresoForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  


  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <BarraCabecera/>
     <div className='ContenedorInicio'>
      <div className='form-container'>
    
          <IngresoCont submitForm={submitForm} />
      
      </div>
     </div>
     <Footer/>
    </>
  );
};

export default IngresoForm;
