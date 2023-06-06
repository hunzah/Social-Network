import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profile-reducer';



export const ProfileInfo = (props: ProfileType) => {

    const aboutMe = props?.profile?.aboutMe

    return (
        <div>
            <div>
                <img className={s.img} alt="background"
                     src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"/>
            </div>
            <div className={s.descriptionBlock}>
                {
                    props.profile && props.profile && props.profile.photos &&
                    <img src={props.profile.photos.large} alt="profile"/>
                }
                {aboutMe &&
                    <h1>{aboutMe}</h1>}
            </div>
        </div>
    )
}