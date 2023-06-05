import React from 'react';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import axios from 'axios';
import {setUserProfileAC} from '../../redux/profile-reducer';
import {AppReduxStateType} from '../../redux/redux-store';


type ProfilesPropsType = MapStateType & MapDispatchType
class ProfileContainer extends React.Component<ProfilesPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            const profile = response.data;
            this.props.setUserProfile(profile)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}
export type ProfileType = {
    profile: {
        "aboutMe": string | undefined,
        "contacts": {
            "facebook": string | undefined,
            "website": string | undefined,
            "vk": string | undefined,
            "twitter": string | undefined,
            "instagram": string | undefined,
            "youtube": string | undefined,
            "github": string | undefined,
            "mainLink": string | undefined
        },
        "lookingForAJob": boolean,
        "lookingForAJobDescription": string | undefined,
        "fullName": string | undefined,
        "userId": number,
        "photos": {
            "small": string | undefined,
            "large": string | undefined
        }
    } | null
}

export type MapStateType = {
    profile: ProfileType}
export type MapDispatchType = {
    setUserProfile: (profile: any) => void
}


const mapStateToProps = (state:AppReduxStateType ): MapStateType => {
    return (
        {
            profile: state.profilePage.profile
        }
    )
}
const mapDispatchToProps = (): MapDispatchType => {
    return ({
            setUserProfile: setUserProfileAC
        }
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)