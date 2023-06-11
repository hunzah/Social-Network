import React from 'react';
import {AppReduxStateType} from '../redux/redux-store';
import {
    followAC,
    SetCurrentPageAC,
    SetFetchingAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    toggleFollowingInProgressAC,
    UnFollowAC,
    UsersArrType
} from '../redux/users-reducer';
import {connect} from 'react-redux';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {usersApi} from '../../api/api';

export type MapStateType = {
    users: UsersArrType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type MapDispatchType = {
    followHandler: (userId: number) => void
    unFollowHandler: (userId: number) => void
    setUsers: (users: UsersArrType[]) => void
    setCurrentPage: (p: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
}


type UsersPropsType = MapStateType & MapDispatchType

export class UsersApi extends React.Component<UsersPropsType> {

    componentDidMount() {
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
                return data;
            })
            .catch(error => {
                this.props.toggleIsFetching(false);
                return error;
            });
    }

    render() {

        return (
            <>
                {this.props.isFetching &&
                    <Preloader/>}
                <Users onPageChanged={this.onPageChanged} totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                       followHandler={this.props.followHandler}
                       unFollowHandler={this.props.unFollowHandler} users={this.props.users}
                       toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                       followingInProgress={this.props.followingInProgress}/>
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
        followingInProgress: state.usersPage.followingInProgress
    }
}
const mapDispatchToProps: MapDispatchType = {
    followHandler: followAC,
    unFollowHandler: UnFollowAC,
    setUsers: SetUsersAC,
    setCurrentPage: SetCurrentPageAC,
    setTotalUsersCount: SetTotalUsersCountAC,
    toggleIsFetching: SetFetchingAC,
    toggleFollowingInProgress: toggleFollowingInProgressAC
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi)