import React from 'react';
import {Users} from './Users';
import {AppReduxStateType, DispatchType} from '../redux/redux-store';
import {connect} from 'react-redux';
import {followAC, SetUsersAC, UnFollowAC, UsersArrType} from '../redux/users-reducer';

const mapStateToProps = (state: AppReduxStateType) => {
    return {
        users: state.usersPage.usersArr
    }
}
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        followHandler: (userId: number) => {
            dispatch(followAC(userId))
        },
        UnFollowHandler: (userId: number) => {
            dispatch(UnFollowAC(userId))
        },
        SetUsers: (users: UsersArrType) => {
            dispatch(SetUsersAC(users))
        },

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)