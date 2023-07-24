// @ts-ignore
import s from '../Dialogs.module.scss'

type MessagesPropsType = {
    text: string
}


export const Message = (props: MessagesPropsType) => {
    return (
        <div>
            <div className={s.message}>{props.text}</div>
        </div>
    )
}


