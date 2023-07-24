// @ts-ignore
import s from '../Dialogs.module.scss'

type MessagesPropsType = {
    text: string
    name:string
}


export const Message = (props: MessagesPropsType) => {
    return (
        <div>
            <div className={s.message}>{`${props.text}, ${props.name}!`}</div>
        </div>
    )
}


