import React from 'react';
import {AppReduxStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Friends} from './Friends';
import {FriendsPageType} from '../../redux/friends-reducer';


// const FriendsContainer = () => {
//     return (
// <Friends/>
//     );
// };


const mapStateProps = (state: AppReduxStateType): FriendsPageType => {
    return (
        {
            Friends: state.friendsPage.Friends
        })
}
const mapDispatchProps = () => {

}

export const FriendsContainer = connect(mapStateProps, mapDispatchProps)(Friends)

export default FriendsContainer;