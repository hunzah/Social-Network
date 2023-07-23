import React from 'react';
import {Redirect} from 'react-router-dom';
import {AppReduxStateType} from '../components/redux/redux-store';
import {connect} from 'react-redux';
// @ts-ignore
import r from "../common/styles/Loader.module.scss";
import ReactLoading from "react-loading";


type PropsType = {
    isAuth: boolean
    isLoading: boolean
}
const mapStateToPropsForRedirect = (state: AppReduxStateType) => ({
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading
})

export const withAuthRedirect = <P extends object>(Component: React.ComponentType<P>) => {
    class RedirectComponent extends React.Component<P & PropsType> {

        render() {
            if (this.props.isLoading) {
                return <div className={r.loadingContainer}><ReactLoading type={"spin"} color={'#ffffff'} height={667} width={375}/></div>
            } else {
                return (!this.props.isAuth ?
                    <Redirect to={'./login'}/>
                    :
                    <Component {...this.props as P} />)
            }
        }
    }


    //@ts-ignore
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}