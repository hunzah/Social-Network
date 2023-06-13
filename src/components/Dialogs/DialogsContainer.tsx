import React, {ChangeEvent} from 'react';
import {messageSendAC, MessagesPageType, newMessageBodyAC} from '../redux/messages-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppReduxStateType, DispatchType} from '../redux/redux-store';

type mapStateToPropsType = {
    messagesPage: MessagesPageType
    isAuth:boolean | undefined
}

const mapStateToProps = (state: AppReduxStateType): mapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
        isAuth:state.auth.isAuth
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

