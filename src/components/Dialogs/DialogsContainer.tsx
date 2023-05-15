import {StateType, StoreType,} from '../redux/store';
import React, {ChangeEvent} from 'react';
import {messageSendAC, newMessageBodyAC} from '../redux/messages-reducer';
import {Dialogs} from './Dialogs';
import {AppReduxStateType, RootStore} from '../redux/redux-store';
import StoreContext from '../../StoreContext';
import {connect} from 'react-redux';


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

let f1 = (state:AppReduxStateType)=> {
return {
    AddMessageHandler: state.messagesReducer
}
}
let f2 = ()=> {

}
export const SuperDialogsContainer = connect(f1,f2)(Dialogs)

