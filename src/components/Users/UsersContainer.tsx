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
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../redux/users-selectors';

export type MapStateType = {
    users: UsersArrType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

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


type UsersPropsType = MapStateType & MapDispatchType

export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsersThunk(currentPage, pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching &&
                    <Preloader/>}
                <Users onPageChanged={this.onPageChanged} totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                       users={this.props.users}
                       followThunk={this.props.followThunk} unFollowThunk={this.props.unFollowThunk}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )

    }
}


const mapStateToProps = (state: AppReduxStateType): MapStateType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersContainer) as React.ComponentType
