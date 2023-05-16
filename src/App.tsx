import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {Music} from './components/Navbar/Music/Music';
import {Settings} from './components/Navbar/Setings/Settings';
import {Profile} from './components/Navbar/Profile/Profile';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Navbar/Friends/FriendsContainer';
import {Users} from './components/Users/Users';


const App: React.FC = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/Profile" render={() => <Profile/>}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>
                <Route path="/Friends" render={() => <FriendsContainer/>}/>
                <Route path="/Users" render={() => <Users/>}/>

            </div>
        </div>

    );
}


export default App;
