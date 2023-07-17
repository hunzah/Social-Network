import React, {ChangeEvent} from 'react';
// @ts-ignore
import s from './ProfileInfo.module.scss';
import {ContactType, ProfileType} from '../../../redux/profile-reducer';
import defaultPhoto from './../../../../assets/img/default avatar.png';
// @ts-ignore
import AddPhotoIcon from './../../../../assets/img/plus-circle-svgrepo-com.svg';
// @ts-ignore
import facebook from './../../../../assets/img/profile imgs/facebook-color-svgrepo-com.svg';

// @ts-ignore
import instagram from './../../../../assets/img/profile imgs/instagram-1-svgrepo-com.svg';
// @ts-ignore
import twitter from './../../../../assets/img/profile imgs/twitter-color-svgrepo-com.svg';
// @ts-ignore
import youtube from './../../../../assets/img/profile imgs/youtube-color-svgrepo-com.svg';


import {ProfileStatus} from './ProfileStatus';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (userId: string) => void
    isOwner: boolean
    savePhotoThunk: (file: File) => void
}


export const ProfileInfo = (props: PropsType) => {

    const {status, updateStatus, isOwner, savePhotoThunk, profile} = props

    const photo = profile.photos?.large
    const fullName = profile.fullName
    const contacts: ContactType = profile.contacts
    // const contactsArray = contacts ? Object.entries(contacts) : [];
    const Facebook = contacts?.facebook
    const Instagram = contacts?.instagram
    const Twitter = contacts?.twitter
    const Youtube = contacts?.youtube

    function onMainPhotoSelect(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files?.length) {
            savePhotoThunk(e.target.files[0])
        }
    }

    return (
        <div className={s.profileInfoContainer}>
            <div className={s.descriptionBlock}>
                <div className={s.photoAndName}>

                    <img className={s.profileAvatar} src={photo || defaultPhoto} alt="profile"/>
                    {isOwner &&
                        <div>
                            <label htmlFor="main-photo-upload" className={s.photoUpload}>
                                <div onChange={onMainPhotoSelect}>
                                    {/*<img className={s.AddPhotoIcon} src={AddPhotoIcon} alt="profile"/>*/}
                                </div>
                                <input id="main-photo-upload" type="file" onChange={onMainPhotoSelect}/>
                            </label>

                        </div>}
                    {fullName && <div className={s.name}>{fullName}</div>}
                </div>
                <div className={s.statusAndContactsContainer}>
                    <ProfileStatus isOwner={isOwner} value={'ok'}
                                   status={status}
                                   updateStatus={updateStatus}/>
                    {contacts &&
                        <div className={s.contacts}>
                            <a href={Facebook ?? undefined}><img src={facebook}/></a>
                            <a href={Instagram ?? undefined}><img src={instagram}/></a>
                            <a href={Twitter ?? undefined}><img src={twitter}/></a>
                            <a href={Youtube ?? undefined}><img src={youtube}/></a>

                        </div>
                    }</div>
            </div>
        </div>
    )
}