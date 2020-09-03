import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducer from './reducers';
import App from './rutas/App';
// import './styles.scss';

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

const store = createStore(reducer, {});

var mountNode = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    {' '}
    <App />{' '}
  </Provider>,
  mountNode
);
