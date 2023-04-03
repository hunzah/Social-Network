import React from 'react';
// @ts-ignore
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            My Post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message = 'Hi, how fre you?' count={15} />
                <Post message = "It's my first post" count={16} />

            </div>
        </div>
    )
}