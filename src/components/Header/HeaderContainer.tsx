import React from 'react';
import {Header} from './Header';
import axios, {AxiosResponse} from 'axios';
import {connect} from 'react-redux';
import {ResponseDataType, SetUserDataAC} from '../redux/auth-reducer';
import {AppReduxStateType} from '../redux/redux-store';


type PropsType = MapStateType & MapDispatchType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then((response: AxiosResponse<ResponseDataType>) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render() {

        return (
            <>
                <Header email={this.props.email} login={this.props.login} isAuth={this.props.isAuth}
                        userId={this.props.userId}/>
            </>
        )
    }


};
type MapStateType = {
    isAuth: boolean | undefined
    userId: string | null
    email: string | null
    login: string | null
}
type MapDispatchType = {
    setUserData: (userId: string | null, email: string | null, login: string | null) => void
}

const mapStateToProps = (state: AppReduxStateType) => {

    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.id,
        email: state.auth.email,
        login: state.auth.login
    }
}

const mapDispatchToProps = () => {
    return {
        setUserData: SetUserDataAC
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);