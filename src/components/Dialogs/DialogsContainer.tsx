import {StoreType,} from '../redux/store';
import React, {ChangeEvent} from 'react';
import {messageSendAC, newMessageBodyAC} from '../redux/messages-reducer';
import {Dialogs} from './Dialogs';
import {RootStore} from '../redux/redux-store';


type DialogsContainerPropsType = {
    store: RootStore
}
export const DialogsContainer = (props: DialogsContainerPropsType) => {
    const state = props.store.getState()

    // const newMessageBody = state.messagesPage.newMessageBody
    function AddMessageHandler() {
        props.store.dispatch(messageSendAC());
    }

    function onChangeMessageHandler(e:ChangeEvent<HTMLTextAreaElement>) {
        props.store.dispatch(newMessageBodyAC(e.currentTarget.value))
    }

    return <Dialogs AddMessageHandler={AddMessageHandler} onChangeMessageHandler={onChangeMessageHandler}
                   messagesPage={state.messagesReducer}/>

}