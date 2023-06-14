import React from 'react';
import s from './ProfileInfo.module.css';
import {ContactType, ProfileType} from '../../../redux/profile-reducer';
import defaultPhoto from './../../../../assets/img/default avatar.png'
import {ProfileStatus} from './ProfileStatus';

type PropsType = { profile: ProfileType }
export const ProfileInfo = (props: PropsType) => {

    const photo = props.profile.photos.large
    const fullName = props.profile.fullName
    const aboutMe = props.profile.aboutMe
    const contacts: ContactType = props.profile.contacts
    const contactsArray = contacts ? Object.entries(contacts) : [];
    return (
        <div>
            <div className={s.descriptionBlock}>
                {
                    photo ? <img className={s.profileAvatar} src={photo} alt="profile"/> :
                        <img className={s.profileAvatar} src={defaultPhoto} alt="profile"/>
                }
                {fullName &&
                    <div>{fullName}</div>}
                {aboutMe && <div>about me: {aboutMe}</div>}
                {contacts &&
                    <div> My Contacts:
                        {contactsArray.map((i, id) => {
                            return <div key={id}>{`${i[0]}: ${i[0]}`}</div>
                        })}
                    </div>
                }
            </div>
            <ProfileStatus value={'ok'}/>
        </div>
    )
}