import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


export const Profile = (props: ProfileType) => {
    return (
        <div>
            {props?.profile && <ProfileInfo profile={props.profile}/>}
            <MyPostsContainer/>
        </div>
    )
}



