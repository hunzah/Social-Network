import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


type PropsType = {
    profile: ProfileType
}

export const Profile = (props: ProfileType) => {
    console.log(props)
    return (
        <div>
            {props?.profile && <ProfileInfo profile={props.profile}/>}
            <MyPostsContainer/>
        </div>
    )
}



