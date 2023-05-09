import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/redux-store';
import {BrowserRouter} from 'react-router-dom';


export const renderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} state={state}/>
        </BrowserRouter>, document.getElementById('root')
    )
}


renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})



