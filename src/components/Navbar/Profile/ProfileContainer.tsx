import React from 'react';
import {Profile} from './Profile';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {AppReduxStateType} from '../../redux/redux-store';
import axios from 'axios';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';


type ProfilesPropsType = MapStateType & MapDispatchType & RouteComponentProps;

class ProfileContainer extends React.Component<ProfilesPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                const profile = response.data;
                this.props.setUserProfile(profile);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props?.profile}/>
            </div>
        )
    }
}

export type MapStateType = ProfileType

const mapStateToProps = (state: AppReduxStateType): MapStateType => ({
    profile: state.profilePage.profile,
})
export type MapDispatchType = {
    setUserProfile: (profile: ProfileType) => void
}

const withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)




