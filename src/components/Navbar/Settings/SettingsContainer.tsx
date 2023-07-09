import React from 'react';
import {Settings} from './Settings';
import {AppReduxStateType} from '../../redux/redux-store';
import {ProfileType, setProfileThunkCreator, updateProfileThunkCreator} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {withAuthRedirect} from '../../../hoc/WithAuthRedirect';


export type SettingsContainerPropsType = MapStateType & MapDispatchType

class SettingsContainer extends React.Component<SettingsContainerPropsType> {


    componentDidMount() {
        this.props.userId &&
        this.props.setProfileThunk(this.props.userId)
    }

    render() {
        return (
            <div>
                {this.props.profile &&
                    <Settings profile={this.props.profile} updateProfile={this.props.updateProfile}/>}
            </div>
        )
    }
}

export type MapStateType = {
    profile: ProfileType | null
    userId: string | null
}
const mapStateToProps = (state: AppReduxStateType): MapStateType => ({
    profile: state.profilePage.profile,
    userId: state.auth.id
})
type MapDispatchType = {
    updateProfile: (profile: ProfileType) => void
    setProfileThunk: (userId: string) => void
}
const mapDispatchToProps = (): MapDispatchType => ({
    updateProfile: updateProfileThunkCreator,
    setProfileThunk: setProfileThunkCreator
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(SettingsContainer) as React.ComponentType

