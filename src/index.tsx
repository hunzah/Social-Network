import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {AppReduxStateType} from './components/redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import storeContext from './StoreContext';


export const renderEntireTree = (state: AppReduxStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <storeContext.Provider value={store}>
                <App />
            </storeContext.Provider>
        </BrowserRouter>, document.getElementById('root')
    )
}


renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})



