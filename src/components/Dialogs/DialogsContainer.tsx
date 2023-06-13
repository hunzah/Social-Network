import React, {ChangeEvent} from 'react';
import {messageSendAC, MessagesPageType, newMessageBodyAC} from '../redux/messages-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppReduxStateType, DispatchType} from '../redux/redux-store';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';

type mapStateToPropsType = {
    messagesPage: MessagesPageType
}

const mapStateToProps = (state: AppReduxStateType): mapStateToPropsType => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
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


compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


