import React from 'react';
import {AppReduxStateType} from '../redux/redux-store';
import {followAC, SetUsersAC, UnFollowAC, UsersArrType} from '../redux/users-reducer';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import UsersC from './UsersC';


export type MapStateType = {
    users: UsersArrType[]
}

export type MapDispatchType = {
    followHandler: (userId: number) => void
    unFollowHandler: (userId: number) => void
    setUsers: (users: UsersArrType[]) => void
}

const mapStateToProps = (state: AppReduxStateType): MapStateType => {
    return {
        users: state.usersPage.usersArr
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

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)