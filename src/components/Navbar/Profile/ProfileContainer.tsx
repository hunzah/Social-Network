import React from 'react';
import {Profile} from './Profile';
import {ProfileType, setProfileThunkCreator} from '../../redux/profile-reducer';
import {AppReduxStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

interface MatchParams {
    userId: string;
}

type ProfilesPropsType = MapStateType & MapDispatchType & RouteComponentProps<MatchParams>;


class ProfileContainer extends React.Component<ProfilesPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.setProfileThunk(userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'./login'}/>
        } else {
            return (
                <div>
                    <Profile profile={this.props.profile.profile}  />
                </div>
            )
        }
    }
}

export type MapStateType = {
    profile: ProfileType
    isAuth?: boolean | undefined
}

const mapStateToProps = (state: AppReduxStateType): MapStateType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
export type MapDispatchType = {
    // setUserProfile: (profile: ProfileType) => void
    setProfileThunk: (userId: string) => void
}

const mapDispatchToProps: MapDispatchType = {
    setProfileThunk: setProfileThunkCreator
}

const ProfileContainerWithUrlComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithUrlComponent)




