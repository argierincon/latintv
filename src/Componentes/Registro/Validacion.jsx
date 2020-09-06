export default function Validacion(values) {
  let errors = {};
console.log('values',values);
  
  if (!values.encargado.trim()) {
    errors.encargado = 'Nombre requerido';
  }
  if (!values.empresa.trim()) {
    errors.empresa = 'Agencia requerida';
  } 

  if (!values.correo) {
    errors.correo = 'Correo requerido';
  } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
    errors.correo = 'Correo es invalido';
  }
  if (!values.contrasena) {
    errors.contrasena = 'Contraseña requerida';
  } else if (values.contrasena.length < 6) {
    errors.contrasena = 'Contraseña debe tener 6 caractéres como mínimo';
  }

  // if (!values.contrasena2) {
  //   errors.contrasena2 = 'Contraseña requeridad';
  // } else if (values.contrasena2 !== values.contrasena) {
  //   errors.contrasena2 = 'Contraseña diferentes';
  // }

  return errors;
}
