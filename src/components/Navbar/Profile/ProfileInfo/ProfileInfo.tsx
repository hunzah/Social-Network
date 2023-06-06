
import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from '../ProfileContainer';

type PropsType ={
    profile:ProfileType
}

export const ProfileInfo = (props:PropsType) => {
    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"/>
            </div>
            <div className={s.descriptionBlock}>
                {
                    props.profile && props.profile.profile && props.profile.profile.photos &&
                    console.log('sdgsgs')
                  // (<img src= {props.profile.profile.photos.large}  alt='profile photo'/>)
                }
                {props.profile && props.profile.profile && props.profile.profile.aboutMe &&
                <h1>{props.profile.profile.aboutMe}</h1>}
            </div>
        </div>
)
}