import React from 'react';
import {AppReduxStateType} from '../redux/redux-store';
import {
    followThunkCreator,
    getUsersThunkCreator,
    SetCurrentPageAC,
    SetFetchingAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    unFollowThunkCreator,
    UsersArrType
} from '../redux/users-reducer';
import {connect} from 'react-redux';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {Redirect} from 'react-router-dom';

export type MapStateType = {
    users: UsersArrType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    isAuth:boolean | undefined

}

export type MapDispatchType = {

    setUsers: (users: UsersArrType[]) => void
    setCurrentPage: (p: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    followThunk: (userId: number) => void
    unFollowThunk: (userId: number) => void
}


type PropsType = MapStateType & MapDispatchType

export class UsersApi extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching &&
                    <Preloader/>}
                <AuthRedirectComponent {...this.props} />
            </>
        )

    }
}


const mapStateToProps = (state: AppReduxStateType): MapStateType => {
    return {
        users: state.usersPage.usersArr,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth:state.auth.isAuth
    }
}
const mapDispatchToProps: MapDispatchType = {
    setUsers: SetUsersAC,
    setCurrentPage: SetCurrentPageAC,
    setTotalUsersCount: SetTotalUsersCountAC,
    toggleIsFetching: SetFetchingAC,
    getUsersThunk: getUsersThunkCreator,
    followThunk: followThunkCreator,
    unFollowThunk: unFollowThunkCreator
};


let AuthRedirectComponent = (props:PropsType ) => {
    return (
        !props.isAuth ?
            <Redirect to={'./login'}/> :
            <Users onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize} currentPage={props.currentPage}
                   users={props.users}
                   followThunk={props.followThunk} unFollowThunk={props.unFollowThunk}
                   followingInProgress={props.followingInProgress}/>
    )
}



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi)