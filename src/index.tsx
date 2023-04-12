import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type dialogsArrType = {
    path: string
    name: string
}

export type messageArrType = {
    text: string
}

const dialogsArr: dialogsArrType[] = [
    {path: '1', name: 'Curtis James'},
    {path: '2', name: 'John Carter'},
    {path: '3', name: 'Andre Lauren'},
    {path: '4', name: 'Christopher George'}
]

const messageArr: messageArrType[] = [
    {text: 'Hi!'},
    {text: 'my name is Curtis James!'},
    {text: 'Hi!'},
    {text: 'Hey!'},
]


ReactDOM.render(
    <App dialogsArr = {dialogsArr} messageArr = {messageArr}/>,
  document.getElementById('root')
)
