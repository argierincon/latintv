import React from 'react';
import Validacion from './Validacion';
import EstadoForm from './MetodosForm';
import './IngresoForm.scss';
import Google from '../../assets/statics/google.png';

const IngresoCont = ({ submitForm }) => {
  const { handleChange, values, errors, IngresarConCuenta, IngresarConGoogle } = EstadoForm(
    submitForm,
    Validacion
  );

  return (
    <div className='form-content-right'>
      <form  className='form' noValidate>
        <h1>
        ¡Bienvenido!
        </h1>       
        <br></br>
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
        </div>
        <br></br>
        <button className='form-input-btn' type='submit' onClick = {IngresarConCuenta} > 
          Ingresar
        </button>
         {/* <button className='form-input-btn' type='submit' onClick={IngresarConGoogle}> 
          Sign in with Google+
         </button>*/}
        <br></br>
        <img style={{width: '56px', height:'53px'}} type='submit' onClick={IngresarConGoogle}  src={Google} />

         <span className='form-input-login'>
          ¿Olvidaste tu cuenta? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default IngresoCont;
