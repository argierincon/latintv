import firebase from 'firebase/app';
import {crearUsuario} from './FireStore';
 import { useHistory   } from 'react-router-dom';

export const ValidarCorreo = callback => firebase.auth().onAuthStateChanged((user) => {
  let _emailVerified = false;
  if (user) {
    if (user.emailVerified) {
      _emailVerified = true;
    }
  }
  return callback(_emailVerified);
});


// Cerrar sesión
export const signOut = () => firebase.auth().signOut();

// Usuario loggeado
export const user = () => firebase.auth().currentUser;

export const signingIn = (email, password) => 
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    console.log('logeo exitoso con cuenta');
    // Verificar usuario correo
    ValidarCorreo( (result) => {
      if (result) {
        console.log('usuario verificado'); 
        // Redirect.toString()
        //redideccionar a pantalla de inciio
        // location.pathname.startsWith('/programacion');
        window.location.href = '/programacionsemanal';
        //   let history = useHistory();     
        //  history.push('/programacion');
      } 
      else {
        console.log('usuario no verificado');
        // Mostrar mensaje de usuario no verificado
        alert('Correo no verificado');
      }
    });
});


export const signingInGoogle = () => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
   
   firebase.auth().signInWithPopup(providerGoogle).then((result) => {
     console.log('logeo exitoso con google', result);
     //redirecciona pantalla inicio
    //  location.href = '/Inicio'
     window.location.href = '/programacionsemanal';
  })
    .catch((err) => {
      console.log('error al logearse con google', err);
    });
};


export const signUp = (cliente) => 
  firebase.auth().createUserWithEmailAndPassword(cliente.correo, cliente.contrasena).then((result) => {

    // Insertar registro usuario
    crearUsuario(result.user.uid, cliente);
    console.log('registro mde usuario exitoso', result);

    // Enviar correo de verificación
    firebase.auth().currentUser.sendEmailVerification().then(() => {
      console.log('correo enviado');
      window.location.href = '/Inicio';      
      //redideccionar a pantalla de correo enviado
      // retornar a la vista login
    });
  });