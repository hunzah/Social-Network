import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {Dialog} from './DialogItem/Dialog';
import {StoreType,} from '../redux/store';
import React, {ChangeEvent} from 'react';
import {messageSendAC, newMessageBodyAC} from '../redux/messages-reducer';


type DialogsContainerPropsType = {
    store: StoreType
}
export const DialogsContainer = (props: DialogsContainerPropsType) => {

    const newMessageBody = props.newMessageBody

    function onClickHandler() {
        props.dispatch(messageSendAC());
    }

    // const message:  React.RefObject<HTMLTextAreaElement>  = React.createRef()
    function onchangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        const body = e.target.value
        props.dispatch(newMessageBodyAC(body))
    }

    return <Dialog onClickHandler={onClickHandler} onchangeHandler={onchangeHandler} messagesPage={messagesPage}/>

}