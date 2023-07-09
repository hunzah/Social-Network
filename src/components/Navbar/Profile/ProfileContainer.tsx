import React from 'react';
import {
    getStatusThunkCreator,
    ProfileType,
    savePhotoThunkCreator,
    setProfileThunkCreator,
    updateStatusThunkCreator
} from '../../redux/profile-reducer';
import {AppReduxStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Profile} from './Profile';
import {compose} from 'redux';
import {withAuthRedirect} from '../../../hoc/WithAuthRedirect';

export interface MatchParams {
    userId: string;
}

type MapStateType = {
    profile: ProfileType | null
    status: string
    userId: string | null
}
export type MapDispatchType = {
    setProfileThunk: (userId: string | null) => void
    getStatusThunk: (userId: string | null) => void
    updateStatusThunk: (status: string) => void
    savePhotoThunk: (file: File) => void
}

export type ProfilesContainerPropsType = MapStateType & MapDispatchType & RouteComponentProps<MatchParams>;


class ProfileContainer extends React.Component<ProfilesContainerPropsType> {
    refreshProfile() {
        let userId: string | null = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId
        }
        this.props.setProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: ProfilesContainerPropsType, prevState: any, snapshot: any) {
        if (prevProps.match.params.userId !== this.props.match.params.userId)
            this.refreshProfile()
    }

    render() {
        return (
            <div>
                {this.props.profile && <Profile profile={this.props.profile}
                                                status={this.props.status}
                                                updateStatus={this.props.updateStatusThunk}
                                                owner={!this.props.match.params.userId}
                                                savePhotoThunk={this.props.savePhotoThunk}/>}
            </div>
        )
    }
}

const mapStateToProps = (state: AppReduxStateType): MapStateType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id
})

const mapDispatchToProps: MapDispatchType = {
    setProfileThunk: setProfileThunkCreator,
    getStatusThunk: getStatusThunkCreator,
    updateStatusThunk: updateStatusThunkCreator,
    savePhotoThunk: savePhotoThunkCreator
}

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer) as React.ComponentType




