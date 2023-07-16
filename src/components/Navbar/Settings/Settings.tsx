import {ProfileType} from '../../redux/profile-reducer';
// @ts-ignore
import s from '../Profile/ProfileInfo/ProfileInfo.module.scss';
import defaultPhoto from '../../../assets/img/default avatar.png';
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {UpdatedProfileType} from '../../../api/api';
import {Input, TextArea} from '../../common/FormsControls/FormsControls';
import {isValidUrl, validateStatus} from '../../../utilits/validators';

type SettingsFormPropsType = {
    onSubmit: (formData: UpdatedProfileType & { status: string }) => void;
    initialValues: ProfileType;
    status: string;
} & InjectedFormProps<UpdatedProfileType, SettingsFormPropsType>;


const SettingsForm = (props: SettingsFormPropsType) => {
    const { handleSubmit, status, initialValues } = props;

    const createField = (
        component: (props: any) => JSX.Element,
        placeholder: string,
        name: string,
        type?: string,
        validate?: (value: string) => any
    ) => {
        return (
            <div>
                <Field
                    component={component}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    validate={validate}
                />
            </div>
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="status">My Status: {status}</label>
                {createField(TextArea, 'status', 'status', '', validateStatus)}
            </div>
            <div>
                <label>Contacts:</label>
                {Object.entries(initialValues.contacts || {}).map(([key, value]) => (
                    <div key={key}>
                        <label htmlFor={`contacts.${key}`}>{key}: </label>
                        {createField(Input, 'enter url', `contacts.${key}`, 'text', isValidUrl)}
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
    profile: ProfileType;
    updateProfile: (profile: UpdatedProfileType) => void;
    status: string;
    updateStatus: (newStatus: string) => void;
};

export const Settings = (props: SettingsPropsType) => {
    const { profile, updateProfile, updateStatus, status } = props;

    const onSubmit = (formData: UpdatedProfileType & { status: string }) => {
        alert(JSON.stringify(formData.status, null, 2));
        updateProfile(formData);
        if (status !== formData.status)
        updateStatus(formData.status);
    };

    return (
        <>
            <div>
                <img className={s.profileAvatar} src={profile?.photos?.large || defaultPhoto} alt="profile" />
            </div>
            {/*@ts-ignore*/}
            <SettingsReduxForm initialValues={profile} onSubmit={onSubmit} status={status} />
        </>
    );
};