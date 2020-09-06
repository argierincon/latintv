import { useState, useEffect } from 'react';
import {signUp} from '../../FireBase/Auth'


const MetodosForm = (callback, validate) => {
  const [values, setValues] = useState({
    empresa: '',
    correo: '',
    encargado: '',
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

  const handleSubmit = e => {
    e.preventDefault();
    let er = validate(values);
    setErrors(er);
    setIsSubmitting(true);
    
    if(!er.contrasena && !er.correo && !er.empresa && !er.encargado){
      if(values.contrasena && values.correo && values.empresa && values.encargado){
        signUp(values);
      }
    }
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default MetodosForm;
