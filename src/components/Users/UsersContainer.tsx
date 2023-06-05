import React from 'react';
import {AppReduxStateType} from '../redux/redux-store';
import {
    followAC,
    SetCurrentPageAC, SetIsFetchingTrueAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    UnFollowAC,
    UsersArrType
} from '../redux/users-reducer';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import {Users} from './Users';
// @ts-ignore
import preloader from './../../assets/img/preloader.svg'
import {Preloader} from '../common/Preloader/Preloader';

export type MapStateType = {
    users: UsersArrType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type MapDispatchType = {
    followHandler: (userId: number) => void
    unFollowHandler: (userId: number) => void
    setUsers: (users: UsersArrType[]) => void
    setCurrentPage: (p: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}


type UsersPropsType = MapStateType & MapDispatchType

export class UsersApi extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsFetching(false)
                return response;
            })
            .catch(error => {
                console.log(error);
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
                       unFollowHandler={this.props.unFollowHandler} users={this.props.users}/>
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
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        followHandler: (userId) => {
            dispatch(followAC(userId))
        },
        unFollowHandler: (userId: number) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users: UsersArrType[]) => {
            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (p: number) => {
            dispatch(SetCurrentPageAC(p))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(SetTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(SetIsFetchingTrueAC(isFetching))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi)