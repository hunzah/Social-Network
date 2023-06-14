import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type PropsType = { profile: ProfileType }
export const Profile = (props: PropsType) => {
    return (
        <div>
           <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}



