import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Navbar/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/Navbar/Music/Music';
import {Settings} from './components/Navbar/Setings/Settings';
import state, {StateType} from './components/redux/state';
import {Friends} from './components/Navbar/Friends/Friends';


type AppPropsType = {
    state:StateType
    addPost: (text:string)=>void
    updateNewPostText:(newText:string)=>void
}


const App = (props:AppPropsType) =>{
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar Friends={state.friendsPage.Friends} />
                <div className={'app-wrapper-content'}>
                    <Route path="/Dialogs" render={() => <Dialogs
                        dialogsArr={props.state.messagesPage.dialogsArr} messageArr={props.state.messagesPage.messageArr}/>}/>
                    <Route path="/Profile" render={() => <Profile state={props.state}
                                                                  addPost = {props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                    <Route path="/Friends" render={() => <Friends Friends={state.friendsPage.Friends}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
