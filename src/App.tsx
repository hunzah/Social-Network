import React, {Suspense} from 'react';
// @ts-ignore
import s from './App.module.scss';
import {Navbar} from './components/Navbar/Navbar';
import {HashRouter, Route} from 'react-router-dom';
import {Music} from './components/Navbar/Music/Music';
import {FriendsContainer} from './components/Navbar/Friends/FriendsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LogIn from './Login/LogIn';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import store, {AppReduxStateType} from './components/redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';
import {InitializedSuccessAC} from './components/redux/app-reducer';
import SettingsContainer from './components/Navbar/Settings/SettingsContainer';
// @ts-ignore
import c from './common/components/container.module.scss';
import {Error404} from './components/404/Error404';
// @ts-ignore
import r from './common/styles/Loader.module.scss'

// lazy imports
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Navbar/Profile/ProfileContainer'));
// const SettingsContainer = React.lazy(() => import('./components/Navbar/Settings/SettingsContainer'));
const UsersApi = React.lazy(() => import('./components/Users/UsersContainer'));


type PropsType = mapStateToPropsType & mapDispatchToPropsType

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.InitializedSuccessAC()
    }

    render() {

        if (!this.props.initialized) {
            return (
                <div className={r.loader}><Preloader/></div>
            )
        }
        return (
            <>
                <div className={s.App}>
                    <HeaderContainer/>
                    <div className={s.navAndMainContainer}>
                        <Navbar/>
                        <div className={c.container}>
                            <Suspense fallback={<div><Preloader/></div>}>
                                <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                                <Route exact path="/" render={() => <ProfileContainer/>}/>
                            </Suspense>
                            <Route path="/Music" render={() => <Music/>}/>
                            <Route path="/Settings/:userId?" render={() => <SettingsContainer/>}/>
                            <Route path="/Friends" render={() => <FriendsContainer/>}/>
                            <Suspense fallback={<div><Preloader/></div>}>
                                <Route path="/Users" render={() => <UsersApi/>}/>
                            </Suspense>
                            <Route path="/Login" render={() => <LogIn/>}/>
                            <Route path="/*" render={() => <Error404/>}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

type mapStateToPropsType = {
    initialized: boolean
    isAuth: boolean
}

const mapStateToProps = (state: AppReduxStateType) => {
    return ({
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth
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
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

