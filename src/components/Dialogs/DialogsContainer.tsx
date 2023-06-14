import React, {ChangeEvent} from 'react';
import {messageSendAC, MessagesPageType, newMessageBodyAC} from '../redux/messages-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppReduxStateType, DispatchType} from '../redux/redux-store';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';

type MapStateToPropsType = {
    messagesPage: MessagesPageType
}
type MapDispatchToPropsType = {
    AddMessageHandler: () => void
    onChangeMessageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void

}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppReduxStateType): MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
    return ({
            AddMessageHandler: () => {
                dispatch(messageSendAC());
            },
            onChangeMessageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
                dispatch(newMessageBodyAC(e.currentTarget.value))
            }
        }
    )
}

export class DialogsContainer extends React.Component<PropsType> {
    render() {
        return (
            <Dialogs messagesPage={this.props.messagesPage} onChangeMessageHandler={this.props.onChangeMessageHandler}
                     AddMessageHandler={this.props.AddMessageHandler}/>
        )
    }

}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(DialogsContainer) as React.ComponentType


