import React, {Suspense} from 'react';
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
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
// @ts-ignore
import r from "./common/styles/Loader.module.scss";
import ReactLoading from "react-loading";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type PropsType = mapStateToPropsType & mapDispatchToPropsType

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.InitializedSuccessAC()
    }

    render() {

        return (
            <>
                <div className={s.App}>
                    <HeaderContainer/>
                    <div className={s.navAndMainContainer}>
                        <Navbar/>
                        <div className={c.container}>
                            <Suspense fallback={
                                <div className={r.loadingContainer}>
                                    <ReactLoading type={"spin"} color={'#ffffff'} height={667} width={375}/>
                                </div>}>
                                <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                                <Route exact path="/" render={() => <ProfileContainer/>}/>
                            </Suspense>
                            <Route path="/Messages" render={() => <DialogsContainer/>}/>


                            <Route path="/Settings/:userId?" render={() => <SettingsContainer/>}/>
                            <Route path="/Users" render={() => <UsersContainer/>}/>
                            <Route path="/Login" render={() => <LogIn/>}/>
                            {/*<Route path="*" render={() => <Error404/>}/>*/}
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

