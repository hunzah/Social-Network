import s from '../Dialogs.module.css'

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


