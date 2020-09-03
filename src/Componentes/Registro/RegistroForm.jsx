import React, { useState } from 'react';
import './RegistroForm.scss';
import RegistroCont from './RegistroCont';
import Footer from '../../Componentes/PiePagina/Footer';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <div className='ContenedorInicio'>
      <div className='form-container'>  

        <RegistroCont submitForm={submitForm} />
        </div>    
      </div>
      <Footer/>
    </>
  );
};

export default Form;

