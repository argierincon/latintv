import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDFWK644f3VPzx-TdThbWJll302ww_0Cts',
  authDomain: 'latintv-d2744.firebaseapp.com',
  databaseURL: 'https://latintv-d2744.firebaseio.com',
  projectId: 'latintv-d2744',
  storageBucket: 'latintv-d2744.appspot.com',
  messagingSenderId: '719937038099',
  appId: '1:719937038099:web:7aff2b5fc6cc2c7f2c9ce6',
  measurementId: 'G-R0T2EN0E06',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log('borrar console.log');

var mountNode = document.getElementById('app');
ReactDOM.render(<App name="Jane" />, mountNode);
