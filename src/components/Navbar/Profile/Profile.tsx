import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (userId: string) => void
    owner: boolean
    savePhotoThunk: (file:string) => void
}
export const Profile = (props: PropsType) => {
    const {profile, status, updateStatus, owner, savePhoto} = props
    return (
        <div>
            <ProfileInfo isOwner={owner} profile={profile} status={status} updateStatus={updateStatus}
                         savePhoto={savePhoto}/>
            <MyPostsContainer/>
        </div>
    )
}



