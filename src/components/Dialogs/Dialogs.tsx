import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {Dialog} from './DialogItem/Dialog';
import {DialogsArrType, DispatchType, MessageArrType,} from '../redux/store';
import React, {ChangeEvent} from 'react';
import {messageSendAC, newMessageBodyAC} from '../redux/messages-reducer';


type DialogsPropsType = {
    messagesPage:any

}
export const Dialogs = (props: DialogsPropsType) => {

const newMessageBody = props.newMessageBody
    function onClickHandler() {
            props.dispatch(messageSendAC());
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogsArr.map((item, id) => {
                    return (<Dialog key={id} path={item.path} name={item.name}/>)
                })}

            </div>
            <div className={s.messages}>
                {props.messageArr.map((item,id) =>{
                return(<Message text={item.message}/> )})}
                <textarea value={newMessageBody} onChange={onchangeHandler}></textarea>
                <button
                onClick={onClickHandler}>send</button>
            </div>
        </div>
    )

}