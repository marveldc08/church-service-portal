import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
console.log('Initially ' + (window.navigator.onLine ? 'on' : 'off') + 'line');
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(onPerfEntry);

function onPerfEntry(onPerfEntry: any) {
    throw new Error('Function not implemented.');
  }


{/* <button id="statusCheck">Click to check the window.navigator.onLine property</button> */}


  //  window.addEventListener('online', () => console.log('Became online'));
  // window.addEventListener('offline', () => console.log('Became offline'));



// document.getElementById('statusCheck').addEventListener('click', () => console.log('window.navigator.onLine is ' + window.navigator.onLine));