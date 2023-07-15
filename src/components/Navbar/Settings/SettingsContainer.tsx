import React from 'react';
import {Settings} from './Settings';
import {AppReduxStateType} from '../../redux/redux-store';
import {
    getStatusThunkCreator,
    ProfileType,
    setProfileThunkCreator,
    updateProfileThunkCreator, updateStatusThunkCreator
} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {withAuthRedirect} from '../../../hoc/WithAuthRedirect';
import {UpdatedProfileType} from '../../../api/api';


export type SettingsContainerPropsType = MapStateType & MapDispatchType

class SettingsContainer extends React.Component<SettingsContainerPropsType> {

    componentDidMount() {
        if (this.props.userId) {
            this.props.setProfileThunk(this.props.userId)
            this.props.getStatusThunk(this.props.userId)
        }

    }
    componentDidUpdate() {
        if (this.props.userId) {
            this.props.setProfileThunk(this.props.userId)
            this.props.getStatusThunk(this.props.userId)
        }

    }


    render() {
        return (
            <div>
                {this.props.profile &&
                    <Settings profile={this.props.profile}
                              updateProfile={this.props.updateProfile}
                              status={this.props.status}
                              updateStatus={this.props.updateStatusThunk}/>}
            </div>
        )
    }
}

export type MapStateType = {
    profile: ProfileType | null
    userId: number | null
    status: string
}
const mapStateToProps = (state: AppReduxStateType): MapStateType => ({
    profile: state.profilePage.profile,
    userId: state.auth.id,
    status: state.profilePage.status,
})
type MapDispatchType = {
    updateProfile: (profile: UpdatedProfileType) => void
    setProfileThunk: (userId: number) => void
    getStatusThunk: (userId: number) => void
    updateStatusThunk: (newStatus: string) => void
}
const mapDispatchToProps: MapDispatchType = {
    updateProfile: updateProfileThunkCreator,
    setProfileThunk: setProfileThunkCreator,
    getStatusThunk: getStatusThunkCreator,
    updateStatusThunk:updateStatusThunkCreator
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(SettingsContainer) as React.ComponentType

