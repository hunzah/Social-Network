import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Navbar/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/Navbar/Music/Music';
import {Settings} from './components/Navbar/Setings/Settings';
import {Friends} from './components/Navbar/Friends/Friends';
import {StoreType} from './components/redux/store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';


type AppPropsType = {
    store: StoreType
}


const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar Friends={state.friendsPage.Friends}/>
                <div className={'app-wrapper-content'}>
                    <Route path="/Dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path="/Profile" render={() => <Profile store={props.store}
                    />}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                    <Route path="/Friends" render={() => <Friends Friends={state.friendsPage.Friends}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
