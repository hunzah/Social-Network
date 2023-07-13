import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {authUserThunk, logOutUserThunk} from '../redux/auth-reducer';
import {AppReduxStateType} from '../redux/redux-store';


type PropsType = MapStateType & MapDispatchType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.authUserThunk();
    }


    render() {
        return (
            <>
                <Header email={this.props.email} login={this.props.login} isAuth={this.props.isAuth}
                        userId={this.props.userId} handleLogOut={this.props.logOutUser}/>
            </>
        )
    }
}

type MapStateType = {
    isAuth: boolean | undefined
    userId: number | null
    email: string | null
    login: string | null
}

type MapDispatchType = {
    authUserThunk: () => void
    logOutUser: () => void
}

const mapStateToProps = (state: AppReduxStateType) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.id,
        email: state.auth.email,
        login: state.auth.login
    }
}

const mapDispatchToProps: MapDispatchType = {
    authUserThunk: authUserThunk,
    logOutUser: logOutUserThunk
};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);


