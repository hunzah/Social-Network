import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {Dialog} from './DialogItem/Dialog';
import {DialogsArrType, DispatchType, MessageArrType} from '../redux/state';


type DialogsPropsType = {
    dialogsArr: DialogsArrType[]
    messageArr: MessageArrType[]
    dispatch: DispatchType
}
export const Dialogs = (props: DialogsPropsType) => {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogsArr.map((item, id) => {
                    return (<Dialog key={id} path={item.path} name={item.name}/>)
                })}

            </div>
            <div className={s.messages}>
                {props.messageArr.map((item,id) =>{
                return(<Message text={item.text}/> )})}
                <input></input>
                <button>send</button>
            </div>
        </div>
    )

}