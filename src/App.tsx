import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Navbar/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/Navbar/Music/Music';
import {Settings} from './components/Navbar/Setings/Settings';


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/Dialogs" component={Dialogs}/>
                    <Route path="/Profile" component={Profile}/>
                    <Route path = '/Music' component={Music}/>
                    <Route path = '/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
