import React from 'react';
import {Header} from './Header';
import axios, {AxiosResponse} from 'axios';
import {connect} from 'react-redux';
import {DataType, ResponseDataType, SetUserDataAC} from '../redux/auth-reducer';



type UsersPropsType = MapStateType & MapDispatchType

class HeaderContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then((response:AxiosResponse<ResponseDataType>) => {
                if(response.data.resultCode===0){
                    this.props.setUserData(response.data.data)
                }
            })

    }

    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        )
    }


};
type MapStateType={
    isAuth:boolean
    login:string | null
}
type MapDispatchType={
    setUserData: (data: DataType)=>void
}

const mapStateToProps = (state:ResponseDataType) => {
    return {
        isAuth:state.data.isAuth,
        login:state.data.login
    }
}
const mapDispatchToProps = () => {
    return {
        setUserData: SetUserDataAC
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);