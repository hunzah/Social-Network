import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {Dialog} from './DialogItem/Dialog';
import {MessagesPageType,} from '../redux/store';
import React, {ChangeEvent} from 'react';
import {Redirect} from 'react-router-dom';


type DialogsPropsType = {
    AddMessageHandler: () => void
    onChangeMessageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    messagesPage: MessagesPageType
    isAuth: boolean | undefined
}
export const Dialogs = (props: DialogsPropsType) => {
    const handleAddMessage = () => {
        props.AddMessageHandler()
    }
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessageHandler(e)
    }
    return (
        !props.isAuth ?
            <Redirect to={'./login'}/>
            :
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {props.messagesPage.dialogsArr.map((item, id) => {
                        return (<Dialog key={id} path={item.path} name={item.name}/>)
                    })}

                </div>
                <div className={s.messages}>
                    {props.messagesPage.messageArr.map((item, id) => {
                        return (<Message key={id} text={item.message}/>)
                    })}
                    <textarea value={props.messagesPage.newMessageBody} onChange={handleChange}></textarea>
                    <button
                        onClick={handleAddMessage}>send
                    </button>
                </div>
            </div>
    )


}