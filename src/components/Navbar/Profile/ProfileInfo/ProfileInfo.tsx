import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {ContactType, ProfileType} from '../../../redux/profile-reducer';
import defaultPhoto from './../../../../assets/img/default avatar.png'
import {ProfileStatus} from './ProfileStatus';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (userId: string) => void
    isOwner: boolean
    savePhotoThunk: (file: File) => void
}
export const ProfileInfo = (props: PropsType) => {
    const {status, updateStatus, isOwner, savePhotoThunk} = props

    const photo = props.profile.photos?.large
    const fullName = props.profile.fullName
    const aboutMe = props.profile.aboutMe
    const contacts: ContactType = props.profile.contacts
    const contactsArray = contacts ? Object.entries(contacts) : [];

    function onMainPhotoSelect(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files?.length) {
            savePhotoThunk(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.profileAvatar} src={photo || defaultPhoto} alt="profile"/>
                {isOwner &&
                    <div>
                            <input type="file" onChange={onMainPhotoSelect}/>
                    </div>}
                {fullName && <div>{fullName}</div>}

                {aboutMe && <div>about me: {aboutMe}</div>}
                {contacts &&
                    <div> My Contacts:
                        {contactsArray.map((i, id) => {
                            return <div key={id}>{`${i[0]}: ${i[0]}`}</div>
                        })}
                    </div>
                }
            </div>
            <ProfileStatus isOwner={isOwner} value={'ok'} status={status} updateStatus={updateStatus}/>
        </div>
    )
}