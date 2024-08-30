import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import E1 from './Usestate/E1';
import E2 from './Usestate/E2';
import E3 from './Usestate/E3';
import E4 from './Usestate/E4';

import Ex1 from './Usestate/Ssr1';
import Ssr2 from './Usestate/Ssr2';
import M1 from './Map/M1';
import M2 from './Map/M2';
import M3 from './Map/M3';
import P1 from './Props/P1';
import P2 from './Props/P2';
import P3 from './Props/P3';
import I1 from './Images/I1';
import I2 from './Images/I2';
import P4 from './Props/P4';
import P5 from './Props/P5';
import R1 from './R1';

const root = ReactDOM.createRoot(document.getElementById('root'));
  const data="Hello this is parent"
const fun= {
  "menu": {
      "id": "file",
      "value": "File",
      "popup": {
        "menuitem": [
          {"value": "New", "onclick": "CreateNewDoc()"},
          {"value": "Open", "onclick": "OpenDoc()"},
          {"value": "Close", "onclick": "CloseDoc()"}
        ]
      }
    }}

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <E1 /> */}
    {/* <E2 /> */}
    {/* <E3 /> */}
    {/* <E4 /> */}
    {/* <Ssr2 /> */}
    {/* <M1 /> */}
{/* <M2 /> */}
{/* <M3 /> */}
{/* <P1 hi={fun} bye={data}/> */}
{/* <P2 /> */}
{/* <P3 /> */}
{/* <I1 /> */}
{/* <I2 /> */}
{/* <P4 hi={data} bye={fun}  /> */}
{/* <P5 /> */}
<R1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
