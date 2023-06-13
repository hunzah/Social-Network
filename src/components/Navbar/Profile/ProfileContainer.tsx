import React from 'react';
import {ProfileType, setProfileThunkCreator} from '../../redux/profile-reducer';
import {AppReduxStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../../hoc/WithAuthRedirect';

interface MatchParams {
    userId: string;
}

export type MapStateType = {
    profile: ProfileType
    isAuth?: boolean | undefined
}
export type MapDispatchType = {
    setProfileThunk: (userId: string) => void
}

export type ProfilesContainerPropsType = MapStateType & MapDispatchType & RouteComponentProps<MatchParams>;


class ProfileContainer extends React.Component<ProfilesContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.setProfileThunk(userId)
    }

    render() {
            return (
                <div>
                    <AuthRedirectComponent {...this.props}  />
                </div>
            )
        }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);




const mapStateToProps = (state: AppReduxStateType): MapStateType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


const mapDispatchToProps: MapDispatchType = {
    setProfileThunk: setProfileThunkCreator
}

const ProfileContainerWithUrlComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithUrlComponent)




