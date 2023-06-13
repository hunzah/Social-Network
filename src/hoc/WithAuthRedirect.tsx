import React from 'react';
import {Redirect} from 'react-router-dom';
import {AppReduxStateType} from '../components/redux/redux-store';
import {connect} from 'react-redux';


type PropsType = {
    isAuth?: boolean | undefined
}
const mapStateToPropsForRedirect = (state: AppReduxStateType) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = <P extends object>(Component: React.ComponentType<P>) => {
    class RedirectComponent extends React.Component<P &  PropsType > {
        render() {
            return (!this.props.isAuth ?
                <Redirect to={'./login'}/>
                :
                <Component {...this.props as P} />)
        }
    }

    // @ts-ignore
    let ConnectedRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent;
}