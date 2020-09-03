import firebase from 'firebase/app';

export const crearUsuario = ( id, json) => {
  firebase.firestore().collection('cliente').doc(id).set(json);
};

export const obtenerUsuario = (id) => {
  const docRef = firebase.firestore().collection('usuario').doc(id);
  return docRef.get();
};
