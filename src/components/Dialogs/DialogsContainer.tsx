import {StoreType,} from '../redux/store';
import React, {ChangeEvent} from 'react';
import {messageSendAC, newMessageBodyAC} from '../redux/messages-reducer';
import {Dialogs} from './Dialogs';
import {RootStore} from '../redux/redux-store';
import StoreContext from '../../StoreContext';


type DialogsContainerPropsType = {
    store: RootStore
}
export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {

            const state = store!.getState()

            function AddMessageHandler() {
                store!.dispatch(messageSendAC());
            }

            function onChangeMessageHandler(e: ChangeEvent<HTMLTextAreaElement>) {
                store!.dispatch(newMessageBodyAC(e.currentTarget.value))
            }

            return <Dialogs AddMessageHandler={AddMessageHandler} onChangeMessageHandler={onChangeMessageHandler}
                            messagesPage={state.messagesReducer}/>


        }}
    </StoreContext.Consumer>
}