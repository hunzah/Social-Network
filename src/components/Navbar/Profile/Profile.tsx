import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (userId: string)=> void
}
export const Profile = (props: PropsType) => {
    return (
        <div>
           <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}



