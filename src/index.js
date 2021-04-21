import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
// import Portfolio from './components/Portfolio.js';

render(
    <BrowserRouter>
        <App />
        {/* <Portfolio /> */}
    </BrowserRouter>,
    document.querySelector('#root')
);