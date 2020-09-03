import React, { useState } from 'react';
import './RegistroForm.scss';
import RegistroCont from './RegistroCont';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>

      <div className='form-container'>      
        <RegistroCont submitForm={submitForm} />
                
      </div>
    </>
  );
};

export default Form;
