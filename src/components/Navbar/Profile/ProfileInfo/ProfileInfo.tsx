import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profile-reducer';
// @ts-ignore
import defaultPhoto from './../../../../assets/img/default avatar.png'

export const ProfileInfo = (props: ProfileType) => {

    const photo = props?.profile?.photos.large
    const aboutMe = props?.profile?.aboutMe
    const contacts = props?.profile?.contacts
    // const contactsArray = Object.entries(contacts);
    return (
        <div>
            <div>
                <img className={s.img} alt="background"
                     src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"/>
            </div>
            <div className={s.descriptionBlock}>
                {
                    photo ? <img src={photo} alt="profile"/> :
                        <img src={defaultPhoto} alt="profile"/>
                }
                {aboutMe && <div>about me: {aboutMe}</div>}
                {contacts &&
                    <div> My Contacts:
                        <div>facebook: {contacts.facebook}</div>
                        <div>github: {contacts.github}</div>
                        <div>vk: {contacts.vk}</div>
                        <div>instagram: {contacts.instagram}</div>
                        <div>mainLink: {contacts.mainLink}</div>
                        <div>website: {contacts.website}</div>
                        <div>youtube: {contacts.youtube}</div>
                    </div>
                }
            </div>
        </div>
    )
}