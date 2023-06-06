import React from 'react';
import {Profile} from './Profile';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {AppReduxStateType} from '../../redux/redux-store';
import axios from 'axios';
import {connect} from 'react-redux';


// type ProfilesPropsType = MapStateType & MapDispatchType
export class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
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

export type MapStateType = {
    profile: ProfileType
}

const mapStateToProps = (state: AppReduxStateType): MapStateType => ({
    profile: state.profilePage.profile,
})


export default connect(mapStateToProps,{setUserProfile})(ProfileContainer)