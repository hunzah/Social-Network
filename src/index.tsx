import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


export const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    )
}


renderEntireTree()


