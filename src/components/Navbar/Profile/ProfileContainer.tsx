import React from 'react';
import {Profile} from './Profile';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {AppReduxStateType} from '../../redux/redux-store';
import axios from 'axios';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';

interface MatchParams {
    userId: string;
}
type ProfilesPropsType = MapStateType & MapDispatchType & RouteComponentProps<MatchParams>;



class ProfileContainer extends React.Component<ProfilesPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
            if(!userId){
                userId = '2'
            }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                const profile = response.data;
                this.props.setUserProfile(profile);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
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

const ProfileContainerWithUrlComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithUrlComponent)




