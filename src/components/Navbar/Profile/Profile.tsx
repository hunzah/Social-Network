import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';


type PropsType ={
    profile:ProfileType
}

export const Profile = (props:PropsType) => {
    console.log(props.profile)
    return (
        <div>
            {/*<ProfileInfo profile={props.profile}/>*/}
            <MyPostsContainer />
        </div>
    )
}



