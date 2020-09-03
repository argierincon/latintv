import { useState, useEffect } from 'react';
import {signingIn,signingInGoogle} from '../../FireBase/Auth'

const EstadoForm = (callback, validate) => {
  const [values, setValues] = useState({
    correo: '',
    contrasena: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  // const handleSubmit = e => {
   
  //   e.preventDefault();
  //   let er = validate(values);

  //   setErrors(er);
  //   setIsSubmitting(true);
    
  
  // };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  const IngresarConCuenta = (e) => {
    e.preventDefault();
    let er = validate(values);
    setErrors(er);
    setIsSubmitting(true);
    
    if(!er.contrasena && ! er.correo){
      if(values.contrasena && values.correo){
        signingIn(values.correo, values.contrasena);
      }
    }
  }

  const IngresarConGoogle = (e) => {
    e.preventDefault();
    console.log('google');
     signingInGoogle();

  }

  return { handleChange, values, errors, IngresarConCuenta,IngresarConGoogle };
};

export default EstadoForm;
