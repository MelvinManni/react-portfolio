import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './components/app';

// var remove = document.getElementById("remove");
// remove.addEventListener("click", ()=> remove.parentElement.style.display = 'none'
// );

ReactDOM.render(
    <div>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>,
    document.getElementById('root'));