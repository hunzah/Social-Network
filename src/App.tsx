import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Navbar/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/Navbar/Music/Music';
import {Settings} from './components/Navbar/Setings/Settings';
import {dialogsArrType, messageArrType, PostsArrType} from './index';


export type AppPropsType = {
    dialogsArr:dialogsArrType[]
    messageArr:messageArrType[]
    postsArr:PostsArrType[]
}




const App = (props:AppPropsType) =>{
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Route path="/Dialogs" render={() => <Dialogs
                        dialogsArr={props.dialogsArr} messageArr={props.messageArr}/>}/>
                    <Route path="/Profile" render={() => <Profile postsArr={props.postsArr}/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
