import React from 'react';
import {Redirect} from 'react-router-dom';


type PropsType = {
    isAuth?: boolean | undefined
}


export const withAuthRedirect = <P extends object>(Component: React.ComponentType<P>) => {
    class RedirectComponent extends React.Component<P &  PropsType > {
        render() {
            return (!this.props.isAuth ?
                <Redirect to={'./login'}/>
                :
                <Component {...this.props as P} />)
        }
    }
    return RedirectComponent;
}