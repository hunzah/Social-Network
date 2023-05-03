import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {DispatchType, StateType} from '../../redux/state';


type ProfilePropsType = {
    state: StateType
    dispatch: DispatchType
}


export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.state.profilePage} dispatch={props.dispatch}/>
        </div>
    )
}


