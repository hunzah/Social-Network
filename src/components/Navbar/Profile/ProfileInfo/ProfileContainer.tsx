import React from 'react';
import {connect} from 'react-redux';
import {Profile} from '../Profile';
import axios from 'axios';
import {setUserProfileAC} from '../../../redux/profile-reducer';


type ProfilesPropsType = MapStateType & MapDispatchType

export class ProfileContainer extends React.Component<ProfilesPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

export type MapStateType = {
    profile: any
}
export type MapDispatchType = {
    setUserProfile: (profile: any) => void
}


const mapStateToProps = (state: any): MapStateType => {
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