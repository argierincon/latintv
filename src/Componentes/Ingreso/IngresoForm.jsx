import React, { useState } from 'react';
import './IngresoForm.scss';
import IngresoCont from './IngresoCont';
import FormSuccess from './FormSuccess';

const IngresoForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
     <div className='ContenedorInicio'>
     <div className='form-container'>
     <span className='close-btn'>×</span>
   
     <IngresoCont submitForm={submitForm} />
     
   </div>
     </div>
      
    </>
  );
};

export default IngresoForm;
