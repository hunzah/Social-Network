import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Navbar/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/Navbar/Music/Music';
import {Settings} from './components/Navbar/Setings/Settings';
import {Friends} from './components/Navbar/Friends/Friends';
import {StoreType} from './components/redux/state';


type AppPropsType = {
    store:StoreType
}


const App: React.FC<AppPropsType> = (props) =>{
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar Friends={state.friendsPage.Friends} />
                <div className={'app-wrapper-content'}>
                    <Route path="/Dialogs" render={() => <Dialogs
                        dialogsArr={state.messagesPage.dialogsArr} messageArr={props.store._state.messagesPage.messageArr}/>}/>
                    <Route path="/Profile" render={() => <Profile state={state}
                                                                  dispatch = {props.store.dispatch.bind(props.store)}/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                    <Route path="/Friends" render={() => <Friends Friends={state.friendsPage.Friends}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
