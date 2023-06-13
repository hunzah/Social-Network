import React from 'react';
import {Redirect} from 'react-router-dom';
import {UserContainerPropsType} from '../components/Users/UsersContainer';
import {ProfilesContainerPropsType} from '../components/Navbar/Profile/ProfileContainer';
import {DialogsContainerPropsType} from '../components/Dialogs/DialogsContainer';


type PropsType = UserContainerPropsType | ProfilesContainerPropsType | DialogsContainerPropsType



export const withAuthRedirect = <P extends object>(Component: React.ComponentType<P>) => {
    class RedirectComponent extends React.Component<P &  PropsType & {isAuth?: boolean | undefined} > {
        render() {
            return (!this.props.isAuth ?
                <Redirect to={'./login'}/>
                :
                <Component {...this.props as P} />)
        }
    }

    return RedirectComponent;
}