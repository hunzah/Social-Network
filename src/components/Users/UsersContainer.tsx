import React from 'react';
import {AppReduxStateType} from '../redux/redux-store';
import {
    followAC,
    SetCurrentPageAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    UnFollowAC,
    UsersArrType
} from '../redux/users-reducer';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import UsersApi from './UsersApi';


export type MapStateType = {
    users: UsersArrType[]
    pageSize: number
    totalUsersCount: number
    currentPage:number

}

export type MapDispatchType = {
    followHandler: (userId: number) => void
    unFollowHandler: (userId: number) => void
    setUsers: (users: UsersArrType[]) => void
    setCurrentPage:(p:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}

const mapStateToProps = (state: AppReduxStateType): MapStateType => {
    return {
        users: state.usersPage.usersArr,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        setCurrentPage:(p:number) =>{
            dispatch(SetCurrentPageAC(p))
        },
        setTotalUsersCount:(totalCount:number) =>{
            dispatch(SetTotalUsersCountAC(totalCount))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi)