import React from 'react';
import {ProfileType, setProfileThunkCreator} from '../../redux/profile-reducer';
import {AppReduxStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Profile} from './Profile';
import {compose} from 'redux';
import {withAuthRedirect} from '../../../hoc/WithAuthRedirect';

interface MatchParams {
    userId: string;
}

export type MapStateType = {
    profile: ProfileType | null
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
                {this.props.profile && <Profile profile={this.props.profile}/>}
            </div>
        )
    }
}

const mapStateToProps = (state: AppReduxStateType): MapStateType => ({
    profile: state.profilePage.profile
})

const mapDispatchToProps: MapDispatchType = {
    setProfileThunk: setProfileThunkCreator
}

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer) as React.ComponentType
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer))



