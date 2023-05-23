import React from 'react';
import {Users} from './Users';
import {AppReduxStateType} from '../redux/redux-store';
import {followAC, SetUsersAC, UnFollowAC, UsersArrType} from '../redux/users-reducer';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';


export type MapStateType = {
    users: UsersArrType[]
}

export type MapDispatchType = {
    followHandler: (userId: number) => void
    UnFollowHandler: (userId: number) => void
    SetUsers: (users: UsersArrType[]) => void
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
        UnFollowHandler: (userId: number) => {
            dispatch(UnFollowAC(userId))
        },
        SetUsers: (users: UsersArrType[]) => {
            dispatch(SetUsersAC(users))
        },

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)