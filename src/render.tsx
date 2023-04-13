import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {StateType} from './components/redux/state';





export const renderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    )
}
renderEntireTree(state)
