import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PostsArrType } from '../../../index';


type ProfilePropsType = {
    postsArr: PostsArrType[]
}


export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsArr={props.postsArr} />
        </div>
    )
}


