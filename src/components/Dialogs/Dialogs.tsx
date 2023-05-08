import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {Dialog} from './DialogItem/Dialog';
import {MessagesPageType,} from '../redux/store';
import React, {ChangeEvent} from 'react';


type DialogsPropsType = {
    onClickHandlerC: () => void
    onchangeHandlerC: (e: ChangeEvent<HTMLTextAreaElement>) => void
    messagesPage: MessagesPageType
}
export const Dialogs = (props: DialogsPropsType) => {
    const onClickHandler = () => {
        props.onClickHandlerC()
    }
    const onchangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.onchangeHandlerC(e)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.messagesPage.dialogsArr.map((item, id) => {
                    return (<Dialog key={id} path={item.path} name={item.name}/>)
                })}

            </div>
            <div className={s.messages}>
                {props.messagesPage.messageArr.map((item, id) => {
                    return (<Message text={item.message}/>)
                })}
                <textarea value={props.messagesPage.newMessageBody} onChange={onchangeHandler}></textarea>
                <button
                    onClick={onClickHandler}>send
                </button>
            </div>
        </div>
    )

}