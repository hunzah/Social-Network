import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppWrapper} from './App';


export const renderEntireTree = () => {
    ReactDOM.render(
        <AppWrapper/>,
        document.getElementById('root')
    )
}


renderEntireTree()


