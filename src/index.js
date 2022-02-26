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
import SampleModal from './SampleModal';

import SampleUseEffect from './SampleUseEffect';
import SampleUseEffectFetch from './SampleUseEffectFetch';
import SampleUseEffectFetchAsyncAwait from './SampleUseEffectFetchAsyncAwait';
import Count from './Count';
import CountControle from './CountControl';


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

// SPAのサンプル
// reactDom.render(
//   <BrowserRouter>
//     <TestRouter/>
//   </BrowserRouter>,
//   document.getElementById('root9')
// );

// モーダルウィンドウのサンプル
// reactDom.render(
//   <React.StrictMode>
//     <SampleModal/>
//   </React.StrictMode>,
//   document.getElementById('root10')
// );

// // userEffectのサンプル(ボタン押下)
// reactDom.render(
//   <React.StrictMode>
//     <SampleUseEffect/>
//   </React.StrictMode>,
//   document.getElementById('root11')
// );

// // userEffectのサンプル(外部からデータをfetch)
// reactDom.render(
//   <React.StrictMode>
//     <SampleUseEffectFetch/>
//   </React.StrictMode>,
//   document.getElementById('root12')
// );

// // userEffectのサンプル(外部からデータをfetch)_async,await
// reactDom.render(
//   <React.StrictMode>
//     <SampleUseEffectFetchAsyncAwait/>
//   </React.StrictMode>,
//   document.getElementById('root13')
// );

// コンポーネントのアンマウントのサンプル
reactDom.render(
  <React.StrictMode>
    <CountControle/>
  </React.StrictMode>,
  document.getElementById('root14')
);

//test_from_Windows
//gittest_conflict_from_mac

//confilict_from_windows
//test_branch_feature/TRPF-3

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
