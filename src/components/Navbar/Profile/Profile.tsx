import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import {StateType} from '../../redux/state';




type ProfilePropsType = {
    state: StateType
    addPost: ()=>void
    updateNewPostText:(newText:string)=>void
}


export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
        </div>
    )
}


