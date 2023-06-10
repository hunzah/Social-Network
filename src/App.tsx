import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {Music} from './components/Navbar/Music/Music';
import {Settings} from './components/Navbar/Setings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {FriendsContainer} from './components/Navbar/Friends/FriendsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainerWithUrlComponent from './components/Navbar/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App: React.FC = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/Profile/:userId?" render={() => <ProfileContainerWithUrlComponent/>}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>
                <Route path="/Friends" render={() => <FriendsContainer/>}/>
                <Route path="/Users" render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}


export default App;
