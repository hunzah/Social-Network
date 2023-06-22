import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/Navbar/Music/Music';
import {Settings} from './components/Navbar/Setings/Settings';
import {FriendsContainer} from './components/Navbar/Friends/FriendsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LogIn from './Login/LogIn';
import UsersApi from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Navbar/Profile/ProfileContainer';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import store, {AppReduxStateType} from './components/redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';
import {InitializedSuccessAC} from './components/redux/app-reducer';

type PropsType = mapStateToPropsType & mapDispatchToPropsType

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.InitializedSuccessAC()
    }

    render() {

        if (!this.props.initialized) {
            return (
                <Preloader/>
            )
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                    <Route path="/Friends" render={() => <FriendsContainer/>}/>
                    <Route path="/Users" render={() => <UsersApi/>}/>
                    <Route path="/Login" render={() => <LogIn/>}/>
                </div>
            </div>
        );
    }
}

type mapStateToPropsType = {
    initialized: boolean

}
const mapStateToProps = (state: AppReduxStateType) => {
    return ({
        initialized: state.app.initialized
    })

}
type mapDispatchToPropsType = {
    InitializedSuccessAC: () => void
}

const mapDispatchToProps: mapDispatchToPropsType = {
    InitializedSuccessAC: InitializedSuccessAC,
}

const AppContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)(App));

export const AppWrapper = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

