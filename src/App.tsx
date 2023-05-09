import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {Music} from './components/Navbar/Music/Music';
import {Settings} from './components/Navbar/Setings/Settings';
import {Profile} from './components/Navbar/Profile/Profile';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {RootStore} from './components/redux/redux-store';
import {Friends} from './components/Navbar/Friends/Friends'

type AppPropsType = {
    store: RootStore
}


const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar store={props.store}/>
            <div className={'app-wrapper-content'}>
                <Route path="/Dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                <Route path="/Profile" render={() => <Profile store={props.store}
                />}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>
                <Route path="/Friends" render={() => <Friends store={props.store}/>}/>

            </div>
        </div>

    );
}


export default App;
