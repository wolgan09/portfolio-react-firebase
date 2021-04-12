import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "fire";

const firebaseConfig = {
  apiKey: "AIzaSyDOTYZSPz2Pa1QD4xJqUHQJM8JEsgsNCSw",
  authDomain: "vivek-portfolio-966ec.firebaseapp.com",
  projectId: "vivek-portfolio-966ec",
  storageBucket: "vivek-portfolio-966ec.appspot.com",
  messagingSenderId: "680953799444",
  appId: "1:680953799444:web:f6a2b0f781f4559ab5d801",
  measurementId: "G-5HEB9TJMCW"
};
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
