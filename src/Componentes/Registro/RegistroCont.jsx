import React from 'react';
import Validacion from './Validacion';
import MetodosForm from './MetodosForm';
import './RegistroForm.scss';

const RegistroCont = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = MetodosForm(
    submitForm,
    Validacion
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         ¡Regístrate gratis!
        </h1>
        <br></br>
        <div className='form-inputs'>
          <label className='form-label'>Nombre</label>
          <input
            className='form-input'
            type='text'
            name='encargado'
            placeholder='Ingrese su nombre'
            value={values.encargado}
            onChange={handleChange}
          />
          {errors.encargado && <p>{errors.encargado}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Agencia o publicidad</label>
          <input
            className='form-input'
            type='text'
            name='empresa'
            placeholder='Ingrese el nombre de la agencia'
            value={values.empresa}
            onChange={handleChange}
          />
          {errors.empresa && <p>{errors.empresa}</p>}
        </div>        

        <div className='form-inputs'>
          <label className='form-label'>Correo</label>
          <input
            className='form-input'
            type='email'
            name='correo'
            placeholder='Ingrese su correo'
            value={values.correo}
            onChange={handleChange}
          />
          {errors.correo && <p>{errors.correo}</p>}
        </div>
      
        <div className='form-inputs'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='contrasena'
            placeholder='Ingrese contraseña'
            value={values.contrasena}
            onChange={handleChange}
          />
          {errors.contrasena && <p>{errors.contrasena}</p>}
          <label className='form-label'>Contraseña debe tener 6 caractéres como mínimo</label>
          </div>

        <button className='form-input-btn' type='submit'>
        Registrarme
        </button>
        <span className='form-input-login'>
          ¿Olvidaste tu cuenta? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default RegistroCont;
