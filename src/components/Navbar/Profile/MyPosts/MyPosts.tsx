import React from 'react';
// @ts-ignore
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import { PostsArrType } from '../../../../index';


type MyPostsPropsType = {
    postsArr: PostsArrType[]
}


export const MyPosts = (props:MyPostsPropsType) => {
    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {props.postsArr.map(item => <Post message={item.message} count={item.count} />)}
            </div>
        </div>
    )
}