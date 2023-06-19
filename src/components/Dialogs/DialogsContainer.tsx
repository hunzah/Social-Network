import React from 'react';
import {MessageSendAC, MessagesPageType} from '../redux/messages-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppReduxStateType, DispatchType} from '../redux/redux-store';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';

type MapStateToPropsType = {
    messagesPage: any
}
type MapDispatchToPropsType = {
    AddMessageHandler: (value: any) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppReduxStateType): MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
    return ({
            AddMessageHandler: (value: any) => {
                dispatch(MessageSendAC(value));
            }
        }
    )
}

export class DialogsContainer extends React.Component<PropsType> {
    render() {
        return (
            <Dialogs messagesPage={this.props.messagesPage}
                     AddMessageHandler={this.props.AddMessageHandler}/>
        )
    }

}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(DialogsContainer) as React.ComponentType


