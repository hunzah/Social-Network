import React, {ChangeEvent} from 'react';
import {messageSendAC, MessagesPageType, newMessageBodyAC} from '../redux/messages-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppReduxStateType, DispatchType} from '../redux/redux-store';
import {Redirect} from 'react-router-dom';


type MapStateToPropsType = {
    messagesPage: MessagesPageType
    isAuth?: boolean | undefined
}
type MapDispatchType = {
    AddMessageHandler: () => void
    onChangeMessageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void

}

type PropsType = MapStateToPropsType & MapDispatchType

const mapStateToProps = (state: AppReduxStateType): MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: DispatchType): MapDispatchType => {
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


let AuthRedirectComponent = (props: PropsType) => {
    return (
        !props.isAuth ?
            <Redirect to={'./login'}/> :
            <Dialogs AddMessageHandler={props.AddMessageHandler}
                     onChangeMessageHandler={props.onChangeMessageHandler}
                     messagesPage={props.messagesPage}/>
    )
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

