import React from 'react';
// @ts-ignore
import s from './App.module.scss';
import {Navbar} from './components/Navbar/Navbar';
import {HashRouter, Route} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import LogIn from './Login/LogIn';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import store, {AppReduxStateType} from './components/redux/redux-store';
import {InitializedSuccessAC} from './components/redux/app-reducer';
import SettingsContainer from './components/Navbar/Settings/SettingsContainer';
// @ts-ignore
import c from './common/components/container.module.scss';
import {Error404} from './components/404/Error404';
// @ts-ignore
import r from './common/styles/Loader.module.scss'
// @ts-ignore
import ReactLoading from 'react-loading';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Switch} from "react-router-dom";
import { Redirect } from 'react-router-dom';

type PropsType = mapStateToPropsType & mapDispatchToPropsType

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.InitializedSuccessAC()
    }

    render() {

        if (!this.props.initialized) {
            return (
                <div className={r.loader}><ReactLoading color={'#fff'} height={'20%'} width={'20%'}/></div>
            )
        }

        return (
            <>
                <div className={s.App}>
                    <HeaderContainer/>
                    <div className={s.navAndMainContainer}>
                        <Navbar/>
                        <div className={c.container}>
                            <Switch>
                                <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                                <Route exact path="/" render={() => <ProfileContainer/>}/>
                                <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                                <Route path="/Settings/:userId?" render={() => <SettingsContainer/>}/>
                                <Route path="/Users" render={() => <UsersContainer/>}/>
                                <Route path="/Login" render={() => <LogIn/>}/>
                                <Route path="*" render={() => <Error404/>}/>
                            </Switch>
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

