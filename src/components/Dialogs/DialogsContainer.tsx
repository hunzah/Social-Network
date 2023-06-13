import React, {ChangeEvent} from 'react';
import {messageSendAC, MessagesPageType, newMessageBodyAC} from '../redux/messages-reducer';
import {connect} from 'react-redux';
import {AppReduxStateType, DispatchType} from '../redux/redux-store';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';


type MapStateToPropsType = {
    messagesPage: MessagesPageType
    isAuth?: boolean | undefined
}
type MapDispatchType = {
    AddMessageHandler: () => void
    onChangeMessageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void

}

export type DialogsContainerPropsType = MapStateToPropsType & MapDispatchType

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


let AuthRedirectComponent = withAuthRedirect


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

