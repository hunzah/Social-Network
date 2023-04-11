import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {Dialog} from './DialogItem/Dialog';



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