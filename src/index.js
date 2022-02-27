import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Login from "./Login";
import ClassHello from "./ClassHello";
import Hello from "./Hello";
import ExampleState from "./ExampleState";
import reactDom from "react-dom";
import ExampleHook from "./ExampleHook";
import SampleList from "./SampleList";
import HelloChange from "./HelloChange";
import SampleRouter from "./SampleRouter";
import { BrowserRouter } from "react-router-dom";
import TestRouter from "./TestRouter";
import Root from "./Root";
import SampleModal from "./SampleModal";

import SampleUseEffect from "./SampleUseEffect";
import SampleUseEffectFetch from "./SampleUseEffectFetch";
import SampleUseEffectFetchAsyncAwait from "./SampleUseEffectFetchAsyncAwait";
import Count from "./Count";
import CountControle from "./CountControl";
import SampleUseContext from "./SampleUseContext";
import SampleUseContextWithUseState from "./SampleUseContextWithUseState";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";
import SampleUseContextWithUseReducer from "./SampleUseContextWithUseReducer";
import SampleUseContextWithContext from "./SampleUseContextWithContext";

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

// // コンポーネントのアンマウントのサンプル
// reactDom.render(
//   <React.StrictMode>
//     <CountControle/>
//   </React.StrictMode>,
//   document.getElementById('root14')
// );

// // useContextのサンプル
// reactDom.render(
//   <React.StrictMode>
//     <SampleUseContext />
//   </React.StrictMode>,
//   document.getElementById("root15")
// );

// // useContext(with useState)のサンプル
// reactDom.render(
//   <React.StrictMode>
//     <SampleUseContextWithUseState />
//   </React.StrictMode>,
//   document.getElementById("root16")
// );

// // useReducer(シンプル版)のサンプル
// reactDom.render(
//   <React.StrictMode>
//     <Counter />
//   </React.StrictMode>,
//   document.getElementById("root17")
// );

// // useReducer(ボタン増やし版)のサンプル
// reactDom.render(
//   <React.StrictMode>
//     <Counter2 />
//   </React.StrictMode>,
//   document.getElementById("root18")
// );

// // useReducer(type,payload追加版)のサンプル
// reactDom.render(
//   <React.StrictMode>
//     <Counter3 />
//   </React.StrictMode>,
//   document.getElementById("root19")
// );

// // useContext(with useReducer)のサンプル
// reactDom.render(
//   <React.StrictMode>
//     <SampleUseContextWithUseReducer />
//   </React.StrictMode>,
//   document.getElementById("root20")
// );

// useContext(with Context用のコンポーネント)のサンプル
reactDom.render(
  <React.StrictMode>
    <SampleUseContextWithContext />
  </React.StrictMode>,
  document.getElementById("root21")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
