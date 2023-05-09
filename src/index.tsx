import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/redux-store';
import {BrowserRouter} from 'react-router-dom';


export const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root')
    )
}


renderEntireTree()

store.subscribe(renderEntireTree)



