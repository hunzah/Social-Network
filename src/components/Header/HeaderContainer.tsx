import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {authUserThunk} from '../redux/auth-reducer';
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
                        userId={this.props.userId}/>
            </>
        )
    }


}

type MapStateType = {
    isAuth: boolean | undefined
    userId: string | null
    email: string | null
    login: string | null
}

type MapDispatchType = {
    authUserThunk:()=>void
}

const mapStateToProps = (state: AppReduxStateType) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.id,
        email: state.auth.email,
        login: state.auth.login
    }
}

const mapDispatchToProps = {
        authUserThunk:authUserThunk
};


export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);


