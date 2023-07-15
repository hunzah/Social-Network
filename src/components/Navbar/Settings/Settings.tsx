import {ProfileType} from '../../redux/profile-reducer';
import s from '../Profile/ProfileInfo/ProfileInfo.module.css';
import defaultPhoto from '../../../assets/img/default avatar.png';
import React from 'react';


import {Field, reduxForm} from 'redux-form';

type SettingsFormPropsType = {
    onSubmit: (formData: ProfileType) => void
    initialValues: ProfileType
    handleSubmit?: any
}

const SettingsForm = (props: SettingsFormPropsType) => {

    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName">Name:</label>
                <Field name="fullName" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="aboutMe">About Me:</label>
                <Field name="aboutMe" component="input" type="text"/>
            </div>
            <div>
                <label>Contacts:</label>
                {Object.entries(props.initialValues.contacts || {}).map(([key, value]) => (
                    <div key={key}>
                        <label htmlFor={`contacts.${key}`}>{key}: </label>
                        <Field name={`contacts.${key}`} component="input" type="text" placeholder="enter url"/>
                    </div>
                ))}
            </div>
            <button type="submit">Save settings</button>
        </form>
    );
};

const SettingsReduxForm = reduxForm<ProfileType, SettingsFormPropsType>({
    form: 'settings',
    enableReinitialize: true,
})(SettingsForm);

type SettingsPropsType = {
    profile: ProfileType
    updateProfile: (profile: ProfileType) => void
}

export const Settings = (props: SettingsPropsType) => {
    const {profile, updateProfile} = props;

    const onSubmit = (formData: ProfileType) => {
        alert(JSON.stringify(formData, null, 2))
        updateProfile(formData)
    };

    return (
        <>
            <div>
                <img className={s.profileAvatar} src={profile?.photos?.large || defaultPhoto} alt="profile"/>
            </div>
            <SettingsReduxForm initialValues={profile} onSubmit={onSubmit}/>
        </>
    );
}