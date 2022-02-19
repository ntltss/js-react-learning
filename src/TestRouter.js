import Home from './routes/HOME';
import About from './routes/ABOUT';
import Contact from './routes/CONTACT';
import Nomatch from './routes/NOMATCH';


import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function TestRouter(){
    return(
        <div classNmae="TestRouter">
            <h1>HelloReact Router v6</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact message="Hello Contact"/>} />
                <Route path="*" element={<Nomatch />} />
            </Routes>

        </div>
    );
}

export default TestRouter;