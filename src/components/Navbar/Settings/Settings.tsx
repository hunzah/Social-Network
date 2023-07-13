import {ContactType, ProfileType} from '../../redux/profile-reducer';
import s from '../Profile/ProfileInfo/ProfileInfo.module.css';
import defaultPhoto from '../../../assets/img/default avatar.png';
import React from 'react';


type PropsType = {
    profile: ProfileType
    updateProfile: (profile: ProfileType) => void
}
export const Settings = (props: PropsType) => {
    const {profile, updateProfile} = props


    const onClickHandler = () => {
        updateProfile(profile)
    }
    const photo = props.profile?.photos?.large
    const fullName = props.profile.fullName
    const aboutMe = props.profile.aboutMe
    const contacts: ContactType = props.profile.contacts
    const contactsArray = contacts ? Object.entries(contacts) : [];
    return (
        <>
            <div>
                <img className={s.profileAvatar} src={photo || defaultPhoto} alt="profile"/>
            </div>
            <div>
                Name: {fullName}
            </div>
            <div>
                about Me: {aboutMe}
            </div>
            <div>
                Contacts:{contactsArray.map((contact, id) => {
                return <div key={id}>{contact} <input placeholder={`enter url`}/></div>
            })}
            </div>
            <button onClick={onClickHandler}>save settings</button>
        </>
    )
}