import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6HnQbyiBU1TOL_xri_z_Acw08ouVuTpQ",
  authDomain: "web-messenger-65008.firebaseapp.com",
  projectId: "web-messenger-65008",
  storageBucket: "web-messenger-65008.appspot.com",
  messagingSenderId: "126842583302",
  appId: "1:126842583302:web:82fd9141c4faca47fc4687",
  measurementId: "G-7CLL5F60JN"
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();