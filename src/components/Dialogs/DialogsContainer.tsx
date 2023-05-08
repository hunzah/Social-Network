import {Dialog} from './DialogItem/Dialog';
import {StoreType,} from '../redux/store';
import React from 'react';
import {messageSendAC, newMessageBodyAC} from '../redux/messages-reducer';


type DialogsContainerPropsType = {
    store: StoreType
}
export const DialogsContainer = (props: DialogsContainerPropsType) => {
    const state = props.store.getState()

    // const newMessageBody = state.messagesPage.newMessageBody
    function onClickHandlerC() {
        props.store.dispatch(messageSendAC());
    }

    function onchangeHandlerC(props: any) {
        const body = props.e.target.value
        props.store.dispatch(newMessageBodyAC(body))
    }

    return <Dialog onClickHandlerC={onClickHandlerC} onchangeHandlerC={onchangeHandlerC}
                   messagesPage={state.messagesPage}/>

}