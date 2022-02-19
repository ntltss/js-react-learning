import React from 'react';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import {
  Routes,
} from "react-router-dom";

import HelloA from './HelloA';
import HelloB from './HelloB';

// function HelloA() {
//   return <h1>HelloA</h1>;
// }

// function HelloB() {
//   return <h1>HelloB</h1>;
// }

class SampleRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
          <li><Link to="/hello-a">HelloA</Link></li>
          <li><Link to="/hello-b">HelloB</Link></li>
          </ul>
          <Routes>
            <Route path="/hello-a" element={HelloA} />
            <Route path="/hello-b" element={HelloB} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default SampleRouter;