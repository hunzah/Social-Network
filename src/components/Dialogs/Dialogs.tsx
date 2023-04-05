import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
    path: string
    name: string
}

type MessagesPropsType = {
    text: string
}
const Dialog = (props: DialogPropsType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}><NavLink to={`/dialog${props.path}`}>{props.name}</NavLink></div>
    )
}

const Message = (props: MessagesPropsType) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <Dialog path={'1'} name={'Curtis James'}/>
                <Dialog path={'2'} name={'John Carter'}/>
                <Dialog path={'3'} name={'Andre Lauren'}/>
                <Dialog path={'4'} name={'Christopher George'}/>
            </div>
            <div className={s.messages}>
                <Message text={'Hi!'}/>
                <Message text={'my name is Curtis James'}/>
                < Message text={'Hi!'}/>
                <Message text={'Hi!'}/>
            </div>
        </div>
    )

}