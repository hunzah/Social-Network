import React from 'react';
// @ts-ignore
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import classes from './Profile.module.css'


export const Profile = () => {
    return (
        <div >
            <div ><img className={classes.img}
                src='https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </div>

    )
}