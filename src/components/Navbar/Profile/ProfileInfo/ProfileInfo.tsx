import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profile-reducer';
// @ts-ignore
import defaultPhoto from './../../../../assets/img/default avatar.png'
type ContactType = {
    facebook?: string | undefined;
    website?: string | undefined;
    vk?: string | undefined;
    twitter?: string | undefined;
    instagram?: string | undefined;
    youtube?: string | undefined;
    github?: string | undefined;
    mainLink?: string | undefined } | undefined

export const ProfileInfo = (props: ProfileType) => {

    const photo = props?.profile?.photos.large
    const aboutMe = props?.profile?.aboutMe
    const contacts:ContactType = props?.profile?.contacts
    const contactsArray = contacts ? Object.entries(contacts) : [];
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
                        {contactsArray.map((i,id)=>{
                            return <div key={id}>{`${i[0]}: ${i[0]}`}</div>
                        })}
                    </div>
                }
            </div>
        </div>
    )
}