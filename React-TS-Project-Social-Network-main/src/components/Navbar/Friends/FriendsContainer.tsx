import React from 'react';
import {AppReduxStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Friends} from './Friends';
import {FriendsPageType} from '../../redux/friends-reducer';




const mapStateProps = (state: AppReduxStateType): FriendsPageType => {
    return (
        {
            Friends: state.friendsPage.Friends
        })
}


export const FriendsContainer = connect(mapStateProps)(Friends)

