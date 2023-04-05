import React from 'react';
// @ts-ignore
import s from './MyPosts.module.css'
import {Post} from './Post/Post';


export const MyPosts = () => {
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
                <Post message="Hi, how fre you?" count={15}/>
                <Post message="It's my first post" count={16}/>

            </div>
        </div>
    )
}