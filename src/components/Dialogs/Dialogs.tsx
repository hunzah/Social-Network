import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {Dialog} from './DialogItem/Dialog';
import {DialogsArrType, MessageArrType} from '../redux/state';


type DialogsPropsType = {
    dialogsArr: DialogsArrType[]
    messageArr:MessageArrType[]
}
export const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <Dialog path={props.dialogsArr[0].path} name={props.dialogsArr[0].name}/>
                <Dialog path={props.dialogsArr[1].path} name={props.dialogsArr[1].name}/>
                <Dialog path={props.dialogsArr[2].path} name={props.dialogsArr[2].name}/>
                <Dialog path={props.dialogsArr[3].path} name={props.dialogsArr[3].name}/>
            </div>
            <div className={s.messages}>
                <Message text={props.messageArr[0].text}/>
                <Message text={props.messageArr[1].text}/>
                <Message text={props.messageArr[2].text}/>
                <Message text={props.messageArr[3].text}/>
                <input></input>
                <button>send</button>
            </div>
        </div>
    )

}