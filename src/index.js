import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import ClassHello from './ClassHello';
import Hello from './Hello';
import ExampleState from './ExampleState';
import reactDom from 'react-dom';
import ExampleHook from './ExampleHook';
import SampleList from './SampleList';
import HelloChange from './HelloChange';
import SampleRouter from './SampleRouter';
import { BrowserRouter } from 'react-router-dom';
import TestRouter from './TestRouter';
import Root from './Root';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Login/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const element = <h1  class="text-4xl text-purple-600 bg-green-500 px-5 py-3 text-center">Hello,world</h1>
// ReactDOM.render(
//   element,
//   document.getElementById('root1')
// );

// reactDom.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <ClassHello name="Taro"/>
//   </React.StrictMode>,
//   document.getElementById('root2')
// );

// reactDom.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Hello name="Kiyoshi"/>
//   </React.StrictMode>,
//   document.getElementById('root3')
// );

// reactDom.render(
//   <React.StrictMode>
//     <ExampleState/>
//   </React.StrictMode>,
//   document.getElementById('root4')
// );

// reactDom.render(
//   <React.StrictMode>
//     <ExampleHook/>
//   </React.StrictMode>,
//   document.getElementById('root5')
// );

// reactDom.render(
//   <React.StrictMode>
//     <SampleList/>
//   </React.StrictMode>,
//   document.getElementById('root6')
// );

// reactDom.render(
//   <React.StrictMode>
//     <HelloChange/>
//   </React.StrictMode>,
//   document.getElementById('root7')
// );

// reactDom.render(
//   <React.StrictMode>
//     <SampleRouter/>
//   </React.StrictMode>,
//   document.getElementById('root8')
// );

reactDom.render(
  <BrowserRouter>
    <TestRouter/>
  </BrowserRouter>,
  document.getElementById('root9')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
