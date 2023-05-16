import {DispatchType} from '../redux/store';
import React, {ChangeEvent} from 'react';
import {messageSendAC, newMessageBodyAC} from '../redux/messages-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppReduxStateType} from '../redux/redux-store';
import {MessagesPageType} from '../redux/messages-reducer';

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
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

