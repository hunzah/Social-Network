import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
// @ts-ignore
import s from './Profile.module.scss';
// @ts-ignore
import defaultCover from '../../../assets/img/defaultCover.jpg';


type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (userId: string) => void
    owner: boolean
    savePhotoThunk: (file: File) => void
    isAuth: boolean
}
export const Profile = (props: PropsType) => {
    const {profile, status, updateStatus, owner, savePhotoThunk} = props

    return (
        <div className={s.profile}>
            <div className={s.defaultCoverContainer}>
                <img className={s.defaultCover} src={defaultCover}/>
            </div>
            <ProfileInfo isOwner={owner} profile={profile} status={status} updateStatus={updateStatus}
                         savePhotoThunk={savePhotoThunk}/>
            <MyPostsContainer/>
        </div>
    )
}



