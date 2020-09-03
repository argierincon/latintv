export default function Validacion(values) {
  let errors = {};

  if (!values.correo) {
    errors.correo = 'Correo requerido';
  } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
    errors.correo = 'Correo es invalido';
  }

  if (!values.contrasena) {
    errors.contrasena = 'Contraseña requerida';
  } 
  
  return errors;
}
