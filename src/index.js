import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App2 from './App2.jsx';

render(
    <BrowserRouter>
        <App2 />
    </BrowserRouter>,
    document.querySelector('#root')
);