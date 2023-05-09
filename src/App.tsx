import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {Music} from './components/Navbar/Music/Music';
import {Settings} from './components/Navbar/Setings/Settings';
import FriendsContainer from './components/Navbar/Friends/FriendsContainer'
import {Profile} from './components/Navbar/Profile/Profile';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {StoreType} from './components/redux/store';


type AppPropsType = {
    store: StoreType
}


const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path="/Dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                <Route path="/Profile" render={() => <Profile store={props.store}
                />}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>
                <Route path="/Friends" render={() => <FriendsContainer store={props.store}/>}/>

            </div>
        </div>

    );
}


export default App;
