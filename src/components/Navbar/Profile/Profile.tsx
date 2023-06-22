import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (userId: string) => void
}
export const Profile = (props: PropsType) => {
    const {profile, status, updateStatus} = props
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}



